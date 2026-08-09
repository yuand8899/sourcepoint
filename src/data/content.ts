// ============================================================================
// content.ts — 全站中英文文案中枢
// ----------------------------------------------------------------------------
// 命名约定（便于日后维护）：
//   • 每个页面区块导出一个对象，区块标题统一放在 `heading: { eyebrow, title, sub }`。
//   • 变量/字段名尽量与其“实际内容”一致，而非布局角色。
//   • 所有双语文案统一用 Bi = { en, zh }。
// ============================================================================

export type Bi = { en: string; zh: string };

// 区块小标题的统一结构：eyebrow（上方小字）+ title（主标题）+ sub（副说明，可选）
export type SectionHeading = { eyebrow: Bi; title: Bi; sub?: Bi };

// ---- 站点基础信息（页头、页脚、联系方式共用） ----
export const site = {
  name: { en: 'SourcePoint Wellness', zh: '源真中医' },
  // Logo 图片路径（页头、页脚、Hero 共用）。以后换 Logo 只改这一行。
  logo: '/images/logo.png',
  logoAlt: { en: 'SourcePoint Wellness logo', zh: '源真中医 Logo' },
  tagline: {
    en: 'Traditional Chinese Medicine · Acupuncture · Herbal Medicine · Wellness Education',
    zh: '针灸 · 中药 · 推拿 · 健康管理',
  },
  phone: '604-722-9799',
  email: 'info@sourcepointacu.com',
  wechatId: 'YMLUCKY999',
  facebook: 'https://www.facebook.com/yolanda.fang.108',
  // 微信二维码图片路径。留空 '' 时前端回退显示微信号文字。
  wechatQr: '/images/wechat-qr.png',
  address: {
    en: 'Unit 203 1548 Johnston Road, White Rock, BC, V4B 3Z7',
    zh: 'Unit 203 1548 Johnston Road, White Rock, BC, V4B 3Z7',
  },
  legalName: {
    en: 'SourcePoint Wellness',
    zh: '源真中医',
  },
};

// ---- 顶部导航 ----
export const nav: { id: string; label: Bi }[] = [
  { id: 'about', label: { en: 'About', zh: '关于我们' } },
  { id: 'practitioner', label: { en: 'Yolanda', zh: '丁源医师' } },
  { id: 'services', label: { en: 'Services', zh: '服务项目' } },
  { id: 'insurance', label: { en: 'Insurance', zh: '保险结算' } },
  { id: 'contact', label: { en: 'Contact', zh: '联系我们' } },
];

// ---- HERO（首屏） ----
export const hero = {
  // Hero 配图路径（右侧分栏图）。以后换图只改这一行。
  image: '/images/hero.jpg',
  imageAlt: {
    en: 'Calm natural setting representing balance and wellness',
    zh: '象征平衡与健康的自然场景',
  },
  // 定位标语（显示在主标题上方的小字）
  tagline: {
    en: 'Trusted Acupuncture Clinic in White Rock & South Surrey',
    zh: '白石 · 南素里值得信赖的针灸中医诊所',
  },
  title: { en: 'Acupuncture · Chinese Herbal Medicine · Tuina Therapy', zh: '针灸 · 中药 · 推拿' },
  subtitle: {
    en: 'Helping You Feel Better, Naturally.',
    zh: '回归平衡，自然健康',
  },
  // 首屏介绍段落（英文 2 段、中文 3 段）
  intro: {
    en: [
      'Personalized acupuncture and Traditional Chinese Medicine designed to relieve pain, restore balance, and support your overall health. Through individualized, evidence-informed care, we help patients with women’s health, pediatric care, digestive health, stress management, sports injuries, and cosmetic acupuncture.',
      'At SourcePoint Wellness, every treatment is tailored to your unique needs, with a focus on lasting results—not just temporary symptom relief.',
    ],
    zh: [
      '在源真中医，我们融合传统中医智慧与现代循证临床理念，为每一位患者提供安全、专业、个性化的中医诊疗服务。',
      '我们坚持辨证施治、治病求本，根据您的体质、症状及健康目标，制定专属于您的治疗方案，而不仅仅着眼于症状本身。',
      '无论是疼痛管理、妇科调理、儿科保健、消化系统问题、压力管理、运动损伤，还是美容针灸，我们都致力于帮助您恢复身体平衡，促进长期健康，让您由内而外感受身心的改变。',
    ],
  },
  // 首屏亮点（intro 下方、按钮上方的 4 个对勾要点，2×2 网格）
  highlights: [
    { en: '20+ Years of Clinical Experience', zh: '二十余年临床经验' },
    { en: 'Registered R.TCM.P. & R.Ac.', zh: '加拿大注册中医师（R.TCM.P.）及注册针灸师（R.Ac.）' },
    { en: 'Individualized Treatment Plans', zh: '个性化治疗方案' },
    { en: 'ICBC · WorkSafeBC · MSP · Extended Health Plans', zh: 'ICBC、WorkSafeBC、MSP（适用项目）及各大商业保险' },
  ] as Bi[],
  // 叠加在右侧图片上的寄语（中文四行、英文三行）
  imageQuote: {
    zh: ['源于初心', '守于至真', '寻其根本', '扶助正气'],
    en: ['Find the Root', 'Restore Balance', 'Live Well.'],
  },
  ctaBooking: { en: 'Book a Consultation', zh: '预约咨询' },
  ctaContact: { en: 'Contact Us', zh: '联系我们' },
};

