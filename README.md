# 源真中医 SourcePoint Wellness — 网站技术方案

## 一、项目概述

| 项目 | 内容 |
|---|---|
| 网站名称 | 源真中医 / **SourcePoint Wellness**（驼峰写法） |
| 网站性质 | 纯静态信息展示站（无预约、无后端、无数据库） |
| 目标客群 | 大温哥华地区（White Rock / South Surrey）本地华人及非华人 |
| 语言 | 中英双语，**一键切换**（右上角 中 / EN 按钮，不同屏并置） |
| 页面结构 | 单页长滚动（首页 / 关于 / 创始人 / 服务 / 治疗方式 / 健康教育 / 为什么选我们 / 保险结算 / 愿景 / 联系） |
| 正式域名 | https://sourcepointacu.com/|

> 说明：治疗方式、健康教育、为什么选我们、愿景这几个区块在页面中**仍然渲染显示**，只是本次把它们从**顶部导航**里暂时注释隐藏了（见第六章）。

---

## 二、技术栈

| 层 | 选型 | 说明 |
|---|---|---|
| 静态站生成器 | **Astro** | 输出纯 HTML/CSS，加载快、SEO 好，无运行时 JS 负担 |
| 代码托管 | **GitHub** | 源码仓库，Cloudflare 从此拉取自动部署 |
| 网站托管 | **Cloudflare Pages** | 免费、全球 CDN、自动 HTTPS |
| 邮箱（收信） | **域名邮箱 `info@sourcepointacu.com`** | 通过 Cloudflare Email Routing 转发，见第九章 |
| 字体 | Google Fonts（Inter / Noto Serif SC / Noto Sans SC）+ 本地回退 | 中英文混排 |
| 图标 | 内联 SVG 线条图标 | 无第三方图标库依赖 |

### 为什么这样选

- **纯静态**：信息站无需登录、预约、支付等动态功能，静态方案最简单、最快、最省心、几乎零成本。
- **Astro**：专为内容型网站设计，构建产物是干净的静态文件，天然利于 SEO 和加载速度。
- **Cloudflare Pages**：免费额度对此类网站绰绰有余（每月 10 万次请求），自带全球 CDN 和免费 HTTPS 证书，本地访问速度快。
- **GitHub 自动部署**：改动推送到 GitHub 后，Cloudflare 自动重新构建上线，无需手动操作。

---

## 三、项目文件结构

```
sourcepoint/
├── astro.config.mjs          # Astro 配置
├── package.json              # 依赖与脚本
├── tsconfig.json             # TypeScript 配置
├── README.md                 # 项目说明（开发/部署/改字/换图）
├── .gitignore                # 忽略 node_modules / dist / .astro
├── public/                   # 静态资源（原样发布）
│   ├── favicon.svg           # 网站图标
│   └── images/               # 图片目录
│       ├── logo.png          # ★ 品牌 Logo（页头/页脚共用，留空则回退文字店名）
│       ├── hero.jpg          # Hero 右侧分栏配图
│       ├── founder.jpg       # 创始人照片
│       └── wechat-qr.png     # ★ 微信二维码（留空则回退显示微信号文字）
└── src/
    ├── data/
    │   └── content.ts        # ★ 全站中英文文字集中于此（改内容只改这里）
    ├── styles/
    │   └── global.css        # 配色令牌、字体、语言切换机制、通用样式
    ├── layouts/
    │   └── Base.astro        # 页面骨架：导航栏 + 语言切换 + Logo + 页脚 + 全局脚本
    ├── components/
    │   └── Icon.astro        # 服务项目线条图标组件
    ├── env.d.ts              # TypeScript 环境声明
    └── pages/
        └── index.astro       # 主页面（所有内容区块 + 页面级样式）
```

### 关键文件说明

- **`src/data/content.ts`** — 内容中枢。诊所名、Logo 路径、电话、微信二维码、邮箱、Facebook、地址，以及各区块中英文文案。**每条文案都是 `{ en: '英文', zh: '中文' }` 结构**，日常改文字只需改这一个文件。
- **`src/styles/global.css`** — 设计令牌集中地，另含语言切换核心 CSS 规则。
- **`src/layouts/Base.astro`** — 所有页面共用的外壳（Logo、导航、语言切换按钮、页脚、移动端菜单、滚动动画、顶栏滚动阴影、点击 Logo 平滑回顶、语言记忆脚本）。
- **`src/pages/index.astro`** — 首页，包含全部内容区块及其样式。

