# Visionable Landscaping — SEO 全站审计(修订版)

**站点:** https://visionablelandscaping.com
**审计日期:** 2026-08-13 · **修订:** 2026-08-17(交接后重新核对代码、构建与生产)
**代码基线:** `origin/main` @ `b9f0580` · **集成分支:** `seo/contact-portfolio-pages`
**当前状态:** 已在分支实现并通过本地生产构建；尚未部署。2026-08-17 实测生产 `/contact`、`/portfolio` 仍为 404，生产 robots 与 sitemap 也尚未包含本次改动。

---

## 修订说明:第一版有三条结论是错的

第一版审计基于**落后 12 个提交的本地代码**,并且部分结论是我误读线上 HTML 得出的。同步到 `origin/main` 后逐条复核,以下三条**撤回**:

| 第一版结论 | 实际情况 | 判定 |
|---|---|---|
| 「缺 AggregateRating / Review 结构化数据,是 Critical 问题」 | 代码里有明确注释说明这是**刻意不加**的。Google 的评论摘要政策禁止 self-serving reviews —— 商家给自己打分的 markup 不合规,可能触发人工处罚。现有做法(星级只作页面文案,靠 `sameAs` 指向 Google/Yelp 真实档案)是**正确**的 | ❌ **撤回** |
| 「缩略图下发 `w=3840` 原图,Critical 性能问题」 | 全站 16 个 `<Image>` 有 17 处 `sizes` 声明,覆盖完整。`w=3840` 只是 `srcset` 里最大档的 `src` 兜底值,浏览器实际按 `sizes` 取小图。是我误读了抓取工具的渲染结果 | ❌ **撤回** |
| 「BeforeAfter 的 before 图 alt 为空」 | 该图在 `aria-hidden="true"` 的裁切层内,外层容器已有 `aria-label="Before and after: {label}"`。空 alt 是**无障碍最佳实践** | ❌ **撤回** |

另有四条,`origin/main` 已经修好了(我看的是旧代码):

- ✅ FAQPage / HowTo schema 已从根布局移除,注释写明"页面级 markup 归页面"
- ✅ sitemap 的 `lastModified` 已改为内容真实日期(不再用 `new Date()`),并有注释说明为什么
- ✅ LocalBusiness 已补 `additionalType: HomeAndConstructionBusiness`、`hasOfferCatalog`、扩充的 `sameAs`
- ✅ 服务 slug 已重构(`fence-and-gate` / `irrigation-drainage`),新增 `pergola-installation`

**结论:这个站的技术 SEO 底子比我第一版说的更好。** 剩下的问题集中在页面覆盖广度,不在技术实现。

---

## 本次已改并验证的(已在功能分支，尚未部署)

### 新增页面

| 页面 | 内容 | 结构化数据 |
|---|---|---|
| **`/contact`** | PageHero + 联系方式卡片 + 完整表单 + 服务区域内链 + 4 条 FAQ | `ContactPage`(指向根布局的 `#business`,不重复声明实体)+ `BreadcrumbList` + `FAQPage` |
| **`/portfolio`** | 12 个项目按 Hardscaping / Outdoor Living / Landscaping 三类分区(服务端渲染,不是客户端筛选,内容全部可抓取)+ 16 张细节图 + Before/After + 服务与城市双向内链 | `ImageGallery` 含 **28 个 `ImageObject`**(带 `contentUrl` / `caption` / `creditText`)+ `BreadcrumbList` |

### 修改

| 文件 | 改动 |
|---|---|
| `src/components/Hero.tsx` | 首页 H1 副句改为 "Bay Area landscape design & build — pavers, turf, pergolas, lighting"(方案 A,品牌主句一字未动) |
| `src/lib/areas.ts` | 11 个城市 metaTitle 全部差异化,依据是每城**自身正文**实际提到的服务,长度均 53–59 字符 |
| `src/components/Nav.tsx` | Portfolio / Contact / Book Consultation 指向真实路由 |
| `src/components/Footer.tsx` | 同上 |
| `src/components/CTABanner.tsx` · `sections/PageHero.tsx` | 默认 `primaryHref` / `ctaHref` 改为 `/contact` |
| `src/app/{about,not-found,services,services/[service],areas/[city],blog/[slug]}/page.tsx` | 跨页锚点 `/#contact` `/#portfolio` → 真实路由 |
| `src/content/blog/*.md` | 5 篇文章正文里的 CTA 链接同步 |
| `src/app/sitemap.ts` | 新增 `/contact` `/portfolio`,priority 0.9 |
| `src/app/robots.ts` | 加 `disallow: ["/api/"]` |
| `src/app/services/[service]/page.tsx` · `areas/[city]/page.tsx` | `generateMetadata` 补 `twitter` 覆写(改前 21 个子页面分享预览文案完全相同) |

### 本地构建验证

2026-08-17 运行 `npm run build` 通过 —— **46 个静态页**(原 44,新增 2),sitemap **40 条 URL**。逐项核对产物 HTML:

