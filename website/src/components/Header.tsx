'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const navItems = [
  { label: '首頁', href: '/' },
  { label: '產品中心', href: '/products' },
  { label: 'ESG 永續', href: '/esg' },
  { label: '關於我們', href: '/about' },
  { label: '新聞資訊', href: '/news' },
  { label: '聯絡我們', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary-700 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center">
          <span>泳鉅鑫再生塑料股份有限公司 | 循環經濟 · 永續未來</span>
          <div className="hidden md:flex gap-4 items-center">
            <span>📞 06-5801106</span>
            <span>📧 service@yongsin.tw</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="泳鉅鑫 Logo" width={44} height={44} className="rounded-full" />
            <div className="hidden sm:block">
              <div className="text-primary-700 font-bold text-lg leading-tight">泳鉅鑫再生塑料</div>
              <div className="text-xs text-gray-500">Yong Jyu Sin Plastic Co., Ltd.</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors font-medium text-sm"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
            >
              立即詢價
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
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

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden pb-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mx-4 mt-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-center hover:bg-primary-700"
              onClick={() => setMobileOpen(false)}
            >
              立即詢價
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
