import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { products, categories } from '@/data/products'
import { news } from '@/data/news'
import MarketTicker from '@/components/MarketTicker'

export default function HomePage() {
  const featuredProducts = products.slice(0, 4)
  const latestNews = news.slice(0, 3)

  return (
    <>
      {/* Hero Section - Premium gradient with geometric pattern */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden min-h-[520px] flex items-center">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-600/20 rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-500/10 rounded-full translate-y-1/2 -translate-x-1/4" />
          <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-gold-400/40 rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-gold-400/20 rounded-full" />
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary-300/30 rounded-full" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm mb-6 border border-white/10">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-primary-100">循環經濟 · 智慧製造 · ESG 永續</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
                再生塑料的
                <br />
                <span className="text-gold-300">專業夥伴</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-200 leading-relaxed mb-8 max-w-xl">
                泳鉅鑫深耕 PC 再生粒子領域，運用智慧化製造系統，將廢棄塑料轉化為高品質再生原料，為您的產品注入永續價值。
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="px-7 py-3 bg-white text-primary-800 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl text-sm"
                >
                  瀏覽產品目錄
                </Link>
                <Link
                  href="/contact"
                  className="px-7 py-3 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all backdrop-blur-sm text-sm"
                >
                  免費索取樣品
                </Link>
              </div>
              {/* Trust indicators */}
              <div className="mt-10 flex items-center gap-6 text-sm text-primary-300">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  SGS 認證
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  ISO 品質管理
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  FDA 合規
                </div>
              </div>
            </div>

            {/* Hero right - Key metrics card */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '13+', label: '年行業經驗', icon: '🏭' },
                    { value: '3 億+', label: '智慧化投資', icon: '💡' },
                    { value: '3', label: '座生產廠房', icon: '🏗️' },
                    { value: '45+', label: '產品規格', icon: '📦' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-primary-200 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 text-center">
                  <p className="text-xs text-primary-300">服務涵蓋電子、汽車、日用品等產業</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Price Ticker */}
      <MarketTicker />

      {/* Stats bar - visible on mobile */}
      <section className="bg-white border-b border-gray-100 lg:hidden">
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

      {/* Product Categories - Card grid with hover effects */}
      <section className="py-16 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary-600 text-sm font-medium mb-3">
              <span className="w-8 h-px bg-primary-600" />
              產品分類
              <span className="w-8 h-px bg-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">專業再生塑料原料</h2>
            <p className="text-gray-500 mt-2 max-w-lg mx-auto">
              涵蓋 PC、ABS、PP、PE、PA、PET 等多種材料，品質嚴格把關，物性媲美新料
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                className="group bg-white rounded-2xl p-5 border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 text-center relative overflow-hidden"
              >
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors text-sm">{cat.name}</h3>
                  <p className="text-xs text-gray-400 mt-1">{cat.count} 項產品</p>
                  {cat.featured && (
                    <span className="inline-flex items-center gap-1 mt-2 text-xs bg-gradient-to-r from-gold-400 to-gold-500 text-white px-2.5 py-0.5 rounded-full font-medium shadow-sm">
                      主力產品
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-primary-600 text-sm font-medium mb-3">
                <span className="w-8 h-px bg-primary-600" />
                精選產品
              </div>
              <h2 className="text-3xl font-bold text-gray-900">熱門再生粒子</h2>
              <p className="text-gray-500 mt-1">高品質、穩定供貨、SGS 第三方檢測認證</p>
            </div>
            <Link href="/products" className="hidden sm:flex items-center gap-1.5 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors group">
              查看全部
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="sm:hidden mt-6 text-center">
            <Link href="/products" className="inline-flex items-center gap-1.5 text-primary-600 font-medium text-sm">
              查看全部產品
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ESG Highlight - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-green-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-100/80 text-primary-700 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                ESG 永續發展
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                從廢棄物到
                <span className="text-primary-600">永續價值</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                泳鉅鑫運用再生環保系統技術，將廢棄塑料分離、粉碎、清洗、造粒，轉化為高品質再生原料。每使用 1 噸再生 PC 粒子，相比新料可減少約 3.5 噸 CO2 排放。
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: '🌍', title: '碳排減量 60%', desc: '相比新料大幅降低碳足跡', color: 'bg-emerald-50 border-emerald-100' },
                  { icon: '💧', title: '資源循環', desc: '減少石油原料消耗', color: 'bg-blue-50 border-blue-100' },
                  { icon: '🏭', title: 'IoT 智慧製造', desc: '七大部門即時監控', color: 'bg-orange-50 border-orange-100' },
                  { icon: '📊', title: '產品履歷', desc: '一條龍追溯系統', color: 'bg-purple-50 border-purple-100' },
                ].map((item) => (
                  <div key={item.title} className={`${item.color} rounded-xl p-4 border transition-shadow hover:shadow-md`}>
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-semibold text-sm text-gray-900">{item.title}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/esg"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-600 text-white rounded-xl font-medium text-sm hover:bg-primary-700 transition-all shadow-sm hover:shadow-md"
              >
                了解 ESG 永續發展
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative">
              <div className="absolute -top-3 -right-3 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                ISO 認證流程
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary-600 rounded-full" />
                循環經濟流程
              </h3>
              <div className="space-y-1">
                {[
                  { step: '01', title: '廢料收集', desc: '回收工廠廢料及消費後塑料', color: 'from-primary-600 to-primary-500' },
                  { step: '02', title: '分選分類', desc: '依材料類型精確分選', color: 'from-primary-600 to-primary-500' },
                  { step: '03', title: '粉碎清洗', desc: '專業粉碎及深度清洗除雜', color: 'from-primary-600 to-primary-500' },
                  { step: '04', title: '造粒加工', desc: '高溫熔融造粒，品質控管', color: 'from-primary-600 to-primary-500' },
                  { step: '05', title: '品質檢測', desc: 'SGS 第三方檢測認證', color: 'from-gold-400 to-gold-500' },
                  { step: '06', title: '成品出貨', desc: '高品質再生粒子交付客戶', color: 'from-gold-400 to-gold-500' },
                ].map((item, i) => (
                  <div key={item.step} className="flex gap-4 items-start py-3 group">
                    <div className="relative">
                      <span className={`bg-gradient-to-br ${item.color} text-white text-xs font-bold w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-shadow`}>
                        {item.step}
                      </span>
                      {i < 5 && <div className="absolute top-9 left-1/2 w-px h-4 bg-gray-200 -translate-x-1/2" />}
                    </div>
                    <div className="pt-1">
                      <div className="font-semibold text-sm text-gray-900">{item.title}</div>
                      <div className="text-xs text-gray-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner / Certification Logos */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">認證與合作夥伴</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {[
              { name: 'SGS', sub: '第三方檢測' },
              { name: 'ISO 9001', sub: '品質管理' },
              { name: 'ISO 14001', sub: '環境管理' },
              { name: 'UL 94', sub: '阻燃認證' },
              { name: 'FDA', sub: '食品接觸' },
              { name: 'REACH', sub: '歐盟法規' },
            ].map((cert) => (
              <div key={cert.name} className="text-center group">
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl border border-gray-200 flex items-center justify-center mb-2 group-hover:border-primary-200 group-hover:shadow-md transition-all">
                  <span className="text-xs font-bold text-gray-500 group-hover:text-primary-600 transition-colors">{cert.name}</span>
                </div>
                <span className="text-[10px] text-gray-400">{cert.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News - Refined */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-primary-600 text-sm font-medium mb-3">
                <span className="w-8 h-px bg-primary-600" />
                最新動態
              </div>
              <h2 className="text-3xl font-bold text-gray-900">新聞與資訊</h2>
              <p className="text-gray-500 mt-1">公司動態、產業趨勢與技術分享</p>
            </div>
            <Link href="/news" className="hidden sm:flex items-center gap-1.5 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors group">
              查看全部
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {latestNews.map((item, idx) => (
              <article key={item.id} className={`group bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden ${idx === 0 ? 'md:col-span-1' : ''}`}>
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-green-50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent" />
                  <span className="text-5xl opacity-20">
                    {item.category === '公司動態' ? '🏢' : item.category === '產業新聞' ? '📊' : '🔬'}
                  </span>
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium shadow-sm ${
                      item.category === '公司動態' ? 'bg-primary-600 text-white' :
                      item.category === '產業新聞' ? 'bg-blue-600 text-white' :
                      'bg-orange-500 text-white'
                    }`}>{item.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-gray-400 mb-2">{item.date}</div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 leading-relaxed">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2 leading-relaxed">{item.excerpt}</p>
                  <div className="mt-4 pt-3 border-t border-gray-50">
                    <span className="text-xs text-primary-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      閱讀全文
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium design */}
      <section className="relative py-20 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-600/20 rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary-500/10 rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm mb-6 border border-white/10">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="text-primary-200">全台服務 · 免費打樣</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">需要高品質再生塑料？</h2>
          <p className="text-primary-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            泳鉅鑫提供 PC、ABS、PP、PET 等多種再生粒子，品質穩定、交期準確。歡迎來電洽詢或線上詢價，我們將在 24 小時內回覆。
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white text-primary-800 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl text-sm"
            >
              線上詢價
            </Link>
            <a
              href="tel:065801106"
              className="px-8 py-3.5 border border-white/30 rounded-xl font-semibold hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              06-5801106
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
