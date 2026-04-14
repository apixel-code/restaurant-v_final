const brandName = "Buffet Kingdom & Restaurant";
const brandNameLatin = "Buffet Kingdom & Restaurant";
const brandInitial = "B";
const brandDescriptor = "রেস্টুরেন্ট";
const brandTeam = `${brandName} টিম`;

const primaryPhone = {
  display: "+৮৮০ ১৭৬৬-০৩৮৮৮৬",
  href: "tel:+8801766038886",
};

const secondaryPhone = {
  display: "+৮৮০ ১৭৬৬-০৩৮৮৮৬",
  href: "tel:+8801766038886",
};

const featuredItems = [
  {
    id: 1,
    name: "প্রিমিয়াম বাফেট লাঞ্চ/ডিনার",
    description:
      "৭০+ আইটেমের বিশাল সমাহার! চাইনিজ, কন্টিনেন্টাল এবং দেশি স্বাদের মিলনমেলা।",
    price: "৭৫০",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop",
    badge: "সেরা ডিল",
  },
  {
    id: 2,
    name: "ক্রিস্পি গোল্ডেন প্রন",
    description:
      "মচমচে আবরণে মোড়ানো বড় সাইজের কিং প্রন ফ্রাই, সাথে থাকছে স্পেশাল সস।",
    price: "৪৫০",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1000&auto=format&fit=crop",
    badge: "জনপ্রিয়",
  },
  {
    id: 3,
    name: "গ্রিলড চিকেন উইথ হার্বস",
    description: "রসালো চিকেন গ্রিল, যা বাফেটের অন্যতম আকর্ষণ।",
    price: "৩৮০",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=1000&auto=format&fit=crop",
    badge: "হেলদি চয়েস",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "বাফেটে খাওয়ার সময় কোন খাবারগুলো আগে নেওয়া উচিত?",
    excerpt:
      "সঠিক ক্রমে খাবার খেলে আপনি বেশি আইটেম উপভোগ করতে পারবেন। স্টার্টার থেকে ডেজার্ট—সবকিছুর সঠিক নিয়ম জানুন...",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
    date: "১৫ জানুয়ারি, ২০২৬",
    readTime: "৫ মিনিট",
    author: brandTeam,
    category: "খাবার টিপস",
  },
  {
    id: 2,
    title: "কিডনি বিন সালাদ থেকে পাস্তা: কেন বাফেটের সালাদ বার এত স্বাস্থ্যকর?",
    excerpt:
      "তাজা শাকসবজি এবং ফলমূলের মিশ্রণে তৈরি আমাদের সালাদ বার কেন ডায়েট সচেতনদের পছন্দ, তা নিয়ে আজকের ব্লগ...",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    date: "১০ জানুয়ারি, ২০২৬",
    readTime: "৪ মিনিট",
    author: brandTeam,
    category: "স্বাস্থ্য",
  },
  {
    id: 3,
    title: "বাফেট কিংডমের অন্দরমহল: আমাদের রান্নাঘরের গল্প",
    excerpt:
      "আমরা কীভাবে প্রতিদিন টাটকা খাবার তৈরি করি এবং হাইজিন মেইনটেইন করি, তা দেখুন এক পলকে...",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
    date: "৫ জানুয়ারি, ২০২৬",
    readTime: "৬ মিনিট",
    author: brandTeam,
    category: "আমাদের গল্প",
  },
];

