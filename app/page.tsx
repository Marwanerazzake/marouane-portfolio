"use client";

import { useEffect, useState } from "react";

const technologies = [
    {
        name: "Python",
        category: "DATA ENGINEERING",
        logo: "https://cdn.simpleicons.org/python/3776AB",
    },
    {
        name: "SQL",
        category: "DATA ENGINEERING",
        logo: "https://cdn.simpleicons.org/postgresql/4169E1",
    },
    {
        name: "Power BI",
        category: "BI & ANALYTICS",
        logo: "https://cdn.simpleicons.org/powerbi/F2C811",
    },
    {
        name: "Pandas",
        category: "DATA ANALYSIS",
        logo: "https://cdn.simpleicons.org/pandas/150458",
    },
    {
        name: "JavaScript",
        category: "WEB · LEARNING",
        logo: "https://cdn.simpleicons.org/javascript/F7DF1E",
    },
    {
        name: "React",
        category: "WEB · LEARNING",
        logo: "https://cdn.simpleicons.org/react/61DAFB",
    },
    {
        name: "Next.js",
        category: "WEB · LEARNING",
        logo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
    },
    {
        name: "TypeScript",
        category: "WEB · LEARNING",
        logo: "https://cdn.simpleicons.org/typescript/3178C6",
    },
    {
        name: "Git",
        category: "DEVELOPMENT",
        logo: "https://cdn.simpleicons.org/git/F05032",
    },
];

const projects = [
    {
        number: "01",
        title: "The Wooorking",
        type: "Web Development",
        description:
            "Projet de développement web réalisé dans le cadre de mon parcours.",
        link: "https://github.com/Marwanerazzake/the-wooorking-",
    },
    {
        number: "02",
        title: "Data Analysis",
        type: "Data & Analytics",
        description:
            "Nettoyage, préparation, échantillonnage, statistiques descriptives et visualisation des données.",
        link: "#",
    },
];