- `/contact` canonical、`ContactPage` + `FAQPage` schema、H1 均正确
- `/portfolio` canonical、`ImageGallery` schema、28 个 ImageObject、8 个 H2（7 个内容区块 + 联系表单标题）均正确
- 城市页 title 已差异化(Fremont / Pleasanton / Walnut Creek 抽查确认)
- 全站产物中**跨页 `/#contact`、`/#portfolio` 锚点已归零**

`npm run lint` 没有得到通过结果：仓库尚无 ESLint 配置，命令进入 Next.js 首次配置交互提示。本次不把它记为通过；生产构建本身完成了 TypeScript 有效性检查。

四阶段状态必须分开：**已实现** ✅ · **已部署并可观察** ❌ · **搜索平台已处理** 未知 · **排名/流量结果** 未测量。

### 仍指向锚点的(刻意保留)

`#contact`(同页跳转)、`/#process`、`/#testimonials`、`/#faq` —— 这些是页内滚动或首页区块,不是本该独立的页面,保持原样。

---

## 剩下的:需要业务数据才能做,不是代码问题

以下四项我没有动 —— 不是漏了,是**做下去必须有你提供的真实信息**,凭空生成会造出低质量页面,反而有害。

### 1. 服务 × 城市组合页(价值最高)

10 服务 × 11 城市 = 110 个组合,目前 0 个。竞品(FG Pavers `/city/fremont/`、Black Diamond `/fremont-synthetic-lawn/`)正在吃这批词。

**为什么我没直接生成:** 纯模板套用(把 "Fremont" 换成 "Dublin")是 Google 明确定义的 doorway page,批量上线大概率整站受罚,比不做更糟。每页至少需要:该城真实做过的项目、当地许可/HOA/土壤的具体差异、本地化的 FAQ。

**建议:** 先做 3 服务 × 5 城市 = 15 页试点。你提供每个组合的项目案例和本地差异,我来写和建。

### 2. 定价内容集群

"cost" 类词是这个行业转化率最高的信息型词。你的 FAQ 里已有 $5K / $20K–$60K 的区间,但没有页面承载。

**需要你提供:** 各服务的每平尺单价区间、影响报价的主要变量、典型项目的分项构成。**我不能编价格。**

### 3. 缺失的城市页:San Jose、Sunnyvale

portfolio 里明确有这两地的项目(p10 San Jose、p11 Sunnyvale),但没有城市页。

**需要你确认:** 这两地是否属于正式服务范围(不只是偶尔接单)?每城需要 3 段本地化正文,写法参照现有 11 城。

### 4. 缺失的服务页:Outdoor Kitchen、Putting Green、Sport Court、Composite Decking

四者都有作品图,`gallery.ts` 里甚至有 `outdoor-kitchen` 标签,但都没有独立服务页。

**需要你确认:** 这些是正式对外销售的服务线,还是只作为 complete-backyard-remodel 的一部分?如果是前者,每页需要 heroText、3 段正文、benefits、FAQ、价格区间。

---

## 关键词机会(待工具数据验证的研究假设)

| 关键词 | 2026-08-13 手工竞争判断 | 业务优先级 | 意图 | 建议形式 |
|---|---|---|---|---|
| paver installation fremont ca | 中 | **高** | 商业 | 服务×城市页 |
| artificial turf installation fremont | 中 | **高** | 商业 | 服务×城市页 |
| pergola installation pleasanton | 低 | **高** | 商业 | 服务×城市页 |
| backyard remodel cost bay area | 中 | **高** | 商业调研 | 定价 pillar 页 |
| paver patio cost per square foot california | 中 | **高** | 商业调研 | 定价子文 |
| artificial turf vs real grass california | 低 | **高** | 信息 | 已有雏形,需扩写+本地化 |
| do i need a permit for a pergola in fremont | 低 | **高** | 信息 | 许可指南(本地权威信号强) |
| backyard design ideas bay area | 中 | **高** | 信息 | portfolio 页天然承接 |
| landscaping contractor san ramon | 中 | **高** | 商业 | 已有城市页,需强化 |
| turf installation cost bay area | 中 | 中 | 商业调研 | 定价子文 |
| outdoor kitchen bay area cost | 中 | 中 | 商业调研 | 新服务页 |
| backyard putting green installation bay area | 低 | 中 | 商业 | 新服务页(有作品图) |
| landscaping san jose ca | 高 | 中 | 商业 | **缺城市页** |
| landscaping sunnyvale ca | 中 | 中 | 商业 | **缺城市页** |
| backyard sport court installation california | 低 | 中 | 商业 | 新服务页(有作品图+博客) |
| retaining wall contractor east bay | 低 | 中 | 商业 | 服务×区域页 |
| drought tolerant landscaping bay area | 中 | 中 | 信息 | 新文章(加州水政策角度) |
| landscape design 3d rendering bay area | 低 | 中 | 商业 | 你的核心差异点却没有专页 |
| hoa landscaping rules bay area | 低 | 中 | 信息 | 长尾指南 |
| composite deck installation fremont | 低 | 中 | 商业 | 服务扩展 |
| best pavers for bay area climate | 低 | 中 | 信息 | 已有 `how-to-choose-pavers`,需本地化 |
| clay soil landscaping bay area | 低 | 低 | 信息 | 长尾文章 |
| landscaping near me | 高 | 低 | 导航 | 靠 GBP,非网站 |

