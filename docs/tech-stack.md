# 技術方案建議 (Technical Architecture Proposal)

> 泳鉅鑫再生塑料 — Recommended Technology Stack & System Architecture

---

## 1. 系統架構總覽 (System Architecture Overview)

```
┌─────────────────────────────────────────────────────────┐
│                     CDN (CloudFront)                     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│    ┌──────────┐    ┌──────────┐    ┌──────────┐        │
│    │  Web App  │    │  Admin   │    │   LINE   │        │
│    │ (Next.js) │    │  Panel   │    │   LIFF   │        │
│    │  SSR/SSG  │    │ (React)  │    │ Mini App │        │
│    └─────┬─────┘    └─────┬────┘    └─────┬────┘        │
│          │                │               │             │
│    ┌─────┴────────────────┴───────────────┴─────┐       │
│    │              API Gateway (nginx)            │       │
│    └─────────────────────┬───────────────────────┘       │
│                          │                               │
│    ┌─────────────────────┴───────────────────────┐       │
│    │           Backend API (NestJS / Node.js)     │       │
│    ├──────────┬──────────┬──────────┬─────────────┤       │
│    │ 產品服務  │ 訂單服務  │ 會員服務  │ 行情服務    │       │
│    │ Product  │  Order   │  Member  │  Market    │       │
│    └────┬─────┴────┬─────┴────┬─────┴──────┬─────┘       │
│         │          │          │            │             │
│    ┌────┴──┐  ┌────┴──┐  ┌───┴───┐  ┌────┴────┐        │
│    │  PG   │  │ Redis │  │  ES   │  │  S3/R2  │        │
│    │(主DB) │  │(快取)  │  │(搜尋) │  │(檔案)   │        │
│    └───────┘  └───────┘  └───────┘  └─────────┘        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 2. 技術選型 (Technology Stack)

### 2.1 前端 (Frontend)

| 層面 | 技術 | 理由 |
|------|------|------|
| **框架** | Next.js 14+ (React) | SSR/SSG 支援 SEO、效能佳、生態系完整 |
| **語言** | TypeScript | 型別安全，減少 Bug，提升開發效率 |
| **樣式** | Tailwind CSS + Headless UI | 快速開發、高度客製化、RWD 友善 |
| **狀態管理** | Zustand | 輕量簡潔，適合中型專案 |
| **表單** | React Hook Form + Zod | 表單驗證，搭配 TypeScript 完美整合 |
| **圖表** | Recharts / Chart.js | 行情走勢圖表繪製 |
| **國際化** | next-intl | Next.js 原生多語言方案 |

### 2.2 後端 (Backend)

| 層面 | 技術 | 理由 |
|------|------|------|
| **框架** | NestJS (Node.js) | 模組化架構、TypeScript 原生支援、企業級 |
| **語言** | TypeScript | 前後端共用型別定義 |
| **ORM** | Prisma | 型別安全、Migration 管理、直覺化查詢 |
| **API 風格** | RESTful API | 簡單直覺，第三方對接友善 |
| **API 文件** | Swagger / OpenAPI | 自動產生 API 文件 |
| **驗證** | JWT + Refresh Token | Stateless 認證機制 |
| **權限** | RBAC (Role-Based Access Control) | 管理員/供應商/買家角色權限控管 |

### 2.3 資料庫 (Database)

| 層面 | 技術 | 理由 |
|------|------|------|
| **主資料庫** | PostgreSQL 16 | 穩定可靠、JSON 支援、全文搜尋 |
| **快取** | Redis 7 | Session、行情快取、購物車暫存 |
| **搜尋引擎** | Elasticsearch 8 (Optional) | 產品搜尋、篩選、分面搜尋 |
| **檔案儲存** | AWS S3 / Cloudflare R2 | 產品圖片、TDS/MSDS 文件存放 |

### 2.4 基礎建設 (Infrastructure)

| 層面 | 技術 | 理由 |
|------|------|------|
| **雲端** | AWS (ap-northeast-1 東京) 或 GCP (asia-east1 台灣) | 低延遲、服務完整 |
| **容器化** | Docker + Docker Compose | 標準化部署環境 |
| **CI/CD** | GitHub Actions | 自動化測試、建置、部署 |
| **CDN** | CloudFront / Cloudflare | 靜態資源加速、DDoS 防護 |
| **監控** | Sentry (Error) + Grafana (Metrics) | 錯誤追蹤、效能監控 |
| **日誌** | Winston + CloudWatch | 集中化日誌管理 |

### 2.5 第三方服務整合 (3rd-Party Integrations)

| 服務 | 供應商 | 用途 |
|------|--------|------|
| **金流** | 綠界 ECPay / 藍新 NewebPay | 信用卡、ATM 轉帳 |
| **LINE Pay** | LINE Pay API v3 | 行動支付 |
| **電子發票** | 綠界電子發票 / 關網 | 符合財政部規範 |
| **Email** | AWS SES / SendGrid | 交易通知、詢價通知 |
| **LINE 通知** | LINE Messaging API | 訂單通知、行情推播 |
| **LINE Login** | LINE Login v2.1 | 社群登入 |
| **物流** | 新竹物流 / 嘉里大榮 API | 物流追蹤 |
| **Google Maps** | Maps JavaScript API | 聯絡頁面地圖 |
| **Analytics** | Google Analytics 4 | 網站流量分析 |

---

## 3. 資料庫設計概要 (Database Schema Overview)

### 核心資料表 (Core Tables)

```
users (使用者)
├── id, email, password_hash, role, status
├── company_name, tax_id (統一編號)
├── phone, contact_person
└── created_at, updated_at

