'use client';

import { useState } from 'react';

const babyProducts = [
  { id: 1, name: 'Nền Kem Trị Hăm Tã Cho Bé', description: 'Hệ thống nhũ tương hóa tương thích với kẽn oxide cho kem bảo vệ', image: '/baby-cream.jpg' },
  { id: 2, name: 'Dầu Massa Cho Bé', description: 'Hỗn hợp dầu nhẹ nhàng cho massa và chăm sóc da bé', image: '/baby-massage.jpg' },
  { id: 3, name: 'Sữa Tắm Bọt Cho Bé', description: 'Hệ thống chất hoạt động bề mặt cực kỳ nhẹ cho da nhạy cảm', image: '/baby-bubble.jpg' },
  { id: 4, name: 'Nền Kem Chống Nắng Cho Bé', description: 'Công thức chống nắng gốc khoáng cho da non nớng', image: '/baby-sun.jpg' },
  { id: 5, name: 'Kem Dưỡng Ẩm Cho Bé', description: 'Nền kem giàu dưỡng chất nuôi dưỡng cho da khô của bé', image: '/baby-moisturizer.jpg' },
  { id: 6, name: 'Dầu Dưỡng Tóc Cho Bé', description: 'Dầu nhẹ cho chăm sóc tóc và da đầu bé', image: '/baby-hair.jpg' },
  { id: 7, name: 'Dung Dịch Khăn Ướt Cho Bé', description: 'Dung dịch làm sạch nhẹ nhàng cho khăn Ướt bé', image: '/baby-wipes.jpg' },
  { id: 8, name: 'Sữa Tắm Toàn Thân Cho Bé', description: 'Công thức sữa tắm không chảy nước mắt cho sử dụng hàng ngày', image: '/baby-wash.jpg' },
  { id: 9, name: 'Kem Dưỡng Đêm Cho Bé', description: 'Công thức dưỡng ẩm cẩn thận qua đêm', image: '/baby-night.jpg' },
  { id: 10, name: 'Nền Son Dưỡng Môi Cho Bé', description: 'Bảo vệ môi an toàn, tự nhiên cho bé', image: '/baby-lip.jpg' }
];

const organicProducts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Nguyên Liệu Chăm Sóc Cá Nhân Hữu Cơ ${i + 1}`,
  description: `Nguyên liệu hữu cơ có chứng nhận cho các công thức chăm sóc cá nhân tự nhiên. Nguồn gốc bền vững và thân thiện với môi trường.`,
  image: `/organic-pc-${i + 1}.jpg`,
  certifications: ['ECOCERT', 'COSMOS', 'USDA Organic', 'NATRUE'][i % 4],
  origin: ['Chiết Xuất Thực Vật', 'Tinh Dầu', 'Bơ Thực Vật', 'Chất Bảo Quản Tự Nhiên', 'Nguyên Liệu Gốc Khoáng'][i % 5]
}));

const regularProducts = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `Nguyên Liệu Chăm Sóc Cá Nhân ${i + 1}`,
  description: `Nguyên liệu hiệu suất cao cho các công thức chăm sóc cá nhân thổng. Hiệu quả và độ ổn định được chứng minh.`,
  image: `/regular-pc-${i + 1}.jpg`,
  category: ['Chất Nhũ Tương', 'Hoạt Chất', 'Chất Bảo Quản', 'Chất Hoạt Động Bề Mặt', 'Tác Nhân Điều Hòa', 'Bộ Lọc UV', 'Chất Tạo Kết Cấu'][i % 7],
  function: ['Dưỡng Ẩm', 'Chống Lão Hóa', 'Làm Sạch', 'Bảo Vệ', 'Điều Hòa', 'Ổn Định'][i % 6]
}));

export default function PersonalCare() {
  const [activeTab, setActiveTab] = useState('baby');

  const ProductCard = ({ product, showCertification = false, showCategory = false }: any) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Hình Ảnh Sản Phẩm</span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        {showCertification && (
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
              {product.certifications}
            </span>
            <span className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
              {product.origin}
            </span>
          </div>
        )}
        {showCategory && (
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {product.category}
            </span>
            <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
              {product.function}
            </span>
          </div>
        )}
        <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
          Xem Chi Tiết
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">Sản Phẩm Chăm Sóc Cá Nhân</h1>
          <p className="text-xl">
            Nguyên liệu cao cấp cho chăm sóc bé, sản phẩm chăm sóc cá nhân hữu cơ và các công thức thổng
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 bg-green-50 rounded-lg p-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Công Thức Tham Khảo Có Sẵn</h2>
              <p className="text-gray-600">Các công thức chuyên nghiệp cho sản phẩm chăm sóc da, chăm sóc tóc và vệ sinh cá nhân</p>
            </div>
            <a
              href="/personalcare/formulas"
              className="mt-4 md:mt-0 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Xem Công Thức
            </a>
          </div>
        </div>

        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('baby')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'baby'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Sản Phẩm Cho Bé (10)
              </button>
              <button
                onClick={() => setActiveTab('organic')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'organic'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Sản Phẩm Hữu Cơ (20)
              </button>
              <button
                onClick={() => setActiveTab('regular')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'regular'
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Sản Phẩm Thông Thường (25)
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'baby' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sản Phẩm Chăm Sóc Bé</h2>
              <p className="text-gray-600">
                Nguyên liệu được công thức đặc biệt cho sản phẩm chăm sóc cá nhân nhẹ nhàng cho bé. Tất cả nguyên liệu đều được bác sĩ nhi khuyến nghị và kiểm tra an toàn.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {babyProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'organic' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sản Phẩm Chăm Sóc Cá Nhân Hữu Cơ</h2>
              <p className="text-gray-600">
                Nguyên liệu hữu cơ có chứng nhận cho các công thức chăm sóc cá nhân tự nhiên. Nguồn gốc bền vững và có trách nhiệm với môi trường.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {organicProducts.map((product) => (
                <ProductCard key={product.id} product={product} showCertification />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'regular' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sản Phẩm Chăm Sóc Cá Nhân Thông Thường</h2>
              <p className="text-gray-600">
                Nguyên liệu hiệu suất cao cho các công thức chăm sóc cá nhân thổng. Hiệu quả được chứng minh và độ ổn định lâu dài.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProducts.map((product) => (
                <ProductCard key={product.id} product={product} showCategory />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}