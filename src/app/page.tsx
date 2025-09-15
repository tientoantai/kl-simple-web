import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Nguyên Liệu Mỹ Phẩm Cao Cấp
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Giải pháp công thức chuyên nghiệp cho sản phẩm homecare, chăm sóc cá nhân và chăm sóc răng miệng.
              Nguyên liệu chất lượng được hỗ trợ bởi chuyên gia và công thức sáng tạo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Bắt Đầu
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Tìm Hiểu Thêm
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Danh Mục Sản Phẩm
            </h2>
            <p className="text-lg text-gray-600">
              Khám phá bộ sưu tập toàn diện nguyên liệu mỹ phẩm qua ba danh mục chính
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 1v4" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 1v4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Homecare</h3>
                <p className="text-gray-600 mb-6">
                  Bộ nguyên liệu hoàn chỉnh cho sản phẩm trẻ em, công thức hữu cơ và giải pháp homecare thông thường.
                  Bao gồm công thức tham khảo cho nhiều loại sản phẩm khác nhau.
                </p>
                <Link
                  href="/homecare"
                  className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
                >
                  Khám Phá Sản Phẩm
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Chăm Sóc Cá Nhân</h3>
                <p className="text-gray-600 mb-6">
                  Nguyên liệu cao cấp cho chăm sóc trẻ em, sản phẩm chăm sóc cá nhân hữu cơ và công thức thông thường.
                  Bao gồm hỗ trợ công thức chuyên gia.
                </p>
                <Link
                  href="/personalcare"
                  className="text-green-600 hover:text-green-800 font-semibold inline-flex items-center"
                >
                  Khám Phá Sản Phẩm
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 010 5H9V10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Chăm Sóc Răng Miệng</h3>
                <p className="text-gray-600 mb-6">
                  Nguyên liệu chuyên biệt cho sản phẩm chăm sóc răng miệng trẻ em và người lớn.
                  Công thức an toàn, hiệu quả cho giải pháp vệ sinh răng miệng.
                </p>
                <Link
                  href="/oralcare"
                  className="text-purple-600 hover:text-purple-800 font-semibold inline-flex items-center"
                >
                  Khám Phá Sản Phẩm
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tại Sao Chọn Nguyên Liệu Của Chúng Tôi?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Đảm Bảo Chất Lượng</h3>
                  <p className="text-gray-600">Tất cả nguyên liệu đều đáp ứng tiêu chuẩn chất lượng cao nhất</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Giao Hàng Nhanh</h3>
                  <p className="text-gray-600">Quản lý chuỗi cung ứng nhanh chóng và đáng tin cậy</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Hỗ Trợ Chuyên Gia</h3>
                  <p className="text-gray-600">Hỗ trợ kỹ thuật và hướng dẫn công thức</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
