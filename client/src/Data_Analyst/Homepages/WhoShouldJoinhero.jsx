export default function WhoShouldJoinHero() {
  return (
    <section
      id="who-should-join"
      className="relative py-20 px-6 md:px-16 lg:px-28 bg-[#0d0d0d] text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-1/2 translate-x-1/2 w-[460px] h-[460px] bg-yellow-600/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-yellow-400">
          Who Should Join?
        </h2>

        <div className="space-y-6 text-left mx-auto max-w-3xl">
          {/* Point 1 */}
          <div className="flex items-start gap-3">
            <span className="text-yellow-500 text-2xl">🎓</span>
            <p className="text-lg text-slate-300 leading-relaxed">
              Students wanting a{" "}
              <span className="font-semibold text-yellow-400">
                high-growth career path
              </span>{" "}
              in tech, data, or AI.
            </p>
          </div>

          {/* Point 2 */}
          <div className="flex items-start gap-3">
            <span className="text-yellow-500 text-2xl">💼</span>
            <p className="text-lg text-slate-300 leading-relaxed">
              Working professionals looking to{" "}
              <span className="font-semibold text-yellow-400">
                upskill or switch careers
              </span>{" "}
              into data-driven roles.
            </p>
          </div>

          {/* Point 3 */}
          <div className="flex items-start gap-3">
            <span className="text-yellow-500 text-2xl">🤖</span>
            <p className="text-lg text-slate-300 leading-relaxed">
              Anyone curious about AI & data who wants a{" "}
              <span className="font-semibold text-yellow-400">
                clear learning roadmap
              </span>{" "}
              to get started.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href="#contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-400 transition-all text-black font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-yellow-500/30"
          >
            👉 Register for Free Now!
          </a>
        </div>
      </div>
    </section>
  );
}
