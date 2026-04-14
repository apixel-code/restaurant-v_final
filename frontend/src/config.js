const brandName = "China Land Restaurant";
const brandNameLatin = "China Land Restaurant";
const brandInitial = "C";
const brandDescriptor = "রেস্টুরেন্ট";
const brandTeam = `${brandName} টিম`;

const primaryPhone = {
  display: "+৮৮০ ১৩৩৬-৮৭৪০১০",
  href: "tel:+8801336874010",
};

const secondaryPhone = {
  display: "+৮৮০ ১৩৩৬-৮৭৪০১০",
  href: "tel:+8801336874010",
};

const featuredItems = [
  {
    id: 1,
    name: "সিগনেচার হাক্কা নুডলস",
    description:
      "তাজা সবজি, ডিম এবং চাইনিজ হার্বস দিয়ে তৈরি আমাদের স্পেশাল চাওমিন।",
    price: "২২০",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1000&auto=format&fit=crop",
    badge: "বেস্ট সেলার",
  },
  {
    id: 2,
    name: "ড্রাই চিলি চিকেন",
    description:
      "ঝাল ঝাল চিকেন ফ্রাই, ক্যাপসিকাম এবং চাইনিজ সসের পারফেক্ট ব্লেন্ড।",
    price: "৩৫০",
    image:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1000&auto=format&fit=crop",
    badge: "জনপ্রিয়",
  },
  {
    id: 3,
    name: "চাইনিজ মিক্সড প্ল্যাটার",
    description:
      "মিক্সড রাইস, চিলি চিকেন এবং ভেজিটেবল - এক প্লেটে সম্পূর্ণ তৃপ্তি।",
    price: "৩৯৯",
    image:
      "https://images.unsplash.com/photo-1512058560550-42749359a60b?q=80&w=1000&auto=format&fit=crop",
    badge: "সেট মেনু",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "কেন চিজ দেখলে আমাদের ব্রেইন পাগল হয়ে যায়?",
    excerpt:
      "চিজের ভেতরে থাকা ক্যাসোমরফিন নামক একটি যৌগ আমাদের মস্তিষ্কে ডোপামিন রিলিজ করে। এই কারণেই গলানো চিজ দেখলে আমরা নিজেদের সামলাতে পারি না। জানুন বিজ্ঞানের পেছনের গল্প...",
    image:
      "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?q=80&w=800&auto=format&fit=crop",
    date: "১৫ জানুয়ারি, ২০২৬",
    readTime: "৫ মিনিট",
    author: brandTeam,
    category: "খাবারের বিজ্ঞান",
  },
  {
    id: 2,
    title: "অফিসের স্ট্রেস কাটানোর সবচেয়ে সহজ উপায়: এক প্লেট গরম পাস্তা!",
    excerpt:
      "সারাদিন কাজের চাপে যখন মাথা ঘোরে, তখন এক প্লেট ধোঁয়া ওঠা পাস্তা হতে পারে আপনার সেরা বন্ধু। কার্বোহাইড্রেট কীভাবে মুড ভালো করে, জানুন বিস্তারিত...",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop",
    date: "১০ জানুয়ারি, ২০২৬",
    readTime: "৪ মিনিট",
    author: brandTeam,
    category: "লাইফস্টাইল",
  },
  {
    id: 3,
    title: "চায়না ল্যান্ডের খাবার সংস্কৃতি: আমাদের গর্ব, আমাদের স্বাদ",
    excerpt:
      "চায়না ল্যান্ড রেস্টুরেন্ট চাইনিজ ঐতিহ্যকে আধুনিকতার সাথে মিশিয়েছে। এখানকার প্রতিটি রেসিপিতে আছে রান্নার নিজস্ব বৈশিষ্ট্য...",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
    date: "৫ জানুয়ারি, ২০২৬",
    readTime: "৬ মিনিট",
    author: brandTeam,
    category: "আমাদের গল্প",
  },
];

