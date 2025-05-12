import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="px-6 max-w-6xl mx-auto">

      {/* HERO */}
      <section className="min-h-screen bg-white text-gray-900 py-24 px-6 flex flex-col items-start justify-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-8xl font-extrabold mb-4 tracking-tight">
            Ben Spooner.
          </h1>          

          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2 font-mono-label">
            PRODUCT BUILDER
          </p>

          <p className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
            One person. One build. Start to finish.
          </p>          

          <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl leading-relaxed">
            {`I don’t run an agency. I just like to build things. I'm a creative software developer who turns raw ideas into real products - handling everything from UX to launch - and beyond.`}
          </p>               

          <a
            href="#contact"
            aria-label="Jump to contact section"
            className="inline-block bg-black text-white px-6 py-3 text-base font-medium border-4 border-black hover:bg-white hover:text-black transition"
          >
            {`Let’s build your product →`}
          </a>

          <div className="mt-20 text-gray-400 text-2xl animate-bounce-slow">↓</div>
        </div>
      </section>      

      {/* My Projects */}      
      <section className="bg-white text-gray-900 px-6 py-20 border-t border-gray-200">
        <div className="max-w-3xl">
          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-mono-label">Things I’ve Built</h3>
          <div className="space-y-12">
            
            {/* Copy Companion */}
            <article className="border-l-4 border-black pl-4">
              <h3 className="text-2xl font-semibold">Copy Companion</h3>
              <p className="text-xs uppercase tracking-wider text-gray-500 mt-2 mb-1">AI Writing Assistant • Fast & Private • On-Brand Copy</p>
              <p className="text-gray-700 leading-relaxed">
                {`A copy checker for marketing teams who need to write in line with their company's brand guidelines. It offers two modes: fast (using Groq + Mistral) and private (using in-browser WebLLM) - both enhanced with Regex for precision.`}
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
        </div>
      </section>

      {/* About + Why Me */}
      <section className="bg-white text-gray-900 px-6 py-20 border-t border-gray-200">
        <div className="max-w-3xl space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">About Me</h2>            
          
          <p className="text-lg text-gray-700 leading-relaxed font-light">            
            Hello, I’m Ben, a musician-turned-product builder who designs, codes, and ships lean, AI-powered tools - fast and end-to-end. My background in composition taught me to shape ideas with structure and feel - a skill I now bring to UX, flow, and product thinking.
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
              I think in workflows and outcomes — not just 0s and 1s.
            </li>

            <li>
              <span className="font-semibold uppercase tracking-wide text-sm block mb-1">
                AI-native where it matters
              </span>
              I use tools like WebLLM, Groq, and Regex when they add real value (and skip them when they don’t).
            </li>

            <li>
              <span className="font-semibold uppercase tracking-wide text-sm block mb-1">
                End user hat on (always)
              </span>
              I build products with the audience in mind. Intuitive, enjoyable user experience is a must.
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

      {/* Tech Stack */}
      <section className="bg-white text-gray-900 px-6 py-16 border-t border-gray-200">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-xl uppercase tracking-widest text-gray-500 font-mono-label">Tech Stack</h2>          

          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-800 text-base">
            <li><span className="font-medium">WebLLM</span><br /><span className="text-gray-500 text-sm">Privacy-first local AI</span></li>
            <li><span className="font-medium">Groq + Mistral</span><br /><span className="text-gray-500 text-sm">Fast, low-latency LLMs</span></li>
            <li><span className="font-medium">Regex</span><br /><span className="text-gray-500 text-sm">Reliable content rules</span></li>
            <li><span className="font-medium">Next.js</span><br /><span className="text-gray-500 text-sm">Frontend + API</span></li>
            <li><span className="font-medium">Tailwind CSS</span><br /><span className="text-gray-500 text-sm">Rapid, minimal styling</span></li>
            <li><span className="font-medium">Postmark / Vercel</span><br /><span className="text-gray-500 text-sm">Deploy + deliver</span></li>
          </ul>
        </div>
      </section>

      {/* Is this you?? */}
      <section className="bg-white text-gray-900 px-6 py-16 border-t border-gray-200">
        <div className="max-w-3xl">
          <h2 className="text-xl uppercase tracking-widest text-gray-500 mb-6 font-mono-label">Is this you?</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li>{`You’ve got a product idea and want it built fast - properly.`}</li>
            <li>You care about clean UX and smart AI, not fluff or hype.</li>
            <li>{`You’re building something where privacy matters.`}</li>
            <li>You want to avoid agencies and just get it shipped.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}      
      <section id="contact" className="bg-white text-gray-900 px-6 py-24 border-t border-gray-200">
        <div className="max-w-3xl">

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Let’s Build Your Product</h2>
          <p className="text-lg text-gray-700 mb-8">
            Got an idea? Let’s turn it into a working product...
            {/* An idea, built properly. */}
          </p>          

          <ContactForm/>          
        </div>
      </section>

      {/* Footer */}
      <footer className="text-sm text-gray-400 py-10 text-left px-6 mx-auto">
        © {new Date().getFullYear()} Ben Spooner.
        <p>I live in the UK, play drums, cook stews, read, and do dad things.</p>
      </footer>

    </main>
  );
}
