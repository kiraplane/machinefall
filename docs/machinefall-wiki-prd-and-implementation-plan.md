# Machinefall Wiki PRD 与实施计划

更新日期：2026-07-14
项目名：`machinefall`
站点名：Machinefall Wiki
目标域名：https://www.machinefall.wiki
平台：Steam / Windows
开发与发行：by Jan Zizka

## 1. 产品目标

把已批准的同平台模板迁移成只服务 **Machinefall** 的英文攻略站。首发以“刚进入游戏就会卡住的操作与决策”为中心，而不是堆砌薄页面：

- 给第一次进入 Scenario Mode 的玩家一条可执行开局顺序；
- 解释 depot、route、cart、storage、driver 与跨大陆补给的关系；
- 把城市解放、worker / recruit、refugee camp 与扩张串成一套闭环；
- 给墙、塔、弹药、阵型、地形与机动预备队明确分工；
- 解释四个 lair 的查找方式、位置规律与跨洲推进准备；
- 区分“boss 没触发”的已知处理办法与真正的战前准备；
- 说明 technology eras、Scenario / Free Game、海运与大地图性能；
- 提供可信的购买判断、PC 配置与官方 Steam / Demo 下载入口；
- 明确当前为单机、无官方模组支持，不承接破解、APK、脚本或伪造 codes。

## 2. 事实基线

- 正式版 Steam：https://store.steampowered.com/app/3213120/Machinefall/
- 免费 Demo：https://store.steampowered.com/app/3436640/Machinefall_Demo/
- Steam Community：https://steamcommunity.com/app/3213120/
- 官方 Discord：https://discord.gg/DQAd2Kq7sa
- Steam 关联 YouTube：https://www.youtube.com/@facteroids
- 发售日期：2026-07-10；Demo 发布于 2025-08-17。
- 类型：post-apocalyptic real-time strategy，结合 base building、resource management、large-scale battles 与 playable global map。
- 战役：开发者称完整 campaign 超过 10 小时；目标是摧毁 enemy strongholds 后击败最终 boss，不要求占领整张地图。
- 模式：新玩家优先 Scenario Mode；Free Game 解锁全部科技。
- 科技跨度：Stone Age 到 Space Age。
- 地图：8192 × 4096，超过 3300 万 tile；开发者说明采用分层寻路与动态 simulation step。
- 单机状态：Steam 标注 single-player；开发者在讨论区明确没有 multiplayer，也没有 official mod support。
- 语言：Steam 当前列出英语及另外 11 种语言。
- Windows 最低配置：i5-4440、32 GB RAM、GTX 750 Ti 2 GB、DirectX 12、1 GB storage。
- Windows 推荐配置：i7-8700、64 GB RAM、GTX 1080 8 GB、DirectX 12、1 GB storage。
- 官方网站字段：Steam API 当前为空；不能编造独立官网。

## 3. 需求与长尾采集

按 Wiki Site Builder 的 balanced discovery 执行：head autocomplete、related searches / PAA、普通网页验证、Steam Store / News / Discussions 深挖、YouTube 与官方频道核验。

直接搜索信号集中在：

- `machinefall`
- `machinefall steam`
- `machinefall game`
- `machinefall guide`
- `machinefall review`
- `machinefall gameplay`
- `machinefall demo`
- `machinefall walkthrough`

Steam 讨论区在正式发售四天内已出现 depot、workers、carts、boss、lairs、difficulty、ships、refugee camps、army organization、multiplayer、mod support 等明确问题。它们比自动联想里的 `best team / cards / class` 更符合真实游戏机制，因此以讨论证据为内容优先级依据。

## 4. 关键词矩阵