export default function Home() {
    const [currentTech, setCurrentTech] = useState(0);
    const [darkMode, setDarkMode] = useState(true);
    const [language, setLanguage] = useState<"FR" | "EN">("FR");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTech((prev) => (prev + 1) % technologies.length);
        }, 2800);

        return () => clearInterval(interval);
    }, []);

    const isFrench = language === "FR";

    return (
        <main className={darkMode ? "site dark" : "site light"}>

            {/* ================= NAVBAR ================= */}

            <nav className="navbar">
                <a href="#top" className="logo">
                    MR<span>.</span>
                </a>

                <div className="nav-links">
                    <a href="#about">
                        {isFrench ? "À propos" : "About"}
                    </a>

                    <a href="#skills">
                        {isFrench ? "Compétences" : "Skills"}
                    </a>

                    <a href="#workflow">
                        Workflow
                    </a>

                    <a href="#projects">
                        {isFrench ? "Projets" : "Projects"}
                    </a>

                    <a href="#contact">
                        Contact
                    </a>
                </div>

                <div className="nav-actions">

                    <button
                        className="language-toggle"
                        onClick={() => setLanguage(isFrench ? "EN" : "FR")}
                    >
                        {language}
                    </button>

                    <button
                        className="theme-toggle"
                        onClick={() => setDarkMode(!darkMode)}
                        aria-label="Change theme"
                    >
                        {darkMode ? "☼" : "☾"}
                    </button>

                    <a
                        className="linkedin-button"
                        href="https://www.linkedin.com/in/marwan-rzzake-33270b3aa/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn ↗
                    </a>

                </div>
            </nav>


            {/* ================= HERO ================= */}

            <section className="hero" id="top">

                <div className="hero-left">

                    <div className="eyebrow">
                        <span className="status-dot"></span>
                        DATA ENGINEERING STUDENT
                    </div>

                    <div className="hero-name-top">
                        <span>MAROUANE RAZZAKE</span>
                        <div className="yellow-line"></div>
                    </div>

                    <h1>
                        {isFrench ? (
                            <>
                                JE CONSTRUIS
                                <br />
                                <span>AVEC LA DONNÉE.</span>
                            </>
                        ) : (
                            <>
                                I BUILD
                                <br />
                                <span>WITH DATA.</span>
                            </>
                        )}
                    </h1>

                    <p className="hero-description">
                        {isFrench
                            ? "Étudiant en Data Engineering, je développe mes compétences autour de la donnée, de la BI et des technologies web."
                            : "Data Engineering student developing skills across data, BI and web technologies."}
                    </p>

                    <div className="hero-buttons">

                        <a href="#projects" className="primary-button">
                            {isFrench ? "Voir mes projets" : "View my projects"}
                            <span>↗</span>
                        </a>

                        <a href="#workflow" className="secondary-button">
                            {isFrench ? "Comment je travaille" : "How I work"}
                        </a>

                    </div>

                </div>


                {/* TECHNOLOGY SLIDER */}

                <div className="hero-right">

                    <div className="tech-header">
                        <span>02 / TECHNOLOGIES</span>

                        <span>
                            {String(currentTech + 1).padStart(2, "0")} /{" "}
                            {String(technologies.length).padStart(2, "0")}
                        </span>
                    </div>

                    <div className="tech-stage" key={currentTech}>

                        <div className="tech-logo-box">

                            <img
                                src={technologies[currentTech].logo}
                                alt={technologies[currentTech].name}
                            />

                        </div>

                        <div className="tech-information">

                            <span>
                                {technologies[currentTech].category}
                            </span>

                            <h2>
                                {technologies[currentTech].name}
                            </h2>

                        </div>

                    </div>

                    <div className="tech-progress">

                        <div
                            className="tech-progress-bar"
                            key={currentTech}
                        ></div>

                    </div>

                    <div className="tech-meta">

                        <div>
                            <span>PROFILE</span>

                            <strong>
                                Data Engineering
                                <br />
                                Student
                            </strong>
                        </div>

                        <div>
                            <span>DOMAIN</span>

                            <strong>
                                DATA · BI
                                <br />
                                WEB
                            </strong>
                        </div>

                    </div>

                </div>

            </section>


            {/* ================================================= */}
            {/* PROFILE SECTION - PHOTO + PRESENTATION            */}
            {/* ================================================= */}

            <section className="profile-section" id="about">

                <div className="profile-image-side">

                    <div className="profile-image-wrapper">

                        <img
                            src="/profile.jpg"
                            alt="Marouane Razzake"
                            className="profile-image"
                        />

                        <div className="profile-image-overlay"></div>

                        <div className="profile-image-grid"></div>

                        <div className="profile-corner profile-corner-top"></div>
                        <div className="profile-corner profile-corner-bottom"></div>

                        <div className="profile-year">
                            2026
                        </div>

                    </div>

                </div>


                <div className="profile-content">

                    <div className="profile-top-line">

                        <span className="profile-label">
                            PROFILE / 2026
                        </span>

                        <span className="profile-domain">
                            DATA ENGINEERING
                        </span>

                    </div>


                    <div className="profile-title">

                        <span className="profile-small-line"></span>

                        <h2>
                            {isFrench ? (
                                <>
                                    Je me spécialise dans la
                                    <span> donnée,</span> l'analyse
                                    et la construction de
                                    solutions modernes.
                                </>
                            ) : (
                                <>
                                    I focus on
                                    <span> data,</span> analytics
                                    and building modern
                                    digital solutions.
                                </>
                            )}
                        </h2>

                    </div>


                    <p className="profile-description">

                        {isFrench
                            ? "Mon objectif est de transformer les données en informations utiles et en solutions concrètes. Je développe progressivement mes compétences en Data Engineering, Business Intelligence et technologies web."
                            : "My goal is to transform data into useful information and practical solutions. I am progressively developing my skills in Data Engineering, Business Intelligence and web technologies."}

                    </p>


                    <div className="profile-details">

                        <div className="profile-detail">

                            <span>01</span>

                            <div>
                                <small>LOCATION</small>
                                <strong>Casablanca, Morocco</strong>
                            </div>

                        </div>


                        <div className="profile-detail">

                            <span>02</span>

                            <div>
                                <small>EDUCATION</small>
                                <strong>EST Fès</strong>
                            </div>

                        </div>


                        <div className="profile-detail">

                            <span>03</span>

                            <div>
                                <small>FOCUS</small>
                                <strong>Data · BI · Web</strong>
                            </div>

                        </div>

                    </div>


                    <div className="profile-bottom">

                        <span>
                            DATA ENGINEERING · BUSINESS INTELLIGENCE · WEB
                        </span>

                        <span className="profile-arrow">
                            ↓
                        </span>

                    </div>

                </div>

            </section>


            {/* ================= SKILLS ================= */}

            <section className="section skills-section" id="skills">

                <div className="section-heading">

                    <span>02 / SKILLS</span>

                    <h2>
                        WHAT I
                        <br />
                        <em>WORK WITH.</em>
                    </h2>

                </div>


                <div className="skills-groups">

                    <div className="skill-group">

                        <div className="skill-group-number">
                            01
                        </div>

                        <div>

                            <span className="skill-label">
                                DATA ENGINEERING
                            </span>

                            <div className="skill-list">

                                <span>Python</span>
                                <span>SQL</span>
                                <span>Pandas</span>
                                <span>Data Cleaning</span>
                                <span>Data Processing</span>

                            </div>

                        </div>

                    </div>


                    <div className="skill-group">

                        <div className="skill-group-number">
                            02
                        </div>

                        <div>

                            <span className="skill-label">
                                BI & ANALYTICS
                            </span>

                            <div className="skill-list">

                                <span>Power BI</span>
                                <span>Data Visualization</span>
                                <span>Descriptive Statistics</span>

                            </div>

                        </div>

                    </div>


                    <div className="skill-group web-skill">

                        <div className="skill-group-number">
                            03
                        </div>

                        <div>

                            <span className="skill-label">
                                WEB TECHNOLOGIES
                                <small> · LEARNING & BUILDING WITH</small>
                            </span>

                            <div className="skill-list">

                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                                <span>React</span>
                                <span>Next.js</span>
                                <span>TypeScript</span>
                                <span>Git & GitHub</span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= WORKFLOW ================= */}

            <section className="section workflow-section" id="workflow">

                <div className="section-heading">

                    <span>03 / HOW I WORK</span>

                    <h2>
                        AI /
                        <br />
                        <em>HUMAN.</em>
                    </h2>

                </div>


                <div className="workflow-intro">

                    <h3>
                        J’utilise l’AI pour passer plus rapidement de
                        l’ambiguïté à des solutions testées — sans déléguer
                        les décisions qui définissent la qualité.
                    </h3>

                    <p>
                        L’AI m’aide à explorer des options, challenger mes
                        hypothèses et accélérer les tâches répétitives.
                        Je reste responsable de l’architecture, de la qualité
                        du code, de la sécurité et du résultat final.
                    </p>

                    <div className="human-check">

                        <span>✓</span>

                        <strong>
                            Every output reviewed by a human
                        </strong>

                    </div>

                </div>


                <div className="workflow-grid">

                    <div className="workflow-card">
                        <span>01</span>

                        <div>
                            <h3>Frame the context</h3>

                            <p>
                                Définir le problème, les contraintes,
                                les utilisateurs et les critères de réussite.
                            </p>
                        </div>

                    </div>


                    <div className="workflow-card">
                        <span>02</span>

                        <div>
                            <h3>Explore & prototype</h3>

                            <p>
                                Utiliser l’AI pour comparer les approches,
                                tester des idées et accélérer une première version.
                            </p>
                        </div>

                    </div>


                    <div className="workflow-card">
                        <span>03</span>

                        <div>
                            <h3>Build with precision</h3>

                            <p>
                                Combiner l’assistance de l’AI avec une
                                architecture propre et un code maintenable.
                            </p>
                        </div>

                    </div>


                    <div className="workflow-card">
                        <span>04</span>

                        <div>
                            <h3>Verify before shipping</h3>

                            <p>
                                Relire, tester, vérifier et sécuriser chaque
                                résultat avant de le considérer comme terminé.
                            </p>
                        </div>

                    </div>

                </div>


                <div className="workflow-summary">

                    <div>
                        <span>01</span>
                        <strong>Human direction</strong>
                    </div>

                    <div>
                        <span>02</span>
                        <strong>AI acceleration</strong>
                    </div>

                    <div>
                        <span>03</span>
                        <strong>Verified output</strong>
                    </div>

                </div>

            </section>


            {/* ================= PROJECTS ================= */}

            <section className="section projects-section" id="projects">

                <div className="section-heading">

                    <span>04 / SELECTED WORK</span>

                    <h2>
                        PROJECTS
                        <br />
                        <em>& EXPERIMENTS.</em>
                    </h2>

                </div>


                <div className="projects-list">

                    {projects.map((project) => (

                        <a
                            className="project-row"
                            href={project.link}
                            target={project.link !== "#" ? "_blank" : undefined}
                            rel={
                                project.link !== "#"
                                    ? "noreferrer"
                                    : undefined
                            }
                            key={project.number}
                        >

                            <span className="project-number">
                                {project.number}
                            </span>

                            <div className="project-main">

                                <span>{project.type}</span>

                                <h3>
                                    {project.title}
                                </h3>

                                <p>
                                    {project.description}
                                </p>

                            </div>

                            <span className="project-arrow">
                                ↗
                            </span>

                        </a>

                    ))}

                </div>

            </section>


            {/* ================= EDUCATION ================= */}

            <section className="section education-section">

                <div className="section-heading">

                    <span>05 / EDUCATION</span>

                    <h2>
                        LEARNING
                        <br />
                        <em>BY BUILDING.</em>
                    </h2>

                </div>


                <div className="education-card">

                    <div className="education-year">
                        2026
                    </div>

                    <div>

                        <span>
                            EST FÈS
                        </span>

                        <h3>
                            Data Engineering
                        </h3>

                        <p>
                            Formation orientée données, programmation,
                            analyse et ingénierie des données.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= CONTACT ================= */}

            <section className="section contact-section" id="contact">

                <div className="contact-label">
                    06 / CONTACT
                </div>

                <h2>
                    LET&apos;S BUILD
                    <br />
                    <em>SOMETHING.</em>
                </h2>

                <p>
                    {isFrench
                        ? "Un projet, une idée ou simplement envie d’échanger ?"
                        : "Have a project, an idea or simply want to connect?"}
                </p>

                <a
                    className="contact-email"
                    href="mailto:marwanrzaak55@gmail.com"
                >
                    marwanrzaak55@gmail.com ↗
                </a>

                <div className="contact-links">

                    <a
                        href="https://www.linkedin.com/in/marwan-rzzake-33270b3aa/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/Marwanerazzake"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                </div>

            </section>


            {/* ================= FOOTER ================= */}

            <footer className="footer">

                <span>
                    MAROUANE RAZZAKE © 2026
                </span>

                <span>
                    DATA · BI · WEB
                </span>

                <span>
                    BUILT WITH NEXT.JS
                </span>

            </footer>

        </main>
    );
}