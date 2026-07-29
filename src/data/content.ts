// ============================================================================
// content.ts — 全站中英文文案中枢
// 每条文案都是 { en, zh } 结构；语言切换时前端根据当前语言取对应字段。
// 日常改文字只需改这一个文件。
// ============================================================================

export type Bi = { en: string; zh: string };

// ---- 站点基础信息 / 联系方式 -------------------------------------------------
export const site = {
  name: { en: 'Sourcepoint Wellness', zh: '源真中医' },
  tagline: {
    en: 'Traditional Chinese Medicine · Acupuncture · Herbal Medicine · Wellness Education',
    zh: '中医诊疗 · 针灸治疗 · 中药调理 · 健康教育',
  },
  phone: '604-722-9799',
  email: 'yuand8899@gmail.com',
  wechat: 'YMLUCKY999',
  region: {
    en: 'White Rock / South Surrey, British Columbia, Canada',
    zh: '加拿大 BC 省 White Rock / South Surrey',
  },
  legalName: {
    en: 'Sourcepoint Wellness Inc.',
    zh: '源真中医',
  },
};

// ---- 导航 -------------------------------------------------------------------
export const nav: { id: string; label: Bi }[] = [
  { id: 'about', label: { en: 'About', zh: '关于我们' } },
  { id: 'founder', label: { en: 'Founder', zh: '创始人' } },
  { id: 'services', label: { en: 'Services', zh: '服务项目' } },
  { id: 'modalities', label: { en: 'Treatments', zh: '治疗方式' } },
  { id: 'education', label: { en: 'Education', zh: '健康教育' } },
  { id: 'vision', label: { en: 'Vision', zh: '我们的愿景' } },
  { id: 'contact', label: { en: 'Contact', zh: '联系我们' } },
];

// ---- Hero -------------------------------------------------------------------
export const hero = {
  title: { en: 'Sourcepoint Wellness', zh: '源真中医' },
  subtitle: {
    en: 'Bringing the Wisdom of Traditional Chinese Medicine to Modern Families and Communities',
    zh: '传承中医智慧，服务现代家庭与社区',
  },
  body: {
    en: 'At Sourcepoint Wellness, we believe health is more than the absence of illness — it is a state of balance, vitality, and well-being. We are committed to helping individuals and families achieve optimal health through the wisdom of Traditional Chinese Medicine.',
    zh: '源真中医相信，健康不仅是没有疾病，更是身心平衡、充满活力与幸福感的状态。我们致力于通过中医智慧帮助个人与家庭实现最佳健康状态。',
  },
  values: {
    en: 'Evidence-Informed · Patient-Centered · Rooted in Tradition',
    zh: '循证实践 · 以患者为中心 · 传承中医精髓',
  },
  ctaBook: { en: 'Book a Consultation', zh: '预约咨询' },
  ctaContact: { en: 'Contact Us', zh: '联系我们' },
};

// ---- About ------------------------------------------------------------------
export const about = {
  eyebrow: { en: 'About Us', zh: '关于我们' },
  missionTitle: { en: 'Our Mission', zh: '我们的使命' },
  mission: [
    {
      en: 'At Sourcepoint Wellness, our mission is to integrate the wisdom of Traditional Chinese Medicine with modern healthcare understanding to provide compassionate, personalized, and evidence-informed care.',
      zh: '源真中医致力于将传统中医智慧与现代健康理念相结合，为患者提供专业、个性化及循证实践的健康服务。',
    },
    {
      en: 'We are dedicated to helping individuals and families restore balance, improve health, prevent illness, and enhance quality of life.',
      zh: '我们帮助个人与家庭恢复平衡、改善健康、预防疾病，并提升整体生活品质。',
    },
  ] as Bi[],
  philosophyTitle: { en: 'Our Philosophy', zh: '我们的理念' },
  philosophy: [
    {
      en: 'Traditional Chinese Medicine views the human body as an interconnected whole.',
      zh: '中医认为人体是一个有机整体。',
    },
    {
      en: 'We believe true healing comes from understanding and addressing the root causes of health concerns rather than simply managing symptoms.',
      zh: '我们相信真正的治疗不仅是缓解症状，更是发现并解决健康问题的根本原因。',
    },
    {
      en: "Our approach focuses on prevention, balance, and supporting the body's natural ability to heal.",
      zh: '我们的理念强调预防、平衡与激发人体自身的修复能力。',
    },
  ] as Bi[],
};