// ---- 为什么选择源真中医（4 张特色卡片） ----
export const whyChoose = {
  heading: {
    eyebrow: { en: 'Why Choose SourcePoint', zh: '为什么选择源真中医' },
    title: {
      en: 'Personalized Care. Professional Expertise. Compassionate Treatment.',
      zh: '守正求本 · 辨证施治 · 用心守护',
    },
    sub: {
      en: 'Healthcare is personal. Your treatment should be too.',
      zh: '医疗不仅是治疗疾病，更是理解每一位患者。',
    },
  } as SectionHeading,
  cards: [
    {
      icon: 'plus',
      title: { en: '20+ Years of Clinical Experience', zh: '二十余年临床经验' },
      body: {
        en: 'From hospital practice in China to patient care in British Columbia, our focus has always been helping people recover, heal, and live healthier lives.',
        zh: '从中国医院临床，到加拿大执业，二十余年始终专注于帮助患者恢复健康、改善生活品质。',
      },
    },
    {
      icon: 'badge',
      title: { en: 'Registered & Licensed in BC', zh: '加拿大注册执业' },
      body: {
        en: 'Receive care from a Registered Traditional Chinese Medicine Practitioner and Registered Acupuncturist.',
        zh: '严格遵循BC省专业医疗规范，为患者提供安全、规范的治疗。',
      },
    },
    {
      icon: 'evidence',
      title: { en: 'Evidence-Informed Care', zh: '循证与传统相结合' },
      body: {
        en: 'Traditional wisdom is integrated with current clinical evidence and patient-centred practice.',
        zh: '尊重中医传统，同时结合现代医学研究成果与患者需求。',
      },
    },
    {
      icon: 'heart',
      title: { en: 'Individualized Treatment', zh: '个性化治疗' },
      body: {
        en: 'Your treatment plan is designed around your health concerns, goals, and progress.',
        zh: '根据您的健康状况、生活方式及治疗目标制定专属方案。',
      },
    },
  ] as { icon: string; title: Bi; body: Bi }[],
};

// ---- 医师介绍（Yolanda / 丁源医师） ----
export const practitioner = {
  heading: {
    eyebrow: { en: 'About Yolanda', zh: '关于丁源医师' },
    title: { en: 'Meet Your Practitioner', zh: '认识您的治疗师' },
  } as SectionHeading,
  name: { en: 'Yolanda Ding, R.TCM.P. & R.Ac.', zh: '丁源 Yolanda Ding' },
  credentials: [
    { en: 'Registered TCM Practitioner (BC)', zh: '加拿大注册中医师（R.TCM.P.）' },
    { en: 'Registered Acupuncturist (BC)', zh: '加拿大注册针灸师（R.Ac.）' },
    { en: 'Former Licensed TCM Physician (China)', zh: '中华人民共和国执业中医师' },
    { en: 'College Instructor & Clinical Educator', zh: '加拿大中医学院讲师及临床导师' },
  ] as Bi[],
  bio: [
    {
      en: 'Raised in a third-generation Traditional Chinese Medicine family, Yolanda developed a deep appreciation for holistic healthcare from an early age. She earned a Master’s degree in Traditional Chinese Medicine after completing more than eight years of formal university education in China, followed by years of hospital and clinical experience.',
      zh: '丁源医师出生于中医世家，是第三代中医传承者。自幼耳濡目染中医文化，她对传统医学产生了浓厚兴趣，并将中医作为毕生追求。她完成了八年以上系统的中医学教育，获得中医硕士学位，随后长期从事临床诊疗、医学教育及中医教学工作。',
    },
    {
      en: 'Today, with over 20 years of healthcare experience and professional practice in Canada, she combines deep traditional knowledge with modern, evidence-informed care to help patients achieve lasting health. She believes lasting health comes from understanding the root cause of illness — not simply managing symptoms.',
      zh: '拥有二十余年医疗健康领域经验，丁医师现于加拿大从事中医临床及教学工作。她将传统中医的整体观、辨证论治理念，与现代循证医学相结合，坚持以患者为中心，为每位患者提供个性化、循证且富有整体观的治疗方案。她始终相信，真正的治疗，不只是消除症状，而是帮助身体恢复平衡，让健康由内而外自然回归。',
    },
    {
      en: '“Helping people feel better is more than my profession — it’s my lifelong commitment.”',
      zh: '“帮助更多人恢复健康，不仅是我的职业，更是我一生坚持的使命。”',
    },
  ] as Bi[],
};

