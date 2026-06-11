# Retest Scope — Beamco dev board sections 2.1, 2.1.1, 2.2

## Section 2.1 [April 22] Event redesign

### [Fans] crowdfund project display ("All" tab design) (gid: 1212781956277416) — Status: UAT
- Assignee: Jesse Lun
- Completed: no
- Type: — | Feature: — | Priority: — | BR: BR-76
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1212781956277416

**Description:**

https://www.figma.com/design/OammYyGMZ6DVI2NQ7eNpk0/Beamco-Fans-Mobile-v3?node-id=10866-47819&t=BfovZOCIyJMmNEzW-11

image.png

---

**🔖 Linear Ticket:** BBQ-96
**🏷️ Portal:** [UAT ARTISTS]
**⚡ Priority:** Triage (P3)
**📋 State:** Triage

---

### Google Maps display on Events (gid: 1213058014083065) — Status: UAT
- Assignee: Jesse Lun
- Completed: no
- Type: — | Feature: — | Priority: High | BR: BR-108
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1213058014083065

**Description:**

*G*oogle map embedded in the event detail 

Simply add google map link for now.
Fans site:
https://www.figma.com/design/OammYyGMZ6DVI2NQ7eNpk0/Beamco-Fans-Mobile-v3?node-id=11486-35495&t=JjiIbCOzoz1l3Oa4-0

Arist site 

*

portal
https://www.figma.com/design/0gWC6dR1yzdEu0g1LqvRvJ/Beamco-Artist-Portal-v3?node-id=1932-74226&t=bkPdPtWNpKhpzBQG-11

*

---

### Event ticket - Event ticket: Multi-Phase Pricing Model (gid: 1212205772155805) — Status: UAT
- Assignee: Jesse Lun
- Completed: no
- Type: — | Feature: — | Priority: — | BR: BR-61
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1212205772155805

**Description:**

Spec doc
https://www.notion.so/Beamco-Notes-Event-ticket-Multi-Phase-Pricing-Model-2af9ca6e76ac8088a3ebfded35df0e8e?source=copy_link

Wireframe
https://app.visily.ai/projects/24e6b033-f9f0-4c05-9d07-2e3821d02dd7/boards/2359065

---

## Section 2.1.1 [April22] 2c2p integration

### 2c2p PG integration (gid: 1213322052640843) — Status: UAT
- Assignee: Jesse Lun
- Completed: no
- Type: — | Feature: — | Priority: High | BR: BR-87
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1213322052640843

**Description:**

**2C2P (Antom) Payment Gateway Integration**

**Decision: Mixed Approach (Stripe + Antom)**