const menuItems = [
  {
    id: 1,
    category: "buffet",
    name: "লাঞ্চ বাফেট (৫০+ আইটেম)",
    size: "১ জন",
    price: "৫৯৯",
    image:
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=800&auto=format&fit=crop",
    description: "দুপুরের বিশেষ সাশ্রয়ী বাফেট মেনু",
    popular: true,
  },
  {
    id: 2,
    category: "buffet",
    name: "ডিনার বাফেট (৭০+ আইটেম)",
    size: "১ জন",
    price: "৭৫০",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    description: "সবচেয়ে জনপ্রিয় লাক্সারি ডিনার বাফেট",
    popular: true,
  },
  {
    id: 3,
    category: "starter",
    name: "ক্রিস্পি চিকেন ফ্রাই",
    size: "১:৩",
    price: "৩৫০",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800&auto=format&fit=crop",
    description: "বাফেটের সবচেয়ে মচমচে স্টার্টার",
    popular: true,
  },
  {
    id: 4,
    category: "starter",
    name: "কিং প্রন টেম্পুরা",
    size: "৪ পিস",
    price: "৪৫০",
    image:
      "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?q=80&w=800&auto=format&fit=crop",
    description: "বড় সাইজের চিংড়ি ফ্রাই",
    popular: false,
  },
  {
    id: 5,
    category: "main",
    name: "হোয়াইট সস পাস্তা",
    size: "১:২",
    price: "৩২০",
    image:
      "https://images.unsplash.com/photo-1645112481338-3560e9c13d3a?q=80&w=800&auto=format&fit=crop",
    description: "ক্রিমি এবং চিজিতে ঠাসা পাস্তা",
    popular: true,
  },
  {
    id: 6,
    category: "main",
    name: "চিকেন মাঞ্চুরিয়ান",
    size: "১:৩",
    price: "৪২০",
    image:
      "https://images.unsplash.com/photo-1635047548471-f44ee4981d4f?q=80&w=800&auto=format&fit=crop",
    description: "স্পাইসি চাইনিজ চিকেন কারি",
    popular: true,
  },
  {
    id: 7,
    category: "main",
    name: "এগ ফ্রাইড রাইস",
    size: "১:৩",
    price: "৩০০",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop",
    description: "বাসমতি চালের ক্লাসিক ফ্রাইড রাইস",
    popular: false,
  },
  {
    id: 8,
    category: "dessert",
    name: "রেড ভেলভেট পেস্ট্রি",
    size: "২ পিস",
    price: "১৮০",
    image:
      "https://images.unsplash.com/photo-1616031037011-087000171abe?q=80&w=800&auto=format&fit=crop",
    description: "বাফেটের শেষ পাতে মিষ্টি স্বাদ",
    popular: false,
  },
  {
    id: 9,
    category: "dessert",
    name: "সুইট ফ্রুট কাস্টার্ড",
    size: "১ বাটি",
    price: "১৫০",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop",
    description: "তাজা ফল ও ক্রিমি কাস্টার্ড",
    popular: true,
  },
];

