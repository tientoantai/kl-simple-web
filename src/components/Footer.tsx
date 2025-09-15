import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const suppliers = [
    { name: 'Supplier 1', logo: '/supplier1.png' },
    { name: 'Supplier 2', logo: '/supplier2.png' },
    { name: 'Supplier 3', logo: '/supplier3.png' },
    { name: 'Supplier 4', logo: '/supplier4.png' },
    { name: 'Supplier 5', logo: '/supplier5.png' },
    { name: 'Supplier 6', logo: '/supplier6.png' },
    { name: 'Supplier 7', logo: '/supplier7.png' },
    { name: 'Supplier 8', logo: '/supplier8.png' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              Kim Loan Chemicals
            </h3>
            <p className="text-gray-300 mb-4">
              Giải pháp công thức cao cấp cho sản phẩm homecare, chăm sóc cá nhân và chăm sóc răng miệng.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Thông Tin Liên Hệ</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 123 Business Street, City, Country</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ info@cosmeticingredients.com</p>
              <div className="mt-4">
                <p className="mb-2">Kết nối với chúng tôi:</p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full text-white text-sm">
                    Hỗ Trợ Zalo
                  </a>
                  <a href="#" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full text-white text-sm">
                    Hỗ Trợ Trực Tuyến
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Liên Kết Nhanh</h4>
            <div className="space-y-2">
              <Link href="/homecare" className="block text-gray-300 hover:text-blue-400">
                Sản Phẩm Homecare
              </Link>
              <Link href="/personalcare" className="block text-gray-300 hover:text-blue-400">
                Chăm Sóc Cá Nhân
              </Link>
              <Link href="/oralcare" className="block text-gray-300 hover:text-blue-400">
                Chăm Sóc Răng Miệng
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-blue-400">
                Giới Thiệu
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-blue-400">
                Liên Hệ
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4 text-center">Các Nhà Cung Cấp Đáng Tin Cậy</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
              {suppliers.map((supplier, index) => (
                <div key={index} className="flex justify-center">
                  <div className="w-20 h-20 bg-white rounded-lg p-2 flex items-center justify-center">
                    <span className="text-gray-600 text-xs text-center">
                      {supplier.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Kim Loan Chemicals. Tất cả các quyền được bảo lưu.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}