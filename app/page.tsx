const skills = [
  {
    name: "Python",
    level: "Data Analysis • Automation",
  },
  {
    name: "SQL",
    level: "Database • Data Queries",
  },
  {
    name: "Power BI",
    level: "Data Visualization",
  },
  {
    name: "Pandas",
    level: "Data Manipulation",
  },
  {
    name: "Git & GitHub",
    level: "Version Control",
  },
  {
    name: "Data Engineering",
    level: "Learning & Projects",
  },
];

const projects = [
  {
    number: "01",
    category: "Web Development",
    title: "The Wooorking",
    description:
      "Projet web réalisé dans le cadre de mon apprentissage du développement web et de la conception d'une expérience digitale.",
    tags: ["Web", "Development", "GitHub"],
    github: "https://github.com/Marwanerazzake/the-wooorking-",
  },
  {
    number: "02",
    category: "Data Engineering",
    title: "Data Analysis Project",
    description:
      "Projet autour du nettoyage, de la préparation, de l'échantillonnage, des statistiques descriptives et de la visualisation des données.",
    tags: ["Python", "Pandas", "Matplotlib"],
    github: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white">
      {/* NAVBAR */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#070707]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#"
            className="text-xl font-bold tracking-tight"
          >
            MR<span className="text-blue-500">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="https://www.linkedin.com/in/marwan-rzzake-33270b3aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-5 py-2 text-sm transition hover:border-white/40 hover:bg-white hover:text-black"
          >
            LinkedIn
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center px-6 pt-24">
        <div className="absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-5xl">
            <div className="animate-fade-in mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Data Engineering Student
            </div>

            <p className="animate-fade-in-delay mb-5 text-sm font-medium uppercase tracking-[0.35em] text-blue-500">
              EST Fès • Morocco
            </p>

            <h1 className="animate-fade-in text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Marouane
              <br />
              <span className="text-gray-500">Razzake.</span>
            </h1>

            <p className="animate-fade-in-delay-2 mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              Étudiant en Data Engineering passionné par la donnée,
              la programmation et la création de solutions digitales
              utiles.
            </p>

            <div className="animate-fade-in-delay-2 mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-white px-8 py-4 text-center font-medium text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-200"
              >
                Voir mes projets →
              </a>

              <a
                href="https://github.com/Marwanerazzake"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-8 py-4 text-center font-medium transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                GitHub
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-7 text-sm text-gray-500">
              <span>📍 Casablanca</span>
              <span>🎓 EST Fès</span>
              <span>🇫🇷 Français</span>
              <span>🇬🇧 English</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
                01 / About
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
                Learning.
                <br />
                Building.
                <br />
                Improving.
              </h2>
            </div>

            <div className="text-lg leading-8 text-gray-400">
              <p>
                Je suis étudiant à l&apos;EST Fès, spécialisé dans
                l&apos;apprentissage du Data Engineering et des
                technologies liées aux données.
              </p>

              <p className="mt-6">
                Je développe progressivement mes compétences en
                programmation, bases de données, analyse et
                visualisation des données à travers différents projets.
              </p>

              <p className="mt-6">
                Mon objectif est de construire une solide base
                technique et de continuer à développer des projets
                concrets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
            02 / Skills
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            My toolkit.
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-500">
                    0{index + 1}
                  </span>

                  <span className="text-gray-600 transition group-hover:text-blue-500">
                    ↗
                  </span>
                </div>

                <h3 className="mt-10 text-2xl font-semibold">
                  {skill.name}
                </h3>

                <p className="mt-3 text-sm text-gray-500">
                  {skill.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
            03 / Projects
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Selected work.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-500">
                    {project.category}
                  </span>

                  <span className="text-sm text-gray-600">
                    {project.number}
                  </span>
                </div>

                <h3 className="mt-10 text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block text-sm font-medium underline underline-offset-4 transition hover:text-blue-400"
                  >
                    View project on GitHub →
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
            04 / Education
          </p>

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="flex flex-col justify-between gap-8 md:flex-row">
              <div>
                <p className="text-sm text-gray-500">
                  Établissement
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  EST Fès
                </h3>

                <p className="mt-3 text-gray-400">
                  Data Engineering
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="mt-2 text-gray-300">
                  Casablanca, Morocco
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/10 px-6 py-32"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
            05 / Contact
          </p>

          <h2 className="mt-6 text-5xl font-bold sm:text-7xl">
            Let&apos;s connect.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-gray-400">
            Une opportunité, un projet ou simplement envie
            d&apos;échanger autour de la data et de la technologie ?
          </p>

          <a
            href="mailto:marwanrzaak55@gmail.com"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-medium text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-200"
          >
            Contact me →
          </a>

          <div className="mt-10 flex justify-center gap-8 text-sm text-gray-500">
            <a
              href="https://www.linkedin.com/in/marwan-rzzake-33270b3aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Marwanerazzake"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="mailto:marwanrzaak55@gmail.com"
              className="transition hover:text-white"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-sm text-gray-600 sm:flex-row">
          <p>© 2026 Marouane Razzake</p>
          <p>Built with Next.js</p>
        </div>
      </footer>
    </main>
  );
}