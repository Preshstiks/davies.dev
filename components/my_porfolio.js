import Image from "next/image";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

const projectCards = [
  {
    title: "Cartify",
    description:
      "Built a responsive e-commerce landing experience that solves visitor uncertainty with clear product presentation, lightweight motion, and intuitive checkout flow.",
    href: "https://cartify-sable.vercel.app/",
    image: "/my-app.jpeg",
    tech: ["Next.js", "Framer Motion"],
  },
  {
    title: "Coding Hub",
    description:
      "Delivered a Medium-style publication hub with Firebase persistence and Redux state management to balance content discovery with performance.",
    href: "https://codinghub.vercel.app/",
    image: "/codinghub.jpeg",
    tech: ["Next.js", "Firebase", "Redux", "Framer Motion"],
  },
  {
    title: "Personal Portfolio",
    description:
      "Created this portfolio to showcase technical depth, polished UI, and modern responsive design in a lightweight production frontend.",
    href: "https://davies-dev.vercel.app/",
    image: "/portfolio.png",
    tech: ["Next.js", "Framer Motion"],
  },
  {
    title: "Eleven 36",
    description:
      "Designed a tech firm website that solves brand storytelling through motion, reusable layouts, and pixel-perfect presentation.",
    href: "https://eleven36.vercel.app/",
    image: "/eleven36.webp",
    tech: ["React.js", "Framer Motion"],
  },
  {
    title: "Raw Beauty E-commerce",
    description:
      "Delivered a skincare storefront prototype with state-managed cart flows and mobile-first UX to reduce friction in product discovery.",
    href: "https://rawbeautyafricafrontend.vercel.app/",
    image: "/rawbeauty.png",
    tech: ["Next.js", "Framer Motion", "Context API"],
  },
  {
    title: "Childcare & Wellness Clinics",
    description:
      "Built a clean clinic landing page to simplify service discovery and patient communication using standards-based HTML, CSS, and JavaScript.",
    href: "https://www.childcarewellnessclinics.com/",
    image: "/cwc.webp",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Wealthwave Dashboard",
    description:
      "Created a financial dashboard prototype that solves the need for a concise overview with clear data cards and scalable UI patterns.",
    href: "https://wealthwave-ochre.vercel.app/",
    image: "/wealth.webp",
    tech: ["React.js"],
  },
  {
    title: "Silade Agro Club",
    description:
      "Built an agricultural landing page focused on clarity, visual hierarchy, and approachable content for modern farm audiences.",
    href: "https://agriculture-fawn.vercel.app/",
    image: "/silade.webp",
    tech: ["Next.js"],
  },
  {
    title: "Esebeloved Ministry",
    description:
      "Delivered a ministry site with animated storytelling and contact integration, improving outreach while keeping the build lean.",
    href: "https://eseministry.vercel.app/",
    image: "/esebeloved.webp",
    tech: ["Next.js", "Laravel"],
  },
  {
    title: "Miko Brand Website",
    description:
      "Launched a simple single-page landing experience with fast hero entry and strong brand clarity through clean visual structure.",
    href: "https://miko-gamma.vercel.app/",
    image: "/miko.webp",
    tech: ["Next.js"],
  },
  {
    title: "Agbolagade & Co. Lawfirm",
    description:
      "Built a professional law firm landing page with trust-focused layout, responsive design, and lightweight animation.",
    href: "https://propertylaw.vercel.app/",
    image: "/project.png",
    tech: ["Next.js"],
  },
];

const Portfolio = () => {
  const { themeToggle } = useContext(ThemeContext);
  const textColor = themeToggle ? "text-dark" : "text-lighttext";
  const accentBorder = themeToggle ? "border-darkcyan" : "border-cyan";
  const background = themeToggle ? "bg-lightbox" : "bg-darksecondary";

  return (
    <section id="projects" className={`pt-[140px] font-anta ${textColor}`}>
      <div className="px-[10%]">
        <div className="text-center pb-5">
          <p className="text-sm uppercase tracking-[0.4em] text-gray-400">
            Design + code
          </p>
          <h1 className="text-4xl font-bold mt-3">
            I build polished frontend experiences with speed, clarity, and
            scale.
          </h1>
          <div
            className={`mx-auto mt-5 h-1 w-[60px] rounded-full ${accentBorder}`}
          ></div>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500">
            I turn brand vision into responsive web interfaces that feel modern,
            easy-to-use, and performant across desktop and mobile.
          </p>
        </div>

        <div
          className={`mt-10 grid gap-5 rounded-[32px] p-6 ${background} md:grid-cols-3`}
        >
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-gray-400">
              What I build
            </p>
            <h2 className="mt-3 text-xl font-semibold">
              User-first web experiences
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-400">
              <li>
                Landing pages and brand websites with strong visual hierarchy.
              </li>
              <li>
                Web apps with responsive layouts and smooth interactive flows.
              </li>
              <li>
                Products focused on clarity, trust, and fast user
                decision-making.
              </li>
            </ul>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-gray-400">
              How I deliver
            </p>
            <h2 className="mt-3 text-xl font-semibold">
              Efficient, scalable frontends
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-400">
              <li>
                Lean component structure for easier maintenance and faster build
                time.
              </li>
              <li>
                Accessible HTML and CSS with polished interactions and
                animations.
              </li>
              <li>
                Performance-first mindset that keeps interfaces feeling fast.
              </li>
            </ul>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-gray-400">
              Core focus
            </p>
            <h2 className="mt-3 text-xl font-semibold">Key technologies</h2>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-gray-300">
              <span className="rounded-full bg-white/5 px-3 py-2">Next.js</span>
              <span className="rounded-full bg-white/5 px-3 py-2">React</span>
              <span className="rounded-full bg-white/5 px-3 py-2">
                Tailwind CSS
              </span>

              <span className="rounded-full bg-white/5 px-3 py-2">Node.js</span>
              <span className="rounded-full bg-white/5 px-3 py-2">
                Express.js
              </span>
              <span className="rounded-full bg-white/5 px-3 py-2">Git</span>
              <span className="rounded-full bg-white/5 px-3 py-2">MongoDB</span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projectCards.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan/40"
            >
              <div className="relative h-[220px] overflow-hidden sm:h-[260px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-4 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-cyan transition hover:text-cyan-300"
                    aria-label={`Open ${project.title}`}
                  >
                    Visit ↗
                  </a>
                </div>
                <p className="text-sm leading-7 text-gray-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gray-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