products (產品)
├── id, name, slug, brand_id, category_id
├── material_type, model_number, origin
├── is_recycled (BOOLEAN - 是否為再生料)
├── recycled_content_pct (再生料含量百分比)
├── source_type (原料來源：post-industrial/post-consumer)
├── specifications (JSONB - 物性參數：MFI, 密度, 拉伸強度等)
├── carbon_footprint (DECIMAL - kg CO₂e/kg)
├── price, stock_quantity
├── tds_url, msds_url
├── test_report_url (SGS/第三方檢測報告)
├── batch_number (批次號碼)
├── applicable_uses (JSONB - 適用用途：電子/汽車/光學等)
├── status (draft/published/archived)
└── created_at, updated_at

product_batches (產品批次履歷) — 再生塑料專用
├── id, product_id, batch_number
├── raw_material_source (原料來源描述)
├── processing_date (加工日期)
├── processing_steps (JSONB - 粉碎/清洗/造粒各階段記錄)
├── test_report_url (該批次檢測報告)
├── qr_code_url (追溯用 QR Code)
└── created_at

categories (分類)
├── id, name, slug, parent_id
└── sort_order, icon_url

brands (品牌)
├── id, name, slug, logo_url
├── description, country
└── is_featured

orders (訂單)
├── id, order_number, user_id
├── status, total_amount
├── shipping_address (JSONB)
├── payment_method, payment_status
└── created_at, updated_at

order_items (訂單明細)
├── id, order_id, product_id
├── quantity, unit_price, subtotal
└── note

quotes (詢報價)
├── id, buyer_id, status
├── items (JSONB - 詢價品項列表)
├── reply_price, reply_note
├── valid_until
└── created_at, replied_at

suppliers (供應商) — Phase 3
├── id, user_id, company_name
├── certification_status
├── shop_slug, shop_config (JSONB)
└── commission_rate

market_prices (行情報價)
├── id, material_type, brand
├── price, price_date
├── change_amount, change_percent
└── source

news (新聞)
├── id, title, slug, content
├── category, cover_image_url
├── is_published, published_at
└── created_at, updated_at

banners (Banner)
├── id, title, image_url, link_url
├── sort_order, is_active
└── start_date, end_date
```

---

## 4. API 設計概要 (API Design Overview)

### RESTful API 端點

```
# 認證 Authentication
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/refresh
POST   /api/auth/forgot-password