---

## 四、语言切换机制

需求：中英双语是刚需，但不要同屏并置，改为按钮一键切换。

### 实现原理

- 两种语言**都写进 HTML**，通过 CSS 按 `<html data-lang="…">` 属性控制显隐：
  ```css
  html[data-lang='en'] .lang-zh { display: none !important; }
  html[data-lang='zh'] .lang-en { display: none !important; }
  ```
- 每段文案在页面中输出为一对 span：`<span class="lang-en">…</span><span class="lang-zh">…</span>`。
- 右上角切换按钮切换 `data-lang`，选择记忆在浏览器 `localStorage`（键 `sp-lang`）。
- 首次访问：`<head>` 内联脚本按浏览器语言（`navigator.languages`）自动判断中/英，避免切换闪烁。

### 为什么这样做（而非 URL 分离或 JS 替换文本）

- **对 SEO 友好**：两种语言的文字都在 HTML 源码里，搜索引擎中英文内容都能抓到。
- **零额外请求**：切换纯靠 CSS，不重新加载页面、不请求接口。
- **易维护**：不需要维护 `/en` `/zh` 两套页面，文案仍集中在单一 `content.ts`。

> 注意：因为两种语言都在 DOM 中，页面 HTML 体积会略大于单语站，但对这种小型信息站影响可忽略。

---

## 五、设计规范

### 配色令牌（源自 `global.css`，本次刷新，新增项标注 ★）

| 名称 | 色值 | 用途 |
|---|---|---|
| Clay（陶土橙） | `#C2632E` | 主强调色：按钮、标题下划线、图标 |
| Clay Dark | `#A24E22` | 悬停态 |
| Clay Soft | `#E8A76B` | 柔和点缀、Sage 区块 eyebrow |
| Cream（米色） | `#FBF7F0` | 页面背景 |
| Cream 2 | `#F5EEE2` | 交替区块背景（`.section--alt`） |
| Ink（墨） | `#2E2A26` | 主文字 / 标题 / 页脚背景 |
| Ink Soft ★ | `#5C554D` | 次级文字（导航、弱化正文） |
| Sage（墨绿） | `#6F7A5A` | 次强调色（自然感）、focus outline |
| Sage Dark ★ | `#57603F` | Sage 深色态 |
| Line ★ | `#E6DCCB` | 分隔线、边框 |
| White | `#FFFFFF` | 卡片 / 反白文字 |

### 字体（本次补充本地回退字体）

- **标题**：`Noto Serif SC` → `Songti SC` → `Georgia` → serif（衬线，庄重）
- **正文**：`Inter` + `Noto Sans SC` → `PingFang SC` → `system-ui`（无衬线，清晰）

> 本地回退字体（Songti SC / PingFang SC 等）确保 Google Fonts 加载失败或离线时，中英文仍有合适字形。

### 间距与圆角令牌

- 区块垂直留白：`--section-y: clamp(3.5rem, 8vw, 7rem)`（页面级另有更大留白覆盖，追求西式呼吸感）
- 圆角：`--radius: 14px`、`--radius-sm: 8px`
- 阴影：`--shadow`、`--shadow-lg`
- 内容最大宽度：`--maxw: 1120px`

### 响应式

- 桌面：多栏网格布局，Hero 左文右图分栏
- 平板（≤940px）：导航折叠为汉堡菜单，服务卡片收窄
- 手机（≤560px）：全部单列

### 无障碍与体验

- 支持键盘焦点（可见 focus outline，用 Sage 色）、跳到正文链接
- 尊重 `prefers-reduced-motion`（关闭动画偏好时不播放滚动动画）
- 语义化 HTML

### 交互特性（本次代码新增）

- **顶栏滚动阴影**：页面下滚超过 12px 时，顶栏加下边框与阴影。
- **点击 Logo / #top 平滑回顶**：兜底处理"URL 已是 #top 再点不滚动"的情况。
- **Hero 分栏配图**：右侧图片列（`hero.image`）。
- **滚动进入动画**：`.reveal` 元素进入视口渐显（IntersectionObserver）。

