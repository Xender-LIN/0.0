import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '泳鉅鑫再生塑料 | PC 再生粒子專家 — 循環經濟 · 永續未來',
  description: '泳鉅鑫再生塑料股份有限公司，專注 PC（聚碳酸酯）再生粒子及粉碎料，運用智慧製造技術打造高品質再生塑料，推動循環經濟與 ESG 永續發展。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-Hant-TW">
      <body className="font-sans antialiased text-gray-800 bg-white">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