| Keyword | Intent | Route | Priority | Status | Evidence / Notes |
| --- | --- | --- | --- | --- | --- |
| machinefall | 游戏实体与入口 | `/` | P0 | keep | Steam、autocomplete、用户需求 |
| machinefall wiki | 聚合攻略入口 | `/` | P0 | keep | 用户明确要求；当前无成熟专属 Wiki |
| machinefall guide | 浏览实用攻略 | `/guides` | P0 | keep | autocomplete、发售期问题密集 |
| machinefall beginner guide | 第一次战役怎么开 | `/guides/beginner-guide` | P0 | keep | 官方 Scenario 推荐、官方长实机 |
| machinefall depot | 理解 depot | `/guides/depots-logistics` | P0 | keep | 多个 Steam 讨论、官方 logistics 描述 |
| machinefall logistics | 连接补给线 | `/guides/depots-logistics` | P0 | keep | 官方 full-version 公告 |
| machinefall workers | 获得与安排工人 | `/guides/workers-carts` | P0 | keep | Steam 热门讨论、官方城市解放说明 |
| machinefall carts | 驾驶、装卸、补给 | `/guides/workers-carts` | P1 | keep | 当前开发者 disembark 回复、devlog |
| machinefall base defense | 墙、塔与弹药 | `/guides/base-defense` | P0 | keep | 官方公告、Steam 问题 |
| machinefall technology | 科技时代顺序 | `/guides/technology-eras` | P1 | keep | Steam 描述、Scenario / Free Game |
| machinefall eras | Stone 到 Space | `/guides/technology-eras` | P1 | keep | 官方商店描述 |
| machinefall army formation | 大军组织 | `/guides/army-formations` | P0 | keep | Steam 讨论、官方 formation / terrain |
| machinefall lairs | 找到四个 lair | `/guides/lairs-world-map` | P0 | keep | 开发者给出定位按钮与区域规律 |
| machinefall boss | 最终 boss 准备 | `/guides/boss-preparation` | P0 | keep | Steam 讨论、开发者触发故障处理 |
| machinefall ships | 海运和登陆 | `/guides/naval-transport` | P1 | keep | 官方 rafts / barges、Steam 问题 |
| machinefall refugee camp | 建新聚落 | `/guides/cities-refugee-camps` | P1 | keep | 官方更新、开发者回复 |
| machinefall cities | 解放与自动化 | `/guides/cities-refugee-camps` | P1 | keep | full-version 公告 |
| machinefall system requirements | PC 能否运行 | `/system-requirements` | P0 | keep | Steam 精确配置表 |
| machinefall performance | 大地图卡顿 / 内存 | `/system-requirements` | P1 | keep | 官方 under-the-hood + 社区报告 |
| machinefall review | 是否值得买 | `/review` | P0 | keep | related search、YouTube review |
| machinefall download | 官方下载入口 | `/download` | P0 | keep | Steam 正式版与 Demo |
| machinefall demo | 免费体验范围 | `/download` | P1 | keep | 官方 Demo 商店页 |
| machinefall multiplayer | 是否支持联机 | `/review#faq` | P1 | keep | 开发者明确否定；不拆薄页 |
| machinefall mod support | 是否支持模组 | `/review#faq` | P1 | keep | 开发者明确无官方支持；不提供注入教程 |
| machinefall codes | 兑换码 | none | P3 | ignore | 无 code 系统或搜索证据 |
| machinefall tier list | 排名 | none | P3 | ignore | 无稳定单位数据或社区共识 |
| machinefall best team | 阵容 | none | P3 | watch | autocomplete 噪声，不匹配当前机制 |
| machinefall cards / weapons / class | 卡牌、武器、职业 | none | P3 | ignore | 搜索噪声，无对应核心系统 |

## 5. 竞品基准与内容缺口

### 当前 SERP

- Steam Store / News：官方事实完整，但不会把 mechanics 改写成玩家决策步骤。
- Steam Discussions：问题真实、开发者回复有价值，但内容分散，旧帖和当前版本容易混在一起。
- Machinefall itch.io devlog：depot、cart、rally point、ship 等机制细节丰富，但部分结论来自旧 Demo，必须标注版本并用正式版公告交叉核对。
- YouTube：Facteroids 有官方 trailer 和长实机；Max Dixon 有发售前 review。当前没有系统化的高质量独立攻略系列。
- Steam Community Guides：截至 2026-07-14 未发现已发布的实质攻略。
- 专属 Wiki / database / calculator / interactive map：未发现成熟直接竞品。

### 必须匹配

- 官方游戏身份、Steam / Demo、配置、模式、科技、全球地图；
- depot / logistics、workers / carts、defense、army、lairs、boss、ships、cities；
- 首页 dense hub、guide hub、分组 sticky wiki navigation、移动菜单；
- 每篇文章可追溯来源、相关路线、canonical、sitemap 与 schema。

### 做得更好

- 把讨论区里的“这按钮在哪、为什么运不动、目标在哪”变成按顺序可执行的步骤；
- 严格区分正式版事实、开发者当前回复、旧 Demo devlog 和社区报告；
- 不用视频转录式水文，视频只提供实际画面、节奏与判断交叉验证；
- 不给刚发售作品伪造精确数值、最优 meta、boss 名称或隐藏机制；
- 对多人、模组、内存问题给出状态标签与安全边界。

## 6. YouTube 决策表

| Video | Search intent | Action | Target | Reason |
| --- | --- | --- | --- | --- |
| Facteroids `2MUH9Qw7fQY` gameplay trailer | 游戏身份、首页预览 | embed | `/` | Steam 关联官方频道，画面集中展示核心规模 |
| Facteroids `NGIuNtA35Ec` long gameplay | beginner / gameplay | embed | `/guides/beginner-guide` | 官方长实机，可验证开局节奏和 UI |
| Max Dixon `PEElEF5itPw` quick review | review / should I buy | embed | `/review` | 直接匹配购买意图；与官方事实分开呈现 |
| Pink Alpaca Plays `6UD_RURI2EA` | old gameplay | watch | none | 2025 旧版本，仅作背景核对 |
| Doupě Špín `7wurKab2di8` | demo walkthrough | watch | none | Demo 长流程，版本落后，不直接嵌入正式版攻略 |

