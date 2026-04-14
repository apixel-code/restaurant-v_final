const brandName = "বার্গার হাউজ রেস্টুরেন্ট";
const brandNameLatin = "Burger House Restaurant";
const brandInitial = "B";
const brandDescriptor = "রেস্টুরেন্ট";
const brandTeam = `${brandName} টিম`;

const primaryPhone = {
  display: "+৮৮০ ১৯৫০-৪৯৬৬৮৩",
  href: "tel:+8801950496683",
};

const secondaryPhone = {
  display: "+৮৮০ ১৯৫০-৪৯৬৬৮৩",
  href: "tel:+8801950496683",
};

const featuredItems = [
  {
    id: 1,
    name: "সিগনেচার বিফ বার্গার",
    description:
      "জুসি বিফ প্যাটি, মেল্টেড চিজ এবং আমাদের সিক্রেট সসের এক অনন্য স্বাদ।",
    price: "৩৫০",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
    badge: "বেস্ট সেলার",
  },
  {
    id: 2,
    name: "ক্রিসপি চিকেন চিজ বার্গার",
    description: "মচমচে ফ্রাইড চিকেন, ফ্রেশ লেটুস এবং প্রিমিয়াম চিজ স্লাইস।",
    price: "২৮০",
    image:
      "https://images.unsplash.com/photo-1513185158878-8d8c182b013b?q=80&w=1000&auto=format&fit=crop",
    badge: "জনপ্রিয়",
  },
  {
    id: 3,
    name: "ডাবল ড্যাকার বার্গার সেট",
    description:
      "দুই লেয়ারের মাংস আর চিজের ধামাকা, সাথে থাকছে ফ্রেঞ্চ ফ্রাই এবং ড্রিংক।",
    price: "৪৯৯",
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000&auto=format&fit=crop",
    badge: "সেট মেনু",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "পারফেক্ট বার্গারের গোপন রহস্য কী?",
    excerpt:
      "একটি সাধারণ বার্গারকে অসাধারণ করে তোলে এর প্যাটির জুসিনেস এবং সঠিক মশলার ব্যালেন্স। জানুন বার্গার হাউজের স্পেশাল রেসিপির কিছু টিপস...",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
    date: "১৮ এপ্রিল, ২০২৬",
    readTime: "৪ মিনিট",
    author: brandTeam,
    category: "খাবারের গল্প",
  },
  {
    id: 2,
    title: "ফ্রেঞ্চ ফ্রাই কেন বার্গারের সেরা সঙ্গী?",
    excerpt:
      "বার্গারের স্বাদের সাথে লবনাক্ত মচমচে ফ্রাইয়ের কম্বিনেশন কেন আমাদের তৃপ্তি দেয়? জানুন এর পেছনের বিজ্ঞান...",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop",
    date: "১২ এপ্রিল, ২০২৬",
    readTime: "৩ মিনিট",
    author: brandTeam,
    category: "লাইফস্টাইল",
  },
  {
    id: 3,
    title: "বার্গার হাউজের যাত্রা: স্বাদ ও আস্থার ৫ বছর",
    excerpt:
      "একটি ছোট স্বপ্ন থেকে শহরের সবচেয়ে জনপ্রিয় বার্গার জয়েন্ট হয়ে ওঠার গল্প...",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop",
    date: "৫ এপ্রিল, ২০২৬",
    readTime: "৬ মিনিট",
    author: brandTeam,
    category: "আমাদের গল্প",
  },
];

