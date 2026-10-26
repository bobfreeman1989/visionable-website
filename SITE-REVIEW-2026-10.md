# 网站全面审查（2026-10-24）

审查对象：`fix/claims-and-tracking` 分支（PR #22，`217c42a`），本地 `localhost:3000` 与线上。三方独立审查后合并：

- **Claude**：浏览器实看桌面版 + 375px 手机版。
- **Fable**：打开约 40 张原图，逐一核对文案与代码；之后与 Claude 逐条讨论分歧，给出共识排序。
- **Codex**（`gpt-6.1-sol`，xhigh）：390px 下跑全部 40 个页面、12 篇文章、107 张照片。

标记说明：**三方** = 三个审查者都独立提出；**二方** = 两个提出；单方的条目注明来源。Codex 独有的条目，Claude 已抽查过尺寸、链接和代码，属实。PR 2–4 已规划的内容不在本文范围。

衡量标准："怎样让 ~$80K 的 South Bay / Peninsula 业主更愿意预约"。所有影响判断都是审查者的推断，没有转化数据支撑。

---

## A. 先做：高影响、低成本（都是 S）

| # | 问题 | 证据 | 建议 | 来源 |
|---|---|---|---|---|
| 1 | **分享卡片图还写着 "Free 3D Design Consultation"** | `public/og-image.jpg`，所有页面分享到微信/短信时都显示这张 | 重做图片：去掉 3D 字样，改为 "Free design consultation" 或不放按钮；字体按 DESIGN.md | 二方（Fable、Codex），Claude 已核实 |
| 2 | **首屏把照片盖住了** | `Hero.tsx:22` 绿色蒙版 90%→80%→60%；手机上首屏几乎全是绿底文字，看不出是什么项目；手机裁切的画面中间是电线杆和电线 | 只在文字一侧加渐变（md 以上），手机改为底部渐变；换一张没有电线杆的手机首图（`pergola06`、`design01`）。子页面 PageHero 保留一层底色，但降到 35–40%（浅色照片上的标题需要） | 三方 |
| 3 | **首屏信息堆砌** | 评分条 + H1 + 副标题 + 4 行介绍 + 2 个按钮 + 3 个认证徽章；CSLB 号在段落和徽章里各出现一次；手机上按钮被挤到第一屏以下 | 首屏只留 H1 + 一行副标题 + 主按钮 + 一行信任信息（**Google 26 / Yelp 6 分开写**，不要合成 "32 条"，否则等于新造一个说法）；认证移到首屏下方 | 三方 |
| 4 | **创始人照片闲置** | `public/about.jpg`（Kun Huang 本人照）全站没有引用；About 页署了名却没有人像；`t01–t03` 三张照片也闲置，其中 t03（夜景前院）质量很好 | About 的 "Our story" 旁放创始人照片；补一张施工现场团队照 | 二方（Fable、Codex） |
| 5 | **一个院子撑起了整个首页** | Los Altos 那个蛋椅 + 白色 pergola 的院子在首页出现约 8 次（作品集 p01/p02、Before/After 第 1 组、流程第 1/2/4 步……）；号称 100+ 项目，首页能看出来的只有约 7 个不同院子 | 作品集 p02 换成 `pergola06` 或 `design01`；流程第 3 步换成真实施工中照片（`case-3-before` 就是）；首页作品集按广度挑选，以 p11 厨房、p08 等开头 | 二方（Fable、Codex） |
| 6 | **价格 FAQ 答非所问** | `faq.ts:12` "fall in the range that lets us design, build and finish…"，这是我在 PR #22 写的，读起来像在回避 | 不写数字："Cost depends on scope, materials, access and site conditions. We discuss your budget at the free visit, design to it, and confirm a fixed construction price after design." | 三方 |
| 7 | **工期说法互相矛盾** | 首页 FAQ "3–4 weeks"、服务页 "3–6 weeks"、流程 "2–6 weeks"；而且 3–6 周是从咨询算起还是从开工算起，没有说清 | 分开写设计、permit、施工三段；工期需要 Bob 给依据 | 三方 |
| 8 | **Complete Backyard Remodel 不在首页服务区** | 首页服务区只有 "Outdoor Living Design" 等 6 项；最贵的整院改造只能从导航进入 | 把整院改造放在服务区第一位 | 单方（Fable） |
| 9 | **照片尺寸太小** | 作品集原图只有 600px，灯箱放大到 1024px；`patios01` 400×534、`lighting01/02` 400×300 被当成大幅 hero 用（Claude 已核实）；首页 hero 1335px，在 Retina 屏上发虚 | 换成已有的 1600px 原图（`bench03` 就是 p08 的原图），缺的向 Bob 要原图 | 二方（Fable、Codex） |
| 10 | **照片与说明不符** | `lighting02` 说明写 "curved concrete patio"，实际是铺砖；`bench01` 是不规则石板，说明却写混凝土踏步；博客里写 "Pergola shade" 的图没有 pergola，写 "Evening lighting" 的是白天照片，所谓 "herringbone" 其实是普通网格铺法 | 逐张对照原图修改说明、alt 文本和标签 | 单方（Codex） |
| 11 | **Before/After 有两组不是真正的前后对比** | 第 1 组的 "before" 已经有凉亭、棚屋和木平台，而且拍摄角度不同；`Process.tsx:20` 的 alt 却写 "bare and unfinished"。第 3 组的 "before" 是模板和碎石基层，属于施工中 | 现在就改说明："Before: gazebo, gravel and shed" / "During: base and forms"；改完把整个模块移到首屏下面；服务页按类型筛选（现在灯光页、围栏页也在展示篮球场） | 三方讨论后的共识 |
| 12 | **博客的行动号召坏了** | 3 篇文章写着粗体 "Request a Free Estimate" 却没有链接；还有 3 篇的小标题就叫 "Call to Action"；"Free Estimate" 也和统一说法 "free design consultation" 不一致 | 改成真实链接 `/contact#contact`，用面向客户的措辞 | 单方（Codex），Claude 已核实 |