**⚠️ 数据说明:** Ahrefs / Semrush 未连接。上表只是 2026-08-13 的手工 SERP 假设与业务优先级，不是搜索量、KD、排名或流量数据；这些指标目前一律为 **unknown**，发布前应以带市场、设备和日期的工具或 Search Console 数据重建基线。

---

## 竞品对标

以下是 2026-08-13 的公开页面抽样，不是全站 crawl，也没有在 2026-08-17 交接复核中重新抓取；不能据此推断当前排名、流量或转化。

| 维度 | Visionable | System Pavers | Black Diamond | FG Pavers | 胜出 |
|---|---|---|---|---|---|
| 城市着陆页 | 11 | 全国多城 | 多城 | 有 `/city/` 架构 | System Pavers |
| 服务×城市组合页 | **0** | 有 | 有 | 有 | **竞品全面领先** |
| 结构化数据规范度 | **优秀**(且合规) | 中 | 中 | 弱 | **Visionable** |
| 图片 alt 质量 | **优秀** | 中 | 中 | 弱 | **Visionable** |
| 本地化正文深度 | **优秀**(每城独立 FAQ + 正文) | 模板化 | 中 | 模板化 | **Visionable** |
| sitemap lastmod 真实性 | **优秀** | 中 | 中 | 弱 | **Visionable** |
| 域名权重 | 弱(新站) | 强(全国品牌 30 年) | 中(20 年) | 弱 | System Pavers |
| 博客数量 | 12 | 多 | 中 | 少 | System Pavers |

**读法:** 这份抽样支持继续保持高质量页面和扩大真实内容覆盖，但不足以证明谁在当前搜索结果里“胜出”，也不能承诺一个季度追平。

---

## 行动计划

### 已完成(本次)

- ✅ 新建 `/contact` 与 `/portfolio`
- ✅ 首页 H1 采用已确认的方案 A
- ✅ 11 个城市 metaTitle 按各页现有正文差异化
- ✅ 站内跨页 Contact / Portfolio 链接改为真实路由
- ✅ robots.txt 屏蔽 `/api/`
- ✅ 服务页 / 城市页 twitter card 差异化(21 个页面)
- ✅ sitemap 加入新路由并更新真实修订日期

### 快速见效(本周)

| 动作 | 影响 | 工作量 | 依赖 |
|---|---|---|---|
| 审查 Vercel Preview 后合并 PR | 高 | 小 | Preview 页面与表单 smoke 通过 |
| 合并后在 Search Console 提交 sitemap | 中 | 小 | 需要站点权限与明确提交动作 |
| 记录 Search Console 页面/查询基线 | 中 | 1 小时 | 需要第一方 Search Console 数据 |

### 战略投入(本季度)

| 动作 | 影响 | 工作量 | 依赖 |
|---|---|---|---|
| 为重点项目建立独立案例页 | **高** | 3-5 天 | 真实项目范围、城市、年份、材料与结果 |
| 服务×城市组合页(先做 15 页试点) | **高** | 5-7 天 | 每城差异化正文,否则会被判 doorway page |
| 定价内容集群(1 pillar + 4 子文) | **高** | 4-5 天 | 你提供真实价格区间 |
| 补 San Jose / Sunnyvale 城市页 | 中 | 3 天 | 确认是正式服务区并提供本地项目事实 |
| 补 4 个缺失服务页 | 中 | 2-3 天 | 确认独立销售范围并提供真实价格/范围 |
| 连接关键词数据源并建立排名基线 | 中 | 1 小时 | 你授权相应工具或提供导出 |

---

## 首页 H1 决策记录

已确认采用方案 A：保留品牌主句，只把服务与地域语义放进副句。不要再把它当成待决项。

```tsx
<h1>
  We Make It <span className="text-accent">Visionable</span>
  <span className="block ...">
    Bay Area landscape design &amp; build — pavers, turf, pergolas, lighting.
  </span>
</h1>
```

---

## 数据来源

- 2026-08-17 生产实测：首页 200；`/contact`、`/portfolio` 404；`robots.txt` 尚未 disallow `/api/`；`sitemap.xml` 尚未列出新路由
- 代码基线：`origin/main` @ `b9f0580`；功能分支 `seo/contact-portfolio-pages`
- 本地验证：`npm run build` 生成 46 个路由；构建产物抽查 canonical、schema、H1、title 与站内链接
- 竞品信息：2026-08-13 公开页面抽样，由交接材料报告；2026-08-17 未重新验证，不作为本次发布判定依据
- 缺失证据：Search Console、Analytics、服务器日志、关键词工具的带日期导出；因此索引、排名、流量和转化结果均未作结论