// ---- 服务项目（9 项，纯文字卡片） ----
export const services = {
  heading: {
    eyebrow: { en: 'Services', zh: '服务项目' },
    title: {
      en: 'Comprehensive Care for Every Stage of Life',
      zh: '全生命周期健康管理',
    },
    sub: {
      en: 'Whether you’re recovering from pain, managing a chronic condition, or investing in long-term wellness, we’re here to help.',
      zh: '无论您希望缓解疼痛、改善慢性疾病，还是追求长期健康管理，我们都愿意陪伴您。',
    },
  } as SectionHeading,
  items: [
    {
      icon: 'pain',
      title: { en: 'Pain Management', zh: '疼痛治疗' },
      body: {
        en: 'Neck pain · Back pain · Shoulder pain · Arthritis · Sciatica · Headaches & migraines · Joint pain',
        zh: '颈肩腰腿痛 · 关节炎 · 坐骨神经痛 · 头痛及偏头痛 · 关节肌肉疼痛等',
      },
    },
    {
      icon: 'sports',
      title: { en: 'Sports Injuries', zh: '运动损伤' },
      body: {
        en: 'Helping active individuals recover from sports injuries, improve mobility, reduce pain, and return to the activities they enjoy.',
        zh: '帮助运动爱好者及日常活动受伤患者缓解疼痛、恢复功能、尽快回归工作、运动和日常生活。',
      },
    },
    {
      icon: 'women',
      title: { en: "Women's Health", zh: '女性健康' },
      body: {
        en: 'Menstrual concerns · Fertility support · Pregnancy care · Menopause',
        zh: '月经调理 · 备孕支持 · 孕期保健 · 产后恢复 · 更年期调理',
      },
    },
    {
      icon: 'sleep',
      title: { en: 'Stress, Anxiety & Sleep', zh: '压力、焦虑与睡眠' },
      body: {
        en: 'Support for emotional well-being, better sleep, and improved resilience.',
        zh: '帮助缓解压力、焦虑及睡眠问题，促进身心平衡。',
      },
    },
    {
      icon: 'beauty',
      title: { en: 'Cosmetic Acupuncture', zh: '美容针灸' },
      body: {
        en: 'A natural approach to healthier-looking skin and facial rejuvenation.',
        zh: '通过自然、安全的方式改善肤质，促进胶原蛋白生成，帮助面部恢复健康光泽。',
      },
    },
    {
      icon: 'digest',
      title: { en: 'Digestive Health', zh: '消化系统调理' },
      body: {
        en: 'Bloating · IBS · Acid reflux · Digestive discomfort',
        zh: '腹胀 · 胃食管反流 · 肠易激综合征（IBS） · 消化功能紊乱',
      },
    },
    {
      icon: 'child',
      title: { en: 'Pediatric Care', zh: '儿童健康' },
      body: {
        en: 'Gentle Traditional Chinese Medicine and Pediatric Tuina for children.',
        zh: '采用温和中医小儿推拿及调理方式，帮助儿童健康成长。',
      },
    },
    {
      icon: 'herb',
      title: { en: 'Chinese Herbal Medicine', zh: '中药调理' },
      body: {
        en: 'Customized herbal prescriptions based on Traditional Chinese Medicine diagnosis.',
        zh: '依据中医辨证，制定个性化中药调理方案。',
      },
    },
    {
      icon: 'massage',
      title: { en: 'Tuina Therapy (Acupressure)', zh: '中医推拿（Tuina）' },
      body: {
        en: 'Hands-on therapy to improve mobility, relieve muscle tension, and restore function.',
        zh: '运用传统中医推拿手法，帮助缓解肌肉紧张、减轻疼痛、改善关节活动能力，促进身体恢复。',
      },
    },
  ] as { icon: string; title: Bi; body: Bi }[],
};

