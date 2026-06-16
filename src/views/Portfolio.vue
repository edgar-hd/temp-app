<template>
    <div class="portfolio-page">
        <header class="top-bar">
            <router-link to="/" class="logo-block">
                <img class="logo" :src="logo" alt="" />
                <span class="logo-name">TIM JUSTINA YEUNG</span>
            </router-link>
            <button
                type="button"
                class="menu-toggle"
                aria-label="Open menu"
                :aria-expanded="menuOpen"
                @click="menuOpen = !menuOpen"
            >
                <span /><span /><span />
            </button>
            <nav class="nav">
                <a href="#work" class="nav-link nav-link--stacked nav-link--work">
                    <span>Work</span>
                    <span class="nav-indicator" aria-hidden="true" />
                </a>
                <a href="#about" class="nav-link nav-link--stacked nav-link--about">
                    <span>About</span>
                    <span class="nav-indicator" aria-hidden="true" />
                </a>
                <a
                    href="https://www.linkedin.com/in/timjustinayeung"
                    class="nav-link nav-link--stacked"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>Linkedin</span>
                    <span class="nav-indicator" aria-hidden="true" />
                </a>
                <a href="#" class="nav-link nav-link--stacked">
                    <span>CV</span>
                    <span class="nav-indicator" aria-hidden="true" />
                </a>
            </nav>
        </header>

        <nav
            class="mobile-nav"
            :class="{ 'mobile-nav--open': menuOpen }"
            aria-label="Mobile navigation"
        >
            <a href="#work" class="mobile-nav-link" @click="menuOpen = false">Work</a>
            <a href="#about" class="mobile-nav-link" @click="menuOpen = false">About</a>
            <a
                href="https://www.linkedin.com/in/timjustinayeung"
                class="mobile-nav-link"
                target="_blank"
                rel="noopener noreferrer"
                @click="menuOpen = false"
            >Linkedin</a>
            <a href="#" class="mobile-nav-link" @click="menuOpen = false">CV</a>
        </nav>

        <div
            v-if="menuOpen"
            class="mobile-nav-backdrop"
            aria-hidden="true"
            @click="menuOpen = false"
        />

        <main class="portfolio-main">
            <div class="hero-decor" aria-hidden="true">
                <span class="hero-decor-line" />
                <span class="hero-decor-arrow" />
            </div>

            <section class="hero">
                <p class="hero-intro">
                    <strong class="hero-intro-em">Product Designer</strong> with a background in Neuroscience and research.
                    Deeply enjoy understanding complex problems and providing creative solutions
                    <strong class="hero-intro-em">for people :)</strong>
                </p>
                <a class="cta-button" href="mailto:design@timjustina.com">Drop me a line</a>
            </section>

            <section id="work" class="work">
                <article class="project project--featured">
                    <router-link to="/project/MedicationDashboard" class="project-image-link">
                        <img
                            class="project-image"
                            :src="dashboardHero"
                            alt="IoT Adherence Analytics for Caregivers: Dashboard Design"
                        />
                    </router-link>
                    <div class="project-caption">
                        <h2 class="project-title">
                            <router-link to="/project/MedicationDashboard" class="project-title-link">
                                IoT Adherence Analytics for Caregivers: Dashboard Design
                            </router-link>
                        </h2>
                        <p class="project-description">
                            0‑to‑1 design of a caregiver‑facing dashboard for a primary user's account,
                            helping caregivers better understand their client's needs
                        </p>
                        <span class="project-year">2026</span>
                    </div>
                </article>

                <article class="project project--offset">
                    <router-link to="/project/MultiplatformSolution" class="project-image-link">
                        <img
                            class="project-image"
                            :src="kinThumbnail"
                            alt="Home Medication Solution: IoT Multiplatform Design"
                        />
                    </router-link>
                    <div class="project-caption">
                        <h2 class="project-title">
                            <router-link to="/project/MultiplatformSolution" class="project-title-link">
                                Home Medication Solution: IoT Multiplatform Design
                            </router-link>
                        </h2>
                        <p class="project-description">
                            Redesigned workflows, human-machine interface, web + mobile app features of an IoT
                            medication adherence platform
                        </p>
                        <span class="project-year">2024</span>
                    </div>
                </article>

                <article class="project">
                    <router-link to="/project/art-curation" class="project-image-link">
                        <img
                            class="project-image"
                            :src="artThumbnail"
                            alt="Art Curation and Marketplace: Mobile App Design"
                        />
                    </router-link>
                    <div class="project-caption">
                        <h2 class="project-title">
                            <router-link to="/project/art-curation" class="project-title-link">
                                Art Curation and Marketplace: Mobile App Design
                            </router-link>
                        </h2>
                        <p class="project-description">
                            0-to-1 design of a mobile-first peer-to-peer marketplace where users can curate, buy and sell artworks
                        </p>
                        <span class="project-year">2019</span>
                    </div>
                </article>
            </section>
        </main>

        <section id="about" class="about">
            <span class="about-line" aria-hidden="true" />
            <div class="about-inner">
                <div class="about-photo-column">
                    <img
                        v-if="aboutPhoto"
                        class="about-photo"
                        :src="aboutPhoto"
                        alt="Tim Justina Yeung"
                    />
                    <div v-else class="about-photo about-photo--placeholder" />
                    <p class="about-location">
                        <svg class="about-location-icon" width="13" height="20" viewBox="0 0 13 20" fill="none" aria-hidden="true">
                            <path
                                d="M6.5 0C2.91 0 0 2.91 0 6.5C0 11.38 6.5 20 6.5 20S13 11.38 13 6.5C13 2.91 10.09 0 6.5 0ZM6.5 8.75C5.26 8.75 4.25 7.74 4.25 6.5C4.25 5.26 5.26 4.25 6.5 4.25C7.74 4.25 8.75 5.26 8.75 6.5C8.75 7.74 7.74 8.75 6.5 8.75Z"
                                fill="#928A81"
                            />
                        </svg>
                        London / Barcelona
                    </p>
                </div>
                <div class="about-text-column">
                    <h2 class="about-heading">About Tim ( 湉 )</h2>
                    <p class="about-bio">
                        Started in the east, ended up in the west. Started in academia, ended up in the
                        real world. Started as a curious child, ended up a very curious adult. Trained to
                        solve problems with no precedent.
                        <br><br>
                        At work, value a good team. Understand
                        context, metrics and specs before jumping in. UX-focused. Very comfortable with data.
                        Interrogate LLMs.
                        <br><br>
                        Like to work out in free time - old books and films for the brain,
                        gym and swim for the rest of the body. Drink wild beers on cheat days. Bilingual in
                        English and Chinese. Speak a bit of Spanish. Love a good conversation. Can't help
                        learning new things all the time.
                        <br><br>
                        For the nerds: a <a href="https://journals.biologists.com/dev/article/151/24/dev204256/363461/Short-range-Fgf-signalling-patterns-hindbrain" class="about-link">link</a> to my past life in
                        developmental neurobiology
                        (research paper).
                    </p>
                </div>
                <div class="about-actions">
                    <a
                        href="https://www.linkedin.com/in/timjustinayeung"
                        class="about-action-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Linkedin</a>
                    <a href="#" class="about-action-btn">CV</a>
                </div>
            </div>
        </section>

        <footer class="site-footer">
            <a href="mailto:design@timjustina.com" class="footer-email">design@timjustina.com</a>
            <span class="footer-divider" aria-hidden="true" />
            <span class="footer-copy">© 2026 Tim Justina Yeung</span>
        </footer>
    </div>