## B. 第二批：结构与转化

| # | 问题 | 建议 | 来源 |
|---|---|---|---|
| 13 | **全站没有一张真实 3D 渲染图**。网站反复说 "See It Before It's Real"，流程第 2 步却用完工照片代替（`Process.tsx:9-12` 的注释自己承认了这一点） | 向 Bob 要 2–3 组"渲染图 → 建成"的对照：放进流程第 2 步、Landscape Design 页，并作为 Before/After 的第 4 个标签。**三方都排第一，但需要素材，所以排在这里** | 三方 |
| 14 | **评价区像一堵墙**：15 条摘录、字母头像、没有城市 | 精选 6 条整院 / 高预算的（Yang G.、Wen S.、Ning L.、Jing M.、Yu Z.，再保留 **JQ T.**，因为那是全站唯一证明我们能搞定 permit 和验收的评价），补上城市。配图方面，只有 Wen S. 能确定对应篮球场项目，需要 Bob 确认；其余不配图，避免像以前那样张冠李戴 | 三方讨论后的共识 |
| 15 | **Contact 页的表单在第 2,238px 才出现**；电话、邮箱、营业时间在表单之前重复了三遍 | 表单紧跟在一段简短介绍之后，联系方式放到侧边或下方 | 二方（Fable、Codex） |
| 16 | **页面太长**：首页约 8,400px（桌面）/ 约 12,400px（手机），作品集页约 16,900px（手机）；DESIGN.md 的目标是约 7,000px | 首页去掉博客预告（春季草坪养护之类的内容会把来访者往小预算、DIY 方向带）和一个重复的 CTA；手机端作品集只显示 3 张；作品集页详情图先显示 6 张 | 三方 |
| 17 | **手机菜单有 26 个链接，预约按钮在最底部** | 预约按钮固定在顶部或底部；服务和城市折叠起来 | 二方（Fable、Codex） |
| 18 | **首页 "Outdoor Living Design" 会把表单预选成 "Landscape Design Only"** | 增加 "Design + Build" 选项，或者不预选 | 单方（Codex） |
| 19 | **表单输入框字号 14px，没有 autocomplete** | 改成 16px，避免 iPhone 自动放大；补上 name / email / tel / address 的 autocomplete | 单方（Codex），Claude 已核实 |
| 20 | **"Vision" 被用成了口号**：首页 "Share Your Vision" ×5，另有 6 个标题带 Vision；PRODUCT.md 明确说 "never repeated as a slogan" | 只在按钮上保留 "Share Your Vision"，各区块标题重新起 | 单方（Fable） |
| 21 | **城市页信任信息重复**：`/areas/san-jose` 上 "1101860" 出现 17 次，勾选清单和首屏数据条内容重复 | 删掉勾选清单 | 单方（Fable） |
| 22 | **城市页标题叠了两层**："Book your free Cupertino consultation" 下面紧跟 "Book Your Free Design Consultation"，大小写也不统一 | ContactCTA 内部不再显示表单自带的标题 | Claude，Fable 已在代码里确认 |
| 23 | **服务页文案是通用承包商口吻**，远不如城市页具体；草坪页还在对 "commercial properties" 说话，围栏页在招揽 "small repairs" | 按城市页的写法，重写整院改造、铺砖、设计、pergola 四页的首段；删掉 commercial 和小修 FAQ | 单方（Fable） |

