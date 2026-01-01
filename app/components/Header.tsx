"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/Nano_BriX_transparent.png" 
              alt="NanoBriX Logo" 
              width={150} 
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              홈
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 transition">
              제품정보
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              회사개요
            </Link>
            <Link href="/notice" className="text-gray-700 hover:text-blue-600 transition">
              공지사항
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              홈
            </Link>
            <Link
              href="/products"
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              제품정보
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              회사개요
            </Link>
            <Link
              href="/notice"
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              공지사항
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