</template>

<script>
import logo from '../assets/TjyCutoutLogo.svg'
import dashboardHero from '../assets/medication-dashboard/0_dashboard_hero.jpg'
import kinThumbnail from '../assets/shot1.png'
import artThumbnail from '../assets/shot1.png'

export default {
    name: 'Portfolio',
    data() {
        return {
            logo,
            dashboardHero,
            kinThumbnail,
            artThumbnail,
            aboutPhoto: null,
            menuOpen: false,
        }
    },
}
</script>

<style scoped>
.portfolio-page {
    --brand: #000aaa;
    --brand-hover: #1a2bff;
    --brand-active: #000444;
    --text: #2c2c2c;
    --muted: #757575;
    --title: #4d4d4d;
    --about-muted: #928a81;
    --about-bg: #f4f2f1;
    --page-max: 1454px;
    --page-pad: 80px;

    position: relative;
    width: 100%;
    min-height: 100vh;
    background: #fff;
    color: var(--text);
}

.top-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    width: 100%;
    padding: 44px var(--page-pad);
    background: #fff;
    box-sizing: border-box;
}

.menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    width: 31px;
    height: 27px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
}

.menu-toggle span {
    display: block;
    width: 31px;
    height: 2px;
    background: var(--brand);
}

.mobile-nav {
    display: none;
}