## C. 卫生类（一次性清理）

- 评价数在 11 处写死 → 新建 `src/content/reviews.ts` 统一引用（Fable）。
- PRODUCT.md 还写着 "$20K to $60K+"、Milpitas、"3D design first"；以后文案照它写会继续跑偏，应该先改它（Claude、Fable）。
- 流程第 3 步的固定价那句太长，不适合放在卡片里，压缩成一句（Claude）。
- 页脚 tagline 两句重复，还有 "extraordinary"（Fable）。
- 作品集标题用的是施工术语，比如 "Lit Decking & Stepping Pavers"，可以改成使用场景（Fable，低优先级）。
- 照片灯箱用 4:3 固定框裁切竖图，放大时应该保留原比例（Codex）。
- 每个页面都在预加载首页 hero 图；Before/After 一次性加载 6 张图（Codex，性能，未实测）。
- 草坪博客的 "Zero Maintenance"、耐温上限，以及服务页的 "heat-reducing technology"，都没有产品依据（Codex）。
- "We reply within 24 hours"：Contact 页 FAQ 写的是工作日内，表单处没写这个条件（Codex）。

## D. 需要 Bob 决定

1. **3D 渲染素材**：能不能给 2–3 组渲染图 + 建成照片，最好是同一个项目（对应 #13）。
2. **预算选项**：三方同意保持从低到高排列、不预选。要不要去掉 "Under $30,000"，从 "$30,000–$60,000" 起？这牵涉到你想不想接小单。
3. **工期**：设计、permit、施工各自一般多长（对应 #7）。
4. **Wen S. 的评价是不是那个篮球场项目**（对应 #14）。
5. **"Our crews bring 15+ years…"**：Codex 认为这句读起来像整个团队都有 15 年以上经验，建议改成 "Our most experienced crew lead has 15+ years…"。这句是计划原文规定的，改不改由你定。
6. **回复时效**：24 小时，还是工作日 24 小时。
7. **原图**：作品集和 `patios01`、`lighting01/02` 的高清原图。

## E. 保持不动（三方共识）

- 真实项目照片 + 真实城市标注；Before/After 滑块本身。
- 城市页文案（Saratoga、Los Gatos、Palo Alto 的护树条例、具体街区名）是全站写得最好的。
- 评价逐字引用、标明平台，卡片设计克制。
- 绿 + 金配色、暖色背景；线上的正式字体。
- 免费上门 / 付费设计的区分、固定价 + 书面变更单的说法；表单只有两个必填项。

## 审查时未覆盖

- 真实询价提交和邮件送达。
- 转化效果（只有推断）。
- 完整的无障碍对比度测量。
- iPhone 实机的聚焦缩放行为。
- 本地预览用的是后备字体，所以高度和换行数字只是近似值。
