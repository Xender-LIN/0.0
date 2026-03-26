import { news } from '@/data/news'

export default function NewsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-700 to-primary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">新聞資訊</h1>
          <p className="text-primary-200 mt-2">公司動態、產業新聞與技術文章</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-6">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-64 aspect-video md:aspect-auto bg-gradient-to-br from-primary-50 to-green-50 flex items-center justify-center shrink-0">
                  <span className="text-5xl opacity-30">
                    {item.category === '公司動態' ? '🏢' : item.category === '產業新聞' ? '📊' : '🔬'}
                  </span>
                </div>
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      item.category === '公司動態' ? 'bg-blue-50 text-blue-700' :
                      item.category === '產業新聞' ? 'bg-orange-50 text-orange-700' :
                      'bg-purple-50 text-purple-700'
                    }`}>
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-400">{item.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed">{item.excerpt}</p>
                  <button className="mt-4 text-primary-600 hover:text-primary-700 font-medium text-sm">
                    閱讀更多 →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
