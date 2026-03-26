'use client'

import { useEffect, useState } from 'react'

interface PriceItem {
  material: string
  price: string
  unit: string
  change: number
  trend: 'up' | 'down' | 'flat'
}

const basePrices: PriceItem[] = [
  { material: 'PC 再生粒 (透明)', price: 'NT$38,500', unit: '/噸', change: +1.2, trend: 'up' },
  { material: 'PC 再生粒 (黑色)', price: 'NT$35,800', unit: '/噸', change: +0.8, trend: 'up' },
  { material: 'PC 粉碎料 (混色)', price: 'NT$22,000', unit: '/噸', change: -0.3, trend: 'down' },
  { material: 'ABS 再生粒', price: 'NT$28,500', unit: '/噸', change: +0.5, trend: 'up' },
  { material: 'PP 再生粒', price: 'NT$18,200', unit: '/噸', change: 0, trend: 'flat' },
  { material: 'PET 再生粒 (纖維)', price: 'NT$16,800', unit: '/噸', change: -0.6, trend: 'down' },
  { material: 'PA 再生粒', price: 'NT$42,000', unit: '/噸', change: +1.5, trend: 'up' },
  { material: 'PE 再生粒', price: 'NT$15,500', unit: '/噸', change: +0.2, trend: 'up' },
]

export default function MarketTicker() {
  const [prices] = useState(basePrices)

  return (
    <section className="bg-gray-900 text-white py-2.5 overflow-hidden border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4">
          <div className="shrink-0 flex items-center gap-2 pr-4 border-r border-gray-700">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-gray-400 whitespace-nowrap">市場參考價</span>
          </div>
          <div className="overflow-hidden flex-1">
            <div className="flex gap-6 animate-marquee">
              {[...prices, ...prices].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 whitespace-nowrap shrink-0">
                  <span className="text-xs text-gray-300">{item.material}</span>
                  <span className="text-xs font-semibold text-white">{item.price}</span>
                  <span className="text-[10px] text-gray-500">{item.unit}</span>
                  <span className={`text-[10px] font-medium ${
                    item.trend === 'up' ? 'text-green-400' :
                    item.trend === 'down' ? 'text-red-400' :
                    'text-gray-500'
                  }`}>
                    {item.trend === 'up' ? '▲' : item.trend === 'down' ? '▼' : '—'}
                    {item.change !== 0 ? `${Math.abs(item.change)}%` : ''}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
