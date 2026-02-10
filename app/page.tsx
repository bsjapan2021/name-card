"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const logoSrc = "/LOGO.png";
  const highlights = [
    "제조·자동화와 전기·전자/소프트웨어 융합 R&D 경험",
    "초미세기포(UFB)·수질개선, 공장자동화, OPV(유기태양전지) 사업화",
    "일본 거주 30년 기반 글로벌 협업 및 조직 운영",
  ];

  const competencies = [
    "R&D/기술총괄: 공장자동화 시스템 설계·개발, UFB 기반 수질개선",
    "SW/AI: 풀스택(웹·모바일) 개발, LLM 기반 RAG 시스템",
    "HW/제조: 3D 설계, PCB 설계·제작, CNC 가공, 제조 현장 운영",
    "사업/조직: 무역 실무 30년, 조직 관리 30년, 제조 라인 설계 팀 운영",
    "언어/협업: 일본어 가능, 다국적 조직 협업 경험",
  ];

  const experiences = [
    {
      period: "1992–1995",
      org: "히타찌조선정보시스템",
      role: "한국지사장",
      detail: "3D 설계 P/G 개발, 한국지사 가공기술",
    },
    {
      period: "1997–2022.03",
      org: "(유)B.S.Japan",
      role: "대표이사",
      detail: "공장자동화 시스템 설계·개발, 공작기계 제조·매매, ICT 개발",
    },
    {
      period: "2022.03–2022.12",
      org: "㈜솔라윈도우 (미국)",
      role: "한국지사 CTO",
      detail: "IR, R&D, 어플리케이션 개발, 3세대 OPV 연구",
    },
    {
      period: "2024",
      org: "㈜케이앤씨가람",
      role: "연구소장",
      detail: "유기태양전지 개발",
    },
    {
      period: "2025.03–현재",
      org: "주식회사 허틀러",
      role: "연구개발본부장",
      detail: "AI 기반 수질개선 시스템 개발",
    },
  ];

  const projects = [
    "3세대 OPV 연구개발 (특허출원)",
    "유체소용돌이 발생장치 개발 (특허등록)",
    "LLM 기반 RAG 시스템 개발\n(AI 변호사, 세무사 개발)",
    "UFB 기반 수질개선 시스템 및 100nm 이하 기포 생성장치 개발",
  ];

  const patents = [
    "유체소용돌이발생장치 (등록, 2014)",
    "미세기포생성장치 및 정화처리시스템 (등록, 2026)",
    "다층구조 메타물질 기반 방진매트 (등록, 2026)",
    "유기 반도체 장치 접촉층 형성 방법 (출원중)",
    "태양광 패널 확인 시스템 및 방법 (출원중)",
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#05070f] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[140px]" />
          <div className="absolute -bottom-40 right-0 h-[480px] w-[480px] rounded-full bg-indigo-500/20 blur-[160px]" />
          <div className="absolute inset-0 noise-layer opacity-50" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-[1.1fr_0.7fr_0.6fr] gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/70"
              >
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                제조 자동화 · AI 융합 R&D 리더
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                className="text-4xl md:text-6xl font-black leading-tight"
              >
                여승훈
                <span className="block text-2xl md:text-3xl font-semibold text-cyan-300 mt-4">
                  R&D · 제조자동화 · AI 융합
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-white/70 text-lg leading-relaxed"
              >
                제조·자동화와 전기·전자/소프트웨어 기반의 융합 경험을 바탕으로 초미세기포(UFB),
                공장자동화, 유기태양전지(OPV)까지 연구·개발·사업화를 수행해 왔습니다.
              </motion.p>

              <div className="grid md:grid-cols-3 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:shyeo@nano-brix.com"
                  className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_20px_rgba(34,211,238,0.6)] transition hover:translate-y-[-2px]"
                >
                  프로젝트 문의
                </a>
                <a
                  href="tel:010-4536-4244"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-cyan-400 hover:text-white"
                >
                  바로 연락하기
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 rounded-2xl overflow-hidden border border-white/20">
                    <Image
                      src="/1.jpeg"
                      alt="여승훈 프로필 사진"
                      fill
                      sizes="80px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">주식회사 허틀러</p>
                    <p className="text-sm text-white/60">연구개발본부장</p>
                    <p className="text-xs text-white/50">부천시 원미구 중동로 302호, 제 525동 502호</p>
                    <p className="text-xs text-white/50">IRIS 13205712</p>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-[#0b1120] p-4">
                  <div className="relative h-28 w-full">
                    <Image
                      src={logoSrc}
                      alt="개인 로고"
                      fill
                      sizes="448px"
                      unoptimized
                      className="object-contain"
                      style={{ transform: "scale(1.8)" }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "무역/조직 운영", value: "30년" },
                  { label: "공작기계·제조", value: "20년" },
                  { label: "금속 제조", value: "15년" },
                  { label: "웹·AI 개발", value: "10년" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                  >
                    <p className="text-2xl font-bold text-cyan-300">{stat.value}</p>
                    <p className="text-xs text-white/60 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="hidden lg:flex justify-end"
            >
              <div className="relative w-full max-w-[280px]">
                <div className="absolute -inset-6 rounded-[36px] bg-cyan-500/20 blur-3xl" />
                <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-4">
                  <div className="relative w-full h-[440px] rounded-[28px] overflow-hidden border border-white/10 bg-[#0b1120]">
                    <Image
                      src="/5.png"
                      alt="여승훈 전신 사진"
                      fill
                      sizes="(max-width: 1280px) 40vw, 280px"
                      className="object-contain"
                      unoptimized
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold mb-4">핵심 역량</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {competencies.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-cyan-300">•</span>
                  <span className="whitespace-pre-line">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold mb-4">주요 연구·개발</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {projects.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-cyan-300">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold mb-4">지식재산권</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {patents.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-cyan-300">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl font-semibold mb-6">경력 타임라인</h3>
          <div className="space-y-5">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border border-white/10 rounded-2xl p-4 bg-[#0b1120]"
              >
                <div>
                  <p className="text-sm text-cyan-300 font-semibold">{exp.period}</p>
                  <p className="text-lg font-semibold">{exp.org}</p>
                  <p className="text-sm text-white/60">{exp.role}</p>
                </div>
                <p className="text-sm text-white/70 md:max-w-lg">{exp.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">개발 프로젝트</h3>
              <p className="text-white/70 mt-2">
                프로젝트 버튼을 클릭하면 데모 사이트로 이동합니다.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "산청군 수재해 취약지구 홍수재해 관리시스템",
                  url: "https://3d-digital-twin-m543w38ck-seunghyeos-projects.vercel.app/",
                },
                {
                  title: "수자원공사 아산취수장 AI기반 초미세기포에 의한 취수장 수질개선 시스템",
                  url: "https://ai-dashboard-seunghyeos-projects.vercel.app/ai_dashboard/control-v2.html",
                },
                {
                  title: "대청호 AI및 위성 기반 수질관리시스템",
                  url: "https://frontend-rlji8fbya-seunghyeos-projects.vercel.app/",
                },
                {
                  title: "전국 대기질모니터링 시스템",
                  url: "https://frontend-next-silk.vercel.app/",
                },
                {
                  title: "일본 골든바레 골프장 AI기반 디지털트윈 수질개선 관리 시스템",
                  url: "https://golf-2026-seven.vercel.app/",
                },
                {
                  title: "일본 코마 골프컨트리클럽 AI기반 수질개선 관리 시스템",
                  url: "https://coma-cc.vercel.app/",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-[#0b1120] p-4 flex flex-col gap-3"
                >
                  <p className="text-sm text-white/80 leading-relaxed">{project.title}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-cyan-400/60 px-4 py-2 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
                  >
                    프로젝트 보기
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">초미세기포 관련 개발품</h3>
              <p className="text-white/70 mt-2">양어양식장 용존산소 및 AI제어 수질관리 시스템</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { src: "/3.jpeg", title: "양어양식장 용존산소 및 AI제어 수질관리 시스템" },
                { src: "/4.jpeg", title: "양어양식장 용존산소 및 AI제어 수질관리 시스템" },
                { src: "/아산.png", title: "AI기반 초미세기포 실증사진 (아산)" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-[#0b1120] p-4"
                >
                  <div className="relative w-full h-64 rounded-xl overflow-hidden border border-white/10 bg-black/20">
                    <Image
                      src={item.src}
                      alt="양어양식장 용존산소 및 AI제어 수질관리 시스템"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <p className="mt-4 text-sm text-white/80">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 p-8">
          <h3 className="text-2xl font-semibold mb-4">현재 수행 중인 정부지원 사업</h3>
          <p className="text-white/70">K-Water K-Testbed · 초미세기포 기반 수질개선</p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/70">
            <span className="rounded-full border border-white/20 px-3 py-1">2025.05.26–2026.01.30 예정</span>
            <span className="rounded-full border border-white/20 px-3 py-1">참여율 100%</span>
            <span className="rounded-full border border-white/20 px-3 py-1">연구비 5,000만원</span>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-[0.55fr_0.45fr] gap-8 items-center rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">초미세기포 발생 메커니즘</h3>
            <p className="text-white/70 leading-relaxed">
              개발한 초미세기포(UFB) 발생기의 핵심 메커니즘을 시각화한 이미지입니다. 공정 설계와
              효율 최적화에 필요한 흐름 구조를 표현했습니다.
            </p>
          </div>
          <div className="relative w-full h-72 rounded-2xl overflow-hidden border border-white/10 bg-[#0b1120]">
            <Image
              src="/misegipo.png"
              alt="초미세기포 발생 메커니즘"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold">검사성적서</h3>
              <p className="text-white/70">
                직접 개발한 제품의 검사성적서입니다. 확대해 확인할 수 있습니다.
              </p>
            </div>
            <a
              href="/cc.png"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-cyan-400/60 px-5 py-2 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
            >
              원본 보기
            </a>
          </div>
          <div className="mt-6 relative w-full h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-[#0b1120]">
            <Image
              src="/cc.png"
              alt="제품 검사성적서"
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">초미세기포 제네레이터 프로젝트</h3>
              <p className="text-white/70 mt-2">제품 구성과 버블 생성장치 이미지를 카드로 정리했습니다.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { src: "/제품1.png", title: "초미세기포 제네레이터 제품" },
                { src: "/버블생성장치.jpeg", title: "버블 생성장치" },
                { src: "/fish.jpeg", title: "양식 적용 사례" },
                { src: "/제품2.png", title: "나노버블 발생전용기" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-[#0b1120] p-4"
                >
                  <div className="relative w-full h-64 rounded-xl overflow-hidden border border-white/10 bg-black/30">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <p className="mt-4 text-sm text-white/80">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