# 產品 Products
GET    /api/products                    # 產品列表（支援篩選/搜尋/分頁）
GET    /api/products/:slug              # 產品詳情
GET    /api/products/categories         # 分類列表
GET    /api/products/brands             # 品牌列表

# 詢報價 Quotes (RFQ)
POST   /api/quotes                      # 建立詢價
GET    /api/quotes                      # 我的詢價列表
GET    /api/quotes/:id                  # 詢價詳情
PUT    /api/quotes/:id/confirm          # 確認報價

# 購物車 Cart
GET    /api/cart                        # 取得購物車
POST   /api/cart/items                  # 加入購物車
PUT    /api/cart/items/:id              # 更新數量
DELETE /api/cart/items/:id              # 移除項目

# 訂單 Orders
POST   /api/orders                      # 建立訂單
GET    /api/orders                      # 訂單列表
GET    /api/orders/:id                  # 訂單詳情

# 行情 Market
GET    /api/market/prices               # 今日報價
GET    /api/market/prices/:material     # 特定材料走勢
GET    /api/market/news                 # 行情新聞

# 會員 Member
GET    /api/member/profile              # 個人資料
PUT    /api/member/profile              # 更新資料
GET    /api/member/favorites            # 收藏清單
POST   /api/member/favorites/:productId # 加入收藏

# 新聞 News
GET    /api/news                        # 新聞列表
GET    /api/news/:slug                  # 新聞詳情

# Admin API（後台管理）
/api/admin/products/*
/api/admin/orders/*
/api/admin/members/*
/api/admin/banners/*
/api/admin/news/*
/api/admin/market/*
/api/admin/reports/*
```

---

## 5. 安全性設計 (Security Design)

| 項目 | 措施 |
|------|------|
| **傳輸加密** | 全站 HTTPS (TLS 1.3) |
| **認證** | JWT Token (HttpOnly Cookie) + Refresh Token |
| **密碼** | bcrypt/argon2 雜湊 |
| **SQL Injection** | Prisma ORM 參數化查詢 |
| **XSS** | React 自動轉義 + CSP Header |
| **CSRF** | SameSite Cookie + CSRF Token |
| **Rate Limiting** | API 請求速率限制 |
| **個資保護** | 資料加密存儲、存取日誌、符合台灣個資法 |
| **檔案上傳** | 檔案類型/大小驗證、病毒掃描 |

---

## 6. 部署架構建議 (Deployment Architecture)

### 方案 A：AWS（推薦）

```
Route 53 (DNS)
  └── CloudFront (CDN)
        ├── S3 (靜態資源/檔案)
        └── ALB (Load Balancer)
              └── ECS Fargate (容器服務)
                    ├── Next.js (前台)
                    ├── NestJS (API)
                    └── Admin (後台)
              RDS PostgreSQL (資料庫)
              ElastiCache Redis (快取)
              SES (Email)
              CloudWatch (監控)
```

### 方案 B：Vercel + 自建 API

```
Vercel (Next.js 前台 + Admin)
  └── API Server (DigitalOcean / Linode)
        ├── NestJS (API)
        ├── PostgreSQL (Managed DB)
        └── Redis (Managed Cache)
      Cloudflare R2 (檔案儲存)
```

### 建議

- **初期 (Phase 1-2)**：方案 B，成本低、部署快
- **中後期 (Phase 3-4)**：遷移至方案 A，可擴展性佳

---

## 7. 開發工具與規範 (Development Tools & Standards)

| 項目 | 工具/規範 |
|------|----------|
| **版本控制** | Git + GitHub |
| **分支策略** | Git Flow (main / develop / feature / release) |
| **程式碼風格** | ESLint + Prettier |
| **Commit 規範** | Conventional Commits |
| **測試** | Jest (Unit) + Playwright (E2E) |
| **API 測試** | Postman / Insomnia |
| **設計協作** | Figma |
| **專案管理** | Jira / Linear / GitHub Projects |
| **文件** | Notion / Confluence |

---

*文件版本：v1.0*
*建立日期：2026-03-25*
