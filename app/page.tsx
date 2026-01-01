"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with 3D Background */}
      <section className="relative min-h-screen h-[120vh] overflow-hidden">
        {/* Spline 3D Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe 
            src='https://my.spline.design/clonercubesgenerativecopy-S0DKrfnEZleEoWsvHkD4211F/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="w-full h-full"
          />
        </div>
        
        {/* Natural Vignette Effect - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
        
        {/* Company Branding - Bottom Right (Natural Watermark) - Hidden on mobile */}
        <motion.div
          className="absolute bottom-4 right-4 z-20 hidden md:flex items-center gap-3 backdrop-blur-sm bg-white/10 rounded-2xl px-6 py-3 border border-white/20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <Image 
            src="/Nano_BriX_transparent.png" 
            alt="NanoBriX" 
            width={80} 
            height={30}
            className="h-6 w-auto"
          />
          <motion.div
            className="text-white/80 text-xs font-light"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Ultra Fine Bubble Technology
          </motion.div>
        </motion.div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-800/30 to-black/60" />
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 1,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.h1 
                className="text-6xl md:text-8xl font-bold mb-6 text-white"
                style={{
                  textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(59, 130, 246, 0.8)'
                }}
                animate={{ 
                  textShadow: [
                    "0 4px 20px rgba(0,0,0,0.8), 0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(59, 130, 246, 0.8)",
                    "0 4px 20px rgba(0,0,0,0.8), 0 0 20px rgba(59, 130, 246, 0.5)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Experience the Power of
              </motion.h1>
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.9))'
                }}
              >
                <h2 className="text-7xl md:text-9xl font-black mb-8 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  Nano Bubble
                </h2>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4 mb-10 backdrop-blur-md bg-black/40 rounded-3xl p-8 border-2 border-white/30 shadow-2xl"
            >
              {["창조: 혁신적인 기술로 깊고 효과적인 세정", "청결: 세균과 때를 완벽하게 제거", "상쾌: 하루 종일 피부가 상쾌하고 신선함 유지"].map((text, i) => (
                <motion.p 
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.2 }}
                  className="text-lg md:text-xl text-white font-semibold"
                >
                  • {text}
                </motion.p>
              ))}
            </motion.div>

            {/* Company Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto"
            >
              {/* Left Card - Company Info */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="backdrop-blur-md bg-gradient-to-br from-black/50 to-black/40 rounded-2xl p-6 border-2 border-white/40 shadow-2xl transform-gpu"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 bg-white rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg p-2"
                >
                  <Image 
                    src="/Nano_BriX_transparent.png" 
                    alt="NanoBriX Logo" 
                    width={80} 
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <h3 className="text-2xl font-black text-white mb-4 tracking-wider">㈜나노브릭스</h3>
                <div className="space-y-2 text-left text-blue-100">
                  <motion.p 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5, color: "#ffffff" }}
                  >
                    <span className="text-cyan-300">📍</span>
                    <span className="text-sm">인천 연수구 갯벌로 169</span>
                  </motion.p>
                  <motion.p 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5, color: "#ffffff" }}
                  >
                    <span className="text-cyan-300">🏢</span>
                    <span className="text-sm">서울 금천구 가산디지털1로 128</span>
                  </motion.p>
                  <motion.p 
                    className="flex items-center gap-2"
                    whileHover={{ x: 5, color: "#ffffff" }}
                  >
                    <span className="text-cyan-300">👤</span>
                    <span className="text-sm">융합기술연구소본부장 여승훈</span>
                  </motion.p>
                </div>
              </motion.div>

              {/* Right Card - Contact Info */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                className="backdrop-blur-md bg-gradient-to-br from-cyan-900/60 to-blue-900/60 rounded-2xl p-6 border-2 border-cyan-300/50 shadow-2xl transform-gpu"
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(34, 211, 238, 0.5)",
                      "0 0 40px rgba(34, 211, 238, 0.8)",
                      "0 0 20px rgba(34, 211, 238, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)"
                  }}
                >
                  <span className="text-3xl">📞</span>
                </motion.div>
                <h3 className="text-2xl font-black text-white mb-4">Contact</h3>
                <div className="space-y-2 text-left text-white">
                  <motion.a
                    href="tel:02-2279-7857"
                    className="flex items-center gap-2 hover:text-cyan-300 transition"
                    whileHover={{ x: 5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-cyan-300">☎</span>
                    <span className="text-sm font-semibold">(02) 2279-7857</span>
                  </motion.a>
                  <motion.a
                    href="tel:010-4536-4244"
                    className="flex items-center gap-2 hover:text-cyan-300 transition"
                    whileHover={{ x: 5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-cyan-300">📱</span>
                    <span className="text-sm font-semibold">휴대폰: 010-4536-4244</span>
                  </motion.a>
                  <motion.a
                    href="mailto:shyeo@nano-brix.com"
                    className="flex items-center gap-2 hover:text-cyan-300 transition"
                    whileHover={{ x: 5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-cyan-300">✉️</span>
                    <span className="text-sm font-semibold">shyeo@nano-brix.com</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="https://nano-brix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-12 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:rotate-2"
              >
                자세히 알아보기
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="text-white text-sm mb-2">Scroll Down</div>
          <div className="w-6 h-10 border-2 border-white rounded-full mx-auto">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full mx-auto mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
