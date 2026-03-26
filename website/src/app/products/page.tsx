'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import { products, categories } from '@/data/products'

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  const filtered = products.filter((p) => {
    const matchCategory = !activeCategory || p.categorySlug === activeCategory
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.material.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">產品中心</h1>
          <p className="text-primary-200 mt-2">專業再生塑料粒子，品質穩定可靠</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="搜尋產品名稱、材料..."
            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                !activeCategory ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(null)}
            >
              全部
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat.slug ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(cat.slug)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-4">
          共 {filtered.length} 項產品
          {activeCategory && (
            <button className="ml-2 text-primary-600 hover:underline" onClick={() => setActiveCategory(null)}>
              清除篩選
            </button>
          )}
        </p>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <div className="text-5xl mb-4">🔍</div>
            <p>找不到符合條件的產品</p>
          </div>
        )}
      </div>
    </>
  )
}
