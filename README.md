# 源真中医 Sourcepoint Wellness

双语（中英）中医诊所信息展示站。支持右上角一键切换 EN / 中，
选择记忆在浏览器 localStorage，首次访问按浏览器语言自动判断。

## 本地开发
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 产物在 dist/
```

## 日常改文字
只改一个文件：`src/data/content.ts`
每条文案都是 { en: '英文', zh: '中文' } 结构。

## 部署
推送到 GitHub 后 Cloudflare Pages 自动构建。
构建命令 `npm run build`，输出目录 `dist`。

## 换图片
把真实图片放进 `public/images/`（见该目录 README.txt）。

## 语言切换原理
- 两种语言都写进 HTML，用 CSS 按 <html data-lang> 控制显隐 → 对 SEO 友好。
- 切换 / 记忆逻辑在 src/layouts/Base.astro 底部脚本。
