export default function Home() {
  return (
    <main className="px-6 max-w-6xl mx-auto">

      {/* HERO */}
      <section className="min-h-screen bg-white text-gray-900 py-24 px-6 flex flex-col items-start justify-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-8xl font-extrabold mb-4 tracking-tight">
            Ben Spooner.
          </h1>

          {/* <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
            Product Builder + WebLLM Specialist
          </p> */}

          <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
            PRODUCT BUILDER + WEBLLM SPECIALIST
          </p>

          <p className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
            One person. One build. Start to finish.
          </p>

          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl leading-relaxed">
            I'm a creative software developer, aka "that WebLLM guy". I'm the person you call to turn your raw idea into the finished article, handling everything from UX to launch - and beyond.
          </p>     

          <a
            href="#contact"
            aria-label="Jump to contact section"
            className="inline-block bg-black text-white px-6 py-3 text-base font-medium border-4 border-black hover:bg-white hover:text-black transition"
          >
            Let’s build your product →
          </a>

          <div className="mt-20 text-gray-400 text-2xl animate-bounce-slow">↓</div>
        </div>
      </section>

      {/* My Projects */}      
      <section className="bg-white text-gray-900 px-6 py-20 border-t border-gray-200">
        <div className="max-w-3xl">

          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Things I’ve Built</h3>

          <div className="space-y-12">
            
            {/* Copy Companion */}
            <article className="border-l-4 border-black pl-4">
              <h3 className="text-2xl font-semibold">Copy Companion</h3>
              <p className="text-xs uppercase tracking-wider text-gray-500 mt-2 mb-1">AI Tool • WebLLM • Privacy-first</p>
              <p className="text-gray-700 leading-relaxed">
                A copy checker for marketing teams who need to write in line with their company's brand guidlines. It runs entirely in the browser using WebLLM + Regex, and helps creators stay on-brand without sending content to the cloud.
              </p>
              <a
                href="https://www.copy-companion.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wide text-black hover:underline transition"
              >
                Visit site →
              </a>
            </article>

            {/* 14 Days to Composer */}
            <article className="border-l-4 border-black pl-4">
              <h3 className="text-2xl font-semibold">Beginner to Composer in 14 Days</h3>
              <p className="text-xs uppercase tracking-wider text-gray-500 mt-2 mb-1">Website • Digital Course • MVP</p>
              <p className="text-gray-700 leading-relaxed">                
                A website promoting a book + eBook titled Beginner to Composer in 14 Days. Embedded into the website is a preview of a digital course, the MVP for this educational book for budding musicians.
              </p>
              <a
                href="https://www.14days.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wide text-black hover:underline transition"
              >
                Visit site →
              </a>
            </article>

            {/* Keep The Music Alive */}
            <article className="border-l-4 border-black pl-4">
              <h3 className="text-2xl font-semibold">Keep The Music Alive</h3>
              <p className="text-xs uppercase tracking-wider text-gray-500 mt-2 mb-1">Game • 2D • Platformer</p>
              <p className="text-gray-700 leading-relaxed">
                A retro 2D platform game where your moves shape a jazz/classical soundtrack in real-time. It’s part game, part album, part interactive composition tool.
              </p>
              <a
                href="#"
                className="text-sm uppercase tracking-wide text-black hover:underline transition"
              >
                Play the game →
              </a>
            </article>
          </div>

          <p className="text-lg text-gray-700 mt-16 leading-relaxed max-w-2xl">
            One build means one complete product - not a handoff or a piecemeal job. One point of contact, a safe pair of hands.
          </p>
        </div>
      </section>


      {/* Why Me */}
      <section className="bg-white text-gray-900 px-6 py-16 border-t border-gray-200">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Why Me</h2>

          <p className="text-lg text-gray-700 mb-12">
            I don’t run an agency. I just build products - clean, fast, and end to end. I work hand in hand with clients and make things that actually work.
          </p>

          <ul className="space-y-6 text-gray-800 text-base leading-relaxed">
            <li>
              <span className="font-semibold uppercase tracking-wide text-sm block mb-1">
                Solo, start to finish
              </span>
              I handle product, UX, and dev. No handoffs. No delays.
            </li>

            <li>
              <span className="font-semibold uppercase tracking-wide text-sm block mb-1">
                Builder, not just coder
              </span>
              I think in workflows and outcomes - not just 0s and 1s.
            </li>

            <li>
              <span className="font-semibold uppercase tracking-wide text-sm block mb-1">
                AI-native where it matters
              </span>
              I use tools like WebLLM and GPT when they add real value (and skip them when they don’t).
            </li>

            <li>
              <span className="font-semibold uppercase tracking-wide text-sm block mb-1">
                End user hat on (always)
              </span>
              I build products with the audience in mind. Intuitive, enjoyable, user experience is a must.
            </li>

            <li>
              <span className="font-semibold uppercase tracking-wide text-sm block mb-1">
                Fast, not rushed
              </span>
              Focused builds. Clean results. No bloat.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}      
      <section id="contact" className="bg-white text-gray-900 px-6 py-24 border-t border-gray-200">
        <div className="max-w-3xl">

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Let’s Build Your Product</h2>

          <p className="text-lg text-gray-700 mb-8">
            Got an idea? Let’s turn it into a working product - quickly, properly, and in a cutting-edge way.
          </p>

          

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:ben@benspooner.co.uk"
              className="inline-block bg-black text-white px-6 py-3 text-base font-medium border-4 border-black hover:bg-white hover:text-black transition"
            >
              Start your build →
            </a>
          </div>

        </div>
      </section>

      <footer className="text-sm text-gray-400 py-10 text-center">
        © {new Date().getFullYear()} Ben Spooner.
        <p>I live in the UK, play drums, cook stews, read, and do dad things.</p>
      </footer>

    </main>
  );
}
