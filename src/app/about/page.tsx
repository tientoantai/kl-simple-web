export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Về Chúng Tôi</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Dẫn đầu ngành nguyên liệu mỹ phẩm với sự đổi mới, chất lượng và tính bền vững
            </p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Câu Chuyện Của Chúng Tôi</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Được thành lập với niềm đam mê về sự xuất sắc trong công thức mỹ phẩm, công ty chúng tôi đã đi đầu 
                  trong lĩnh vực đổi mới nguyên liệu trong hơn hai thập kỷ. Chúng tôi chuyên cung cấp nguyên liệu cao cấp cho 
                  các sản phẩm chăm sóc gia đình, chăm sóc cá nhân và chăm sóc răng miệng.
                </p>
                <p>
                  Hành trình của chúng tôi bắt đầu với một sứ mệnh đơn giản: kết nối khoảng cách giữa khoa học tiên tiến và 
                  nhu cầu công thức thực tế. Ngày nay, chúng tôi phục vụ hàng trăm nhà sản xuất trên toàn thế giới, từ các 
                  thương hiệu thủ công nhỏ đến các tập đoàn toàn cầu.
                </p>
                <p>
                  Chúng tôi tin rằng tương lai của mỹ phẩm nằm ở những nguyên liệu bền vững, an toàn và hiệu quả, 
                  đáp ứng nhu cầu ngày càng phát triển của người tiêu dùng đồng thời tôn trọng hành tinh của chúng ta.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Hình Ảnh Công Ty</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sứ Mệnh & Tầm Nhìn</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sứ Mệnh Của Chúng Tôi</h3>
              <p className="text-gray-600">
                Cung cấp những nguyên liệu mỹ phẩm đổi mới, bền vững và chất lượng cao, giúp các nhà công thức 
                tạo ra những sản phẩm xuất sắc nhằm nâng cao chất lượng cuộc sống con người đồng thời bảo vệ môi trường.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tầm Nhìn Của Chúng Tôi</h3>
              <p className="text-gray-600">
                Trở thành nhà dẫn đầu toàn cầu về nguyên liệu mỹ phẩm bền vững, thiết lập các tiêu chuẩn ngành cho 
                sự đổi mới, chất lượng và trách nhiệm môi trường đồng thời nuôi dưỡng quan hệ đối tác lâu dài 
                với khách hàng của chúng tôi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giá Trị Cốt Lõi</h2>
            <p className="text-lg text-gray-600">Những nguyên tắc định hướng mọi hoạt động của chúng tôi</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Chất Lượng</h3>
              <p className="text-gray-600 text-sm">Tiêu chuẩn không thỏa hiệp trong mọi nguyên liệu chúng tôi cung cấp</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tính Bền Vững</h3>
              <p className="text-gray-600 text-sm">Cam kết với trách nhiệm môi trường</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Đổi Mới</h3>
              <p className="text-gray-600 text-sm">Tiên phong trong việc tìm ra giải pháp mới cho các thách thức ngành</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Đối Tác</h3>
              <p className="text-gray-600 text-sm">Xây dựng mối quan hệ lâu dài với khách hàng</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tại Sao Chọn Chúng Tôi</h2>
            <p className="text-lg text-gray-600">Điều gì làm nên sự khác biệt của chúng tôi trong ngành nguyên liệu mỹ phẩm</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Kiến Thức Chuyên Gia</h3>
              <p className="text-gray-600 text-sm mb-4">
                Đội ngũ hóa học gia và chuyên gia công thức của chúng tôi cung cấp hỗ trợ kỹ thuật và hướng dẫn 
                để lựa chọn và sử dụng nguyên liệu tối ưu.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tư vấn kỹ thuật</li>
                <li>• Hỗ trợ công thức</li>
                <li>• Hỗ trợ quy định</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Chuỗi Cung Ứng Toàn Cầu</h3>
              <p className="text-gray-600 text-sm mb-4">
                Mạng lưới tìm nguồn và phân phối đáng tin cậy, đảm bảo cung cấp ổn định các 
                nguyên liệu chất lượng cao trên toàn thế giới.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mối quan hệ đa nhà cung cấp</li>
                <li>• Quy trình đảm bảo chất lượng</li>
                <li>• Giải pháp logistics linh hoạt</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tập Trung Đổi Mới</h3>
              <p className="text-gray-600 text-sm mb-4">
                Nghiên cứu và phát triển liên tục để đưa những đổi mới nguyên liệu mới nhất 
                ra thị trường nhanh hơn đối thủ cạnh tranh.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Đối tác R&D</li>
                <li>• Phân tích xu hướng</li>
                <li>• Giải pháp tùy chỉnh</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sẵn Sàng Hợp Tác Với Chúng Tôi?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Hãy cùng nhau tạo ra những sản phẩm mỹ phẩm xuất sắc
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Liên Hệ Ngay Hôm Nay
              </a>
              <a
                href="/homecare"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Xem Sản Phẩm
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}