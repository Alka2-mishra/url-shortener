function DashboardLayout() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#0f172a] text-[#f8fafc]">
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        <div className="absolute inset-0 bg-[#0f172a]/90" />

        <div className="absolute left-[-80px] top-[-60px] h-80 w-80 rounded-full bg-[#7c3aed]/20 blur-3xl motion-blob" />
        <div className="absolute right-[-40px] top-40 h-72 w-72 rounded-full bg-[#06b6d4]/16 blur-3xl motion-blob motion-blob-delay" />
        <div className="absolute bottom-[-80px] left-1/3 h-80 w-80 rounded-full bg-white/6 blur-3xl motion-blob motion-blob-slower" />

        <div className="relative z-10 flex min-h-screen flex-col">
          <header className="bg-[#0f172a]/80 backdrop-blur-xl">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-2 lg:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#7c3aed] text-base font-bold text-white shadow-lg shadow-[#7c3aed]/30">
                  S
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">
                    URL Shortner
                  </p>
                  <h1 className="text-[13px] font-semibold leading-none text-[#f8fafc]">
                    Shorten Lab
                  </h1>
                </div>
              </div>

              <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
                <a className="transition hover:text-white" href="#home">
                  Home
                </a>
                <a className="transition hover:text-white" href="#features">
                  Features
                </a>
                <a className="transition hover:text-white" href="#contact">
                  Contact Us
                </a>
              </nav>

              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  className="rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-sm text-[#f8fafc] transition hover:bg-white/10"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="rounded-full bg-[#7c3aed] px-4 py-1.5 text-sm font-semibold text-white shadow-lg shadow-[#7c3aed]/30 transition hover:bg-[#6d28d9]"
                >
                  Sign up
                </button>
              </div>
            </div>
          </header>

          <main
            id="home"
            className="mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-10 lg:px-8 lg:py-16"
          >
            <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <section className="relative z-10 motion-fade-up">
                <div className="inline-flex items-center rounded-full border border-[#06b6d4]/25 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-[#06b6d4]">
                  Fast, clean, measurable
                </div>

                <h2 className="mt-6 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-tight text-[#f8fafc] sm:text-6xl lg:text-7xl">
                  Shorten. Track. Analyze.
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-white/68 sm:text-lg">
                  Turn long links into polished short URLs with a dashboard that feels
                  calm, modern, and easy to scan.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    className="group relative overflow-hidden rounded-2xl bg-[#7c3aed] px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-[#7c3aed]/30 transition duration-300 hover:-translate-y-0.5 hover:bg-[#6d28d9]"
                  >
                    <span className="relative z-10">Get Started</span>
                    <span className="absolute inset-0 -translate-x-full bg-white/10 transition duration-500 group-hover:translate-x-full" />
                  </button>
                  <button
                    type="button"
                    className="rounded-2xl border border-white/12 bg-white/5 px-6 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#f8fafc] transition hover:bg-white/10"
                  >
                    Learn More
                  </button>
                </div>

                <div
                  id="features"
                  className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3"
                >
                  {[
                    ['32.4K', 'Total clicks'],
                    ['14.8K', 'Unique visitors'],
                    ['97.2%', 'Link health'],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-[24px] border border-white/10 bg-[#111827] p-5 shadow-lg"
                    >
                      <p className="text-3xl font-semibold text-[#f8fafc]">{value}</p>
                      <p className="mt-2 text-sm text-white/55">{label}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="relative flex justify-center lg:justify-end motion-fade-up motion-delay-1">
                <div className="absolute inset-0 hidden rounded-[36px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_65%)] lg:block" />

                <div className="relative w-full max-w-xl rounded-[36px] border border-white/10 bg-[#111827]/95 p-5 shadow-2xl backdrop-blur-xl sm:p-7 motion-lift">
                  <div className="rounded-[28px] border border-white/10 bg-[#0f172a] p-5 sm:p-6">
                    <p className="text-xs uppercase tracking-[0.35em] text-[#06b6d4]">
                      Quick shorten
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-[#f8fafc]">
                      Paste your link and launch it fast
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-white/60">
                      Keep the interface focused with a single action box, crisp
                      contrast, and the same dark palette across every layer.
                    </p>

                    <div
                      id="contact"
                      className="mt-6 rounded-[28px] border border-white/10 bg-[#111827] p-3"
                    >
                      <div className="flex flex-col gap-3 rounded-[22px] border border-white/10 bg-[#0f172a] p-3 sm:flex-row sm:items-center">
                        <input
                          type="url"
                          placeholder="Paste your long URL here"
                          aria-label="URL input"
                          className="h-14 flex-1 rounded-2xl border border-white/10 bg-[#111827] px-5 text-base text-[#f8fafc] outline-none placeholder:text-white/35 focus:border-[#06b6d4]/70 focus:ring-2 focus:ring-[#06b6d4]/20"
                        />
                        <button
                          type="button"
                          className="rounded-2xl bg-[#06b6d4] px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#0f172a] shadow-lg shadow-[#06b6d4]/20 transition hover:bg-[#22c8df]"
                        >
                          Shorten
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>

      <style>{`\n        @keyframes motionBlob {\n          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }\n          33% { transform: translate3d(18px, -16px, 0) scale(1.05); }\n          66% { transform: translate3d(-14px, 10px, 0) scale(0.96); }\n        }\n\n        @keyframes motionFadeUp {\n          0% { opacity: 0; transform: translateY(18px); }\n          100% { opacity: 1; transform: translateY(0); }\n        }\n\n        @keyframes motionLift {\n          0%, 100% { transform: translateY(0); }\n          50% { transform: translateY(-8px); }\n        }\n\n        .motion-blob {\n          animation: motionBlob 18s ease-in-out infinite;\n        }\n\n        .motion-blob-delay {\n          animation-delay: -6s;\n        }\n\n        .motion-blob-slower {\n          animation-duration: 24s;\n        }\n\n        .motion-fade-up {\n          animation: motionFadeUp 700ms ease-out both;\n        }\n\n        .motion-delay-1 {\n          animation-delay: 120ms;\n        }\n\n        .motion-lift {\n          animation: motionLift 12s ease-in-out infinite;\n        }\n      `}</style>

    </div>
  )
}

export default DashboardLayout