const menuItems = [
  {
    id: 1,
    category: "burger",
    name: "ক্লাসিক বিফ বার্গার",
    size: "রেগুলার",
    price: "১৮০",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    description: "জুসি বিফ প্যাটি ও স্পেশাল সস",
    popular: true,
  },
  {
    id: 2,
    category: "burger",
    name: "স্মোকি বার্বিকিউ বার্গার",
    size: "রেগুলার",
    price: "২৫০",
    image:
      "https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=800&auto=format&fit=crop",
    description: "স্মোকি ফ্লেভারের বার্বিকিউ সস ও গ্রিলড মিট",
    popular: false,
  },
  {
    id: 3,
    category: "burger",
    name: "চিজ ব্লাস্ট বার্গার",
    size: "রেগুলার",
    price: "৩২০",
    image:
      "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=800&auto=format&fit=crop",
    description: "ভেতরে চিজের লিকুইড ব্লাস্ট",
    popular: true,
  },
  {
    id: 4,
    category: "sides",
    name: "মচমচে ফ্রেঞ্চ ফ্রাই",
    size: "লার্জ",
    price: "১২০",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop",
    description: "গোল্ডেন ক্রিসপি পটেটো ফ্রাই",
    popular: true,
  },
  {
    id: 5,
    category: "sides",
    name: "চিকেন নাগেটস",
    size: "৬ পিস",
    price: "১৮০",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop",
    description: "মচমচে চিকেন নাগেটস",
    popular: false,
  },
  {
    id: 6,
    category: "drinks",
    name: "কোল্ড কফি",
    size: "৩০০ মিলি",
    price: "১১০",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop",
    description: "ঠান্ডা রিফ্রেশিং কফি",
    popular: true,
  },
];