.mobile-nav-backdrop {
    display: none;
}

.logo-block {
    display: flex;
    align-items: center;
    gap: 28px;
    text-decoration: none;
    color: inherit;
}

.logo {
    width: 87px;
    height: 46px;
    flex-shrink: 0;
}

.logo-name {
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    color: var(--brand);
}

.nav {
    display: flex;
    align-items: center;
    gap: 40px;
}

.nav-link {
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
    color: var(--brand);
    text-decoration: none;
}

.nav-link--stacked {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 38px;
    padding: 0;
}

.nav-link--stacked > span:first-child {
    flex: none;
    height: 27px;
    line-height: 27px;
}

.nav-indicator {
    width: 16px;
    height: 8px;
    flex: none;
    border-radius: 8px 8px 0 0;
    background: var(--brand);
    opacity: 0;
    transform: rotate(-180deg);
    transition: opacity 0.2s ease;
}

.nav-link--stacked:hover .nav-indicator,
.nav-link--stacked:focus-visible .nav-indicator {
    opacity: 1;
}

.portfolio-main {
    position: relative;
    max-width: var(--page-max);
    margin: 0 auto;
    padding: 138px var(--page-pad) 0;
    box-sizing: border-box;
}

.hero {
    position: relative;
    z-index: 1;
    min-height: 320px;
    margin-bottom: 120px;
}

.hero-decor {
    position: absolute;
    left: 273px;
    top: 238px;
    z-index: 0;
    width: 56px;
    height: 487px;
    pointer-events: none;
}

.hero-decor-line {
    position: absolute;
    left: 35px;
    top: 0;
    width: 2px;
    height: 488px;
    background: var(--brand);
    transition: height 0.45s ease, top 0.45s ease;
}

.hero-decor-arrow {
    position: absolute;
    left: 1px;
    bottom: 0;
    width: 54px;
    height: 43px;
    border-left: 2px solid var(--brand);
    border-bottom: 2px solid var(--brand);
    transition: bottom 0.45s ease;
}

.portfolio-main:has(.project--featured:hover) .hero-decor-line,
.portfolio-main:has(.project--featured:focus-within) .hero-decor-line {
    top: 0;
    height: 455px;
}

.portfolio-main:has(.project--featured:hover) .hero-decor-arrow,
.portfolio-main:has(.project--featured:focus-within) .hero-decor-arrow {
    bottom: 41px;
}

.hero-intro {
    max-width: 877px;
    margin: 100px 0 0 371px;
    font-family: 'Fira Code', monospace;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 33px;
    color: var(--muted);
}

.hero-intro-em {
    color: var(--brand);
    font-weight: 600;
}

.cta-button {
    position: absolute;
    right: 0;
    top: 200px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    min-width: 250px;
    height: 60px;
    border-radius: 100px;
    background: var(--brand);
    font-family: 'Fira Code', monospace;
    font-size: 22px;
    font-weight: 500;
    line-height: 33px;
    color: #fff;
    text-decoration: none;
    box-sizing: border-box;
    transition: background 0.2s ease;
}

.cta-button:hover {
    background: var(--brand-hover);
}

.cta-button:active {
    background: var(--brand-active);
}

.work {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 120px;
}

.project {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 1110px;
}

.project--featured {
    max-width: 962px;
}

.project--offset {
    max-width: 941px;
    transform: translate3d(452px, 0, 0);
}

.project-image-link {
    position: relative;
    z-index: 1;
    display: block;
    text-decoration: none;
}

.project-image {
    position: relative;
    z-index: 1;
    width: 100%;
    height: auto;
    display: block;
    border-radius: 12px;
    background: #fff;
    transition: border-radius 0.45s ease;
}

.project:hover .project-image,
.project:focus-within .project-image {
    border-radius: 700px 700px 12px 12px;
}

.project-caption {
    position: relative;
    margin-top: 12px;
    padding-right: 72px;
}

.project-title {
    margin: 0;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    color: var(--title);
    transition: color 0.25s ease;
}

.project-title-link {
    color: inherit;
    text-decoration: none;
    transition: color 0.25s ease;
}