const menuItems = [
  {
    id: 1,
    category: "noodles",
    name: "চিকেন চাওমিন",
    size: "১:২",
    price: "২৫০",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop",
    description: "চিকেন ও সবজি দিয়ে তৈরি চাওমিন",
    popular: true,
  },
  {
    id: 2,
    category: "noodles",
    name: "মিক্সড নুডলস",
    size: "১:২",
    price: "৩০০",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop",
    description: "চিকেন, প্রন ও সবজি দিয়ে তৈরি",
    popular: false,
  },
  {
    id: 3,
    category: "soup",
    name: "থাই স্যুপ স্পেশাল",
    size: "১:৩",
    price: "৪৫০",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
    description: "প্রন ও চিকেন দিয়ে তৈরি ঘন স্যুপ",
    popular: true,
  },
  {
    id: 4,
    category: "soup",
    name: "কর্ন স্যুপ",
    size: "১:৩",
    price: "৩৫০",
    image:
      "https://images.unsplash.com/photo-1510627489930-0c1b0ba054a7?q=80&w=800&auto=format&fit=crop",
    description: "ক্রিমি কর্ন স্যুপ",
    popular: false,
  },
  {
    id: 5,
    category: "chicken",
    name: "চিকেন মাঞ্চুরিয়ান",
    size: "১:৩",
    price: "৪২০",
    image:
      "https://images.unsplash.com/photo-1635047548471-f44ee4981d4f?q=80&w=800&auto=format&fit=crop",
    description: "সসি চাইনিজ চিকেন কারি",
    popular: true,
  },
  {
    id: 6,
    category: "chicken",
    name: "চিলি চিকেন ড্রাই",
    size: "১:৩",
    price: "৪০০",
    image:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=800&auto=format&fit=crop",
    description: "ঝাল ঝাল চিকেন ফ্রাই",
    popular: true,
  },
  {
    id: 7,
    category: "rice",
    name: "চাইনিজ ফ্রাইড রাইস",
    size: "১:৩",
    price: "৩০০",
    image:
      "https://images.unsplash.com/photo-1512058560550-42749359a60b?q=80&w=800&auto=format&fit=crop",
    description: "বাসমতি চালের ক্লাসিক ফ্রাইড রাইস",
    popular: false,
  },
  {
    id: 8,
    category: "rice",
    name: "এগ মিক্সড রাইস",
    size: "১:৩",
    price: "২৫০",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop",
    description: "ডিম ও সবজির মিশ্রণে ফ্রাইড রাইস",
    popular: false,
  },
  {
    id: 9,
    category: "snacks",
    name: "মচমচে স্প্রিং রোল",
    size: "৪ পিস",
    price: "১৬০",
    image:
      "https://images.unsplash.com/photo-1606525791528-c37621223bb0?q=80&w=800&auto=format&fit=crop",
    description: "ভেজিটেবল ও চিকেন ফিলিংস রোল",
    popular: false,
  },
  {
    id: 10,
    category: "setmenu",
    name: "রাইস + চিকেন কারি",
    size: "১ জন",
    price: "২৫০",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
    description: "রাইস, চিকেন এবং চাইনিজ ভেজিটেবল",
    popular: true,
  },
  {
    id: 11,
    category: "setmenu",
    name: "চাওমিন + চিলি চিকেন",
    size: "১ জন",
    price: "২৭০",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    description: "চাওমিন এবং ২ পিস চিলি চিকেন",
    popular: false,
  },
  {
    id: 12,
    category: "setmenu",
    name: "স্পেশাল চাইনিজ কম্বো",
    size: "১ জন",
    price: "৩৫০",
    image:
      "https://images.unsplash.com/photo-1512058560550-42749359a60b?q=80&w=800&auto=format&fit=crop",
    description: "কমপ্লিট মিল - রাইস, চিকেন ও ড্রিংকস",
    popular: true,
  },
];

