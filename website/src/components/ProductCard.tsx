import Link from 'next/link'
import type { Product } from '@/data/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      {/* Image placeholder */}
      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center relative overflow-hidden">
        <div className="text-6xl opacity-30">
          {product.material.includes('PC') ? '🔵' : product.material.includes('ABS') ? '🟡' : product.material.includes('PP') ? '🟢' : '🔴'}
        </div>
        {product.isRecycled && (
          <span className="absolute top-3 left-3 bg-primary-600 text-white text-xs px-2 py-1 rounded-full font-medium">
            ♻️ 再生料 {product.recycledContentPct}%
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="text-xs text-primary-600 font-medium mb-1">{product.category}</div>
        <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-gray-400">{product.sourceType.split(' ')[0]}</span>
          <span className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
            CO₂ {product.carbonFootprint} kg/kg
          </span>
        </div>
      </div>
    </Link>
  )
}
