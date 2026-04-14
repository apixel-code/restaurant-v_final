const brandName = "শুকরানা রেস্টুরেন্ট";
const brandNameLatin = "Sukrana Restaurant";
const brandInitial = "শ";
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
    name: "শুকরানা স্পেশাল বিরিয়ানি",
    description:
      "খাসির নরম মাংস আর বাসমতি চালের পারফেক্ট ব্লেন্ড যা মুখে দিলেই মিলিয়ে যাবে।",
    price: "৪৫০",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000&auto=format&fit=crop",
    badge: "বেস্ট সেলার",
  },
  {
    id: 2,
    name: "তন্দুরি চিকেন প্ল্যাটার",
    description:
      "মাটির উনুনে সেঁকা ঝাল ঝাল তন্দুরি চিকেন, সাথে থাকছে স্পেশাল পুদিনা চাটনি।",
    price: "৩২০",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c175f0?q=80&w=1000&auto=format&fit=crop",
    badge: "জনপ্রিয়",
  },
  {
    id: 3,
    name: "মুঘলাই পরোটা সেট",
    description:
      "ডিম আর কিমার পুড় ঠাসা মচমচে পরোটা, পরিবেশন করা হয় আলুর দমের সাথে।",
    price: "১৮০",
    image:
      "https://images.unsplash.com/photo-1626132646529-500637532537?q=80&w=1000&auto=format&fit=crop",
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
    title: "শুকরানার খাবার সংস্কৃতি: আমাদের গর্ব, আমাদের স্বাদ",
    excerpt:
      "শুকরানা রেস্টুরেন্ট মুঘলাই ঐতিহ্যকে আধুনিকতার সাথে মিশিয়েছে। এখানকার প্রতিটি পরিবারে আছে নিজস্ব রান্নার ঐতিহ্য...",
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
    category: "pizza",
    name: "চিকেন পিৎজা রেগুলার",
    size: '৭" - ৯"',
    price: "১৫০ - ২০০",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    description: "রসালো চিকেন, মোজারেলা চিজ এবং স্পেশাল সস",
    popular: true,
  },
  {
    id: 2,
    category: "pizza",
    name: "সস পিৎজা",
    size: '৭" - ৯"',
    price: "১৫০ - ২০০",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop",
    description: "টম্যাটো সস, হার্ব এবং গলানো চিজ",
    popular: false,
  },
  {
    id: 3,
    category: "pizza",
    name: "মাশরুম পিৎজা",
    size: '৭" - ৯"',
    price: "১৫০ - ২০০",
    image:
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=800&auto=format&fit=crop",
    description: "ফ্রেশ মাশরুম, চিজ এবং ইতালিয়ান হার্ব",
    popular: false,
  },
  {
    id: 4,
    category: "pizza",
    name: "ওভারলোড চিকেন পিৎজা",
    size: '৭" - ৯"',
    price: "২০০ - ২৫০",
    image:
      "https://images.unsplash.com/photo-1593504049359-74330189a355?q=80&w=800&auto=format&fit=crop",
    description: "এক্সট্রা চিকেন, ডবল চিজ এবং লোডেড টপিংস",
    popular: true,
  },
  {
    id: 5,
    category: "pasta",
    name: "এগ নুডলস",
    size: "",
    price: "৭০",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop",
    description: "ডিম দিয়ে তৈরি সুস্বাদু নুডলস",
    popular: false,
  },
  {
    id: 6,
    category: "pasta",
    name: "চিকেন নুডলস",
    size: "",
    price: "১০০",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop",
    description: "টেন্ডার চিকেন পিস সহ নুডলস",
    popular: true,
  },
  {
    id: 7,
    category: "pasta",
    name: "পাস্তা রেগুলার",
    size: "",
    price: "৭০",
    image:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800&auto=format&fit=crop",
    description: "ক্লাসিক ইতালিয়ান স্টাইল পাস্তা",
    popular: false,
  },
  {
    id: 8,
    category: "pasta",
    name: "চিকেন পাস্তা",
    size: "",
    price: "১০০",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop",
    description: "ক্রিমি সস এবং গ্রিলড চিকেন",
    popular: true,
  },
  {
    id: 9,
    category: "pasta",
    name: "চিজ পাস্তা",
    size: "",
    price: "১৫০",
    image:
      "https://images.unsplash.com/photo-1608897013039-887f21d8c804?q=80&w=800&auto=format&fit=crop",
    description: "এক্সট্রা চিজি এবং ক্রিমি",
    popular: true,
  },
  {
    id: 10,
    category: "setmenu",
    name: "ফ্রাইড রাইস + ক্রিসপি চিকেন",
    size: "",
    price: "১৩০",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop",
    description: "গরম ফ্রাইড রাইস এবং ক্রিসপি ফ্রাইড চিকেন",
    popular: true,
  },
  {
    id: 11,
    category: "setmenu",
    name: "ফ্রাইড রাইস + চিকেন কারি",
    size: "",
    price: "১৩০",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop",
    description: "ফ্রাইড রাইস এবং ঝাল চিকেন কারি",
    popular: false,
  },
  {
    id: 12,
    category: "setmenu",
    name: "ফ্রাইড রাইস + ক্রিসপি চিকেন + কারি",
    size: "",
    price: "২০০",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
    description: "কমপ্লিট মিল - ভাত, চিকেন এবং কারি",
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
    intro: "শুকরানা রেস্টুরেন্টে আপনার প্রতিটি কামড় হোক তৃপ্তির উৎস।",
    slogan: "তৃপ্তির শেষ কথা, শুকরানা রেস্টুরেন্ট!",
    whyChooseLabel: "কেন শুকরানা?",
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
    addressLines: ["আপনার রেস্টুরেন্টের ঠিকানা", "শহর, বাংলাদেশ"],
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
    badge: "শহরের সেরা স্বাদ",
    headlineTop: "ক্ষুধা মেটানোর সাধারণ খাবার নয়,",
    headlineBottom: "এক চরম তৃপ্তির বিস্ফোরণ!",
    backgroundImage:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2000&auto=format&fit=crop",
    subheadlinePrefix:
      "সারাদিনের ক্লান্তি শেষে প্রিয়জনদের সাথে এক কামড়েই মন ভালো করার গ্যারান্টি। শুকরানা রেস্টুরেন্ট দিচ্ছে ",
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
        description: "আপনার এলাকায় সবচেয়ে দ্রুত ডেলিভারি সার্ভিস",
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
      { id: "pizza", label: "পিৎজা" },
      { id: "pasta", label: "চাউমিন/পাস্তা" },
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
      item: "যেমন: চিকেন পিৎজা ২টি, চিকেন পাস্তা ১টি",
    },
    infoCards: [
      {
        title: "ঠিকানা",
        details: ["আপনার রেস্টুরেন্টের ঠিকানা", "শহর, বাংলাদেশ"],
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
      sizeLabel: "সাইজ",
      descriptionLabel: "বর্ণনা",
      imageLabel: "ছবির URL",
      popularLabel: "জনপ্রিয় আইটেম",
      categoryOptions: {
        pizza: "পিৎজা",
        pasta: "চাউমিন/পাস্তা",
        setmenu: "সেট মেনু",
      },
      namePlaceholder: "চিকেন পিৎজা",
      pricePlaceholder: "১৫০",
      sizePlaceholder: '৭" - ৯"',
      descriptionPlaceholder: "রসালো চিকেন, চিজ...",
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