// ---- Founder ----------------------------------------------------------------
export const founder = {
  eyebrow: { en: 'Meet Our Founder', zh: '创始人介绍' },
  name: { en: 'Yuan Ding (Yolanda Ding)', zh: '丁媛（Yolanda Ding）' },
  credentials: [
    {
      en: 'Registered Traditional Chinese Medicine Practitioner (BC)',
      zh: '加拿大 BC 省注册中医师',
    },
    { en: 'Registered Acupuncturist (BC)', zh: '加拿大 BC 省注册针灸师' },
    {
      en: 'Formerly Licensed Traditional Chinese Medicine Physician in China',
      zh: '曾获中国中医执业医师资格',
    },
  ] as Bi[],
  bio: [
    {
      en: 'Yolanda Ding is a Registered Traditional Chinese Medicine Practitioner and Registered Acupuncturist in British Columbia, Canada. She was formerly licensed as a Traditional Chinese Medicine Physician in China and completed more than eight years of formal medical and Traditional Chinese Medicine education.',
      zh: '丁媛女士为加拿大 BC 省注册中医师及注册针灸师，曾获中国中医执业医师资格。她在中国完成八年以上系统医学及中医专业教育。',
    },
    {
      en: 'With over twenty years of clinical, teaching, and healthcare education experience, she brings a unique blend of traditional knowledge and modern healthcare understanding to her practice. Coming from a family with a multi-generational background in Traditional Chinese Medicine, Yolanda represents the third generation of TCM practitioners in her family.',
      zh: '她拥有二十余年中医临床、教学及健康教育经验。丁媛女士出身于中医世家，为家族第三代中医传承人，自幼受到中医文化熏陶，对中医事业怀有深厚热爱与使命感。',
    },
    {
      en: 'In addition to clinical practice, she has dedicated many years to Traditional Chinese Medicine education and international healthcare training. She currently serves as a college instructor and clinical supervisor in British Columbia and has trained numerous healthcare professionals both in Canada and internationally.',
      zh: '除临床工作外，她长期从事中医教育及国际医疗培训工作，目前担任加拿大中医学院课程讲师及临床指导老师，培养了众多国内外医疗专业人士。',
    },
    {
      en: 'Her mission is to help individuals and families achieve lasting health through a balanced, personalized, and evidence-informed approach to wellness.',
      zh: '她致力于通过平衡、个性化及循证实践的中医调理方式，帮助个人与家庭实现长期健康。',
    },
  ] as Bi[],
  expertiseTitle: { en: 'Areas of Expertise', zh: '专业领域' },
  expertise: [
    { en: 'Acupuncture', zh: '针灸治疗' },
    { en: 'Chinese Herbal Medicine', zh: '中药调理' },
    { en: 'Pain Management', zh: '疼痛管理' },
    { en: 'Sleep Disorders', zh: '睡眠障碍' },
    { en: 'Digestive Health', zh: '消化健康' },
    { en: 'Stress & Emotional Wellness', zh: '压力与情绪调节' },
    { en: 'Cosmetic Acupuncture', zh: '美容针灸' },
    { en: 'Weight Management', zh: '体重管理' },
    { en: "Women's Health", zh: '女性健康' },
    { en: 'Fertility Support', zh: '生育支持' },
    { en: 'Pediatric Care', zh: '儿童健康' },
    { en: 'Holistic Wellness', zh: '整体健康管理' },
  ] as Bi[],
};

