'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

const productCategories = [
  { name: 'PC 再生粒子', slug: 'r-pc', desc: '透明級/黑色/白色/食品級', icon: '🔵' },
  { name: 'PC 粉碎料', slug: 'pc-crushed', desc: '混色/單色/高純度', icon: '🔩' },
  { name: 'ABS 再生粒子', slug: 'r-abs', desc: '本色/黑色/阻燃級', icon: '🟡' },
  { name: 'PP 再生粒子', slug: 'r-pp', desc: '射出級/押出級', icon: '🟢' },
  { name: 'PE 再生粒子', slug: 'r-pe', desc: '低密度/高密度', icon: '🟠' },
  { name: 'PA 再生粒子', slug: 'r-pa', desc: '尼龍6/尼龍66', icon: '🟣' },
  { name: 'PET 再生粒子', slug: 'r-pet', desc: '纖維級/瓶片級', icon: '🔴' },
  { name: '其他再生料', slug: 'r-others', desc: 'POM/PMMA/其他', icon: '📦' },
]

const navItems = [
  { label: '首頁', href: '/' },
  { label: '產品中心', href: '/products', hasMega: true },
  { label: 'ESG 永續', href: '/esg' },
  { label: '關於我們', href: '/about' },
  { label: '新聞資訊', href: '/news' },
  { label: '聯絡我們', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const megaRef = useRef<HTMLDivElement>(null)
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMegaEnter = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current)
    setMegaOpen(true)
  }
  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200)
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      {/* Top utility bar */}
      <div className="bg-primary-800 text-primary-100 text-xs">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">泳鉅鑫再生塑料股份有限公司</span>
            <span className="hidden md:inline text-primary-300">|</span>
            <span className="hidden md:inline">循環經濟 · 智慧製造 · ESG 永續</span>
          </div>
          <div className="flex gap-4 items-center">
            <a href="tel:065801106" className="flex items-center gap-1 hover:text-white transition-colors">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>06-5801106</span>
            </a>
            <span className="hidden md:inline text-primary-300">|</span>
            <a href="mailto:service@yongsin.tw" className="hidden md:flex items-center gap-1 hover:text-white transition-colors">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>service@yongsin.tw</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className={`bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image src="/0.0/logo.svg" alt="泳鉅鑫 Logo" width={42} height={42} className="rounded-full" />
              <div className="hidden sm:block">
                <div className="text-primary-700 font-bold text-base leading-tight tracking-tight">泳鉅鑫再生塑料</div>
                <div className="text-[10px] text-gray-400 tracking-wider">YONG JYU SIN PLASTIC CO., LTD.</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={item.hasMega ? handleMegaEnter : undefined}
                  onMouseLeave={item.hasMega ? handleMegaLeave : undefined}
                >
                  <Link
                    href={item.href}
                    className="px-3 py-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-primary-50/80 transition-all font-medium text-sm flex items-center gap-1"
                  >
                    {item.label}
                    {item.hasMega && (
                      <svg className={`w-3.5 h-3.5 transition-transform ${megaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Search toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-lg text-gray-500 hover:text-primary-600 hover:bg-primary-50 transition-all"
                aria-label="搜尋"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* CTA button */}
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all text-sm font-medium shadow-sm hover:shadow-md"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                立即詢價
              </Link>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="選單"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Search bar (expandable) */}
        {searchOpen && (
          <div className="border-t border-gray-100 bg-gray-50/80 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto px-4 py-3">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="搜尋產品、材料規格、應用領域..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm placeholder:text-gray-400 shadow-sm"
                  autoFocus
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
                >
                  ESC
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mega menu for products */}
        {megaOpen && (
          <div
            ref={megaRef}
            className="absolute left-0 right-0 bg-white/98 backdrop-blur-md border-t border-gray-100 shadow-xl"
            onMouseEnter={handleMegaEnter}
            onMouseLeave={handleMegaLeave}
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="grid grid-cols-4 gap-3">
                {productCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/products?category=${cat.slug}`}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary-50 transition-all group"
                    onClick={() => setMegaOpen(false)}
                  >
                    <span className="text-2xl mt-0.5">{cat.icon}</span>
                    <div>
                      <div className="font-semibold text-sm text-gray-800 group-hover:text-primary-600 transition-colors">{cat.name}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{cat.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400">共 45+ 項產品，品質媲美新料</span>
                <Link
                  href="/products"
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1 transition-colors"
                  onClick={() => setMegaOpen(false)}
                >
                  查看全部產品
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[88px] z-40 bg-black/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)}>
          <nav className="bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Mobile search */}
            <div className="px-4 pt-4 pb-2">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="搜尋產品..."
                  className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between px-4 py-3.5 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors border-b border-gray-50 font-medium text-sm"
                onClick={() => setMobileOpen(false)}
              >
                <span>{item.label}</span>
                <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
            <div className="p-4">
              <Link
                href="/contact"
                className="block w-full px-4 py-3 bg-primary-600 text-white rounded-xl text-center hover:bg-primary-700 font-medium text-sm shadow-sm"
                onClick={() => setMobileOpen(false)}
              >
                立即詢價
              </Link>
            </div>
            {/* Mobile contact info */}
            <div className="px-4 pb-4 flex flex-col gap-2 text-xs text-gray-400">
              <a href="tel:065801106" className="flex items-center gap-2 hover:text-primary-600">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                06-5801106
              </a>
              <a href="mailto:service@yongsin.tw" className="flex items-center gap-2 hover:text-primary-600">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                service@yongsin.tw
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