---

## 六、内容区块清单（本次刷新）★

| 区块 | 英文标题 | 中文标题 | 内容 | 在导航中 |
|---|---|---|---|---|
| Hero | SourcePoint Wellness | 源真中医 | 价值标语、理念、配图、"联系我们"按钮 | —（Logo 回顶） |
| About | About Us | 关于我们 | 简介 + 使命 + 理念 | ✅ |
| Founder | Meet Our Founder | 创始人介绍 | 照片、资历、简介 | ✅ |
| Services | Our Services | 我们的服务 | **10 项服务卡片** | ✅ |
| Modalities | Treatment Modalities | 治疗方式 | 8 项手法 | ❌（页面显示，导航隐藏） |
| Education | Wellness Education | 健康教育 | 6 项教育项目 | ❌（页面显示，导航隐藏） |
| Why | Why Choose SourcePoint | 为什么选择源真 | 10 条优势 | ❌（页面显示，导航隐藏） |
| **Billing** | **Insurance & Direct Billing** | **保险及直接结算** | **ICBC / WCB / 商业医疗 / 直接结算** | ✅ |
| Vision | Our Vision | 我们的愿景 | 愿景陈述 | ❌（页面显示，导航隐藏） |
| Contact | Contact Us | 联系我们 | 营业时间、地址、电话、邮箱、Facebook + 微信二维码 | ✅ |

> **导航精简**：当前顶部导航仅保留 **关于我们 / 创始人 / 服务项目 / 保险结算 / 联系我们** 五项；其余在 `content.ts` 的 `nav` 数组中被注释屏蔽，随时可恢复。

### 十项服务（重新排序，英文含详细适应症）

疼痛管理 / 女性健康与生育支持 / 睡眠与压力管理 / 美容针灸 / 儿童健康与小儿推拿 / 消化健康 / 体重管理 / 中医问诊 / 中药调理 / 中医经络推拿

### 保险及直接结算（本次新增区块）★

- ICBC（卑诗省机动车事故保险）
- WCB（工伤保险）
- 各类商业医疗保险（Extended Health Plans）
- 提供直接保险结算（Direct Billing）

### 创始人资历

- **丁源（Yuan Ding / Yolanda Ding）**，加拿大 BC 省注册中医师 + 注册针灸师（R.Ac.）
- 曾获中国执业中医师资格；中医硕士学位，8 年以上系统正规中医教育
- 20+ 年临床、教学及健康培训经验；中医世家第三代传承
- 现任加拿大中医学院课程讲师及临床指导老师

> 注：英文 About 段落中头衔简写为 R.Ac.，创始人资历块仍完整列出注册中医师等头衔；上线前请与丁医师核对头衔与合规措辞（见第十章）。

---

## 七、联系方式（当前配置）

| 项 | 值 |
|---|---|
| 营业时间 | 周一至周日 9:00–17:00（预约制） |
| 地址 | **Unit 203 1548 Johnston Road, White Rock, BC, V4B 3Z7** |
| 电话 | **604-722-9799** |
| 邮箱 | **info@sourcepointacu.com**（域名邮箱，见第九章） |
| 微信 | YMLUCKY999（页面以**二维码图片**展示，扫码添加） |
| Facebook | https://www.facebook.com/yolanda.fang.108 |

> 注：微信二维码图片放在 `public/images/wechat-qr.png`；留空时前端回退显示微信号文字。上线前请核对全部真实信息。

---

## 八、更新与部署流程

### 日常改文字

只改 `src/data/content.ts` 一个文件；每条文案是 `{ en, zh }` 结构，中英各改一处。

### 日常换图

替换 `public/images/` 下的同名文件即可：`logo.png`（品牌 Logo）、`hero.jpg`（Hero 配图）、`founder.jpg`（创始人照片）、`wechat-qr.png`（微信二维码）。

### 推送到线上（Windows 无 Git 环境）

链路：**改文件 → push 到 GitHub → Cloudflare 自动检测 → 自动重新部署**。你只需把改动传到 GitHub，Cloudflare 会自己动。

三种传法：