export const clientConfig = {
  brand: {
    name: brandName,
    nameLatin: brandNameLatin,
    initial: brandInitial,
    descriptor: brandDescriptor,
    shortTagline: "ঐতিহ্যবাহী স্বাদের ছোঁয়ায়, প্রতিটি লোকমায় তৃপ্তি!",
    intro: "চায়না ল্যান্ড রেস্টুরেন্টে আপনার প্রতিটি কামড় হোক তৃপ্তির উৎস।",
    slogan: "তৃপ্তির শেষ কথা, চায়না ল্যান্ড রেস্টুরেন্ট!",
    whyChooseLabel: "কেন শুকরানা?",
    copyright: `${brandName}। সর্বস্বত্ব সংরক্ষিত।`,
    footerTagline: "সেরা স্বাদের বিশ্বস্ত ঠিকানা",
    teamName: brandTeam,
  },
  theme: {
    primary: "#E63946",
    primaryHover: "#D62828",
    accent: "#FFB703",
    success: "#25d366",
    successHover: "#22c55e",
    background: "#000000",
    surface: "#0D0D0D",
    surfaceAlt: "#1A1A1A",
    borderDefault: "rgba(230, 57, 70, 0.2)",
    borderSoft: "rgba(255, 255, 255, 0.05)",
    borderHover: "rgba(230, 57, 70, 0.5)",
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
    whatsappNumber: "8801336874010",
    addressLines: ["আপনার রেস্টুরেন্টের ঠিকানা", "শহর, বাংলাদেশ"],
    hoursLines: ["দুপুর ১২:০০ - রাত ১১:০০", "প্রতিদিন খোলা"],
    mapTitle: `${brandNameLatin} Location`,
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0!2d90.4!3d23.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzAwLjAiTiA5MMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1234567890",
  },
  whatsapp: {
    href: "https://wa.me/8801336874010",
    ariaLabel: "WhatsApp এ মেসেজ করুন",
    orderLabel: "WhatsApp এ অর্ডার করুন",
    shortOrderLabel: "WhatsApp এ অর্ডার",
  },
  hero: {
    badge: "সেরা চাইনিজ স্বাদ",
    backgroundImage:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2000&auto=format&fit=crop",
    headlineTop: "ঐতিহ্যবাহী স্বাদের ছোঁয়ায়,",
    headlineBottom: "প্রতিটি লোকমায় তৃপ্তি!",
    subheadlinePrefix:
      "সারাদিনের ক্লান্তি শেষে প্রিয়জনদের সাথে এক কামড়েই মন ভালো করার গ্যারান্টি। চায়না ল্যান্ড রেস্টুরেন্ট দিচ্ছে ",
    subheadlineBrand: brandName,
    subheadlineSuffix: " গরম, রসালো এবং জিভে জল আনা স্বাদের প্রতিশ্রুতি।",
    menuCta: "মেনু দেখুন",
    orderCta: "গরম গরম অর্ডার করুন",
  },
  home: {
    featuredSectionLabel: "আমাদের স্পেশাল",
    featuredSectionTitle: "জিভে জল আনা আইটেম",
    featuredItems,
    whyChooseSectionLabel: brandTeam,
    whyChooseSectionTitle: "আমাদের বিশেষত্ব",
    features: [
      {
        icon: "🔥",
        title: "গরম ও তাজা",
        description:
          "প্রতিটি অর্ডার তাজা উপকরণ দিয়ে তৈরি এবং গরম গরম পরিবেশন করা হয়",
      },
      {
        icon: "⚡",
        title: "দ্রুত ডেলিভারি",
        description: "আপনার এলাকায় সবচেয়ে দ্রুত ডেলিভারি সার্ভিস",
      },
      {
        icon: "💯",
        title: "মানের নিশ্চয়তা",
        description: "সেরা মানের উপকরণ এবং হাইজিনিক পরিবেশে তৈরি",
      },
    ],
    ctaTitle: "ক্ষুধা লাগছে? আর দেরি কেন!",
    ctaText: "এখনই অর্ডার করুন এবং আমাদের সেরা স্বাদ উপভোগ করুন",
    ctaButton: "এখনই অর্ডার করুন",
    menuButton: "মেনু দেখুন",
    orderButton: "অর্ডার করুন",
    viewAllButton: "সম্পূর্ণ মেনু দেখুন",
  },
  menu: {
    headerLabel: "সুস্বাদু খাবার",
    title: "আমাদের মেনু",
    subtitle: "প্রতিটি আইটেম তাজা উপকরণ দিয়ে ভালোবাসা সহকারে তৈরি",
    categories: [
      { id: "all", label: "সব আইটেম" },
      { id: "noodles", label: "নুডলস/চাওমিন" },
      { id: "soup", label: "স্যুপ ও স্টার্টার" },
      { id: "chicken", label: "চিকেন কারি" },
      { id: "rice", label: "রাইস" },
      { id: "setmenu", label: "সেট মেনু" },
    ],
    items: menuItems,
    popularLabel: "জনপ্রিয়",
    orderButton: "অর্ডার",
    specialNotePrefix: "📞 অর্ডার করতে কল করুন:",
    priceNote: "* দাম পরিবর্তনশীল। সাইজ অনুযায়ী দাম ভিন্ন হতে পারে।",
  },
  blog: {
    headerLabel: "আমাদের ব্লগ",
    title: "খাবার নিয়ে গল্প",
    subtitle:
      "খাবার শুধু খাওয়া নয়, এর পেছনে আছে বিজ্ঞান, সংস্কৃতি এবং অনেক মজার তথ্য",
    posts: blogPosts,
    newsletterTitle: "নতুন আপডেট পেতে চান?",
    newsletterText:
      "আমাদের নতুন অফার, মেনু আপডেট এবং খাবার নিয়ে মজার তথ্য সবার আগে পেতে সাবস্ক্রাইব করুন",
    newsletterPlaceholder: "আপনার ইমেইল লিখুন",
    newsletterButton: "সাবস্ক্রাইব",
  },
  contact: {
    headerLabel: "যোগাযোগ করুন",
    title: "অর্ডার",
    titleAccent: "করুন",
    subtitle:
      "গরম গরম সুস্বাদু খাবার এখনই অর্ডার করুন। দ্রুত ডেলিভারি নিশ্চিত।",
    infoTitle: "যোগাযোগের তথ্য",
    orderFormTitle: "অর্ডার ফর্ম",
    orderFormSubtitle: "নিচের ফর্ম পূরণ করে অর্ডার করুন",
    whatsappCta: "WhatsApp এ অর্ডার করুন",
    formLabels: {
      name: "আপনার নাম",
      phone: "ফোন নম্বর",
      address: "ডেলিভারি ঠিকানা",
      item: "অর্ডার আইটেম",
    },
    formPlaceholders: {
      name: "নাম লিখুন",
      phone: "01XXXXXXXXX",
      address: "সম্পূর্ণ ঠিকানা লিখুন",
      item: "যেমন: ১:৩ চিকেন চাওমিন, ১:৩ থাই স্যুপ",
    },
    infoCards: [
      {
        title: "ঠিকানা",
        details: ["আপনার রেস্টুরেন্টের ঠিকানা", "শহর, বাংলাদেশ"],
      },
      {
        title: "ফোন নম্বর",
        details: [primaryPhone.display],
        links: [primaryPhone.href],
      },
      {
        title: "খোলা থাকে",
        details: ["দুপুর ১২:০০ - রাত ১১:০০", "প্রতিদিন খোলা"],
      },
    ],
    mapTitle: `${brandNameLatin} Location`,
    successMessage: "অসাধারণ সিদ্ধান্ত! আপনার গরম ও সুস্বাদু খাবার তৈরি হচ্ছে।",
    validationMessage: "অনুগ্রহ করে সব ফিল্ড পূরণ করুন",
    errorMessage: "অর্ডার সাবমিট করতে সমস্যা হয়েছে",
    processingText: "প্রসেসিং...",
    confirmText: "অর্ডার কনফার্ম করুন",
    redirectDelayMs: 2000,
    submitNote: "অর্ডার কনফার্ম করলে আমরা শীঘ্রই আপনাকে কল করব",
  },
  admin: {
    brandTitle: brandName,
    panelLabel: "অ্যাডমিন প্যানেল",
    loginPasswordRequired: "পাসওয়ার্ড দিন",
    loginTitle: brandName,
    loginSubtitle: "অ্যাডমিন প্যানেল",
    passwordLabel: "পাসওয়ার্ড",
    passwordPlaceholder: "পাসওয়ার্ড লিখুন",
    loginButton: "লগইন করুন",
    loginLoading: "লগইন হচ্ছে...",
    backToWebsite: "← ওয়েবসাইটে ফিরে যান",
    dashboardBrandLabel: brandName,
    dashboardSubtitle: "অ্যাডমিন প্যানেল",
    ordersTabLabel: "অর্ডার",
    menuTabLabel: "মেনু",
    ordersHeader: "অর্ডার লিস্ট",
    menuHeader: "মেনু ম্যানেজমেন্ট",
    addItemButton: "নতুন আইটেম",
    addItemMobileButton: "যোগ করুন",
    logoutButton: "লগআউট",
    loadingText: "লোড হচ্ছে...",
    emptyOrdersText: "কোনো অর্ডার নেই",
    emptyMenuText: "কোনো মেনু আইটেম নেই",
    orderDeleteConfirm: "এই অর্ডার ডিলিট করতে চান?",
    menuDeleteConfirm: "এই আইটেম ডিলিট করতে চান?",
    orderDeleteSuccess: "অর্ডার ডিলিট হয়েছে",
    menuDeleteSuccess: "আইটেম ডিলিট হয়েছে",
    orderDeleteFailure: "অর্ডার ডিলিট ব্যর্থ",
    menuDeleteFailure: "ডিলিট ব্যর্থ হয়েছে",
    statusUpdated: "স্ট্যাটাস আপডেট হয়েছে",
    statusUpdateFailed: "স্ট্যাটাস আপডেট ব্যর্থ",
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
      sizeLabel: "পরিমাণ",
      descriptionLabel: "বর্ণনা",
      imageLabel: "ইমেজ URL",
      popularLabel: "জনপ্রিয় আইটেম",
      categoryOptions: {
        noodles: "চাওমিন",
        soup: "স্যুপ",
        chicken: "চিকেন",
        rice: "রাইস",
        setmenu: "সেট মেনু",
      },
      namePlaceholder: "হাক্কা নুডলস",
      pricePlaceholder: "২৫০",
      sizePlaceholder: "১:২",
      descriptionPlaceholder: "সুস্বাদু নুডলস...",
      imagePlaceholder:
        "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800",
      submitNew: "যোগ করুন",
      submitEdit: "আপডেট",
      submitting: "সেভ হচ্ছে...",
      validationError: "নাম ও দাম দিন",
      successNew: "যোগ হয়েছে",
      successEdit: "আপডেট হয়েছে",
      error: "সমস্যা হয়েছে",
    },
  },
};