export const clientConfig = {
  brand: {
    name: brandName,
    nameLatin: brandNameLatin,
    initial: brandInitial,
    descriptor: brandDescriptor,
    shortTagline: "সবচেয়ে বড় বাফেট এবং সেরা স্বাদের নিশ্চয়তা!",
    intro:
      "বাফেট কিংডম রেস্টুরেন্টে আপনি পাবেন দেশি-বিদেশি খাবারের রাজকীয় স্বাদ।",
    slogan: "তৃপ্তির শেষ কথা, বাফেট কিংডম রেস্টুরেন্ট!",
    whyChooseLabel: "কেন বাফেট কিংডম?",
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
    whatsappNumber: "8801766038886",
    addressLines: ["আপনার রেস্টুরেন্টের ঠিকানা", "শহর, বাংলাদেশ"],
    hoursLines: ["দুপুর ১২:৩০ - রাত ১১:০০", "প্রতিদিন খোলা"],
    mapTitle: `${brandNameLatin} Location`,
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.0!2d90.4!3d23.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzAwLjAiTiA5MMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1234567890",
  },
  whatsapp: {
    href: "https://wa.me/8801766038886",
    ariaLabel: "WhatsApp এ মেসেজ করুন",
    orderLabel: "WhatsApp এ বুকিং দিন",
    shortOrderLabel: "WhatsApp বুকিং",
  },
  hero: {
    badge: "রাজকীয় স্বাদের বাফেট",
    backgroundImage:
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2000&auto=format&fit=crop",
    headlineTop: "ঐতিহ্যবাহী স্বাদের ছোঁয়ায়,",
    headlineBottom: "খাবারের রাজ্যে স্বাগতম!",
    subheadlinePrefix:
      "পরিবার ও বন্ধুদের সাথে সেরা ডাইনিং অভিজ্ঞতার জন্য বাফেট কিংডম দিচ্ছে ",
    subheadlineBrand: brandName,
    subheadlineSuffix: " আনলিমিটেড খাবার ও আতিথেয়তার প্রতিশ্রুতি।",
    menuCta: "বাফেট মেনু",
    orderCta: "টেবিল বুক করুন",
  },
  home: {
    featuredSectionLabel: "বাফেট স্পেশাল",
    featuredSectionTitle: "জনপ্রিয় বাফেট আইটেম",
    featuredItems,
    whyChooseSectionLabel: brandTeam,
    whyChooseSectionTitle: "আমাদের বিশেষত্ব",
    features: [
      {
        icon: "🍱",
        title: "৭০+ আইটেম",
        description: "বিশাল মেনু থেকে বেছে নিন আপনার প্রিয় সব খাবার",
      },
      {
        icon: "👑",
        title: "লাইভ কিচেন",
        description: "আপনার চোখের সামনে তৈরি হওয়া টাটকা কাবাব ও দোসা",
      },
      {
        icon: "🍰",
        title: "ডেজার্ট বার",
        description: "মিষ্টি প্রেমীদের জন্য রয়েছে হরেক পদের কেক ও পুডিং",
      },
    ],
    ctaTitle: "বাফেট খেতে মন চাইছে?",
    ctaText: "আজই আপনার টেবিল বুক করুন এবং আনলিমিটেড স্বাদ উপভোগ করুন",
    ctaButton: "বুকিং দিন",
    menuButton: "মেনু দেখুন",
    orderButton: "বুকিং",
    viewAllButton: "সব আইটেম দেখুন",
  },
  menu: {
    headerLabel: "বাফেট ও মেনু",
    title: "খাবার তালিকা",
    subtitle: "বাফেট থেকে শুরু করে আলা-কার্টে—সবই আছে আমাদের সংগ্রহে",
    categories: [
      { id: "all", label: "সব" },
      { id: "buffet", label: "বাফেট প্যাকেজ" },
      { id: "starter", label: "স্টার্টার" },
      { id: "main", label: "মেইন ডিশ" },
      { id: "dessert", label: "মিষ্টি ও ডেজার্ট" },
    ],
    items: menuItems,
    popularLabel: "হট ডিল",
    orderButton: "বুকিং",
    specialNotePrefix: "📞 বুকিংয়ের জন্য কল করুন:",
    priceNote: "* বাফেট প্রাইস ভ্যাট ও ট্যাক্স ব্যতীত হতে পারে।",
  },
  blog: {
    headerLabel: "আমাদের ব্লগ",
    title: "খাবার ও জীবন",
    subtitle: "খাবারের পেছনের গল্প ও স্বাস্থ্যকর অভ্যাসের টিপস",
    posts: blogPosts,
    newsletterTitle: "অফার মিস করতে না চাইলে",
    newsletterText: "আমাদের বাফেট ডিসকাউন্ট ও উৎসবের অফারগুলো পেতে জয়েন করুন",
    newsletterPlaceholder: "আপনার ইমেইল",
    newsletterButton: "সাবস্ক্রাইব",
  },
  contact: {
    headerLabel: "বুকিং ও যোগাযোগ",
    title: "টেবিল",
    titleAccent: "বুকিং",
    subtitle: "আপনার স্পেশাল দিনটি আমাদের সাথে উদযাপন করুন।",
    infoTitle: "রেস্টুরেন্টের তথ্য",
    orderFormTitle: "বুকিং ফর্ম",
    orderFormSubtitle: "নিচের তথ্যগুলো দিয়ে আপনার সিট নিশ্চিত করুন",
    whatsappCta: "WhatsApp বুকিং",
    formLabels: {
      name: "আপনার নাম",
      phone: "ফোন নম্বর",
      address: "মানুষের সংখ্যা (অতিথি)",
      item: "পছন্দনীয় প্যাকেজ",
    },
    formPlaceholders: {
      name: "নাম",
      phone: "01XXXXXXXXX",
      address: "যেমন: ৫ জন",
      item: "যেমন: ডিনার বাফেট",
    },
    infoCards: [
      {
        title: "ঠিকানা",
        details: ["আপনার রেস্টুরেন্টের ঠিকানা", "ঢাকা, বাংলাদেশ"],
      },
      {
        title: "ফোন নম্বর",
        details: [primaryPhone.display],
        links: [primaryPhone.href],
      },
      {
        title: "সময়",
        details: ["দুপুর ১২:৩০ - রাত ১১:০০", "প্রতিদিন খোলা"],
      },
    ],
    mapTitle: `${brandNameLatin} Location`,
    successMessage: "বুকিং রিকোয়েস্ট সফল! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করছি।",
    validationMessage: "সবগুলো তথ্য দিন",
    errorMessage: "বুকিং নিতে সমস্যা হয়েছে",
    processingText: "অপেক্ষা করুন...",
    confirmText: "বুকিং নিশ্চিত করুন",
    redirectDelayMs: 2000,
    submitNote: "বুকিং দেওয়ার পর আমাদের প্রতিনিধি আপনাকে কনফার্মেশন কল দেবেন",
  },
  admin: {
    brandTitle: brandName,
    panelLabel: "অ্যাডমিন প্যানেল",
    loginPasswordRequired: "পাসওয়ার্ড",
    loginTitle: brandName,
    loginSubtitle: "অ্যাডমিন",
    passwordLabel: "পাসওয়ার্ড",
    passwordPlaceholder: "...",
    loginButton: "লগইন",
    loginLoading: "অপেক্ষা করুন",
    backToWebsite: "ওয়েবসাইট",
    dashboardBrandLabel: brandName,
    dashboardSubtitle: "ম্যানেজমেন্ট",
    ordersTabLabel: "বুকিং লিস্ট",
    menuTabLabel: "মেনু আইটেম",
    ordersHeader: "নতুন বুকিং",
    menuHeader: "মেনু এডিট",
    addItemButton: "যোগ করুন",
    addItemMobileButton: "+",
    logoutButton: "লগআউট",
    loadingText: "...",
    emptyOrdersText: "বুকিং নেই",
    emptyMenuText: "মেনু খালি",
    orderDeleteConfirm: "ডিলিট করবেন?",
    menuDeleteConfirm: "আইটেম ডিলিট?",
    orderDeleteSuccess: "ডিলিট হয়েছে",
    menuDeleteSuccess: "সফল",
    orderDeleteFailure: "ব্যর্থ",
    menuDeleteFailure: "ব্যর্থ",
    statusUpdated: "আপডেট সফল",
    statusUpdateFailed: "আপডেট ব্যর্থ",
    logoutSuccess: "সফল",
    orderListTitle: "বুকিং তালিকা",
    menuManagementTitle: "মেনু কন্ট্রোল",
    orderActions: {
      confirm: "কনফার্ম",
      cancel: "বাতিল",
      preparing: "প্রসেসিং",
      delivered: "সফল",
      delete: "ডিলিট",
    },
    statusLabels: {
      pending: "পেন্ডিং",
      confirmed: "কনফার্মড",
      preparing: "তৈরি হচ্ছে",
      delivered: "সফল",
      cancelled: "বাতিল",
    },
    menuModal: {
      addTitle: "নতুন আইটেম",
      editTitle: "আইটেম পরিবর্তন",
      nameLabel: "নাম",
      categoryLabel: "ক্যাটেগরি",
      priceLabel: "দাম",
      sizeLabel: "পরিমাণ",
      descriptionLabel: "বর্ণনা",
      imageLabel: "ইমেজ লিঙ্ক",
      popularLabel: "পপুলার আইটেম",
      categoryOptions: {
        buffet: "বাফেট",
        starter: "স্টার্টার",
        main: "মেইন ডিশ",
        dessert: "ডেজার্ট",
      },
      namePlaceholder: "আইটেমের নাম",
      pricePlaceholder: "৫০০",
      sizePlaceholder: "১:১",
      descriptionPlaceholder: "সুস্বাদু...",
      imagePlaceholder: "URL",
      submitNew: "সেভ",
      submitEdit: "আপডেট",
      submitting: "...",
      validationError: "তথ্য দিন",
      successNew: "সফল",
      successEdit: "সফল",
      error: "ভুল হয়েছে",
    },
  },
};
