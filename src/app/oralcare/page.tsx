'use client';

import { useState } from 'react';

const childrenProducts = [
  { id: 1, name: 'Nền Kem Đánh Răng Không Fluoride Cho Trẻ', description: 'Công thức an toàn, không chứa fluoride với hương trái cây tự nhiên cho trẻ em', image: '/kids-toothpaste.jpg', ageGroup: '2-6 tuổi' },
  { id: 2, name: 'Nền Nước Súc Miệng Cho Trẻ', description: 'Công thức nước súc miệng nhẹ nhàng, không chứa cồn cho trẻ em', image: '/kids-mouthwash.jpg', ageGroup: '4-8 tuổi' },
  { id: 3, name: 'Công Thức Gel Đánh Răng Cho Trẻ', description: 'Gel đánh răng nhẹ nhàng với xylitol ngăn ngừa sâu răng', image: '/kids-gel.jpg', ageGroup: '1-4 tuổi' },
  { id: 4, name: 'Bột Đánh Răng Cho Trẻ', description: 'Bột đánh răng tự nhiên với chất mài mòn nhẹ', image: '/kids-powder.jpg', ageGroup: '3-7 tuổi' },
  { id: 5, name: 'Khăn Lau Răng Cho Bé', description: 'Khăn lau mềm mại cho chăm sóc răng miệng trẻ sơ sinh', image: '/baby-wipes.jpg', ageGroup: '0-2 tuổi' },
  { id: 6, name: 'Bọt Răng Cho Trẻ', description: 'Công thức tạo bọt thú vị cho vệ sinh răng miệng sớm', image: '/kids-foam.jpg', ageGroup: '2-5 tuổi' },
  { id: 7, name: 'Son Dưỡng Môi Cho Trẻ', description: 'Son dưỡng môi bảo vệ với SPF cho trẻ em', image: '/kids-lipbalm.jpg', ageGroup: '1-10 tuổi' },
  { id: 8, name: 'Kem Đánh Răng Thiếu Niên', description: 'Kem đánh răng ít fluoride cho răng đang phát triển', image: '/junior-toothpaste.jpg', ageGroup: '6-12 tuổi' },
  { id: 9, name: 'Chất Hiện Thị Mảng Bám Cho Trẻ', description: 'Công thức giáo dục hiện thị mảng bám răng', image: '/kids-indicator.jpg', ageGroup: '4-12 tuổi' },
  { id: 10, name: 'Xịt Thơm Miệng Cho Trẻ', description: 'Xịt thơm miệng sảng khoái với thành phần tự nhiên', image: '/kids-spray.jpg', ageGroup: '5-12 tuổi' }
];

const adultProducts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Sản Phẩm Chăm Sóc Răng Miệng Người Lớn ${i + 1}`,
  description: `Nguyên liệu chăm sóc răng miệng chuyên nghiệp cho sản phẩm vệ sinh răng miệng người lớn. Hiệu quả được chứng minh lâm sàng.`,
  image: `/adult-oral-${i + 1}.jpg`,
  category: ['Kem Đánh Răng', 'Nước Súc Miệng', 'Làm Trắng', 'Nhạy Cảm', 'Chăm Sóc Lợi', 'Thơm Miệng'][i % 6],
  activeIngredient: ['Fluoride', 'Hydrogen Peroxide', 'Potassium Nitrate', 'Triclosan', 'Cetylpyridinium Chloride', 'Xylitol'][i % 6],
  benefits: ['Bảo Vệ Khỏi Sâu Răng', 'Làm Trắng', 'Giảm Nhạy Cảm', 'Kháng Khuẩn', 'Thơm Miệng', 'Kiểm Soát Mảng Bám'][i % 6]
}));

export default function OralCare() {
  const [activeTab, setActiveTab] = useState('children');

  const ProductCard = ({ product, showAge = false, showDetails = false }: any) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Hình Ảnh Sản Phẩm</span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        {showAge && product.ageGroup && (
          <div className="mb-3">
            <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
              Tuổi: {product.ageGroup}
            </span>
          </div>
        )}
        {showDetails && (
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
              {product.category}
            </span>
            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
              {product.activeIngredient}
            </span>
            <span className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">
              {product.benefits}
            </span>
          </div>
        )}
        <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
          Xem Chi Tiết
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-4">Sản Phẩm Chăm Sóc Răng Miệng</h1>
          <p className="text-xl">
            Nguyên liệu chuyên biệt cho sản phẩm chăm sóc răng miệng trẻ em và người lớn. Công thức an toàn, hiệu quả cho giải pháp vệ sinh răng miệng
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('children')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'children'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Sản Phẩm Cho Trẻ (10)
              </button>
              <button
                onClick={() => setActiveTab('adults')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'adults'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Sản Phẩm Người Lớn (20)
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'children' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Chăm Sóc Răng Miệng Trẻ Em</h2>
              <p className="text-gray-600">
                Nguyên liệu chăm sóc răng miệng an toàn và nhẹ nhàng được công thức đặc biệt cho trẻ em. Tất cả sản phẩm đều được nha sĩ nhi khuyến nghị và phù hợp với độ tuổi.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {childrenProducts.map((product) => (
                <ProductCard key={product.id} product={product} showAge />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'adults' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sản Phẩm Chăm Sóc Răng Miệng Người Lớn</h2>
              <p className="text-gray-600">
                Nguyên liệu cấp chuyên nghiệp cho chăm sóc răng miệng toàn diện của người lớn. Công thức được chứng minh lâm sàng cho nhu cầu răng khẩu khác nhau.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adultProducts.map((product) => (
                <ProductCard key={product.id} product={product} showDetails />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}