import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { products, categories } from '@/data/products'
import { news } from '@/data/news'

export default function HomePage() {
  const featuredProducts = products.slice(0, 4)
  const latestNews = news.slice(0, 3)

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-[200px] leading-none">♻️</div>
          <div className="absolute bottom-10 right-10 text-[150px] leading-none">🌱</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm mb-6">
              <span className="text-primary-300">♻️</span>
              <span>循環經濟 · 智慧製造 · ESG 永續</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              再生塑料的
              <span className="text-gold-300">專業夥伴</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed mb-8 max-w-2xl">
              泳鉅鑫再生塑料深耕 PC（聚碳酸酯）再生粒子領域，運用智慧化製造系統，將廢棄塑料轉化為高品質再生原料，為您的產品注入永續價值。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="px-8 py-3 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                瀏覽產品
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-white/50 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                立即詢價
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '13+', label: '年行業經驗', sub: '2013 年成立' },
              { value: '3 億+', label: '智慧化投資', sub: 'IoT + 戰情中心' },
              { value: '3', label: '座生產廠房', sub: '新化區 · 永康區' },
              { value: '7', label: '大製造部門', sub: '大數據監控' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-primary-600">{stat.value}</div>
                <div className="text-sm font-medium text-gray-800 mt-1">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">產品分類</h2>
            <p className="text-gray-500 mt-2">專業再生塑料原料，品質媲美新料</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                className="bg-white rounded-xl p-5 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all text-center group"
              >
                <div className="text-3xl mb-2">{cat.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{cat.name}</h3>
                <p className="text-sm text-gray-400 mt-1">{cat.count} 項產品</p>
                {cat.featured && (
                  <span className="inline-block mt-2 text-xs bg-gold-400 text-white px-2 py-0.5 rounded-full">主力產品</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">熱門產品</h2>
              <p className="text-gray-500 mt-1">精選高品質再生塑料粒子</p>
            </div>
            <Link href="/products" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              查看全部 →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ESG Highlight */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
                ♻️ ESG 永續發展
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                從廢棄物到<span className="text-primary-600">永續價值</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                泳鉅鑫運用再生環保系統技術，將廢棄塑料分離、粉碎、清洗、造粒，轉化為高品質再生原料。每使用 1 噸再生 PC 粒子，相比新料可減少約 3.5 噸 CO₂ 排放。
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: '🌍', title: '碳排減量', desc: '比新料減少 60% 碳排' },
                  { icon: '💧', title: '節約資源', desc: '減少石油原料消耗' },
                  { icon: '🏭', title: '智慧製造', desc: 'IoT 監控七大部門' },
                  { icon: '📊', title: '產品履歷', desc: '一條龍追溯系統' },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-lg p-4 border border-gray-100">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-semibold text-sm text-gray-900">{item.title}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/esg"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
              >
                了解更多 ESG 永續發展 →
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border">
              <h3 className="text-lg font-bold text-gray-900 mb-6">循環經濟流程</h3>
              <div className="space-y-4">
                {[
                  { step: '01', title: '廢料收集', desc: '回收工廠廢料及消費後塑料' },
                  { step: '02', title: '分選分類', desc: '依材料類型精確分選' },
                  { step: '03', title: '粉碎清洗', desc: '專業粉碎及深度清洗除雜' },
                  { step: '04', title: '造粒加工', desc: '高溫熔融造粒，品質控管' },
                  { step: '05', title: '品質檢測', desc: 'SGS 第三方檢測認證' },
                  { step: '06', title: '成品出貨', desc: '高品質再生粒子交付客戶' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <span className="bg-primary-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">{item.title}</div>
                      <div className="text-xs text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">最新消息</h2>
              <p className="text-gray-500 mt-1">公司動態與產業資訊</p>
            </div>
            <Link href="/news" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
              查看全部 →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {latestNews.map((item) => (
              <article key={item.id} className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow overflow-hidden group">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-green-50 flex items-center justify-center">
                  <span className="text-5xl opacity-30">
                    {item.category === '公司動態' ? '🏢' : item.category === '產業新聞' ? '📊' : '🔬'}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-primary-50 text-primary-700 px-2 py-0.5 rounded-full">{item.category}</span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">需要高品質再生塑料？</h2>
          <p className="text-primary-100 text-lg mb-8">
            泳鉅鑫提供 PC、ABS、PP、PET 等多種再生粒子，品質穩定、交期準確。歡迎來電洽詢或線上詢價。
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              聯絡我們
            </Link>
            <a
              href="tel:065801106"
              className="px-8 py-3 border-2 border-white/50 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              📞 06-5801106
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
