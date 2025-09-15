'use client';

import { useState } from 'react';

const babyProducts = [
  { id: 1, name: 'Sữa Rửa Nhẹ Nhàng Cho Bé', description: 'Hỗn hợp chất hoạt động bề mặt cực kỳ nhẹ nhàng cho da nhạy cảm của bé', image: '/baby-cleanser.jpg' },
  { id: 2, name: 'Nền Sữa Dưỡng Thể Cho Bé', description: 'Nền dưỡng ẩm không gây dị ứng với thành phần tự nhiên', image: '/baby-lotion.jpg' },
  { id: 3, name: 'Phức Hợp Dầu Gội Cho Bé', description: 'Công thức không gây chảy nước mắt với tác nhân dưỡng nhẹ nhàng', image: '/baby-shampoo.jpg' },
  { id: 4, name: 'Hỗn Hợp Dầu Dưỡng Cho Bé', description: 'Hỗn hợp dầu nuôi dưỡng cho da non nớng của bé', image: '/baby-oil.jpg' },
  { id: 5, name: 'Công Thức Phấn Thơm Cho Bé', description: 'Phấn hấp thụ không chứa talc mang lại sự thoải mái', image: '/baby-powder.jpg' }
];

const organicProducts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Nguyên Liệu Hữu Cơ ${i + 1}`,
  description: `Nguyên liệu tự nhiên và hữu cơ có chứng nhận cho ứng dụng chăm sóc gia đình. Thành phần công thức an toàn, hiệu quả và thân thiện với môi trường.`,
  image: `/organic-${i + 1}.jpg`,
  certifications: ['ECOCERT', 'COSMOS', 'USDA Organic'][i % 3]
}));

const regularProducts = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  name: `Nguyên Liệu Chăm Sóc Gia Đình Thông Thường ${i + 1}`,
  description: `Nguyên liệu cấp chuyên nghiệp cho các công thức chăm sóc gia đình thổng. Giải pháp hiệu suất cao và tiết kiệm chi phí.`,
  image: `/regular-${i + 1}.jpg`,
  category: ['Surfactants', 'Preservatives', 'Emulsifiers', 'Thickeners', 'Fragrances'][i % 5]
}));

export default function Homecare() {
  const [activeTab, setActiveTab] = useState('baby');

  const ProductCard = ({ product, showCertification = false, showCategory = false }: any) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Hình Ảnh Sản Phẩm</span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        {showCertification && product.certifications && (
          <div className="mb-3">
            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
              {product.certifications}
            </span>
          </div>
        )}
        {showCategory && product.category && (
          <div className="mb-3">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
        )}
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
          Xem Chi Tiết
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">Sản Phẩm Chăm Sóc Gia Đình</h1>
          <p className="text-xl">
            Bộ sưu tập đầy đủ nguyên liệu cho sản phẩm trẻ em, công thức hữu cơ và giải pháp chăm sóc gia đình thông thường
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 bg-blue-50 rounded-lg p-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Công Thức Tham Khảo Có Sẵn</h2>
              <p className="text-gray-600">Truy cập bộ sưu tập đầy đủ 12 công thức chăm sóc gia đình chuyên nghiệp của chúng tôi</p>
            </div>
            <a
              href="/homecare/formulas"
              className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Sản Phẩm Cho Bé
              </button>
              <button
                onClick={() => setActiveTab('organic')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'organic'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Sản Phẩm Hữu Cơ (20)
              </button>
              <button
                onClick={() => setActiveTab('regular')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'regular'
                    ? 'border-blue-500 text-blue-600'
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sản Phẩm Cho Bé</h2>
              <p className="text-gray-600">
                Nguyên liệu được công thức đặc biệt cho sản phẩm chăm sóc bé nhẹ nhàng. Tất cả nguyên liệu đều không gây dị ứng và được bác sĩ da liễu kiểm nghiệm.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sản Phẩm Hữu Cơ</h2>
              <p className="text-gray-600">
                Nguyên liệu hữu cơ có chứng nhận cho các công thức chăm sóc gia đình thân thiện với môi trường. Tất cả sản phẩm đều đáp ứng tiêu chuẩn hữu cơ quốc tế.
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sản Phẩm Thông Thường</h2>
              <p className="text-gray-600">
                Nguyên liệu cấp chuyên nghiệp cho các công thức chăm sóc gia đình thổng. Giải pháp hiệu suất cao và tiết kiệm chi phí.
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