export const clientConfig = {
  brand: {
    name: brandName,
    nameLatin: brandNameLatin,
    initial: brandInitial,
    descriptor: brandDescriptor,
    shortTagline: "শহরের সেরা ও জুসি বার্গারের ঠিকানা",
    intro: "বার্গার হাউজ রেস্টুরেন্টে প্রতিটি কামড় হোক স্বাদের উৎসব।",
    slogan: "বার্গারের আসল স্বাদ, বার্গার হাউজ!",
    whyChooseLabel: "কেন আমাদের বেছে নেবেন?",
    copyright: `${brandName}। সর্বস্বত্ব সংরক্ষিত।`,
    footerTagline: "বার্গার প্রেমীদের বিশ্বস্ত ঠিকানা",
    teamName: brandTeam,
  },
  theme: {
    primary: "#FF4D00", // Vibrant Burger Orange
    primaryHover: "#E64500",
    accent: "#FFB703", // Gold
    success: "#2ecc71",
    successHover: "#27ae60",
    background: "#000000",
    surface: "#121212",
    surfaceAlt: "#1A1A1A",
    borderDefault: "rgba(255, 77, 0, 0.2)",
    borderSoft: "rgba(255, 255, 255, 0.05)",
    borderHover: "rgba(255, 77, 0, 0.5)",
    textSecondary: "#A1A1AA",
  },
  navigation: [
    { id: "home", label: "হোম" },
    { id: "menu", label: "মেনু" },
    { id: "blog", label: "ব্লগ" },
    { id: "contact", label: "যোগাযোগ" },
  ],
  contact: {
    primaryPhone,
    secondaryPhone,
    whatsappNumber: "8801950496683",
    addressLines: ["আপনার বার্গার শপের ঠিকানা", "শহর, বাংলাদেশ"],
    hoursLines: ["দুপুর ১২:০০ - রাত ১১:৩০", "প্রতিদিন খোলা"],
    mapTitle: `${brandNameLatin} Location`,
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0!2d90.4!3d23.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzAwLjAiTiA5MMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1234567890",
  },
  whatsapp: {
    href: "https://wa.me/8801950496683",
    ariaLabel: "WhatsApp এ মেসেজ করুন",
    orderLabel: "WhatsApp এ অর্ডার করুন",
    shortOrderLabel: "WhatsApp এ অর্ডার",
  },
  hero: {
    badge: "স্বাদে অতুলনীয় বার্গার",
    headlineTop: "শুধু ক্ষুধা মেটানোর জন্য নয়,",
    headlineBottom: "জিভে লেগে থাকার মতো এক অনুভূতি!",
    backgroundImage:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2000&auto=format&fit=crop",
    subheadlinePrefix:
      "সারাদিনের ক্লান্তি শেষে প্রিয়জনদের সাথে সেরা বার্গারের এক কামড়েই মন ভালো করার গ্যারান্টি। ",
    subheadlineBrand: brandName,
    subheadlineSuffix: " দিচ্ছে গরম, ফ্রেশ এবং চরম স্বাদের প্রতিশ্রুতি।",
    menuCta: "মেনু দেখুন",
    orderCta: "এখনই অর্ডার দিন",
  },
  home: {
    featuredSectionLabel: "আমাদের সেরা আইটেম",
    featuredSectionTitle: "সবচেয়ে বেশি বিক্রিত বার্গার",
    featuredItems,
    whyChooseSectionLabel: brandTeam,
    whyChooseSectionTitle: "আমাদের বিশেষত্ব",
    features: [
      {
        icon: "🍔",
        title: "১০০% বিফ/চিকেন",
        description: "ফ্রেশ এবং স্বাস্থ্যকর মাংসের নিশ্চয়তা",
      },
      {
        icon: "⚡",
        title: "সুপার ফাস্ট ডেলিভারি",
        description: "আপনার এলাকায় দ্রুততম ডেলিভারি সার্ভিস",
      },
      {
        icon: "🍯",
        title: "সিক্রেট সস",
        description: "আমাদের নিজস্ব বিশেষ উপাদানে তৈরি অতুলনীয় সস",
      },
    ],
    ctaTitle: "বার্গার খাওয়ার মুড হয়েছে?",
    ctaText: "আর দেরি না করে এখনই আপনার প্রিয় বার্গারটি অর্ডার করুন!",
    ctaButton: "অর্ডার দিন",
    menuButton: "মেনু দেখুন",
    orderButton: "অর্ডার",
    viewAllButton: "পুরো মেনু দেখুন",
  },
  menu: {
    headerLabel: "সুস্বাদু মেনু",
    title: "আমাদের কালেকশন",
    subtitle: "প্রতিটি বার্গার যত্ন সহকারে এবং তাজা উপকরণের মিশ্রণে তৈরি",
    categories: [
      { id: "all", label: "সব আইটেম" },
      { id: "burger", label: "বার্গার" },
      { id: "sides", label: "সাইড ডিশ" },
      { id: "drinks", label: "ড্রিংকস" },
    ],
    items: menuItems,
    popularLabel: "জনপ্রিয়",
    orderButton: "অর্ডার",
    specialNotePrefix: "📞 অর্ডারের জন্য কল করুন:",
    priceNote: "* সাইজ ও টপিংস অনুযায়ী দাম ভিন্ন হতে পারে।",
  },
  blog: {
    headerLabel: "আমাদের ব্লগ",
    title: "খাবার ও গল্প",
    subtitle: "খাবার নিয়ে মজার তথ্য এবং আমাদের পেছনের গল্পগুলো জানুন",
    posts: blogPosts,
    newsletterTitle: "নতুন আপডেট পেতে চান?",
    newsletterText:
      "আমাদের নতুন নতুন অফার এবং মেনু আপডেট সবার আগে পেতে সাবস্ক্রাইব করুন",
    newsletterPlaceholder: "আপনার ইমেইল ঠিকানা দিন",
    newsletterButton: "সাবস্ক্রাইব",
  },
  contact: {
    headerLabel: "যোগাযোগ",
    title: "অর্ডার",
    titleAccent: "করুন",
    subtitle: "গরম গরম বার্গার এখনই অর্ডার করুন। দ্রুত ডেলিভারি নিশ্চিত।",
    infoTitle: "যোগাযোগের ঠিকানা",
    orderFormTitle: "অর্ডার ফর্ম",
    orderFormSubtitle: "নিচের ফর্মটি পূরণ করে আপনার অর্ডার প্লেস করুন",
    whatsappCta: "WhatsApp এ সরাসরি অর্ডার",
    formLabels: {
      name: "আপনার নাম",
      phone: "ফোন নম্বর",
      address: "ঠিকানা",
      item: "অর্ডার আইটেম",
    },
    formPlaceholders: {
      name: "নাম লিখুন",
      phone: "01XXXXXXXXX",
      address: "আপনার পূর্ণ ঠিকানা লিখুন",
      item: "যেমন: ১টি সিগনেচার বিফ বার্গার, ২টি কোল্ড কফি",
    },
    infoCards: [
      {
        title: "ঠিকানা",
        details: ["আপনার বার্গার শপের ঠিকানা", "শহর, বাংলাদেশ"],
      },
      {
        title: "ফোন নম্বর",
        details: [primaryPhone.display],
        links: [primaryPhone.href],
      },
      {
        title: "খোলা থাকে",
        details: ["দুপুর ১২:০০ - রাত ১১:৩০", "প্রতিদিন খোলা"],
      },
    ],
    mapTitle: `${brandNameLatin} Location`,
    successMessage: "অসাধারণ সিদ্ধান্ত! আপনার বার্গার প্রস্তুত হচ্ছে।",
    validationMessage: "অনুগ্রহ করে সব তথ্য দিন",
    errorMessage: "অর্ডার পাঠাতে সমস্যা হয়েছে",
    processingText: "প্রসেসিং...",
    confirmText: "অর্ডার কনফার্ম করুন",
    redirectDelayMs: 2000,
    submitNote:
      "অর্ডার সাবমিট করার পর আমাদের একজন রিপ্রেজেন্টেটিভ আপনাকে কল করবে",
  },
  admin: {
    brandTitle: brandName,
    panelLabel: "অ্যাডমিন প্যানেল",
    loginPasswordRequired: "পাসওয়ার্ড দিন",
    loginTitle: brandName,
    loginSubtitle: "অ্যাডমিন প্যানেল",
    passwordLabel: "পাসওয়ার্ড",
    passwordPlaceholder: "পাসওয়ার্ড লিখুন",
    loginButton: "লগইন",
    loginLoading: "লগইন হচ্ছে...",
    backToWebsite: "← ওয়েবসাইটে ফিরে যান",
    dashboardBrandLabel: brandName,
    dashboardSubtitle: "অ্যাডমিন ড্যাশবোর্ড",
    ordersTabLabel: "অর্ডার",
    menuTabLabel: "মেনু",
    ordersHeader: "অর্ডার লিস্ট",
    menuHeader: "মেনু ম্যানেজমেন্ট",
    addItemButton: "নতুন আইটেম",
    addItemMobileButton: "যোগ",
    logoutButton: "লগআউট",
    loadingText: "লোড হচ্ছে...",
    emptyOrdersText: "কোনো অর্ডার পাওয়া যায়নি",
    emptyMenuText: "মেনু খালি",
    orderDeleteConfirm: "অর্ডারটি ডিলিট করতে চান?",
    menuDeleteConfirm: "আইটেমটি ডিলিট করতে চান?",
    orderDeleteSuccess: "ডিলিট হয়েছে",
    menuDeleteSuccess: "আইটেম ডিলিট হয়েছে",
    orderDeleteFailure: "ডিলিট ব্যর্থ",
    menuDeleteFailure: "ব্যর্থ হয়েছে",
    statusUpdated: "আপডেট হয়েছে",
    statusUpdateFailed: "ব্যর্থ হয়েছে",
    logoutSuccess: "লগআউট সফল",
    orderListTitle: "অর্ডার লিস্ট",
    menuManagementTitle: "মেনু ম্যানেজমেন্ট",
    orderActions: {
      confirm: "কনফার্ম",
      cancel: "বাতিল",
      preparing: "তৈরি শুরু",
      delivered: "ডেলিভার্ড",
      delete: "ডিলিট",
    },
    statusLabels: {
      pending: "পেন্ডিং",
      confirmed: "কনফার্মড",
      preparing: "তৈরি হচ্ছে",
      delivered: "ডেলিভার্ড",
      cancelled: "বাতিল",
    },
    menuModal: {
      addTitle: "নতুন আইটেম যোগ করুন",
      editTitle: "আইটেম এডিট করুন",
      nameLabel: "নাম *",
      categoryLabel: "ক্যাটেগরি",
      priceLabel: "দাম *",
      sizeLabel: "সাইজ",
      descriptionLabel: "বর্ণনা",
      imageLabel: "ইমেজ URL",
      popularLabel: "জনপ্রিয় আইটেম",
      categoryOptions: {
        burger: "বার্গার",
        sides: "সাইড ডিশ",
        drinks: "ড্রিংকস",
      },
      namePlaceholder: "চিকেন বার্গার",
      pricePlaceholder: "২৫০",
      sizePlaceholder: "রেগুলার",
      descriptionPlaceholder: "জুসি বার্গার...",
      imagePlaceholder:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800",
      submitNew: "যোগ করুন",
      submitEdit: "আপডেট",
      submitting: "সেভ হচ্ছে...",
      validationError: "সব ফিল্ড পূরণ করুন",
      successNew: "সফলভাবে যোগ হয়েছে",
      successEdit: "সফলভাবে আপডেট হয়েছে",
      error: "সমস্যা হয়েছে",
    },
  },
};