.project:hover .project-title-link,
.project:focus-within .project-title-link {
    color: var(--brand);
}

.project-description {
    margin: 16px 0 0;
    font-family: 'Fira Code', monospace;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    color: var(--muted);
}

.project-year {
    position: absolute;
    top: 0;
    right: 0;
    font-family: 'Fira Code', monospace;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    color: var(--muted);
}

.about {
    position: relative;
    width: 100%;
    margin-top: 414px;
    padding: 80px 0 138px;
    background: var(--about-bg);
    box-sizing: border-box;
    overflow: visible;
}

.about-inner {
    display: grid;
    grid-template-columns: 348px 1fr;
    gap: 0;
    max-width: var(--page-max);
    margin: 0 auto;
    padding: 0 var(--page-pad);
    box-sizing: border-box;
    align-items: start;
}

.about-photo-column {
    display: flex;
    flex-direction: column;
}

.about-line {
    position: absolute;
    left: calc((100vw - min(100vw, var(--page-max))) / 2 + 128px);
    top: -274px;
    z-index: 1;
    display: block;
    width: 0;
    height: 477px;
    border-left: 2px solid var(--brand);
    pointer-events: none;
}

.about-photo {
    position: relative;
    z-index: 1;
    width: 348px;
    height: 498px;
    border-radius: 12px;
    object-fit: cover;
    display: block;
}

.about-photo--placeholder {
    background: #e8e4e1;
}

.about-location {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 30px 0 0;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 18px;
    line-height: 27px;
    color: var(--about-muted);
}

.about-location-icon {
    flex-shrink: 0;
}

.about-text-column {
    padding-top: 72px;
}

.about-heading {
    margin: 0 0 64px 32px;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: -0.02em;
    color: var(--about-muted);
}

.about-bio {
    margin: 0 0 0 64px;
    max-width: 601px;
    font-family: 'Fira Code', monospace;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    color: var(--text);
}

.about-link {
    color: var(--brand);
}

.about-actions {
    display: none;
}

.site-footer {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
    height: 138px;
    padding-bottom: 54px;
    box-sizing: border-box;
    background: #fff;
}

.footer-email,
.footer-copy {
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 14px;
    font-weight: 300;
    line-height: 21px;
    color: var(--muted);
}

.footer-email {
    text-decoration: none;
}

.footer-email:hover {
    color: var(--brand);
}

.footer-divider {
    width: 1px;
    height: 30px;
    background: var(--muted);
}

/* ≥1454px: Final content artboard spacing (1454×4309) */
@media (min-width: 1454px) {
    .hero-decor {
        left: 273px;
        top: 109px;
    }

    .hero-intro {
        margin: 111px 0 0 371px;
    }

    .hero {
        min-height: 357px;
        margin-bottom: 231px;
    }

    .cta-button {
        top: 300px;
        left: 883px;
        right: auto;
        width: 233px;
        min-width: 0;
        height: 57px;
    }

    .work {
        gap: 0;
    }

    .project--featured {
        max-width: 842px;
    }

    .project--offset {
        max-width: 842px;
        margin-top: 140px;
        transform: translate3d(452px, 0, 0);
    }

    .project:last-child {
        max-width: 1110px;
        margin-top: 144px;
    }

    .project-caption {
        margin-top: 32px;
    }

    .project-description {
        margin-top: 20px;
    }

    .about {
        margin-top: 394px;
        padding: 80px 0 180px;
    }

    .about-inner {
        grid-template-columns: 373px 1fr;
    }

    .about-photo-column {
        margin-left: 0;
        padding-left: 80px;
        box-sizing: border-box;
    }

    .about-photo,
    .about-photo--placeholder {
        width: 293px;
        height: 420px;
    }

    .about-text-column {
        padding-top: 100px;
    }

    .about-heading {
        margin: 0 0 64px 64px;
    }

    .about-bio {
        max-width: 566px;
        margin-left: 64px;
    }

    .about-location {
        margin-top: 64px;
        margin-left: -33.5px;
    }

    .site-footer {
        align-items: flex-start;
        padding-top: 54px;
        padding-bottom: 63px;
    }

    .footer-divider {
        height: 21px;
    }
}

