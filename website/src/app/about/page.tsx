import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">關於我們</h1>
          <p className="text-primary-200 mt-2 text-lg">循環經濟的實踐者，再生塑料的專家</p>
        </div>
      </section>

      {/* Company intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Image src="/logo.svg" alt="泳鉅鑫 Logo" width={64} height={64} className="rounded-full" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">泳鉅鑫再生塑料股份有限公司</h2>
                  <p className="text-gray-500">Yong Jyu Sin Plastic Co., Ltd.</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                泳鉅鑫再生塑料成立於 2013 年，專注於塑膠再製事業，以「循環經濟」為核心理念，運用再生環保系統技術，將廢棄塑料分離、粉碎、清洗、造粒，轉化為高品質的再生塑料粒子。
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                主力產品為 PC（聚碳酸酯）再生粒子及粉碎料，產品具有無色透明、耐熱、抗衝擊、阻燃等優異特性，廣泛應用於電子電器、汽車零件、光學器材等高附加價值產業。
              </p>
              <p className="text-gray-600 leading-relaxed">
                公司位於臺南市，在新化區及永康區擁有三座廠房，斥資逾 3 億元導入智慧化資訊系統及機械物聯網設備，打造一條龍產品履歷追溯系統，並獲得經濟部「中小企業加速投資行動方案」核准。
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-green-50 rounded-2xl p-8 border">
              <h3 className="text-lg font-bold text-gray-900 mb-6">公司基本資料</h3>
              <dl className="space-y-4">
                {[
                  ['公司全名', '泳鉅鑫再生塑料股份有限公司'],
                  ['統一編號', '54074274'],
                  ['負責人', '林心玲'],
                  ['成立日期', '2013 年 4 月 11 日'],
                  ['資本額', 'NT$ 22,500,000'],
                  ['地址', '臺南市新化區中山路 3 巷 85 號'],
                  ['電話', '06-5801106'],
                  ['傳真', '06-5901188'],
                ].map(([label, value]) => (
                  <div key={label} className="flex">
                    <dt className="w-24 text-sm text-gray-500 shrink-0">{label}</dt>
                    <dd className="text-sm font-medium text-gray-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">核心優勢</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '♻️',
                title: '循環經濟',
                desc: '將廢棄塑料轉化為高價值再生原料，減少資源浪費，促進永續發展。',
              },
              {
                icon: '🤖',
                title: '智慧製造',
                desc: '導入 IoT 物聯網及大數據戰情中心，即時監控七大製造部門，確保品質穩定。',
              },
              {
                icon: '🔬',
                title: '品質保證',
                desc: '每批產品經嚴格品質檢測，提供 SGS 第三方檢測報告，物性媲美新料。',
              },
              {
                icon: '🌱',
                title: 'ESG 永續',
                desc: '積極推動碳盤查及 ESG 計畫，以實際行動實踐企業社會責任。',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">公司里程碑</h2>
          <div className="space-y-6">
            {[
              { year: '2013', event: '泳鉅鑫塑膠有限公司成立，開始從事塑膠再製事業' },
              { year: '2016', event: '擴大營運規模，增設永康區廠房' },
              { year: '2019', event: '變更為「泳鉅鑫塑膠股份有限公司」，資本額增至 2,250 萬' },
              { year: '2022', event: '更名為「泳鉅鑫再生塑料股份有限公司」，聚焦再生塑料領域' },
              { year: '2023', event: '斥資逾 3 億元導入智慧化系統，打造一條龍產品履歷' },
              { year: '2024', event: '獲經濟部「中小企業加速投資行動方案」核准' },
              { year: '2025', event: '啟動碳盤查及 ESG 永續發展計畫' },
              { year: '2026', event: '全新 B2B 電商平台上線，拓展數位化服務' },
            ].map((item, i) => (
              <div key={item.year} className="flex gap-6 items-start">
                <div className="bg-primary-600 text-white font-bold text-sm px-3 py-1.5 rounded-lg shrink-0 w-16 text-center">
                  {item.year}
                </div>
                <div className="flex-1 border-l-2 border-primary-200 pl-6 pb-2">
                  <p className="text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">生產基地</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: '新化一廠', location: '臺南市新化區', desc: '總部及主要生產基地，配備智慧化分選及造粒產線', size: '主力廠房' },
              { name: '新化二廠', location: '臺南市新化區', desc: '粉碎、清洗及原料前處理廠區', size: '前處理廠' },
              { name: '永康廠', location: '臺南市永康區', desc: '成品倉儲及物流調度中心', size: '倉儲物流' },
            ].map((factory) => (
              <div key={factory.name} className="bg-white rounded-xl p-6 border">
                <div className="bg-primary-50 rounded-lg aspect-video flex items-center justify-center mb-4">
                  <span className="text-5xl opacity-30">🏭</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{factory.name}</h3>
                <p className="text-sm text-primary-600">{factory.location} · {factory.size}</p>
                <p className="text-sm text-gray-500 mt-2">{factory.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