**Stripe** — Credit Cards, Google Pay, Apple Pay (existing, already compliant)
**Antom** — Local wallets: GCash, Maya, JKOPay, AlipayHK, Octopus, Alipay CN
**Crowdfunding** — Stays on Stripe (requires future/scheduled payments, Antom doesn't support)

*Reason: Antom requires separate compliance check for CC, Google Pay, Apple Pay. Stick with Stripe for those to avoid blocking rollout.*

**Integration Approach: API-only (not Hosted Checkout)**

Payment method selection lives on Beamco checkout page. Antom pay API redirects user directly to wallet app — no Antom hosted page in between.

**User flow:** Beamco checkout → select wallet → wallet app (GCash/JKOPay/etc.) → Beamco success page

**Confirmed Payment Methods**

Philippines: Maya, GCash
Taiwan: JKOPay
Hong Kong: AlipayHK, Alipay CN, Octopus
Global: Along with Stripe for CC, Apple Pay, and Google Pay

**References**

API Documentation: https://docs.antom.com/ac/ams/api

BRD: Antom Requirements v3
Integration approach doc: Multi-Market Wallet Integration
Wireframe: https://jazzy-medovik-43cd83.netlify.app/

---

### checkout - payment options (gid: 1213584904940970) — Status: UAT
- Assignee: Jesse Lun
- Completed: no
- Type: — | Feature: — | Priority: — | BR: BR-148
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1213584904940970

**Description:**

After successfully integrating with 2C2P, we will need to offer payment options during checkout.

---

## Section 2.2 [April 29] UX refinement

### [Ticket Sales] Edit copy on "Ticket Sales"  tab (gid: 1214145762385513) — Status: UAT
- Assignee: 邓宇芩
- Completed: no
- Type: Copywriting | Feature: Offline Event | Priority: — | BR: BR-255
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214145762385513

**Description:**

There's too much unnecessary and irelevant copy, make it more concise only to address the ticket design element. no need to mention "...sales packaging..set bundle deals...increase conversions..."

---

### [Fans] event sale is on pause (gid: 1214220910448067) — Status: UAT
- Assignee: 何浩楠
- Completed: no
- Type: Copywriting | Feature: Events | Priority: High | BR: BR-254
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214220910448067

**Description:**

Currently, when the event sale is on pause, on the storefront, the button displays "Sold Down". 

Change request: 
when the event sale is on pause, on the storefront, the button should display "Sale Ended" 

目前，在活动销售暂停期间，在店铺页面上，该按钮会显示“已售罄”。

变更请求：
当促销活动暂停时，在店面页面上，该按钮应显示“促销已结束”字样。

---

### Remove "Concert Ticket" on ticket design  (gid: 1214145762385551) — Status: UAT
- Assignee: 邓宇芩
- Completed: no
- Type: Enhancement | Feature: Offline Event | Priority: — | BR: BR-252
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214145762385551

**Description:**

On the ticket preview, the text "CONCERT TICKET" is fixed. Remove this as there's many different other types of events, not just concerts.

---

### Edit "Sales Status" copywriting and consolidate statuses (gid: 1214145762385647) — Status: —
- Assignee: 李超伟
- Completed: yes
- Type: Copywriting | Feature: Events | Priority: — | BR: BR-251
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214145762385647

**Description:**

**This can be reserved for next phase's enhancement:** 

As an event organiser, it's more useful to be able to instantly distinguish between what is published on the page versus what is not. The sales status (on sale / not on sale) are also very useful data points, but user can just click into the event listing to check that. 

Proposed changes to provide a clearer high-level overview for the user: 

1. Edit "Sales Status" → "Status"
2. Only 2 statuses: Draft / Active
3. Draft: when it's not published / was published, but taken down (un-publish) / not yet published
4. Active: when its published (regardless if the ticket sale has started or ended , or if tickets are all sold out)

---

### Make "Edit event" feature more prominent (gid: 1214220227554245) — Status: UAT
- Assignee: 邓宇芩
- Completed: no
- Type: — | Feature: Events | Priority: — | BR: BR-250
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214220227554245

**Description:**

Currently, it's hard to find the "Edit event" button, the current flow: 
On the event listing, click 3 dots →  "View event" → directed to event details page → click "Edit event" button 

Change request: proposing 2 options - option A is preferred, but option B is a quicker fix. 

Option A :

1. add "Edit event", under "View event" (see yellow arrow)  and connect to “event info”
*2. if we have the edit button on above page, we need to remove "Edit event" button here: 
*
Option B: 

1. Change "[eye icon]View event" to "[edit icon]Edit event" :
* 
2. Make the "Event Event" button more prominent: 
*

---

### Rename statuses under "Sales Status"  (gid: 1214145762385655) — Status: UAT
- Assignee: 邓宇芩
- Completed: no
- Type: Copywriting | Feature: Events | Priority: — | BR: BR-249
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214145762385655

**Description:**

Current statuses under "Sales Status":

1. "On Sale" → Active
2. "Sales Pused" → Paused

---

### Edit "Gross" to "Gross Revenue"  (gid: 1214145762385651) — Status: UAT
- Assignee: 邓宇芩
- Completed: no
- Type: Copywriting | Feature: Events | Priority: — | BR: BR-248
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214145762385651

**Description:**

Edit "Gross" to "Gross Revenue".

---

### Remove "Event & On-sale times" header, replace with "Event Time" (gid: 1214146596516263) — Status: UAT
- Assignee: 邓宇芩
- Completed: no
- Type: Copywriting | Feature: Offline Event | Priority: — | BR: BR-247
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214146596516263

**Description:**

Remove "Event & On-sale times" header, replace with "Event Time"

---

### [Event Info] [publish date] Edit copy from "Listing Publish Date" to "Publish Date"     (gid: 1214146596516266) — Status: UAT
- Assignee: 邓宇芩
- Completed: no
- Type: Enhancement | Feature: Offline Event | Priority: — | BR: BR-246
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214146596516266

**Description:**

*

---

### The character limit  for "Ticket Name" is too low, only allows 6 characters, should allow more.  (gid: 1214145762385549) — Status: UAT
- Assignee: 邓宇芩
- Completed: no
- Type: Enhancement | Feature: Offline Event | Priority: — | BR: BR-245
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214145762385549

**Description:**

Increase the character limit on Ticket Name to allow longer names aligned with typical event-name length. 

confirmed limit - 20

---

### [Event Introduction] Default Terms & Conditions remain after toggle off (gid: 1214148491273221) — Status: UAT
- Assignee: 邓宇芩
- Completed: no
- Type: Bug | Feature: Offline Event | Priority: — | BR: BR-244
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214148491273221

**Description:**

If i toggle to use the default terms and conditions, once i toggle off, the default set does not get removed. should be removed after i toggle off

---

### BBQ-CF-018 Unclear 'Failed' status (gid: 1214051359441379) — Status: Development
- Assignee: 李超伟
- Completed: no
- Type: — | Feature: — | Priority: High | BR: BR-203
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214051359441379

**Description:**

*

Rename "Failed" → "Unsuccessful" across all surfaces (creator portal + fan-facing)

---

### [NEW] Expired event/product status (gid: 1214133213384326) — Status: —
- Assignee: —
- Completed: yes
- Type: — | Feature: — | Priority: High | BR: BR-241
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214133213384326

**Description:**

Please consider greying out items/events that are expired/finished e.g. Let's Pop here to avoid confusion. 

*

---

### [NEW] Following artists does not persist on My Account page (gid: 1214133213384324) — Status: Fixed
- Assignee: 何浩楠
- Completed: no
- Type: — | Feature: — | Priority: High | BR: BR-240
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214133213384324

**Description:**

When I navigate to https://uatfans.beamco.co/account in logged in state (seasoned account), the 'Follow More Artist' list appears  for split second (attached) before disappearing. These are 2 artists whose communities I already joined. Please replicate.
**

---

### [NEW] Locale Bug in UATFANS (gid: 1214133213384318) — Status: UAT
- Assignee: 何浩楠
- Completed: no
- Type: — | Feature: — | Priority: High | BR: BR-239
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214133213384318

**Description:**

Chinese language persists during Profile Edit despite having English default. See attached:

**

---

### [Crowdfunding] Logic & Display (gid: 1214146590075473) — Status: UAT
- Assignee: 周威
- Completed: no
- Type: — | Feature: — | Priority: High | BR: BR-236
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214146590075473

**Description:**

****

**1. Crowdfunding Eligibility Logic**

- Reduce eligibility threshold from 200 points → **1 point minimum**
- Remove the **7-day waiting period** — joining community now awards 1 point instantly, making the fan immediately eligible
- Two ways to become eligible: **join the community** OR **make any purchase** (including free items)

**2. Loyalty Points Earning Logic**

- Free / $0 products currently award 0 points — **fix this**
- Any $0 purchase should award **28 points** (treating $0 as $1 at the 1:28 ratio)
- This is the minimum point unit — no purchase should ever result in 0 points

**3. Copy Updates**
**Current -** 
Be a fan of Dreebsby's Shop for 7 days to receive the following benefits:

- **Earn 200 loyalty points**
- **Unlock investment eligibility**

**Correct to - **

Exclusive Access: Top Fans Only
**This is reserved for [Creator Name]'s top fans. To qualify, either:

1. **Grab something from [Creator Name]'s shop; or**
2. **Join [Creator Name]'s community.**

**中文版本**

**1. 眾籌資格條件調整**

- 資格門檻從 200 點降至 **最低 1 點**
- 移除 **7 天等待期** — 加入社群即立即獲得 1 點，馬上具備投資資格
- 兩種獲得資格的方式：**加入社群** 或 **完成任何購買**（包含免費商品）

**2. 忠誠點數累積邏輯調整**

- 目前免費 / $0 商品獲得 0 點 — **需修正**
- 任何 $0 購買應獲得 **28 點**（以 BO is set 1:28 - 比例將 $0 視為 $1 計算）
- 此為最低點數單位 — 任何購買都不應獲得 0 點

**3. 文案更新**

此專屬機會僅開放給 [Creator Name] 的頂級粉絲。符合以下任一條件即可參與：

- 在 [Creator Name] 的商店購買商品；或
- 加入 [Creator Name] 的社群。

**⚠️ 已知漏洞（延至 Phase 2 處理）：** 用戶可加入社群獲得 1 點後退出，但保留資格。請與 Al 確認處理方式。

*

---

### Remove arrow  (gid: 1214145663954015) — Status: UAT
- Assignee: 邓宇芩
- Completed: no
- Type: — | Feature: Identity Verification | Priority: — | BR: BR-235
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214145663954015

**Description:**

Remove the arrow icon boxed in red as it's not clickable.

---

### Default avatar for fans (gid: 1214122481963815) — Status: Not a bug
- Assignee: 何浩楠
- Completed: no
- Type: Enhancement | Feature: Profile management  | Priority: — | BR: BR-234
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214122481963815

**Description:**

**The Problem:**
*What is the problem or pain point we are solving? *
Fan does not have a default profile pic. 

**Proposed Solution: **
*Describe how you imagine the enhanced / new feature working. *
fan should have a default avatar

**Examples:**
*Share any links or references.*
take reference to google avatar

---

### Add autosave message  (gid: 1213814657617570) — Status: Fixed
- Assignee: 邓宇芩
- Completed: no
- Type: Enhancement | Feature: Identity Verification | Priority: High | BR: BR-233
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1213814657617570

**Description:**

**The Problem:**
*What is the problem or pain point we are solving? *
Users don't know that their inputted information / uploads are actually being autosaved. 

**Proposed Solution: **
*Describe how you imagine the enhanced / new feature working. *

Add autosave message / indicator so users know they can return and complete the KYC process

---

### Fix conflicting messaging in "Verification Pending" banner (gid: 1213814657617531) — Status: —
- Assignee: yves.liu@pathfinders.studio
- Completed: no
- Type: Enhancement | Feature: Identity Verification | Priority: High | BR: BR-176
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1213814657617531

**Description:**

**The Problem:**
*What is the problem or pain point we are solving? *

The current identify verification flow contains copywriting contraditions that undermine the security of the platform and confuses the creator regarding their verification status.  

*
*
Contradictions: 

1. It says "verification pending", but followed by "verify now" button. So am i in a "pending" state or "action required" state?
2. I need to verify now to "unlock more features" but the fine print says "can freely use all features" - which one is it?
3. "Verification is required in order to withdraw your earnings", but verification should be a pre-requisite for not just withdraw earnings but also **publishing** any content (events, merch, crowdfundingetc) to prevent fraud at the source

**Proposed Solution: **
*Describe how you imagine the enhanced / new feature working. *

1. Edit copywriting based on above contradictions and
2. Be clear what verification is needed for - eg: publish content and create storefront
3. Be clear about why it's needed: prevent identity theft / fraud
4. Inform user how many days it takes for us to review their KYC (1 biz day)

5. Make verification a pre-requisite for publishing anything:
6. Creator can explore all the modules and even start entering info for their profile, event & merchandise pages, but when they get to the "publish" step, they should be directed to the verify their identity. Whatever they are working on should be autosaved and they can easily resume after verification is approved.

**Examples:**
*Share any links or references.*

---

### [Creator/Fans]  Login Enhancement (gid: 1214001943493602) — Status: Ready For Development
- Assignee: Jarax(康超敏)
- Completed: no
- Type: Enhancement | Feature: Login / Register | Priority: — | BR: BR-197
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214001943493602

**Description:**

—

---

### [Crowdfunding]  UX Enhancement (gid: 1214001943493594) — Status: Design
- Assignee: 李超伟
- Completed: no
- Type: Enhancement | Feature: Crowdfunding | Priority: — | BR: BR-180
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214001943493594

**Description:**

—

---

### [Fans] sign up enhancement  (gid: 1214080421132117) — Status: —
- Assignee: 李超伟
- Completed: no
- Type: — | Feature: — | Priority: — | BR: BR-210
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214080421132117

**Description:**

—

---

### [UAT FANS] Mixed language content without localization indicator (gid: 1213751594360108) — Status: Fixed
- Assignee: 李超伟
- Completed: no
- Type: — | Feature: — | Priority: High | BR: BR-169
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1213751594360108

**Description:**

**🔖 Linear Ticket:** BBQ-10
**🏷️ Portal:** [UAT FANS]
**⚡ Priority:** High (Linear P2)
**📋 State:** Requirement
**🏷️ Labels:** Bug, UX-Audit

---

**Environment:** UAT Fan Portal - HOWZ Store

**Issue:**
Bundle description in Chinese: "BUNDLE超級 VIP 套組內容（售價 2580 元，共限量 100 份）" while site is English.

**Additional Context:**

**Shop/Events Confusion:**
The same mixed language content appears in both Shop and Events contexts without clarification:

* Shop: "Limited Bundle" with Chinese description
* Events: Same product referenced

**No Localization Indicator:**
Chinese text appears with no:

* Language indicator/tag
* Translation option
* i18n framework in use

**Currency Inconsistency:**

* Description shows Chinese Yuan (2580 元)
* Store shows SGD pricing
* No exchange rate or clarification

**Impact:**

* Confusing for non-Chinese users
* Inconsistent UX across platform
* Currency mismatch creates purchase hesitation

---

**✅ Decision (Beamco Nerds Sync — March 24, 2026):**

* **Force translation to English only** (not bidirectional) for all fan-facing content
* Chinese font sizes may render slightly larger than English text; team confirmed this is **acceptable** as long as the language is consistent
* Implementation approach: force all user-input content to be translated into the designated language (per Pat's earlier suggestion)

*

---

### [UAT FANS] About tab is completely empty - adds zero value (gid: 1213751594310282) — Status: UAT
- Assignee: 何浩楠
- Completed: no
- Type: — | Feature: — | Priority: High | BR: BR-168
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1213751594310282

**Description:**

[Linear: BBQ-32] [Linear State: Triage] [Priority: Medium]

**Environment:** About tab on artist stores

**Issue:**
About tab contains:

* Same hero image as Home tab
* Same artist name as Home tab
* Same description already visible on Home tab
* **Large empty black space below**

**Zero unique content:**

* No biography
* No discography
* No media/press links
* No social media feed
* No milestones/timeline

**Impact:**

* Tab serves no purpose - duplicates Home content
* Wasted navigation slot
* Users expecting artist background find nothing

**Recommendation:** 
Either:

1. **Remove the About tab** entirely (if no content planned)
2. **Populate with rich content:** Bio, discography, press, milestones, social embed

Current state is worse than having no tab at all.

---

### [Artist] self-registration   (gid: 1213394294239746) — Status: Ready For Development
- Assignee: 李超伟
- Completed: no
- Type: — | Feature: — | Priority: High | BR: BR-85
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1213394294239746

**Description:**

https://www.figma.com/design/0gWC6dR1yzdEu0g1LqvRvJ/Beamco-Artist-Portal-v3?node-id=10960-25854

1. Add Artist Sign-up feature
2. Remove the "join wait list" feature

**

---

### "Spots" change to "Royalty shares" (gid: 1214247490554070) — Status: —
- Assignee: 邓宇芩
- Completed: no
- Type: — | Feature: — | Priority: — | BR: BR-265
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214247490554070

**Description:**

*
**

---

### [Fans] "Spots" change to "Royalty Shares" (gid: 1214273298896448) — Status: Fixed
- Assignee: 何浩楠
- Completed: no
- Type: — | Feature: — | Priority: — | BR: BR-267
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214273298896448

**Description:**

"Spots" change to "Royalty Shares"

---

## Subtasks of [Crowdfunding] UX Enhancement (parent gid: 1214001943493594)

### [Crowdfunding UAT] Membership card — function not explained; card design UX unreadable; card name vs display name distinction unclear (gid: 1213955330980090) — Status: Fixed
- Assignee: 邓宇芩
- Completed: no
- Type: Enhancement | Feature: Crowdfunding | Priority: — | BR: BR-181
- URL: https://app.asana.com/1/1205221415135461/task/1213955330980090

**Description:**

UAT feedback from Dan — 7 Apr 2026

Screenshot: Image 5 (Card Design panel)

Issues (3 related):
1. What is the membership card for? The purpose and context of the card within a crowdfunding campaign is not explained anywhere. Is it a backer reward? A VIP access pass? Needs a description.

2. The card design screen is unreadable — the card template preview overlaps with the form fields ("Card display name", "Custom Prefix"), making it very difficult to use. The overlay UI is visually cluttered and the modal/panel needs a redesign.

3. The distinction between "Card name" and "Card display name" is not clear. What does each refer to? Where does each appear?

Additional note:
Character length limit for display name appears to be causing truncation — "XXX" shown as placeholder suggests a very short max length. This needs clarification and possibly an increase.

**會員卡 — 功能未說明；卡片設計 UX 難以閱讀；卡片名稱與顯示名稱區分不清** 
**Dan 的 UAT 回饋 — 2026/4/7**
 
問題（3 個相關）：
 

1. 會員卡是做什麼用的？卡片在眾籌活動中的用途和情境完全沒有說明。它是贊助者獎勵？VIP 通行證？需要加描述。
2. 卡片設計畫面難以閱讀 — 卡片模板預覽與表單欄位（「卡片顯示名稱」、「自訂前綴」）重疊，非常難使用。覆蓋層 UI 視覺雜亂，面板需要重新設計。 3.「卡片名稱」和「卡片顯示名稱」的區別不清楚。各自代表什麼？分別會顯示在哪裡？
 
補充：顯示名稱的字元長度限制似乎造成截斷，placeholder 顯示「XXX」暗示最大長度非常短，需要說明並可能需要增加上限。

---

### [Crowdfunding UAT] "Plan copyright settings" — purpose unexplained; number of copyright slots needs more context (gid: 1213955331089128) — Status: Fixed
- Assignee: 邓宇芩
- Completed: no
- Type: Enhancement | Feature: Crowdfunding | Priority: — | BR: BR-182
- URL: https://app.asana.com/1/1205221415135461/task/1213955331089128

**Description:**

UAT feedback from Dan — 7 Apr 2026

Issue:
"Plan copyright settings" is shown in the Funding & Rewards section with a "No. of copyrights" field. It is not clear:
1. What this section is for — is this linking to music royalty/copyright ownership splits?
2. Whether the number of copyrights (e.g. 10) is independent or directly linked to the fund allocation percentage (e.g. 10% → 10 spots). If they are linked, this needs to be explained explicitly. If they are independent, the field needs better labelling and context.

Proposed solution:
Add a section description or tooltip explaining: "This defines how many ownership shares (copyright slots) will be offered to backers. Each slot represents X% of the copyright proceeds." Confirm with product/legal whether this is distinct from the fund allocation percentage.

**「方案版權設定」— 用途未說明；版權名額數量需要更多說明** 
**問題：** 「方案版權設定」出現在募資與獎勵區塊，有一個「版權數量」欄位。不清楚：
 

1. 這個區塊是做什麼的 — 是否與音樂版稅/版權所有權分配有關？
2. 版權數量（例如 10）是獨立的，還是直接與募資配比百分比（例如 10% → 10 個名額）掛鉤？如果有關聯，需要明確說明；如果獨立，欄位需要更好的標籤和說明。
 
**建議方案：** 加入區塊說明或提示文字：「此設定定義將提供給贊助者的所有權份額（版權名額）數量。每個名額代表版權收益的 X%。」需與產品/法務確認此欄位是否與募資配比百分比不同。

---

### [Crowdfunding UAT] Project Roadmap milestone description field needs explanation when editing dates (gid: 1213963601450377) — Status: UAT
- Assignee: 邓宇芩
- Completed: no
- Type: Enhancement | Feature: Crowdfunding | Priority: — | BR: BR-183
- URL: https://app.asana.com/1/1205221415135461/task/1213963601450377

**Description:**

UAT feedback from Dan — 7 Apr 2026

Screenshot: Image 6 (Project Roadmap — milestones: Pre-production, Recording & Mixing, Visual & Promotion Setup, Completion Date)

Issue:
When editing a milestone date in the Project Roadmap (e.g. "Recording & Mixing"), there is no description shown or prompted. The field appears to only show a date. A description field is needed so creators can explain what will happen at each milestone — currently "Add your description" is shown as a placeholder but it's unclear how to access/edit it.

Additional note from UAT:
The "Recording & Mixing" milestone has a description ("sing song") which appears to have been set — it's not clear when this was entered or how. The UX for entering milestone descriptions needs to be more discoverable and consistent.

**專案路線圖里程碑描述欄位在編輯日期時需要說明** 
**問題：** 在專案路線圖中編輯里程碑日期（例如「錄音與混音」）時，沒有顯示或提示描述欄位。欄位看起來只顯示日期。需要描述欄位讓創作者解釋每個里程碑要做什麼 — 目前顯示「加入您的描述」作為 placeholder，但不清楚如何存取/編輯。
 
補充：「錄音與混音」里程碑有一段描述（「sing song」），似乎已經設定過 — 不清楚何時輸入或如何輸入。輸入里程碑描述的 UX 需要更容易被發現且一致。

**Requirment**

1. Add hover effects for roadmap
2. include template subtext
*

---

### [Crowdfunding UAT] "Fundraising Launch Date & Time" has two identical date fields — purpose of second field unclear (gid: 1213955331162668) — Status: Bug Found
- Assignee: 周威
- Completed: no
- Type: Enhancement | Feature: Crowdfunding | Priority: — | BR: BR-184
- URL: https://app.asana.com/1/1205221415135461/task/1213955331162668

**Description:**

UAT feedback from Dan — 7 Apr 2026

Screenshot: Image 2 (Set Publish Date screen)

Issue:
The "Fundraising Launch Date & Time" row shows two date pickers side by side, both set to "2026-04-08 00:00:00" with a tilde (~) between them. It is not clear what each field represents. Is this a start date and end date? If so, labels should reflect that clearly.

Proposed solution:
Label the two fields explicitly: "Fundraising Start Date & Time" and "Fundraising End Date & Time" (or "Campaign Close Date"). Add help text confirming what happens at each date point.

**「募資上線日期與時間」有兩個相同的日期欄位 — 第二個欄位用途不明** 
**問題：** 「募資上線日期與時間」這一行並排顯示兩個日期選擇器，都設為「2026-04-08 00:00:00」，中間有波浪號（~）。不清楚各欄位代表什麼。這是開始日期和結束日期嗎？如果是，標籤應該清楚反映。
 
**建議方案：** 明確標註兩個欄位：「募資開始日期與時間」和「募資結束日期與時間」（或「活動截止日期」）。加入說明文字確認每個日期時間點會發生什麼。

---

### [Crowdfunding UAT] Two name fields — "Fundraising Project Name" and "Product Name After Successful Funding" — purpose unclear, consider consolidating (gid: 1213963601441247) — Status: UAT
- Assignee: 邓宇芩
- Completed: no
- Type: Enhancement | Feature: Crowdfunding | Priority: — | BR: BR-186
- URL: https://app.asana.com/1/1205221415135461/task/1213963601441247

**Description:**

UAT feedback from Dan — 7 Apr 2026

Screenshot: Image 1 (Project Basic Settings screen)

Issue:
There are two separate name fields:
1. "Fundraising Project Name" — filled as "Try Crowdfunding with me!"
2. "Product Name After Successful Funding" — filled as "CF1"

It is not clear why two names are needed or how they differ. This is confusing at first glance.

Proposed solution:
Either consolidate into one field with clearer explanation, or add help text beneath each field explaining exactly where each name appears (e.g. "this name appears on your public campaign page" vs "this is what the product is called after funding closes").

**兩個名稱欄位 —「募資專案名稱」和「成功募資後的產品名稱」— 用途不清，考慮合併** 
**問題：** 有兩個獨立的名稱欄位： 1.「募資專案名稱」— 填入「Try Crowdfunding with me!」 2.「成功募資後的產品名稱」— 填入「CF1」
 
不清楚為什麼需要兩個名稱，或它們有什麼不同。乍看之下令人困惑。
 
**建議方案：** 合併為一個欄位並提供更清楚的說明，或在每個欄位下方加入說明文字，說明各名稱出現在哪裡（例如「此名稱會顯示在您的公開活動頁面」vs「這是募資結束後的產品名稱」）。

---

### [Production] Possible Bug: Cant click to next because not sure whats required (gid: 1213975207962753) — Status: UAT
- Assignee: 邓宇芩
- Completed: no
- Type: Enhancement | Feature: Crowdfunding | Priority: — | BR: BR-191
- URL: https://app.asana.com/1/1205221415135461/task/1213975207962753

**Description:**

—

---

### [Production] Remove "All" From Purchase condition and then change copy (gid: 1213975162709229) — Status: Fixed
- Assignee: 邓宇芩
- Completed: no
- Type: Enhancement | Feature: Crowdfunding | Priority: — | BR: BR-192
- URL: https://app.asana.com/1/1205221415135461/task/1213975162709229

**Description:**

*

---

### Set up crowdfunding basics   (gid: 1213894020869842) — Status: Copywriting 
- Assignee: Sam Padbidri
- Completed: no
- Type: Enhancement | Feature: Crowdfunding | Priority: High | BR: BR-193
- URL: https://app.asana.com/1/1205221415135461/project/1213723482858214/task/1213894020869842

**Description:**

Problem:

---

### Suppress "Project Created" Toast on Project Creation (gid: 1213893945645011) — Status: Ready For Development
- Assignee: 邓宇芩
- Completed: no
- Type: Enhancement | Feature: Crowdfunding | Priority: — | BR: BR-194
- URL: https://app.asana.com/1/1205221415135461/task/1213893945645011

**Description:**

**The Problem:**
*What is the problem or pain point we are solving?*

Currently, clicking the "Create Project" button from the crowdfunding module immediately triggers a success toast: "Project created successfully". This occurs before the user has entered any data and can make users fear they had published a blank project publicly. Repeatedly clicking also creates multiple empty draft projects.

Steps to reproduce:

1. Click "Create Project"
2. Success toast appears immediately
3. Clicking multiple times creates multiple empty projects

**Proposed Solution:**
*Describe how you imagine the enhanced / new feature working.*

1. Remove the immediate success toast on "Create Project" click.
2. Auto-save the draft in the background so the user doesn't lose progress, with the following gating rules:
3. **Project title is a required field.** If the project title is not filled in, no draft should be auto-saved (nothing is persisted until the title exists).
4. If the user enters no data and closes the page or navigates back, the in-progress draft should be automatically deleted — empty drafts should never be retained.

5. The success toast should appear only after the user clicks a manual "Save" or "Publish" button. Toast copy should be adjusted based on scenario (e.g., "Draft saved" vs. "Project published").

**Acceptance Criteria:**

1. Clicking "Create Project" no longer fires a success toast.
2. No draft record is created until the required Project Title field has a value.
3. If a user starts a draft (title entered) and then leaves/backs out without filling further data — behavior per design (see Yves' note: empty/abandoned drafts are deleted).
4. Manual "Save" shows a "Draft saved" toast; manual "Publish" shows a "Project published" toast.
5. Repeatedly clicking "Create Project" no longer results in multiple ghost projects.

**Open Questions / Notes:**

- Confirm with dev: is gating auto-save on the Project Title field feasible within the current auto-save flow?
- Confirm timing of "abandoned draft" cleanup — on navigation away, on session end, or both?

**Examples:**
*Share any links or references.*

**取消專案建立時的「專案已建立」成功提示**

**問題：** 目前在眾籌模組中點擊「建立專案」按鈕後，會立即出現成功提示：「專案建立成功」。這發生在使用者尚未輸入任何資料之前，可能讓使用者擔心自己已經公開發佈了一個空白專案。

重現步驟：

1. 點擊「建立專案」
2. 成功提示出現
3. 因為重複執行步驟 1，產生了多個專案

**建議方案：**

1. 移除立即出現的成功提示 — 系統應在背景建立草稿，讓使用者不會丟失進度。
2. **專案標題為必填欄位**；若未填入標題，則不觸發自動儲存（沒有草稿被建立）。
3. 若使用者未填寫任何資料就關閉頁面或返回上一頁，該筆草稿應自動刪除。
4. 成功提示僅應在使用者手動點擊「儲存」或「發佈」後出現，且文案需依情境調整。

**Confirmed Requirement: **

1. Clicking "Create Project" no longer fires a success toast.
2. No draft record is created until the required Project Title field has a value.
3. If a user starts a draft (title entered) and then leaves/backs out without filling further data — behavior per design (see Yves' note: empty/abandoned drafts are deleted).
4. Manual "Save" shows a "Draft saved" toast; manual "Publish" shows a "Project published" toast.
5. Repeatedly clicking "Create Project" no longer results in multiple ghost projects.

---

### Add helper text across crowdfunding forms (gid: 1213903778010484) — Status: Fixed
- Assignee: 邓宇芩
- Completed: no
- Type: Enhancement | Feature: Crowdfunding | Priority: High | BR: BR-195
- URL: https://app.asana.com/1/1205221415135461/task/1213903778010484

**Description:**

**The Problem:**
*What is the problem or pain point we are solving? *
Currently, there's a lack of guidance for users during the crowdfunding set up process. Users may not know what they need to fill in. Using examples in the placeholder text inside the textbox is insufficient because 1) it disappears once the user starts typing, leaves no reference point during final review, 2) the given example does not apply to all types of campaigns
*
**Proposed Solution: **
*Describe how you imagine the enhanced / new feature working. *

Add helper text under every information requested - don't put the helper text inside the entry field, put it on top of the entry field, so the user can still refer to the helper text after they inputted something in the entry. will be good for overall review to see the helper text.

**Examples:**
*Share any links or references.*

From indiegogo:
*

**在眾籌表單全面加入輔助說明文字** 
**問題：** 目前眾籌設定流程缺乏引導。使用者可能不知道需要填什麼。在輸入框內使用 placeholder 作為範例文字並不足夠，因為：1) 使用者開始輸入後就消失了，最終審核時沒有參考依據；2) 給的範例不適用於所有類型的活動。
 
**建議方案：** 在每個欄位上方加入輔助說明文字 — 不要放在輸入框內，放在輸入框上方，這樣使用者輸入內容後仍可參考。對整體審核流程也有幫助。
 
**參考範例：** 來自 Indiegogo 的做法。

---

### BBQ-CF-007 Currency Inconsistencies: Fund Allocation, Funding/Rewards (gid: 1213962292842158) — Status: UAT
- Assignee: 邓宇芩
- Completed: no
- Type: — | Feature: — | Priority: High | BR: BR-204
- URL: https://app.asana.com/1/1205221415135461/task/1213962292842158

**Description:**

The donut chart center text shows "NT $0" even though the account settlement currency is USD is Step 2. This is a currency mismatch. Unclear settlement currency. 

**

---

### BBQ-CF-008 "Organize Team" Step: No Way to Add Team Members (gid: 1213962292842165) — Status: UAT
- Assignee: 邓宇芩
- Completed: no
- Type: — | Feature: — | Priority: High | BR: BR-205
- URL: https://app.asana.com/1/1205221415135461/task/1213962292842165

**Description:**

Only the auto-added creator ("pat test") is shown. There's no visible "Add Member" or "Invite" button to add collaborators.

---

### Populate Primary and Secondary Category Fields (gid: 1213903778010471) — Status: UAT
- Assignee: 邓宇芩
- Completed: no
- Type: Enhancement | Feature: Crowdfunding | Priority: High | BR: BR-196
- URL: https://app.asana.com/1/1205221415135461/task/1213903778010471

**Description:**

**The Problem:**
*What is the problem or pain point we are solving? *

Currently, there's only one option to select from under "Primary Category" and "Secondary Category", so creators would have to select that to move forward with their submission. 

**

**Proposed Solution: **
*Describe how you imagine the enhanced / new feature working. *

Populate more categories in the admin and consider what they should be called. Currently the one available primary category is "digital merchandise: music". could it not simply be called "music"?

**Examples:**
*Share any links or references.*

**填充主要分類和次要分類欄位** 
**問題：** 目前「主要分類」和「次要分類」下只有一個選項可選，創作者只能選那個才能繼續提交。
 
**建議方案：** 在後台新增更多分類選項，並考慮命名方式。目前唯一可用的主要分類是「數位商品：音樂」。能不能直接叫「音樂」就好？

---

### BBQ-CF-016 [FANS] Fans not getting updates on crowdfund notification updates when artist update events. (gid: 1213962292842199) — Status: Design Review
- Assignee: 何浩楠
- Completed: no
- Type: — | Feature: — | Priority: High | BR: BR-206
- URL: https://app.asana.com/1/1205221415135461/task/1213962292842199

**Description:**

*

1. When artist updates the campaign roadmap etc., fans do not receive updates.
2. Spoke to Sam and Dan. Would it be possible to make the fans update section UI/UX (above) like Artist roadmap attached below?
*

---

### [Production] Cant Create Campaign Even though everything filled up (Infinite Loading) (gid: 1213962444535096) — Status: UAT
- Assignee: 邓宇芩
- Completed: no
- Type: — | Feature: — | Priority: — | BR: BR-202
- URL: https://app.asana.com/1/1205221415135461/task/1213962444535096

**Description:**

*

---

### BBQ-CF-017 Crowdfund dashboard lacks primary navigation (gid: 1214051359441374) — Status: UAT
- Assignee: 邓宇芩
- Completed: no
- Type: — | Feature: — | Priority: Medium | BR: BR-207
- URL: https://app.asana.com/1/1205221415135461/task/1214051359441374

**Description:**

*Right now, after clicking on 'Overview' of the crowdfunding project, it's challenging for artists to navigate back to /crowdfunding as it only has secondary breadcrumbs right now. Consider adding back button.

---

### [Production - Artist] Copywriting (gid: 1214068180465016) — Status: Bug Found
- Assignee: 何浩楠
- Completed: no
- Type: — | Feature: — | Priority: — | BR: BR-208
- URL: https://app.asana.com/1/1205221415135461/task/1214068180465016

**Description:**

*

---

### BBQ-CF-018 Unclear 'Failed' status (gid: 1214051359441379) — Status: Development
- Assignee: 李超伟
- Completed: no
- Type: — | Feature: — | Priority: High | BR: BR-203
- URL: https://app.asana.com/1/1205221415135461/project/1207211433173653/task/1214051359441379

**Description:**

*

Rename "Failed" → "Unsuccessful" across all surfaces (creator portal + fan-facing)

---

### [Crowdfunding UAT] "Demo media" field — purpose and use case not explained (gid: 1213963130586175) — Status: Done
- Assignee: —
- Completed: yes
- Type: Enhancement | Feature: Crowdfunding | Priority: — | BR: BR-188
- URL: https://app.asana.com/1/1205221415135461/task/1213963130586175

**Description:**

UAT feedback from Dan — 7 Apr 2026

Screenshot: Image 1 (Project Media Upload step — "Upload cover photo and demo video")

Issue:
The "demo media" / demo video upload field has no explanation of what it is for. Questions from a creator's perspective:
- Is this a trailer for the campaign?
- Is it a music preview or sample of what backers will receive?
- Is it optional or required?
- What file formats and sizes are accepted?
- Where does this video appear — on the campaign page? In a player?

Proposed solution:
Add a clear label rename ("Campaign Preview Video" or "Music Demo") and help text: "Upload a short video or audio clip to give fans a preview of what they're supporting. This will appear on your campaign page. Max [X]MB, MP4/MOV/MP3 accepted."

「**Demo 媒體」欄位 — 用途和使用情境未說明** 
**問題：** Demo 媒體 / Demo 影片上傳欄位沒有解釋其用途。從創作者角度的疑問：
 

- 這是活動的預告片嗎？
- 是贊助者將收到的音樂預覽或試聽嗎？
- 是可選的還是必填的？
- 接受什麼檔案格式和大小？
- 這個影片會顯示在哪裡 — 活動頁面上？播放器中？
 
**建議方案：** 重新命名標籤（「活動預覽影片」或「音樂 Demo」），並加入說明文字：「上傳一段短影片或音訊片段，讓粉絲預覽他們支持的內容。此內容將顯示在您的活動頁面。最大 [X]MB，支援 MP4/MOV/MP3。」

---

### [Crowdfunding UAT] "Project Preview Date" — term unexplained, needs help text or tooltip (gid: 1213963130474514) — Status: Done
- Assignee: —
- Completed: yes
- Type: Enhancement | Feature: Crowdfunding | Priority: — | BR: BR-185
- URL: https://app.asana.com/1/1205221415135461/task/1213963130474514

**Description:**

UAT feedback from Dan — 7 Apr 2026

Screenshot: Image 2 (Set Publish Date screen)

Issue:
The field "Project Preview Date" has no explanation. It is not clear what "preview" means in the context of a crowdfunding campaign — does it mean the campaign is visible but not open for pledges? Is it a teaser page? Who can see it?

Proposed solution:
Add a tooltip or inline help text explaining: "The preview date is when your campaign page becomes visible to the public before fundraising opens. Fans can see your project but cannot pledge yet."

**「專案預覽日期」— 術語未說明，需要說明文字或提示** 
**問題：** 「專案預覽日期」欄位沒有任何解釋。在眾籌活動的情境中不清楚「預覽」是什麼意思 — 是指活動可見但尚未開放贊助？是預告頁面？誰可以看到？
 
**建議方案：** 加入提示或行內說明文字：「預覽日期是您的活動頁面在募資開始前向大眾公開的時間。粉絲可以看到您的專案但尚無法贊助。」

---

### [Production] Publish Date Fields Very Confusing (gid: 1213975207962744) — Status: Done
- Assignee: —
- Completed: yes
- Type: Enhancement | Feature: Crowdfunding | Priority: — | BR: BR-187
- URL: https://app.asana.com/1/1205221415135461/task/1213975207962744

**Description:**

*

---

### [Crowdfunding UAT] Cover photo upload — no example shown; explanation insufficient (gid: 1213962445090235) — Status: Done
- Assignee: —
- Completed: yes
- Type: Enhancement | Feature: Crowdfunding | Priority: — | BR: BR-189
- URL: https://app.asana.com/1/1205221415135461/task/1213962445090235

**Description:**

UAT feedback from Dan — 7 Apr 2026

Screenshot: Image 1 (Project Media Upload step — "Upload cover photo and demo video")

Issue:
The cover photo upload field has no visual example showing what a good cover photo looks like, what dimensions are required, or what aspect ratio to use. The description is not clear enough to guide a creator who hasn't done this before.

Proposed solution:
Add a visual example or placeholder showing ideal dimensions/ratio (e.g. 16:9 recommended, 1920x1080px). Consider showing a sample thumbnail. Add text guidance: "This is the main image fans will see on your campaign page — use a high-quality horizontal image."

**封面照上傳 — 沒有範例；說明不足** 
**問題：** 封面照上傳欄位沒有視覺範例展示好的封面照長什麼樣、需要什麼尺寸或比例。對於沒有做過的創作者而言，描述不夠清楚。
 
**建議方案：** 加入視覺範例或佔位圖片，顯示理想尺寸/比例（例如建議 16:9、1920x1080px）。考慮展示一個範例縮圖。加入文字引導：「這是粉絲在您活動頁面上看到的主圖 — 請使用高品質的橫向圖片。」

---

### [Production] Need to Amend the Categories (gid: 1213975207962737) — Status: Done
- Assignee: —
- Completed: yes
- Type: Enhancement | Feature: Crowdfunding | Priority: — | BR: BR-190
- URL: https://app.asana.com/1/1205221415135461/task/1213975207962737

**Description:**

*

---

### [Production Bug - Artist] Organise Team Shows Completed before details filled out (gid: 1214068180465011) — Status: Done
- Assignee: —
- Completed: yes
- Type: — | Feature: — | Priority: — | BR: BR-209
- URL: https://app.asana.com/1/1205221415135461/task/1214068180465011

**Description:**

*

---

### remove toast in fans preview (gid: 1214125537231196) — Status: —
- Assignee: 李超伟
- Completed: no
- Type: — | Feature: — | Priority: — | BR: BR-213
- URL: https://app.asana.com/1/1205221415135461/task/1214125537231196

**Description:**

預覽粉絲端，若資訊為空，不需要taost在頂部。

*

---

###  (gid: 1214125537231201) — Status: —
- Assignee: —
- Completed: no
- Type: — | Feature: — | Priority: — | BR: BR-214
- URL: https://app.asana.com/1/1205221415135461/task/1214125537231201

**Description:**

—

---

