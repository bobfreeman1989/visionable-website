# Visionable website — Claude Code entry point

Visionable Landscaping 的营销站，线上地址 visionablelandscaping.com。Next.js 14 App Router + Tailwind 3 + Motion，没有 CMS，页面内容都写在代码里。这个站的目标是让高预算业主预约免费设计咨询，不是冲流量。

## 按任务读哪份文档

| 要做的事 | 先读 |
|---|---|
| 写或改任何文案 | [PRODUCT.md](PRODUCT.md)（定位、买家、语气）和 `site-context.md` §7（不能写的说法） |
| 改页面、组件、样式、动效 | [DESIGN.md](DESIGN.md)，尤其是 §5 Components、§6 Do's and Don'ts 和 Mobile 一节 |
| SEO | `site-context.md`（竞品、赚钱页面、数据来源） |

`site-context.md` 是本机文件，只在主目录 `~/Projects/visionable-website/` 下，不进仓库。worktree 里没有它，到主目录去读。

这个仓库是公开的。竞品名单、流量和询盘数据、报价与成本这类内部信息不提交，放本机文件并加进 `.gitignore`。

根目录下带日期或专题名的文件（`SEO-AUDIT-*`、`SEO-QUICK-WINS-*`、`SITE-REVIEW-*`、`AI-VISIBILITY-BASELINE-*`、`COPY-*`、`PLAYBOOK-*`）是当时的审查报告和草稿，用来查来历。其中仍然有效的规则已经收进 `site-context.md` §7。

## 内容在哪里

- 城市页：`src/lib/areas.ts`。服务页：`src/lib/services.ts` 和 `src/content/services.ts`、`service-facts.ts`。
- 评价：`src/content/testimonials.ts`。FAQ、首屏、联系方式：`src/content/` 下的同名文件。
- 博客：`src/content/blog/*.md`。
- 条目上的 `updatedAt` 决定 sitemap 的 `lastmod`，只在内容有实质改动时才更新日期。
- 下线或改名一个已被收录的 URL 时，在 `next.config.mjs` 的 `redirects()` 加永久跳转。
- 加第三方脚本或请求新域名时，同步改 `next.config.mjs` 里的 CSP，否则线上会被拦。

## 对外说法

买家多疑、投入大，一句核实不了的话就会伤信任。

- 公司事实（资质、年限、项目数、价格、工期、质保、服务城市）只写仓库里已有、或 Bob 给出的。仓库里没有就问 Bob，问不到就不写。
- 评价逐字引用原平台，`source` 写明来自哪个平台，不改写、不拼接。
- 评分和评价数在多处出现。改数字前先全站搜索旧数字，一次改全。

## 检查

用 npm（仓库里是 `package-lock.json`）。仓库没有测试。

```bash
npm run lint
```

```bash
npm run build
```

改了看得见的东西，要在桌面宽度和 390px 宽度各看一次实际渲染再说完成。多数首次访问来自手机。

## 交付

- 改动走分支和 PR。提交标题沿用现有前缀：`seo:`、`fix:`、`feat:`、`copy:`、`chore:`。
- 合并进 `main` 后 Vercel 会立刻发布到生产；推送其他分支会生成预览部署。所以合并等 Bob 开口。
- 并行工作用兄弟目录的 worktree：`~/Projects/visionable-website-<名字>`。
- 联系表单用 `RESEND_API_KEY`、`CONTACT_FROM_EMAIL`、`CONTACT_TO_EMAIL`，值在 Vercel 里。不打印，不写进仓库。
