import Link from 'next/link'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return notFound()

  const related = products.filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug).slice(0, 4)

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary-600">首頁</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-primary-600">產品中心</Link>
          <span className="mx-2">/</span>
          <Link href={`/products?category=${product.categorySlug}`} className="hover:text-primary-600">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Product image */}
          <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl flex items-center justify-center border relative">
            <div className="text-8xl opacity-20">
              {product.material.includes('PC') ? '🔵' : product.material.includes('ABS') ? '🟡' : '🟢'}
            </div>
            {product.isRecycled && (
              <span className="absolute top-4 left-4 bg-primary-600 text-white text-sm px-3 py-1.5 rounded-full font-medium">
                ♻️ 再生料 {product.recycledContentPct}%
              </span>
            )}
          </div>

          {/* Product info */}
          <div>
            <div className="text-sm text-primary-600 font-medium mb-1">{product.category}</div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

            {/* Key info */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-xs text-gray-500">材料類型</div>
                <div className="font-semibold text-sm">{product.material}</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="text-xs text-gray-500">原料來源</div>
                <div className="font-semibold text-sm">{product.sourceType.split('(')[0].trim()}</div>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <div className="text-xs text-gray-500">碳足跡</div>
                <div className="font-semibold text-sm text-green-700">{product.carbonFootprint} kg CO₂e/kg</div>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <div className="text-xs text-gray-500">再生料含量</div>
                <div className="font-semibold text-sm text-green-700">{product.recycledContentPct}%</div>
              </div>
            </div>

            {/* Applications */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">適用領域</h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app) => (
                  <span key={app} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <Link
                href="/contact"
                className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center"
              >
                立即詢價
              </Link>
              <button className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                ♡ 收藏
              </button>
            </div>

            {/* Download buttons */}
            <div className="flex gap-3 mt-4">
              <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors text-center">
                📄 TDS 技術規格書
              </button>
              <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors text-center">
                📋 SGS 檢測報告
              </button>
            </div>
          </div>
        </div>

        {/* Specs table */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">規格參數</h2>
          <div className="bg-white rounded-xl border overflow-hidden">
            <table className="w-full">
              <tbody>
                {Object.entries(product.specs).map(([key, value], i) => (
                  <tr key={key} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="px-6 py-3 text-sm font-medium text-gray-700 w-1/3">{key}</td>
                    <td className="px-6 py-3 text-sm text-gray-900">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">相關產品</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
