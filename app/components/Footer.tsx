import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image 
                src="/Nano_BriX_transparent.png" 
                alt="NanoBriX Logo" 
                width={180} 
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">㈜나노브릭스</h3>
            <p className="text-gray-400 text-sm mb-2">
              본사: 인천광역시 연수구 갯벌로 169, 미래관 201A호
            </p>
            <p className="text-gray-400 text-sm mb-2">
              연구소: 서울특별시 금천구 가산디지털1로 128, STX-V타워 B110~113호
            </p>
            <p className="text-gray-400 text-sm">
              대표이사: 최석봉
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">연락처</h3>
            <p className="text-gray-400 text-sm mb-2">
              전화: (02) 2279-7857
            </p>
            <p className="text-gray-400 text-sm mb-2">
              팩스: (02) 2279-7859
            </p>
            <p className="text-gray-400 text-sm">
              이메일: info@nano-brix.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">바로가기</h3>
            <div className="space-y-2">
              <a href="https://nano-brix.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 text-sm hover:text-white transition">
                제품정보
              </a>
              <a href="https://nano-brix.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 text-sm hover:text-white transition">
                회사개요
              </a>
              <a href="https://nano-brix.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 text-sm hover:text-white transition">
                공지사항
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 NanoBriX Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