1. **GitHub 网页端**（最快，无需装任何软件）：仓库页 → `Add file` → `Upload files` → 拖入改过的文件覆盖 → 填提交说明 → `Commit changes`。适合一次性替换少量文件。
   - 注意：网页上传只覆盖同名文件、不会自动删除旧文件；不要上传 `node_modules/`、`dist/`、`.astro/`。
2. **GitHub Desktop**（推荐长期维护）：克隆仓库到本地 → 用新文件覆盖 → 填 summary → `Commit to main` → `Push origin`。能正确识别新增/修改/删除。
3. **Git 命令行**：需先装 Git for Windows（本项目暂不需要）。

### 查看部署状态

Cloudflare Dashboard → `Workers & Pages` → 选项目 → `Deployments` 列表。每次 GitHub 提交对应一条记录：

- 状态 `Building` → `Success` / `Failed`
- 显示触发的 commit、时间；点进去有完整构建日志
- 正常 1–3 分钟完成；完成后打开线上网址按 `Ctrl + Shift + R` 强制刷新清缓存

### 想"彻底清空重传"

可以删仓库里的**文件**重传，但**不要删整个仓库**——否则 Cloudflare Pages 的关联会断，需重新连接仓库并重配构建命令（`npm run build`）与输出目录（`dist`）。最干净的做法：GitHub Desktop 克隆后，删掉本地除 `.git` 外的所有内容，拷入新文件，一次 commit + push。

---

## 九、域名邮箱转发到私人 Gmail 方案

目标：拥有一个体面的域名邮箱（如 `info@sourcepointacu.com`），
**收信自动转发到私人 Gmail**，**回信时对方看到的是域名地址**——全程 **$0**，无需购买 Google Workspace（约 US$7/用户/月）。

方案组成：
- **收信**：Cloudflare Email Routing（免费转发）
- **发信**：Gmail「Send mail as」+ Gmail SMTP（用域名身份发信）

前提：域名的 DNS 由 Cloudflare 托管（把域名 nameserver 指向 Cloudflare 即可，域名注册商可以是别家）。本项目网站已在 Cloudflare，天然满足。

### 9.1 收信端 — Cloudflare Email Routing（免费）

Cloudflare Email Routing 是免费服务：接收发往你域名地址的邮件，转发到你已有的收件箱（如 Gmail）。它**不提供独立邮箱登录**，邮件直接落到你现有 Gmail，且保留原始发件人。免费、无每地址收费、可建任意多个转发地址。

配置步骤：

1. 登录 Cloudflare Dashboard，选中你的域名 → 左侧 `Email` → `Email Routing` → `Get started`。
2. **添加目的地址（Destination）**：填你的私人 Gmail。Cloudflare 会发一封验证邮件到该 Gmail，点链接确认。
3. **创建路由规则（Routing rule）**：把某个自定义地址映射到已验证的 Gmail，例如
   `info@sourcepointacu.com → 你的Gmail`。可按需添加多个（如 `dr.ding@`、`appointment@`）。
4. **添加 DNS 记录**：Cloudflare 会提示自动添加所需的 MX 和 SPF（TXT）记录，点确认即可。
5. （可选）**Catch-all**：开启后，发往该域名**任意地址**的邮件都转发到你的 Gmail，避免漏收。

完成后，别人发到 `info@sourcepointacu.com` 的邮件几秒内出现在你的 Gmail 收件箱。

> 说明：Cloudflare Email Routing 只做转发，不存储邮件内容，自带钓鱼/垃圾邮件检测；仅收信，发信由下面的 Gmail 部分负责。

### 9.2 发信端 — Gmail「Send mail as」用域名身份回信

只做转发的话，你回信时对方看到的仍是 `@gmail.com`。要让回信显示为域名地址，用 Gmail 自带的「Send mail as」，通过 Gmail SMTP 发出。

**前置：生成 Google 应用专用密码（App Password）**

1. Gmail 账号需先开启 **两步验证（2-Step Verification）**——App Password 只有开了两步验证才可用。
2. Google 账号 → `Security` → `2-Step Verification` → 底部 `App passwords`。
3. 命名（如 `Custom domain SMTP`）→ `Create`，得到一个 **16 位密码**，只显示一次，立即复制保存。

**在 Gmail 添加发信身份**

