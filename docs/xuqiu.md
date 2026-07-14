# Machinefall Wiki 网站开发需求

## 项目标识

- 游戏名称：Machinefall
- 网站名称：Machinefall Wiki
- 平台：Steam
- 规范域名：https://www.machinefall.wiki
- 本地项目目录名：`machinefall`
- GitHub 仓库名：`machinefall`
- Cloudflare Worker 项目名：`machinefall`

## 已核验的官方身份

- Steam 官方商店：https://store.steampowered.com/app/3213120/Machinefall/
- Steam App ID：`3213120`
- 开发者：by Jan Zizka
- 发行商：by Jan Zizka
- 官方网站：`not yet verified`（Steam 商店 API 的 website 字段为空）
- Steam 商店关联 Discord：https://discord.gg/DQAd2Kq7sa
- Steam 商店关联 YouTube：https://www.youtube.com/@facteroids
- Steam 上线日期：2026-07-10
- 官方定位：后末日即时战略游戏，核心系统包括全球可玩地图、基地建设、资源管理、大规模战斗，以及从石器时代到太空时代的科技推进。

不得把模板游戏的商店链接、开发者、角色、卡牌、机制、发布日期、平台信息或其他事实带入 Machinefall。

## 核心种子关键词

- `machinefall`
- `machinefall wiki`
- `machinefall guide`
- `machinefall steam`
- `machinefall walkthrough`

以上仅为建站预检种子词。完整开发前必须重新进行当前长尾需求、People Also Ask、相关搜索、竞品与 YouTube 资料调研，再决定实际页面、实体命名和路由；不预设 `codes`、`tier list` 或数据库页面。

## 目标文件与命名空间

- 计划 PRD：`docs/machinefall-wiki-prd-and-implementation-plan.md`
- 目标数据层：`src/data/machinefall/`
- 目标 App Router 路由组：`src/app/[locale]/(machinefall)/`
- 目标组件命名空间：`src/components/machinefall/`
- 目标静态资源命名空间：`public/machinefall/`

## 确认后的开发范围

1. 基于当前搜索需求、Steam 官方资料、Steam 关联官方渠道、可靠竞品和 YouTube 攻略，编写关键词矩阵、竞品基准和 PRD。
2. 将复制的模板彻底迁移为只服务 Machinefall 的英文攻略站，按资料厚度决定首发页面数量，不为凑数制造空页面。
3. 首页、分类枢纽、攻略详情、侧边 Wiki 导航、移动端 Wiki 菜单、相关链接、法律页面、sitemap、robots 和 manifest 均使用 Machinefall 专属内容与元数据。
4. 完成模板迁移残留检查、lint、TypeScript、构建和浏览器预览 QA。
5. 验证完成后创建并推送 GitHub 仓库 `machinefall`，部署同名 Cloudflare Worker，绑定 `www.machinefall.wiki`，配置自动构建和 GA4；若认证或外部审批阻塞，则明确记录阻塞点。
6. 按 `wiki-site-builder` 流程将站点幂等注册到 Shipmanager，并验证两条核心链接。
