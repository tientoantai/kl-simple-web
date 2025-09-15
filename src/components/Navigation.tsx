'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-blue-600">
                Kim Loan Chemicals
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Trang Chủ
            </Link>
            <Link
              href="/homecare"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Homecare
            </Link>
            <Link
              href="/personalcare"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Chăm Sóc Cá Nhân
            </Link>
            <Link
              href="/oralcare"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Chăm Sóc Răng Miệng
            </Link>
            <Link
              href="/about"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Giới Thiệu
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Liên Hệ
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 hover:text-blue-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Trang Chủ
              </Link>
              <Link
                href="/homecare"
                className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Homecare
              </Link>
              <Link
                href="/personalcare"
                className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Chăm Sóc Cá Nhân
              </Link>
              <Link
                href="/oralcare"
                className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Chăm Sóc Răng Miệng
              </Link>
              <Link
                href="/about"
                className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Giới Thiệu
              </Link>
              <Link
                href="/contact"
                className="block text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Liên Hệ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}