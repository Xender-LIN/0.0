export interface NewsItem {
  id: number
  slug: string
  title: string
  category: '公司動態' | '產業新聞' | '技術文章'
  date: string
  excerpt: string
  image: string
}

export const news: NewsItem[] = [
  {
    id: 1,
    slug: 'investment-3-billion',
    title: '泳鉅鑫斥資逾 3 億元導入智慧化系統，打造一條龍產品履歷',
    category: '公司動態',
    date: '2026-03-15',
    excerpt: '泳鉅鑫再生塑料在臺南新化區及永康區三座廠房全面導入智慧化資訊系統及機械物聯網設備，運用大數據及戰情中心監控七大製造部門，打造更完善的一條龍產品履歷追溯系統。',
    image: '/images/news-smart.jpg',
  },
  {
    id: 2,
    slug: 'esg-carbon-audit',
    title: '泳鉅鑫啟動碳盤查及 ESG 永續發展計畫',
    category: '公司動態',
    date: '2026-03-01',
    excerpt: '秉持垃圾減量及促進循環經濟理念，泳鉅鑫正式啟動碳盤查及 ESG 計畫，目標在 2027 年前完成溫室氣體排放盤查登錄，積極邁向淨零排放。',
    image: '/images/news-esg.jpg',
  },
  {
    id: 3,
    slug: 'recycled-pc-market-trend',
    title: '2026 年再生 PC 市場趨勢：需求持續成長，環保法規推動產業升級',
    category: '產業新聞',
    date: '2026-02-20',
    excerpt: '隨著歐盟新循環經濟行動計畫及各國碳邊境調整機制（CBAM）陸續上路，再生塑料需求持續攀升。再生 PC 因其優異的物性及透明度，在電子產品及汽車產業的需求尤為強勁。',
    image: '/images/news-market.jpg',
  },
  {
    id: 4,
    slug: 'pc-recycling-technology',
    title: '聚碳酸酯（PC）再生技術解析：從廢料到高品質再生粒子',
    category: '技術文章',
    date: '2026-02-10',
    excerpt: 'PC 再生製程包含分選、粉碎、清洗、乾燥、造粒等步驟。本文深入解析各階段的技術要點，以及如何確保再生粒子的品質穩定性與物性一致性。',
    image: '/images/news-tech.jpg',
  },
  {
    id: 5,
    slug: 'sme-investment-program',
    title: '泳鉅鑫獲經濟部「中小企業加速投資行動方案」核准',
    category: '公司動態',
    date: '2026-01-15',
    excerpt: '泳鉅鑫再生塑料通過經濟部中小企業加速投資行動方案審核，計畫擴大投資智慧化設備，預期可為臺南地區創造更多就業機會。',
    image: '/images/news-investment.jpg',
  },
]