// ---- 初次就诊流程（4 步骤） ----
export const firstVisit = {
  heading: {
    eyebrow: { en: 'What to Expect', zh: '初次就诊流程' },
    title: { en: 'Your First Visit Made Simple', zh: '轻松、安心地开始治疗' },
  } as SectionHeading,
  steps: [
    {
      step: '01',
      title: { en: 'Consultation', zh: '初诊咨询' },
      body: {
        en: 'We’ll take the time to understand your health concerns, medical history, and goals.',
        zh: '详细了解您的健康状况、病史及治疗目标。',
      },
    },
    {
      step: '02',
      title: { en: 'Assessment', zh: '中医辨证评估' },
      body: {
        en: 'A Traditional Chinese Medicine assessment helps us identify patterns and underlying imbalances.',
        zh: '通过中医辨证分析身体整体状态及失衡原因。',
      },
    },
    {
      step: '03',
      title: { en: 'Personalized Treatment', zh: '个性化治疗' },
      body: {
        en: 'Your treatment may include acupuncture, herbal medicine, cupping, moxibustion, gua sha, or Tuina therapy.',
        zh: '治疗可能包括针灸、中药、拔罐、艾灸、刮痧及中医推拿等。',
      },
    },
    {
      step: '04',
      title: { en: 'Wellness Plan', zh: '健康管理建议' },
      body: {
        en: 'You’ll leave with personalized recommendations to support your health between visits.',
        zh: '提供饮食、生活方式及后续护理建议，帮助获得稳定持久、更稳定的疗效。',
      },
    },
  ] as { step: string; title: Bi; body: Bi }[],
};

// ---- 保险及直接结算（浅色胶囊标签） ----
export const insurance = {
  heading: {
    eyebrow: { en: 'Insurance & Direct Billing', zh: '医疗保险' },
    title: { en: 'Making Care Easier to Access', zh: '商业保险与直接报销' },
  } as SectionHeading,
  intro: {
    en: 'We work with many extended health insurance providers and offer direct billing whenever available.',
    zh: '我们与多家商业保险公司合作，并可为符合条件的保险公司提供 Direct Billing（直接报销）服务。',
  },
  providers: [
    { name: { en: 'ICBC', zh: 'ICBC' }, note: { en: '', zh: '' } },
    { name: { en: 'WorkSafeBC', zh: 'WorkSafeBC' }, note: { en: '', zh: '' } },
    { name: { en: 'MSP', zh: 'MSP' }, note: { en: 'where applicable', zh: '适用项目' } },
    { name: { en: 'Extended Health Plans', zh: '各大商业保险' }, note: { en: '', zh: '' } },
  ] as { name: Bi; note: Bi }[],
};

// ---- 联系我们 ----
export const contact = {
  heading: {
    eyebrow: { en: 'Contact Us', zh: '联系我们' },
    // 联系区块的主标题直接用店名（site.legalName），此处不再重复定义
    title: { en: '', zh: '' },
  } as SectionHeading,
  hours: {
    en: 'Mon–Sun 9:00 AM – 5:00 PM (By Appointment)',
    zh: '周一至周日 9:00–17:00（预约制）',
  },
  emailBtn: { en: 'Email Us', zh: '发送邮件' },
  callBtn: { en: 'Call Now', zh: '电话联系' },
  qrHint: { en: 'Scan to add on WeChat', zh: '扫码添加微信' },
  labels: {
    address: { en: 'Location', zh: '地址' },
    phone: { en: 'Phone', zh: '电话' },
    email: { en: 'Email', zh: '邮箱' },
    wechat: { en: 'WeChat', zh: '微信' },
  },
  mapEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1555.4477990000466!2d-122.8004009081786!3d49.03072997472316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485c37c3858ea93%3A0x9f8ff4198508d8d5!2s1548%20Johnston%20Rd%2C%20White%20Rock%2C%20BC%20V4B%203Z7!5e0!3m2!1sen!2sca!4v1785620825186!5m2!1sen!2sca',
};

// ---- 页脚 ----
export const footer = {
  rights: {
    en: '© 2026 SourcePoint Wellness Inc. All rights reserved.',
    zh: '© 2026 源真中医. 版权所有。',
  },
  disclaimer: {
    en: 'This website is for informational purposes only and does not constitute medical advice.',
    zh: '本网站仅供参考，不构成医疗建议。',
  },
};

// ---- 语言切换按钮文案 ----
export const langToggle = {
  toEn: 'EN',
  toZh: '中',
  aria: { en: 'Switch to Chinese', zh: '切换到英文' },
};