/* Below 1447px: lose 1px of stagger margin per 1px of viewport width lost */
@media (max-width: 1447px) {
    .hero-intro {
        margin-left: max(0px, calc(371px - (1447px - 100vw)));
    }

    .project--offset {
        transform: translate3d(max(0px, calc(452px - (1447px - 100vw))), 0, 0);
    }
}

/* ≤997px: nav trims; about photo shrinks 348→201 as viewport narrows to 768 */
@media (max-width: 997px) {
    .nav-link--work,
    .nav-link--about {
        display: none;
    }

    .about-inner {
        grid-template-columns: clamp(201px, calc(348px - (997px - 100vw) * 147 / 229), 348px) 1fr;
    }

    .about-photo,
    .about-photo--placeholder {
        width: clamp(201px, calc(348px - (997px - 100vw) * 147 / 229), 348px);
        height: auto;
        aspect-ratio: 348 / 498;
    }
}

/* Tablet: ≤767px (768px artboard) */
@media (max-width: 767px) {
    .menu-toggle {
        display: flex;
    }

    .nav {
        display: none;
    }

    .mobile-nav {
        display: flex;
        flex-direction: column;
        gap: 32px;
        position: fixed;
        top: 79px;
        right: 80px;
        z-index: 110;
        padding: 0;
        opacity: 0;
        pointer-events: none;
        transform: translateY(-8px);
        transition: opacity 0.2s ease, transform 0.2s ease;
    }

    .mobile-nav--open {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
    }

    .mobile-nav-link {
        font-family: 'Be Vietnam Pro', sans-serif;
        font-size: 18px;
        font-weight: 500;
        line-height: 27px;
        letter-spacing: -0.02em;
        color: var(--brand);
        text-decoration: none;
    }

    .mobile-nav-backdrop {
        display: block;
        position: fixed;
        inset: 0;
        z-index: 105;
        background: transparent;
    }

    .hero-decor {
        left: 459px;
        top: 258px;
        height: 318px;
    }

    .hero-decor-line {
        height: 241px;
        top: 14px;
    }

    .hero-decor-arrow {
        top: 239px;
    }

    .portfolio-main:has(.project--featured:hover) .hero-decor-line,
    .portfolio-main:has(.project--featured:focus-within) .hero-decor-line {
        height: 210px;
    }

    .portfolio-main:has(.project--featured:hover) .hero-decor-arrow,
    .portfolio-main:has(.project--featured:focus-within) .hero-decor-arrow {
        top: 208px;
    }

    .hero {
        min-height: 0;
        margin-bottom: 80px;
    }

    .hero-intro {
        margin: 80px 0 0;
        max-width: 629px;
    }

    .cta-button {
        position: static;
        margin-top: 32px;
        min-width: 233px;
        width: fit-content;
        height: 57px;
    }

    .work {
        gap: 80px;
    }

    .about {
        margin-top: 80px;
        padding: 80px 0 138px;
    }

    .about-inner {
        grid-template-columns: 1fr;
        position: relative;
        padding: 0 var(--page-pad);
    }

    .about-photo-column {
        align-items: flex-start;
    }

    .about-line {
        display: none;
    }

    .about-text-column {
        padding-top: 32px;
    }

    .about-heading {
        margin: 0 0 32px;
    }

    .about-bio {
        margin-left: 0;
        max-width: none;
    }

    .about-actions {
        display: flex;
        grid-column: 1 / -1;
        gap: 40px;
        margin-top: 48px;
        padding-left: 57px;
    }

    .about-action-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 12px 24px;
        height: 54px;
        border-radius: 60px;
        background: var(--brand);
        font-family: 'Be Vietnam Pro', sans-serif;
        font-size: 18px;
        font-weight: 500;
        line-height: 27px;
        color: #fff;
        text-decoration: none;
        box-sizing: border-box;
    }

    .site-footer {
        flex-direction: column;
        align-items: center;
        gap: 12px;
        padding-bottom: 40px;
    }

    .footer-divider {
        width: 30px;
        height: 1px;
    }
}

@media (max-width: 480px) {
    .top-bar {
        padding: 24px;
    }

    .portfolio-main {
        padding: 120px 24px 0;
    }

    .mobile-nav {
        right: 24px;
    }

    .hero-decor {
        display: none;
    }

    .about-inner {
        padding: 0 24px;
    }

    .about-actions {
        padding-left: 0;
        flex-wrap: wrap;
    }
}
</style>
