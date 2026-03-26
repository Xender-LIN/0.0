import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.svg" alt="泳鉅鑫 Logo" width={40} height={40} className="rounded-full" />
              <div>
                <div className="text-white font-bold">泳鉅鑫再生塑料</div>
                <div className="text-xs text-gray-500">Yong Jyu Sin Plastic</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              專注再生塑料循環經濟，運用智慧製造技術將廢棄塑料轉化為高品質再生粒子，為地球永續盡一份心力。
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">產品分類</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products?category=r-pc" className="hover:text-primary-400 transition-colors">PC 再生粒子</Link></li>
              <li><Link href="/products?category=pc-crushed" className="hover:text-primary-400 transition-colors">PC 粉碎料</Link></li>
              <li><Link href="/products?category=r-abs" className="hover:text-primary-400 transition-colors">ABS 再生粒子</Link></li>
              <li><Link href="/products?category=r-pp" className="hover:text-primary-400 transition-colors">PP 再生粒子</Link></li>
              <li><Link href="/products?category=r-pet" className="hover:text-primary-400 transition-colors">PET 再生粒子</Link></li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速連結</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">關於我們</Link></li>
              <li><Link href="/esg" className="hover:text-primary-400 transition-colors">ESG 永續發展</Link></li>
              <li><Link href="/news" className="hover:text-primary-400 transition-colors">新聞資訊</Link></li>
              <li><Link href="/contact" className="hover:text-primary-400 transition-colors">聯絡我們</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">聯絡資訊</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <span>📍</span>
                <span>臺南市新化區中山路 3 巷 85 號</span>
              </li>
              <li className="flex gap-2">
                <span>📞</span>
                <span>06-5801106</span>
              </li>
              <li className="flex gap-2">
                <span>📠</span>
                <span>06-5901188</span>
              </li>
              <li className="flex gap-2">
                <span>📧</span>
                <span>service@yongsin.tw</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>Copyright &copy; 2026 泳鉅鑫再生塑料股份有限公司. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">統一編號：54074274</p>
        </div>
      </div>
    </footer>
  )
}