// ---- Services (卡片，含图标 key) ---------------------------------------------
export const servicesEyebrow = { en: 'Our Services', zh: '服务项目' };
export const services: { icon: string; title: Bi; body: Bi }[] = [
  {
    icon: 'pain',
    title: { en: 'Pain Management', zh: '疼痛管理' },
    body: {
      en: 'Neck Pain · Shoulder Pain · Back Pain · Sciatica · Arthritis · Sports Injuries · Headaches & Migraines',
      zh: '颈肩腰腿痛 · 坐骨神经痛 · 关节疼痛 · 运动损伤 · 头痛偏头痛',
    },
  },
  {
    icon: 'massage',
    title: { en: 'TCM Massage & Acupressure', zh: '中医经络推拿与养生调理' },
    body: {
      en: 'Massage and acupressure techniques to promote circulation, relieve pain, reduce muscle tension, and improve mobility. Suitable for muscle tension, neck/shoulder/back pain, sports recovery, fatigue, and general wellness.',
      zh: '通过经络推拿、穴位调理及软组织手法促进气血循环、缓解疼痛、放松肌肉、改善身体功能。适用于肌肉紧张、颈肩腰背疼痛、疲劳恢复、运动损伤康复、亚健康调理及日常养生保健。',
    },
  },
  {
    icon: 'sleep',
    title: { en: 'Sleep & Stress Management', zh: '睡眠与压力管理' },
    body: {
      en: 'Insomnia · Stress · Anxiety · Fatigue · Emotional Wellness',
      zh: '失眠 · 焦虑 · 压力 · 疲劳 · 情绪调节',
    },
  },
  {
    icon: 'digest',
    title: { en: 'Digestive Health', zh: '消化健康' },
    body: {
      en: 'Indigestion · Bloating · Acid Reflux · Digestive Imbalance',
      zh: '消化不良 · 腹胀 · 胃食管反流 · 胃肠功能失调',
    },
  },
  {
    icon: 'women',
    title: { en: "Women's Health & Fertility", zh: '女性健康与生育支持' },
    body: {
      en: 'Menstrual Health · Fertility Support · Pregnancy Wellness · Postpartum Recovery · Menopause Care',
      zh: '月经调理 · 备孕支持 · 孕期保健 · 产后恢复 · 更年期调理',
    },
  },
  {
    icon: 'child',
    title: { en: 'Pediatric Care & Tuina', zh: '儿童健康与小儿推拿' },
    body: {
      en: 'Immunity · Digestion · Sleep · Development Support',
      zh: '免疫力调理 · 消化调理 · 睡眠调理 · 生长发育支持',
    },
  },
  {
    icon: 'beauty',
    title: { en: 'Cosmetic Acupuncture', zh: '美容针灸' },
    body: {
      en: 'Natural Facial Rejuvenation · Holistic Beauty Support',
      zh: '自然美容 · 面部年轻化 · 健康美学管理',
    },
  },
  {
    icon: 'weight',
    title: { en: 'Weight Management', zh: '体重管理' },
    body: {
      en: 'Personalized Weight Management & Lifestyle Guidance',
      zh: '个性化体重管理与健康生活方式指导',
    },
  },
  {
    icon: 'consult',
    title: { en: 'TCM Consultation', zh: '中医问诊' },
    body: {
      en: 'Comprehensive Traditional Chinese Medicine Assessment',
      zh: '中医整体辨证评估',
    },
  },
  {
    icon: 'herb',
    title: { en: 'Chinese Herbal Medicine', zh: '中药调理' },
    body: {
      en: 'Personalized Herbal Recommendations',
      zh: '个性化中药调理方案',
    },
  },
];

// ---- Treatment Modalities ---------------------------------------------------
export const modalitiesEyebrow = { en: 'Treatment Modalities', zh: '治疗方式' };
export const modalities: Bi[] = [
  { en: 'Acupuncture', zh: '针灸' },
  { en: 'Chinese Herbal Medicine', zh: '中药调理' },
  { en: 'Acupressure & Tuina', zh: '经络推拿' },
  { en: 'Pediatric Tuina', zh: '小儿推拿' },
  { en: 'Moxibustion', zh: '艾灸' },
  { en: 'Cupping Therapy', zh: '拔罐' },
  { en: 'Gua Sha', zh: '刮痧' },
  { en: 'Lifestyle & Wellness Guidance', zh: '健康指导' },
];

