export default function ESGPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-green-700 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm mb-4">
            ♻️ Environmental · Social · Governance
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">ESG 永續發展</h1>
          <p className="text-green-100 mt-2 text-lg">從廢棄物到永續價值，用再生塑料守護地球</p>
        </div>
      </section>

      {/* Impact numbers */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '60%', label: '碳排減量', desc: '相比使用新料' },
              { value: '3,500+', label: '噸/年', desc: '廢塑料處理量' },
              { value: '2,100+', label: '噸 CO₂', desc: '年減碳量估計' },
              { value: '85%+', label: '資源回收率', desc: '廢料再利用比率' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-green-600">{stat.value}</div>
                <div className="text-sm font-medium text-gray-800 mt-1">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Economy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">循環經濟模式</h2>
            <p className="text-gray-500 mt-2">讓塑料不再是廢棄物，而是珍貴的資源</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔄',
                title: '回收',
                desc: '從工廠及消費端回收廢棄塑料，依材料類型精確分選分類。泳鉅鑫深耕 PC（聚碳酸酯）回收，確保原料品質。',
                color: 'bg-blue-50 border-blue-200',
              },
              {
                icon: '⚙️',
                title: '再製',
                desc: '經過粉碎、清洗、乾燥、造粒等製程，將廢料轉化為高品質再生粒子。全程智慧化監控，確保物性穩定一致。',
                color: 'bg-green-50 border-green-200',
              },
              {
                icon: '🌱',
                title: '再利用',
                desc: '再生粒子可直接用於射出成型、押出等加工製程，製成電子外殼、汽車零件、光學元件等高附加價值產品。',
                color: 'bg-emerald-50 border-emerald-200',
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-xl p-8 border ${item.color}`}>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carbon comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">碳排放比較</h2>
          <p className="text-center text-gray-500 mb-8">使用再生 PC 粒子相比新料，大幅降低碳足跡</p>
          <div className="bg-white rounded-2xl border p-8">
            <div className="space-y-6">
              {/* New material */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-gray-700">新料 PC（石化原料）</span>
                  <span className="font-bold text-red-600">5.0 kg CO₂e / kg</span>
                </div>
                <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-red-400 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              {/* Recycled */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-gray-700">泳鉅鑫再生 PC 粒子</span>
                  <span className="font-bold text-green-600">1.8 kg CO₂e / kg</span>
                </div>
                <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '36%' }}></div>
                </div>
              </div>
              <div className="text-center pt-4 border-t">
                <span className="text-2xl font-bold text-green-600">減少 64% 碳排放</span>
                <p className="text-sm text-gray-500 mt-1">每使用 1 噸再生 PC，減少約 3.2 噸 CO₂ 排放</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDGs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">聯合國永續發展目標 (SDGs)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: 9, title: '工業創新與基礎建設', desc: '智慧製造、IoT 物聯網技術導入', color: 'bg-orange-500' },
              { num: 12, title: '負責任的消費與生產', desc: '塑料再生循環利用、廢棄物減量', color: 'bg-yellow-600' },
              { num: 13, title: '氣候行動', desc: '碳盤查、減碳目標、碳足跡管理', color: 'bg-green-700' },
              { num: 17, title: '夥伴關係', desc: '與上下游企業共建循環經濟生態', color: 'bg-blue-800' },
            ].map((sdg) => (
              <div key={sdg.num} className="rounded-xl overflow-hidden border">
                <div className={`${sdg.color} text-white p-4`}>
                  <div className="text-3xl font-bold">SDG {sdg.num}</div>
                  <div className="text-sm mt-1 opacity-90">{sdg.title}</div>
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-600">{sdg.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Manufacturing */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">智慧製造 x ESG</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏭 戰情中心</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                運用大數據技術建立戰情中心，即時監控七大製造部門的生產數據，包含：
              </p>
              <ul className="space-y-2">
                {['分選部門', '粉碎部門', '清洗部門', '乾燥部門', '造粒部門', '品檢部門', '包裝倉儲'].map((dept) => (
                  <li key={dept} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    {dept}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 border">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📊 產品履歷系統</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                斥資逾 3 億元建立一條龍產品履歷追溯系統，每批產品都可追溯：
              </p>
              <ul className="space-y-2">
                {[
                  '原料來源與分類',
                  '各階段加工參數',
                  '品質檢測數據',
                  '環境監測記錄',
                  'SGS 第三方檢測結果',
                  '出貨批次與流向',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
