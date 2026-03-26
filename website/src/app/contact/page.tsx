export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-700 to-primary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">聯絡我們</h1>
          <p className="text-primary-200 mt-2">歡迎洽詢，我們將盡速回覆您</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-bold text-gray-900 mb-6">聯絡資訊</h2>
            <div className="space-y-6">
              {[
                { icon: '🏢', title: '公司名稱', content: '泳鉅鑫再生塑料股份有限公司' },
                { icon: '📍', title: '公司地址', content: '臺南市新化區中山路 3 巷 85 號' },
                { icon: '📞', title: '電話', content: '06-5801106' },
                { icon: '📠', title: '傳真', content: '06-5901188' },
                { icon: '📧', title: 'Email', content: 'service@yongsin.tw' },
                { icon: '🌐', title: '官方網站', content: 'www.yongsin.tw' },
                { icon: '🕐', title: '營業時間', content: '週一至週五 08:00 - 17:30' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <div className="text-sm text-gray-500">{item.title}</div>
                    <div className="font-medium text-gray-900">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 bg-gray-100 rounded-xl aspect-video flex items-center justify-center border">
              <div className="text-center text-gray-400">
                <div className="text-4xl mb-2">🗺️</div>
                <p className="text-sm">Google Map</p>
                <p className="text-xs">臺南市新化區中山路 3 巷 85 號</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-2">線上詢價 / 聯絡表單</h2>
              <p className="text-sm text-gray-500 mb-6">填寫以下表單，我們將於 1 個工作天內回覆您</p>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">公司名稱 *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="請輸入公司名稱"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">統一編號</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="請輸入統一編號"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">聯絡人 *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="請輸入姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">職稱</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="請輸入職稱"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">電話 *</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="請輸入電話號碼"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="請輸入 Email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">詢價產品</label>
                  <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-700">
                    <option value="">請選擇產品類型</option>
                    <option value="r-pc">PC 再生粒子</option>
                    <option value="pc-crushed">PC 粉碎料</option>
                    <option value="r-abs">ABS 再生粒子</option>
                    <option value="r-pp">PP 再生粒子</option>
                    <option value="r-pe">PE 再生粒子</option>
                    <option value="r-pet">PET 再生粒子</option>
                    <option value="other">其他</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">需求數量</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="例如：5 噸/月"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">期望交期</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="例如：兩週內"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">留言內容 *</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="請描述您的需求，包含產品規格、顏色、用途等..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  送出詢價
                </button>
                <p className="text-xs text-gray-400 text-center">
                  提交表單即表示您同意我們的隱私權政策
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
