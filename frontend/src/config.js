const brandName = "বার্গার হাউস রেস্টুরেন্ট";
const brandNameLatin = "Burger House Restaurant";
const brandInitial = "ব";
const brandDescriptor = "রেস্টুরেন্ট";
const brandTeam = `${brandName} টিম`;

const primaryPhone = {
  display: "+৮৮০ ১৭১৬-০২৯৩১৫",
  href: "tel:+8801716029315",
};

const secondaryPhone = {
  display: "+৮৮০ ১৭১৬-০২৯৩১৫",
  href: "tel:+8801716029315",
};

const featuredItems = [
  {
    id: 1,
    name: "সিগনেচার বিফ চিজ বার্গার",
    description:
      "জুসি বিফ প্যাটি, ডবল গলানো চিজ এবং আমাদের সিক্রেট সসের পারফেক্ট ব্লেন্ড যা মুখে দিলেই মিলিয়ে যাবে।",
    price: "৩৫০",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
    badge: "বেস্ট সেলার",
  },
  {
    id: 2,
    name: "ক্রিসপি চিকেন টাওয়ার বার্গার",
    description:
      "মচমচে চিকেন প্যাটি, ফ্রেশ লেটুস আর প্রিমিয়াম মেয়োনিজের লেয়ারে সাজানো স্পেশাল বার্গার।",
    price: "২৮০",
    image:
      "https://images.unsplash.com/photo-1513185158878-8d8c196b8965?q=80&w=1000&auto=format&fit=crop",
    badge: "জনপ্রিয়",
  },
  {
    id: 3,
    name: "স্মোকি বারবিকিউ বার্গার সেট",
    description:
      "স্মোকি বারবিকিউ সস আর গ্রিলড প্যাটির সেট, পরিবেশন করা হয় মচমচে ফ্রেঞ্চ ফ্রাই এর সাথে।",
    price: "৪২০",
    image:
      "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1000&auto=format&fit=crop",
    badge: "সেট মেনু",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "কেন বার্গারের চিজ দেখলে আমাদের ব্রেইন পাগল হয়ে যায়?",
    excerpt:
      "চিজের ভেতরে থাকা ক্যাসোমরফিন নামক একটি যৌগ আমাদের মস্তিষ্কে ডোপামিন রিলিজ করে। এই কারণেই গলানো চিজ দেখলে আমরা নিজেদের সামলাতে পারি না। জানুন বিজ্ঞানের পেছনের গল্প...",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
    date: "১৫ জানুয়ারি, ২০২৬",
    readTime: "৫ মিনিট",
    author: brandTeam,
    category: "খাবারের বিজ্ঞান",
  },
  {
    id: 2,
    title: "অফিসের স্ট্রেস কাটানোর সবচেয়ে সহজ উপায়: এক কামড় গরম বার্গার!",
    excerpt:
      "সারাদিন কাজের চাপে যখন মাথা ঘোরে, তখন এক প্লেট ধোঁয়া ওঠা জুসি বার্গার হতে পারে আপনার সেরা বন্ধু। কার্বোহাইড্রেট কীভাবে মুড ভালো করে, জানুন বিস্তারিত...",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop",
    date: "১০ জানুয়ারি, ২০২৬",
    readTime: "৪ মিনিট",
    author: brandTeam,
    category: "লাইফস্টাইল",
  },
  {
    id: 3,
    title: "বার্গার হাউসের খাবার সংস্কৃতি: আমাদের গর্ব, আমাদের স্বাদ",
    excerpt:
      "বার্গার হাউস রেস্টুরেন্ট আন্তর্জাতিক স্বাদকে দেশীয় ঐতিহ্যের সাথে মিশিয়েছে। এখানকার প্রতিটি বার্গারের আছে নিজস্ব রান্নার কারিশমা...",
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800&auto=format&fit=crop",
    date: "৫ জানুয়ারি, ২০২৬",
    readTime: "৬ মিনিট",
    author: brandTeam,
    category: "আমাদের গল্প",
  },
];

