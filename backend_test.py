import requests
import sys
import json
from datetime import datetime

class BurgerHouseAPITester:
    def __init__(self, base_url="https://order-visibility-bug.preview.emergentagent.com"):
        self.base_url = base_url
        self.token = None
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def log_test(self, name, success, details=""):
        """Log test result"""
        self.tests_run += 1
        if success:
            self.tests_passed += 1
            print(f"✅ {name} - PASSED")
        else:
            print(f"❌ {name} - FAILED: {details}")
        
        self.test_results.append({
            "test": name,
            "success": success,
            "details": details
        })

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        test_headers = {'Content-Type': 'application/json'}
        
        if headers:
            test_headers.update(headers)
        
        if self.token:
            test_headers['Authorization'] = f'Bearer {self.token}'

        try:
            if method == 'GET':
                response = requests.get(url, headers=test_headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=test_headers, timeout=10)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=test_headers, timeout=10)
            elif method == 'DELETE':
                response = requests.delete(url, headers=test_headers, timeout=10)

            success = response.status_code == expected_status
            details = f"Status: {response.status_code}"
            
            if not success:
                details += f", Expected: {expected_status}"
                try:
                    error_data = response.json()
                    details += f", Response: {error_data}"
                except:
                    details += f", Response: {response.text[:200]}"

            self.log_test(name, success, details)
            
            if success:
                try:
                    return True, response.json()
                except:
                    return True, {}
            else:
                return False, {}

        except Exception as e:
            self.log_test(name, False, f"Exception: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        return self.run_test("Root API", "GET", "api/", 200)

    def test_admin_login(self, password="admin123"):
        """Test admin login and get token"""
        success, response = self.run_test(
            "Admin Login",
            "POST",
            "api/admin/login",
            200,
            data={"password": password}
        )
        if success and 'token' in response:
            self.token = response['token']
            print(f"🔑 Token obtained: {self.token[:20]}...")
            return True
        return False

    def test_admin_me(self):
        """Test admin authentication status"""
        return self.run_test("Admin Auth Check", "GET", "api/admin/me", 200)

    def test_create_order(self, name="টেস্ট ইউজার", phone="01712345678", address="মুগদা ঢাকা", item="চিকেন পিৎজা"):
        """Create a test order"""
        success, response = self.run_test(
            "Create Order",
            "POST",
            "api/orders",
            200,
            data={
                "name": name,
                "phone": phone,
                "address": address,
                "item": item
            }
        )
        if success and 'order_id' in response:
            return response['order_id']
        return None

    def test_get_orders(self):
        """Get all orders (admin only)"""
        success, response = self.run_test("Get Orders", "GET", "api/admin/orders", 200)
        if success:
            return response
        return []

    def test_update_order_status(self, order_id, status="confirmed"):
        """Update order status"""
        return self.run_test(
            f"Update Order Status to {status}",
            "PUT",
            f"api/admin/orders/{order_id}/status?status={status}",
            200
        )

    def test_get_menu(self):
        """Get menu items"""
        return self.run_test("Get Menu", "GET", "api/menu", 200)

    def test_create_menu_item(self):
        """Create a new menu item (admin only)"""
        return self.run_test(
            "Create Menu Item",
            "POST",
            "api/admin/menu",
            200,
            data={
                "name": "টেস্ট পিৎজা",
                "category": "pizza",
                "price": "200",
                "description": "টেস্ট বর্ণনা",
                "image": "https://example.com/test.jpg",
                "size": "৮\"",
                "popular": False
            }
        )

    def test_delete_order(self, order_id):
        """Delete an order (admin only)"""
        return self.run_test(
            f"Delete Order {order_id}",
            "DELETE",
            f"api/admin/orders/{order_id}",
            200
        )

    def test_admin_logout(self):
        """Test admin logout"""
        return self.run_test("Admin Logout", "POST", "api/admin/logout", 200)

    def run_comprehensive_test(self):
        """Run all tests in sequence"""
        print("🚀 Starting Burger House API Tests...")
        print("=" * 50)

        # Test basic connectivity
        self.test_root_endpoint()

        # Test public endpoints
        self.test_get_menu()

        # Test order creation (public)
        order_id = self.test_create_order()

        # Test admin authentication
        if not self.test_admin_login():
            print("❌ Admin login failed, stopping admin tests")
            return self.get_results()

        # Test admin endpoints
        self.test_admin_me()
        
        # CRITICAL TEST: Check if orders are visible in admin panel
        orders = self.test_get_orders()
        if orders:
            print(f"📋 Found {len(orders)} orders in admin panel")
            if order_id:
                order_found = any(order.get('id') == order_id for order in orders)
                self.log_test("Order Visibility in Admin", order_found, 
                            f"Order {order_id} {'found' if order_found else 'NOT FOUND'} in admin panel")
        else:
            self.log_test("Order Visibility in Admin", False, "No orders returned from admin endpoint")

        # Test order status update if we have an order
        if order_id:
            self.test_update_order_status(order_id, "confirmed")

        # Test menu management
        self.test_create_menu_item()

        # NEW TEST: Test order deletion
        # Create another order specifically for deletion test
        delete_test_order_id = self.test_create_order("ডিলিট টেস্ট", "01987654321", "টেস্ট ঠিকানা", "টেস্ট পিৎজা")
        if delete_test_order_id:
            # Verify order exists before deletion
            orders_before = self.test_get_orders()
            order_exists_before = any(order.get('id') == delete_test_order_id for order in orders_before) if orders_before else False
            self.log_test("Order Exists Before Delete", order_exists_before, f"Order {delete_test_order_id} exists before deletion")
            
            # Delete the order
            delete_success, _ = self.test_delete_order(delete_test_order_id)
            
            if delete_success:
                # Verify order is removed after deletion
                orders_after = self.test_get_orders()
                order_exists_after = any(order.get('id') == delete_test_order_id for order in orders_after) if orders_after else False
                self.log_test("Order Removed After Delete", not order_exists_after, f"Order {delete_test_order_id} {'still exists' if order_exists_after else 'successfully removed'} after deletion")

        # Test logout
        self.test_admin_logout()

        return self.get_results()

    def get_results(self):
        """Get test results summary"""
        print("\n" + "=" * 50)
        print(f"📊 Test Results: {self.tests_passed}/{self.tests_run} passed")
        print(f"✅ Success Rate: {(self.tests_passed/self.tests_run)*100:.1f}%")
        
        failed_tests = [test for test in self.test_results if not test['success']]
        if failed_tests:
            print("\n❌ Failed Tests:")
            for test in failed_tests:
                print(f"  - {test['test']}: {test['details']}")
        
        return {
            "total_tests": self.tests_run,
            "passed_tests": self.tests_passed,
            "success_rate": (self.tests_passed/self.tests_run)*100 if self.tests_run > 0 else 0,
            "failed_tests": failed_tests,
            "all_results": self.test_results
        }

def main():
    """Main test execution"""
    tester = BurgerHouseAPITester()
    results = tester.run_comprehensive_test()
    
    # Return appropriate exit code
    return 0 if results["success_rate"] >= 80 else 1

if __name__ == "__main__":
    sys.exit(main())