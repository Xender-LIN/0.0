import Link from 'next/link'
import type { Product } from '@/data/products'

export default function ProductCard({ product }: { product: Product }) {
  const materialColor = product.material.includes('PC') ? 'from-blue-100 to-blue-50' :
    product.material.includes('ABS') ? 'from-amber-100 to-amber-50' :
    product.material.includes('PP') ? 'from-green-100 to-green-50' :
    product.material.includes('PET') ? 'from-rose-100 to-rose-50' :
    'from-gray-100 to-gray-50'

  const materialIcon = product.material.includes('PC') ? '🔵' :
    product.material.includes('ABS') ? '🟡' :
    product.material.includes('PP') ? '🟢' : '🔴'

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group bg-white rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Image area */}
      <div className={`aspect-square bg-gradient-to-br ${materialColor} flex items-center justify-center relative overflow-hidden`}>
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
        <div className="text-6xl opacity-30 group-hover:scale-110 transition-transform duration-500">
          {materialIcon}
        </div>
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isRecycled && (
            <span className="bg-primary-600 text-white text-[10px] px-2 py-1 rounded-lg font-medium shadow-sm flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              再生料 {product.recycledContentPct}%
            </span>
          )}
        </div>
        {/* Quick view indicator */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/20 to-transparent h-16 flex items-end justify-center pb-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-xs font-medium bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
            查看詳情
          </span>
        </div>
      </div>

      {/* Info section */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[10px] text-primary-600 font-semibold uppercase tracking-wider bg-primary-50 px-1.5 py-0.5 rounded">
            {product.category}
          </span>
        </div>
        <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 text-sm leading-relaxed">
          {product.name}
        </h3>
        <p className="text-xs text-gray-400 mt-1.5 line-clamp-2 leading-relaxed">{product.description}</p>

        {/* Bottom bar */}
        <div className="mt-3 pt-3 border-t border-gray-50 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-gray-400">{product.sourceType.split(' ')[0]}</span>
          </div>
          <div className="flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded-full">
            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[10px] text-green-700 font-medium">
              CO2 {product.carbonFootprint} kg/kg
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