1. Gmail → 右上齿轮 `See all settings` → `Accounts and Import` → `Send mail as` → `Add another email address`。
2. Name 填显示名（如 `SourcePoint Wellness / 丁源`），Email 填域名地址（如 `info@sourcepointacu.com`），可勾选 `Treat as an alias`。
3. 下一步填 SMTP：

   | 项 | 值 |
   |---|---|
   | SMTP Server | `smtp.gmail.com` |
   | Port | `587`（STARTTLS）或 `465`（SSL/TLS） |
   | Username | 你的完整 Gmail 地址 |
   | Password | 上一步的 **16 位 App Password** |
   | 连接方式 | TLS / SSL |

4. Gmail 会向 `info@sourcepointacu.com` 发一封验证邮件——因为 Cloudflare 已把它转发到你的 Gmail，几秒内就到。点确认链接或填验证码即可。

完成后，Gmail 撰写邮件时 `From` 下拉框可选域名地址；可把它设为默认发件身份，实现「域名收信 + 域名发信」。

### 9.3 送达率建议（可选但推荐）

用 Gmail SMTP 以域名身份发信，为避免被判垃圾邮件，建议在 Cloudflare DNS 补充邮件认证记录：

- **SPF**：授权 Google 服务器为你的域名发信（启用 Email Routing 时通常已加一条基础 SPF，若叠加 Gmail 发信需合并 `include:_spf.google.com`）。
- **DKIM / DMARC**：个人低频发信非必需，但配上能进一步降低进垃圾箱概率。新域名初期发信量不宜过大，让域名逐步建立信誉。

### 9.4 成本与限制

- Cloudflare Email Routing：**免费**，转发地址数量不限。
- Gmail 普通 SMTP 发信上限约 **2,000 封/天**，对诊所日常沟通绰绰有余。
- 全套方案 **$0**，唯一花费是域名本身（见第十一章）。
- 局限：这是「转发 + 借 Gmail 发信」，不是独立邮箱；若未来需要多员工独立邮箱、共享日历、合规归档等，再升级 Google Workspace（约 US$7/用户/月）。

---

## 十、待办与后续规划

### 上线前应完成
- [ ] 确认品牌 Logo `public/images/logo.png` 已放置（否则回退纯文字店名）
- [ ] 确认微信二维码 `public/images/wechat-qr.png` 已放置（否则回退微信号文字）
- [ ] 替换/确认创始人照片 `public/images/founder.jpg`、Hero 配图 `public/images/hero.jpg`
- [ ] 核对联系方式（邮箱、地址、电话、微信、Facebook 链接）
- [ ] 文案合规审查（见下）

### 合规注意（BC 省）
- 中医师 / 针灸师头衔（R.TCM.P. / R.Ac.）及疗效宣传受 **BC College of Complementary Health Professionals** 监管，网站文案不得夸大疗效。新文案中「疼痛管理」「生育支持」「美容针灸」等适应症较多，建议由丁医师本人或熟悉 BC 法规者审阅措辞。
- 英文 About 段落头衔简写为 R.Ac.，与创始人资历块的完整头衔请统一核对无误。
- 已在页脚加入医疗免责声明。
- 若未来收集患者信息，需遵守 BC 省隐私法（PIPA）。

### 可选增强
- [ ] 绑定正式域名
- [ ] 配置域名邮箱转发（第九章方案）
- [ ] 注册 Google Business Profile（本地获客关键）
- [ ] 加入 Google 地图嵌入、营业时间结构化数据
- [ ] SEO 优化（sitemap、结构化数据）
- [ ] 如需恢复"预约咨询"按钮：`content.ts` / `Base.astro` / `index.astro` 中相关代码已注释保留，去掉注释即可
- [ ] 如需在导航恢复治疗方式/健康教育/为什么选我们/愿景：取消 `content.ts` 中 `nav` 数组对应行的注释

---

## 十一、成本估算

| 项 | 费用 |
|---|---|
| GitHub | 免费 |
| Cloudflare Pages | 免费 |
| Cloudflare Email Routing（域名邮箱转发） | 免费 |
| 域名（.com） | 约 US$10/年（可选） |
| Gmail（收发信） | 免费 |
| 邮箱（升级 Google Workspace，可选） | 约 US$7/用户/月 |

**最低运营成本：域名费一项即可（约每年 10 美元），网站与域名邮箱转发全部免费。**