const menuItems = [
  {
    id: 1,
    category: "pizza",
    name: "ক্লাসিক চিকেন বার্গার",
    size: "রেগুলার",
    price: "১৮০",
    image:
      "https://images.unsplash.com/photo-1610614819513-58e34989848b?q=80&w=800&auto=format&fit=crop",
    description: "রসালো চিকেন প্যাটি, মোজারেলা চিজ এবং স্পেশাল সস",
    popular: true,
  },
  {
    id: 2,
    category: "pizza",
    name: "বিফ চিজ লাভার",
    size: "রেগুলার",
    price: "২৫০",
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=800&auto=format&fit=crop",
    description: "বিফ প্যাটি, এক্সট্রা চিজ এবং সালাদ ড্রেসিং",
    popular: false,
  },
  {
    id: 3,
    category: "pizza",
    name: "স্মোকি মাশরুম বার্গার",
    size: "রেগুলার",
    price: "২২০",
    image:
      "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?q=80&w=800&auto=format&fit=crop",
    description: "ফ্রেশ মাশরুম, স্মোকি ফ্লেভার এবং চিজ",
    popular: false,
  },
  {
    id: 4,
    category: "pizza",
    name: "ওভারলোড বিফ বার্গার",
    size: "লার্জ",
    price: "৪৫০",
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=800&auto=format&fit=crop",
    description: "এক্সট্রা প্যাটি, ডবল চিজ এবং লোডেড টপিংস",
    popular: true,
  },
  {
    id: 5,
    category: "pasta",
    name: "ফ্রেঞ্চ ফ্রাই রেগুলার",
    size: "১:১",
    price: "৮০",
    image:
      "https://images.unsplash.com/photo-1630384066202-18d1262a6b0a?q=80&w=800&auto=format&fit=crop",
    description: "আলু দিয়ে তৈরি মচমচে ফ্রাই",
    popular: false,
  },
  {
    id: 6,
    category: "pasta",
    name: "নাগা ড্রামস্টিক",
    size: "২ পিস",
    price: "১৮০",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop",
    description: "অতিরিক্ত ঝাল এবং ক্রিসপি চিকেন",
    popular: true,
  },
  {
    id: 7,
    category: "pasta",
    name: "চিকেন নাগেটস",
    size: "৬ পিস",
    price: "১৫০",
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=800&auto=format&fit=crop",
    description: "ক্লাসিক ঘরোয়া স্টাইল চিকেন নাগেটস",
    popular: false,
  },
  {
    id: 8,
    category: "pasta",
    name: "চিকেন উইংস",
    size: "৪ পিস",
    price: "১৬০",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=800&auto=format&fit=crop",
    description: "ক্রিসপি সস এবং ফ্রাইড চিকেন উইংস",
    popular: true,
  },
  {
    id: 9,
    category: "pasta",
    name: "পটেটো ওয়েজেস",
    size: "১:১",
    price: "১০০",
    image:
      "https://images.unsplash.com/photo-1619860860774-1e2e17343432?q=80&w=800&auto=format&fit=crop",
    description: "এক্সট্রা ক্রিসপি এবং মশলাদার",
    popular: true,
  },
  {
    id: 10,
    category: "setmenu",
    name: "বার্গার + ফ্রেঞ্চ ফ্রাই",
    size: "",
    price: "২৫০",
    image:
      "https://images.unsplash.com/photo-1534790561325-06900693f947?q=80&w=800&auto=format&fit=crop",
    description: "গরম বার্গার এবং ক্রিসপি ফ্রেঞ্চ ফ্রাই",
    popular: true,
  },
  {
    id: 11,
    category: "setmenu",
    name: "বার্গার + উইংস + ড্রিঙ্কস",
    size: "",
    price: "৩৮০",
    image:
      "https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=800&auto=format&fit=crop",
    description: "কম্প্লিট মিল - বার্গার, উইংস এবং পানীয়",
    popular: false,
  },
  {
    id: 12,
    category: "setmenu",
    name: "ফ্যামিলি বার্গার বক্স",
    size: "",
    price: "৯৫০",
    image:
      "https://images.unsplash.com/photo-1623231278267-3765430d0ec2?q=80&w=800&auto=format&fit=crop",
    description: "৪টি বার্গার, ফ্রাই এবং কোক বক্স",
    popular: true,
  },
];