// ---- Wellness Education -----------------------------------------------------
export const educationEyebrow = { en: 'Wellness Education', zh: '健康教育' };
export const education: Bi[] = [
  { en: 'Community Health Lectures', zh: '社区健康讲座' },
  { en: 'Traditional Chinese Medicine Courses', zh: '中医课程' },
  { en: 'Pediatric Tuina Training', zh: '小儿推拿培训' },
  { en: 'First Aid Education', zh: '急救培训' },
  { en: 'Continuing Education Programs', zh: '专业继续教育' },
  { en: 'International Educational Collaboration', zh: '国际教育合作' },
];

// ---- Why Choose Us ----------------------------------------------------------
export const whyEyebrow = { en: 'Why Choose Sourcepoint Wellness', zh: '为什么选择源真中医' };
export const why: Bi[] = [
  {
    en: 'Registered TCM Practitioner & Acupuncturist in BC',
    zh: 'BC 省注册中医师及注册针灸师',
  },
  { en: 'Over 20 Years of Clinical and Teaching Experience', zh: '20 余年临床及教学经验' },
  {
    en: 'Formerly Licensed TCM Physician in China',
    zh: '曾获中国中医执业医师资格',
  },
  {
    en: 'College Instructor & Clinical Supervisor in BC',
    zh: '加拿大中医学院课程讲师及临床指导老师',
  },
  { en: 'Third Generation TCM Family Heritage', zh: '第三代中医世家传承' },
  { en: 'International Healthcare Training Experience', zh: '国际医疗培训经验' },
  { en: 'Evidence-Informed Practice', zh: '循证实践理念' },
  { en: 'Personalized Treatment Plans', zh: '个性化调理方案' },
  { en: 'English & Chinese Services', zh: '中英文双语服务' },
];

// ---- Vision -----------------------------------------------------------------
export const vision = {
  eyebrow: { en: 'Our Vision', zh: '我们的愿景' },
  body: {
    en: 'To become a trusted center for Traditional Chinese Medicine, Acupuncture, Wellness Education, and Community Health Promotion while building bridges between Eastern healing wisdom and modern healthcare.',
    zh: '成为值得信赖的中医诊疗中心、针灸健康中心、健康教育平台及社区健康促进中心，搭建东方医学智慧与现代医疗之间的桥梁。',
  },
  pillars: [
    { en: 'Traditional Chinese Medicine', zh: '中医诊疗中心' },
    { en: 'Acupuncture', zh: '针灸健康中心' },
    { en: 'Wellness Education', zh: '健康教育平台' },
    { en: 'Community Health Promotion', zh: '社区健康促进' },
  ] as Bi[],
};

// ---- Contact ----------------------------------------------------------------
export const contact = {
  eyebrow: { en: 'Contact Us', zh: '联系我们' },
  ctaTitle: {
    en: 'Ready to Begin Your Wellness Journey?',
    zh: '开启您的健康之旅',
  },
  ctaBody: {
    en: 'Your journey toward better health starts here. Experience a personalized approach to health and wellness through the wisdom of Traditional Chinese Medicine.',
    zh: '您的健康旅程从这里开始。通过传统中医智慧，体验个性化的健康管理方案。',
  },
  emailBtn: { en: 'Email Us', zh: '发送邮件' },
  callBtn: { en: 'Call Now', zh: '电话联系' },
  bookBtn: { en: 'Book a Consultation Today', zh: '立即预约咨询' },
  labels: {
    address: { en: 'Location', zh: '地址' },
    phone: { en: 'Phone', zh: '电话' },
    email: { en: 'Email', zh: '邮箱' },
    wechat: { en: 'WeChat', zh: '微信' },
  },
};

// ---- Footer / 免责声明 -------------------------------------------------------
export const footer = {
  rights: {
    en: '© 2026 Sourcepoint Wellness. All rights reserved.',
    zh: '© 2026 源真中医. 版权所有。',
  },
  disclaimer: {
    en: 'This website is for informational purposes only and does not constitute medical advice.',
    zh: '本网站仅供参考，不构成医疗建议。',
  },
};

// ---- 语言切换按钮文案 --------------------------------------------------------
export const langToggle = {
  toEn: 'EN',
  toZh: '中',
  aria: { en: 'Switch to Chinese', zh: '切换到英文' },
};