## 7. 首发信息架构

15 个核心内容入口，加法律页：

1. `/`
2. `/guides`
3. `/guides/beginner-guide`
4. `/guides/depots-logistics`
5. `/guides/workers-carts`
6. `/guides/base-defense`
7. `/guides/technology-eras`
8. `/guides/army-formations`
9. `/guides/lairs-world-map`
10. `/guides/boss-preparation`
11. `/guides/naval-transport`
12. `/guides/cities-refugee-camps`
13. `/system-requirements`
14. `/review`
15. `/download`

法律与站点说明：`/disclaimer`、`/privacy`、`/terms`、`/cookie`。

暂不开发：codes、tier list、独立 multiplayer、独立 mods、单位数据库、interactive map、资源 calculator、多语言。

## 8. 数据与组件

```text
src/data/machinefall/
  types.ts
  sources.ts
  guides.ts
  localized.ts

src/components/machinefall/
  home-page.tsx
  guide-article.tsx
  guides-page.tsx
  wiki-navigation.tsx
  faq-section.tsx

src/app/[locale]/(machinefall)/
  (home)/page.tsx
  guides/page.tsx
  guides/[slug]/page.tsx
  system-requirements/page.tsx
  review/page.tsx
  download/page.tsx
  disclaimer/page.tsx
```

## 9. 视觉方向

从官方城市、森林、雪原大军与工业 UI 提取：

- page background：`#080d0b`
- panel：`#111a15`
- elevated panel：`#18231c`
- border：`#2a4434`
- text：`#f4f1df`
- muted：`#a8b7aa`
- primary amber：`#f2b84b`
- secondary green：`#8fcf78`
- alert rust：`#e56b4a`

布局使用信息密集 Wiki，而非宽松 SaaS landing page。首页 hero 控制高度；桌面导航 sticky 且仅打开 active group；移动端菜单可展开；长标题按钮必须可换行。

## 10. 素材映射

- `/machinefall/hero.jpg`：Steam 官方 header，metadata / compact hero。
- screenshot 1：base / walls，首页 start panel。
- screenshot 2：global map / scale，lairs world map。
- screenshot 3：settlement，beginner / cities。
- screenshot 4：snow battle，defense / boss。
- screenshot 5：late-game combined arms，technology / review。
- screenshot 6：wall and medical camp，base defense。
- screenshot 7：roads and regional base，depots / logistics。
- screenshot 8：tropical settlement，cities / refugee camps。
- screenshot 9：mass swarm，army / boss / performance。
- YouTube thumbnails：beginner 与 review 使用本地缩略图。

## 11. SEO 与 Schema

- 首页：WebSite、Organization、VideoGame、VideoObject。
- Guide hub：ItemList + BreadcrumbList。
- Article：Article + BreadcrumbList；带视频页面增加 VideoObject。
- 每页 metadata、canonical、OpenGraph、Twitter card。
- sitemap 覆盖 15 个核心入口与法律页；robots 指向 canonical sitemap。
- 首页 description 控制在约 150–160 characters；每页单一主查询，避免一词多页。
- source notes 面向用户说明最后核查日期和证据等级。

## 12. 内容标准

- 每篇实质攻略目标 600–900 English words；guide hub 与首页可以更短但必须提供完整入口。
- 开头先给 decision / answer，再讲系统背景。
- 精确数值只写官方商店、公告或开发者当前回复明确给出的数据。
- 旧 itch devlog 只作为机制沿革，不覆盖正式版公告。
- 社区内存问题表述为 reports，不当作已确认 bug。
- boss 不使用旧 Demo 的 Stomper 名称代表正式版最终 boss。
- review 不伪造站点评分；早期 Steam review 数据标注时点且避免写死在 SEO 标题。
- download 只链接 Steam 正式版、Steam Demo 与开发者 itch 页面，不提供 APK / crack / torrent。

## 13. 验证与上线

本地：

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm next:build
pnpm build
```

浏览器检查：桌面与移动首页、guide hub、至少两篇长文章、长标题换行、nav active group、sitemap、robots、manifest、404、旧 Tokyo 路由与字符串残留。

上线：

- GitHub repository：`machinefall`
- Cloudflare Worker：`machinefall`
- domains：`machinefall.wiki`、`www.machinefall.wiki`
- canonical：https://www.machinefall.wiki
- GA4 property：`machinefall.wiki`
- Shipmanager：siteType `game_guide`、priority `P0`、coreKeyword `machinefall`、exactly two core links。