export const clientConfig = {
  brand: {
    name: brandName,
    nameLatin: brandNameLatin,
    initial: brandInitial,
    descriptor: brandDescriptor,
    shortTagline: "আভিজাত্য আর স্বাদের অনন্য মিলন",
    intro: "বার্গার হাউস রেস্টুরেন্টে আপনার প্রতিটি কামড় হোক তৃপ্তির উৎস।",
    slogan: "তৃপ্তির শেষ কথা, বার্গার হাউস রেস্টুরেন্ট!",
    whyChooseLabel: "কেন বার্গার হাউস?",
    copyright: `${brandName}। সর্বস্বত্ব সংরক্ষিত।`,
    footerTagline: "সেরা স্বাদের বিশ্বস্ত ঠিকানা",
    teamName: brandTeam,
  },
  theme: {
    primary: "#E63946", // Vibrant Red
    primaryHover: "#D62828",
    accent: "#FFB703", // Warm Gold
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
    whatsappNumber: "8801716029315",
    addressLines: ["আপনার বার্গার শপের ঠিকানা", "শহর, বাংলাদেশ"],
    hoursLines: ["সকাল ১১:০০ - রাত ১১:০০", "প্রতিদিন খোলা"],
    mapTitle: `${brandNameLatin} Location`,
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0!2d90.4!3d23.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzAwLjAiTiA5MMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1234567890",
  },
  whatsapp: {
    href: "https://wa.me/8801716029315",
    ariaLabel: "WhatsApp এ মেসেজ করুন",
    orderLabel: "WhatsApp এ অর্ডার করুন",
    shortOrderLabel: "WhatsApp এ অর্ডার",
  },
  hero: {
    badge: "শহরের সেরা বার্গার",
    headlineTop: "ক্ষুধা মেটানোর সাধারণ বার্গার নয়,",
    headlineBottom: "এক চরম তৃপ্তির বিস্ফোরণ!",
    backgroundImage:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2000&auto=format&fit=crop",
    subheadlinePrefix:
      "সারাদিনের ক্লান্তি শেষে প্রিয়জনদের সাথে এক কামড়েই মন ভালো করার গ্যারান্টি। বার্গার হাউস রেস্টুরেন্ট দিচ্ছে ",
    subheadlineBrand: brandName,
    subheadlineSuffix: " গরম, রসালো এবং জিভে জল আনা বার্গারের প্রতিশ্রুতি।",
    menuCta: "মেনু দেখুন",
    orderCta: "গরম গরম অর্ডার করুন",
  },
  home: {
    featuredSectionLabel: "আমাদের স্পেশাল",
    featuredSectionTitle: "জিভে জল আনা বার্গার",
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
    headerLabel: "সুস্বাদু বার্গার",
    title: "আমাদের মেনু",
    subtitle: "প্রতিটি বার্গার তাজা উপকরণ দিয়ে ভালোবাসা সহকারে তৈরি",
    categories: [
      { id: "all", label: "সব আইটেম" },
      { id: "pizza", label: "প্রিমিয়াম বার্গার" },
      { id: "pasta", label: "সাইড ডিশ" },
      { id: "setmenu", label: "কম্বো সেট" },
    ],
    items: menuItems,
    popularLabel: "জনপ্রিয়",
    orderButton: "অর্ডার",
    specialNotePrefix: "📞 অর্ডার করতে কল করুন:",
    priceNote: "* দাম পরিবর্তনশীল। সাইজ অনুযায়ী দাম ভিন্ন হতে পারে।",
  },
  blog: {
    headerLabel: "আমাদের ব্লগ",
    title: "বার্গার নিয়ে গল্প",
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
      "গরম গরম সুস্বাদু বার্গার এখনই অর্ডার করুন। দ্রুত ডেলিভারি নিশ্চিত।",
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
      item: "যেমন: বিফ বার্গার ২টি, চিকেন উইংস ১টি",
    },
    infoCards: [
      {
        title: "ঠিকানা",
        details: ["আপনার বার্গার শপের ঠিকানা", "শহর, বাংলাদেশ"],
      },
      {
        title: "ফোন নম্বর",
        details: [primaryPhone.display, secondaryPhone.display],
        links: [primaryPhone.href, secondaryPhone.href],
      },
      {
        title: "খোলা থাকে",
        details: ["সকাল ১১:০০ - রাত ১১:০০", "প্রতিদিন খোলা"],
      },
    ],
    mapTitle: `${brandNameLatin} Location`,
    successMessage:
      "অসাধারণ সিদ্ধান্ত! আপনার গরম ও সুস্বাদু বার্গার তৈরি হচ্ছে।",
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
      sizeLabel: "সাইজ",
      descriptionLabel: "বর্ণনা",
      imageLabel: "ছবির URL",
      popularLabel: "জনপ্রিয় আইটেম",
      categoryOptions: {
        pizza: "বার্গার",
        pasta: "সাইড ডিশ",
        setmenu: "কম্বো সেট",
      },
      namePlaceholder: "বিফ বার্গার",
      pricePlaceholder: "৩৫০",
      sizePlaceholder: "রেগুলার",
      descriptionPlaceholder: "রসালো বিফ, চিজ...",
      imagePlaceholder: "https://...",
      submitNew: "যোগ করুন",
      submitEdit: "আপডেট করুন",
      submitting: "সেভ হচ্ছে...",
      validationError: "নাম এবং দাম দিন",
      successNew: "নতুন আইটেম যোগ হয়েছে",
      successEdit: "আইটেম আপডেট হয়েছে",
      error: "সমস্যা হয়েছে",
    },
  },
};
