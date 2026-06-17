<template>
    <div class="portfolio-page">
        <header class="top-bar" :class="{ 'top-bar--hidden': topBarHidden }">
            <div class="top-bar-inner">
                <div ref="topBarContent" class="top-bar-content">
                    <router-link to="/" class="logo-block">
                        <img class="logo" :src="logo" alt="" />
                        <span ref="logoName" class="logo-name">TIM JUSTINA YEUNG</span>
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
                    <nav ref="nav" class="nav" :class="{ 'nav--compact': navCompact }">
                        <a href="#work" class="nav-link nav-link--stacked nav-link--work">
                            <span>Work</span>
                            <img class="nav-indicator" :src="menuHover" alt="" aria-hidden="true" />
                        </a>
                        <a href="#about" class="nav-link nav-link--stacked nav-link--about">
                            <span>About</span>
                            <img class="nav-indicator" :src="menuHover" alt="" aria-hidden="true" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/timjustinayeung"
                            class="nav-link nav-link--stacked"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>Linkedin</span>
                            <img class="nav-indicator" :src="menuHover" alt="" aria-hidden="true" />
                        </a>
                        <a href="#" class="nav-link nav-link--stacked">
                            <span>CV</span>
                            <img class="nav-indicator" :src="menuHover" alt="" aria-hidden="true" />
                        </a>
                    </nav>
                </div>
            </div>
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
                        <div class="project-caption-header">
                            <h2 class="project-title">
                                <router-link to="/project/MedicationDashboard" class="project-title-link">
                                    IoT Adherence Analytics for Caregivers: Dashboard Design
                                </router-link>
                            </h2>
                            <span class="project-year">2026</span>
                        </div>
                        <p class="project-description">
                            0‑to‑1 design of a caregiver‑facing dashboard for a primary user's account,
                            helping caregivers better understand their client's needs
                        </p>
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
                        <div class="project-caption-header">
                            <h2 class="project-title">
                                <router-link to="/project/MultiplatformSolution" class="project-title-link">
                                    Home Medication Solution: IoT Multiplatform Design
                                </router-link>
                            </h2>
                            <span class="project-year">2024</span>
                        </div>
                        <p class="project-description">
                            Redesigned workflows, human-machine interface, web + mobile app features of an IoT
                            medication adherence platform
                        </p>
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
                        <div class="project-caption-header">
                            <h2 class="project-title">
                                <router-link to="/project/art-curation" class="project-title-link">
                                    Art Curation and Marketplace: Mobile App Design
                                </router-link>
                            </h2>
                            <span class="project-year">2019</span>
                        </div>
                        <p class="project-description">
                            0-to-1 design of a mobile-first peer-to-peer marketplace where users can curate, buy and sell artworks
                        </p>
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
import aboutPhoto from '../assets/portrait.jpg'
import menuHover from '../assets/menu_hover.svg'

export default {
    name: 'Portfolio',
    data() {
        return {
            logo,
            dashboardHero,
            kinThumbnail,
            artThumbnail,
            aboutPhoto,
            menuHover,
            menuOpen: false,
            navCompact: false,
            fullNavWidth: null,
            navGapObserver: null,
            topBarHidden: false,
            lastScrollY: 0,
            scrollTicking: false,
        }
    },
    mounted() {
        this.lastScrollY = window.scrollY
        window.addEventListener('scroll', this.onScroll, { passive: true })

        this.$nextTick(() => {
            this.updateNavCompact()
            if (this.$refs.topBarContent) {
                this.navGapObserver = new ResizeObserver(() => this.updateNavCompact())
                this.navGapObserver.observe(this.$refs.topBarContent)
            }
            document.fonts?.ready?.then(() => this.updateNavCompact())
        })
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll)
        this.navGapObserver?.disconnect()
    },
    methods: {
        onScroll() {
            if (this.scrollTicking) return
            this.scrollTicking = true

            requestAnimationFrame(() => {
                const y = window.scrollY
                const delta = y - this.lastScrollY

                if (y <= 0) {
                    this.topBarHidden = false
                } else if (delta > 5 && y > 120) {
                    this.topBarHidden = true
                    this.menuOpen = false
                } else if (delta < -5) {
                    this.topBarHidden = false
                }

                this.lastScrollY = y
                this.scrollTicking = false
            })
        },
        updateNavCompact() {
            const content = this.$refs.topBarContent
            const name = this.$refs.logoName
            const nav = this.$refs.nav
            if (!content || !name || !nav) return

            if (!this.navCompact) {
                this.fullNavWidth = nav.offsetWidth
            }

            const fullWidth = this.fullNavWidth ?? nav.offsetWidth
            const contentRect = content.getBoundingClientRect()
            const nameRect = name.getBoundingClientRect()
            const gapIfFull =
                contentRect.width - fullWidth - (nameRect.right - contentRect.left)

            this.navCompact = gapIfFull < 312
        },
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
    --page-pad: clamp(100px, calc(100px + (100vw - 997px) * 40 / 457), 140px);
    --project-w: 680px;
    --project-stack-gap: clamp(120px, calc(120px + (100vw - 997px) * 20 / 457), 140px);

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
    width: 100%;
    background: #fff;
    transform: translateY(0);
    transition: transform 0.3s ease;
}

.top-bar--hidden {
    transform: translateY(-100%);
}

.top-bar-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: var(--page-max);
    height: 120px;
    margin: 0 auto;
    padding: 0 var(--page-pad);
    box-sizing: border-box;
}

.top-bar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    width: 100%;
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
    align-items: flex-end;
    gap: 40px;
    height: 45px;
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
    position: relative;
    display: block;
    height: 27px;
    padding: 0;
    overflow: hidden;
    transform-origin: bottom center;
    transition: height 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nav-link--stacked:hover,
.nav-link--stacked:focus-visible {
    height: 35px;
    overflow: visible;
}

.nav-link--stacked > span:first-child {
    display: block;
    height: 27px;
    line-height: 27px;
}

.nav-indicator {
    position: absolute;
    top: 25px;
    left: 50%;
    display: block;
    width: 16px;
    height: 8px;
    opacity: 0;
    transform: translateX(-50%) scaleY(0);
    transform-origin: top center;
    transition:
        opacity 0.22s ease,
        transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nav-link--stacked:hover .nav-indicator,
.nav-link--stacked:focus-visible .nav-indicator {
    opacity: 1;
    transform: translateX(-50%) scaleY(1);
}

.nav--compact .nav-link--work,
.nav--compact .nav-link--about {
    display: none;
}

.portfolio-main {
    position: relative;
    max-width: var(--page-max);
    margin: 0 auto;
    padding: 120px var(--page-pad) 0;
    box-sizing: border-box;
}

.hero {
    position: relative;
    z-index: 1;
    margin-bottom: clamp(231px, calc(238px - (100vw - 997px) * 7 / 457), 238px);
}

.hero-decor {
    position: absolute;
    left: clamp(222px, calc(222px + (100vw - 997px) * 108 / 457), 330px);
    top: clamp(240px, calc(422px - (100vw - 997px) * 182 / 457), 422px);
    z-index: 0;
    width: 56px;
    height: 532px;
    pointer-events: none;
}

.hero-decor-line {
    position: absolute;
    left: 35px;
    top: 0;
    width: 2px;
    height: clamp(302px, calc(302px + (100vw - 997px) * 186 / 457), 488px);
    background: var(--brand);
    transition: height 0.45s ease, top 0.45s ease;
}

.hero-decor-arrow {
    position: absolute;
    left: 1px;
    top: clamp(295px, calc(295px + (100vw - 997px) * 186 / 457), 481px);
    bottom: auto;
    width: 54px;
    height: 43px;
    border-left: 2px solid var(--brand);
    border-bottom: 2px solid var(--brand);
    transition: bottom 0.45s ease;
}

.portfolio-main:has(.project--featured:hover) .hero-decor-line,
.portfolio-main:has(.project--featured:focus-within) .hero-decor-line {
    top: 0;
    height: clamp(269px, calc(269px + (100vw - 997px) * 186 / 457), 455px);
}

.portfolio-main:has(.project--featured:hover) .hero-decor-arrow,
.portfolio-main:has(.project--featured:focus-within) .hero-decor-arrow {
    top: clamp(262px, calc(262px + (100vw - 997px) * 186 / 457), 448px);
}

.hero-intro {
    max-width: clamp(754px, calc(798px - (100vw - 997px) * 44 / 457), 798px);
    margin: clamp(98px, calc(98px + (100vw - 997px) * 24 / 457), 122px) 0 0 clamp(0px, calc((100vw - 997px) * 288 / 457), 288px);
    font-family: 'Fira Code', monospace;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0;
    color: var(--muted);
    font-synthesis: none;
}

.hero-intro-em {
    color: var(--brand);
    font-weight: 600;
}

.cta-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 90px;
    margin-left: clamp(565px, calc(565px + (100vw - 997px) * 192 / 457), 757px);
    padding: 12px 24px;
    width: 233px;
    min-width: 0;
    height: 57px;
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
    align-items: flex-start;
    gap: 0;
}

.project {
    position: relative;
    z-index: 1;
    width: var(--project-w);
    max-width: 100%;
}

.project--featured {
    width: var(--project-w);
    max-width: 100%;
}

.project--offset {
    width: var(--project-w);
    max-width: 100%;
    margin-top: var(--project-stack-gap);
    margin-left: auto;
}

.project:last-child {
    width: var(--project-w);
    max-width: 100%;
    margin-top: var(--project-stack-gap);
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
    width: var(--project-w);
    max-width: 100%;
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
    margin-top: clamp(28px, calc(32px - (100vw - 997px) * 4 / 457), 32px);
}

.project-caption-header {
    display: flex;
    align-items: flex-start;
    gap: 32px;
}

.project-title {
    flex: 1;
    min-width: 0;
    margin: 0;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
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
    margin: 20px 0 0;
    font-family: 'Fira Code', monospace;
    font-size: 16px;
    font-weight: 400;
    line-height: clamp(25px, calc(25px + (100vw - 997px) / 457), 26px);
    color: var(--muted);
}

.project-year {
    flex-shrink: 0;
    font-family: 'Fira Code', monospace;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    color: var(--muted);
}

.about {
    position: relative;
    width: 100%;
    margin-top: clamp(350px, calc(350px + (100vw - 997px) * 64 / 457), 414px);
    padding: 80px 0 clamp(90px, calc(90px + (100vw - 997px) * 90 / 457), 180px);
    background: var(--about-bg);
    box-sizing: border-box;
    overflow: visible;
}

.about-inner {
    display: grid;
    grid-template-columns: clamp(345px, calc(345px + (100vw - 997px) * 46 / 457), 391px) 1fr;
    gap: 0;
    max-width: clamp(800px, calc(800px + (100vw - 997px) * 157 / 457), 957px);
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    align-items: start;
}

.about-photo-column {
    display: flex;
    flex-direction: column;
    padding-left: clamp(32px, calc(32px + (100vw - 997px) * 2 / 457), 34px);
    box-sizing: border-box;
}

.about-line {
    position: absolute;
    left: calc((100vw - clamp(800px, calc(800px + (100vw - 997px) * 157 / 457), 957px)) / 2 + clamp(0px, calc((100vw - 997px) * 2 / 457), 2px));
    top: clamp(-274px, calc(-219px - (100vw - 997px) * 55 / 457), -219px);
    z-index: 1;
    display: block;
    width: 0;
    height: clamp(421px, calc(421px + (100vw - 997px) * 56 / 457), 477px);
    border-left: 2px solid var(--brand);
    pointer-events: none;
}

.about-photo {
    position: relative;
    z-index: 1;
    width: clamp(281px, calc(281px + (100vw - 997px) * 12 / 457), 293px);
    height: clamp(402px, calc(402px + (100vw - 997px) * 18 / 457), 420px);
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
    margin: 64px 0 0 clamp(-20px, calc(-20px - (100vw - 997px) * 12 / 457), -32px);
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 18px;
    line-height: 27px;
    color: var(--about-muted);
}

.about-location-icon {
    flex-shrink: 0;
}

.about-text-column {
    padding-top: 100px;
}

.about-heading {
    margin: 0 0 64px;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: -0.02em;
    color: var(--about-muted);
}

.about-bio {
    margin: 0;
    max-width: clamp(455px, calc(455px + (100vw - 997px) * 111 / 457), 566px);
    font-family: 'Fira Code', monospace;
    font-size: 16px;
    font-weight: 400;
    line-height: clamp(25px, calc(25px + (100vw - 997px) / 457), 26px);
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
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    height: 120px;
    padding-top: 54px;
    padding-bottom: 0;
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
    height: 21px;
    background: var(--muted);
}

/* ≥1454px: Final content artboard spacing */
@media (min-width: 1454px) {
    .hero-decor {
        left: 330px;
        top: 240px;
    }

    .hero-decor-line {
        height: 488px;
    }

    .hero-decor-arrow {
        top: 481px;
    }

    .portfolio-main:has(.project--featured:hover) .hero-decor-line,
    .portfolio-main:has(.project--featured:focus-within) .hero-decor-line {
        height: 455px;
    }

    .portfolio-main:has(.project--featured:hover) .hero-decor-arrow,
    .portfolio-main:has(.project--featured:focus-within) .hero-decor-arrow {
        top: 448px;
    }

    .hero-intro {
        max-width: 754px;
        margin: 122px 0 0 288px;
    }

    .hero {
        margin-bottom: 231px;
    }

    .cta-button {
        margin-top: 90px;
        margin-left: 757px;
        width: 233px;
        min-width: 0;
        height: 57px;
    }

    .work {
        gap: 0;
    }

    .project--offset,
    .project:last-child {
        margin-top: 140px;
    }

    .project-caption {
        margin-top: 28px;
    }

    .project-description {
        margin-top: 20px;
    }

    .about {
        margin-top: 414px;
        padding: 80px 0 180px;
    }

    .about-inner {
        grid-template-columns: 391px 1fr;
        max-width: 957px;
    }

    .about-photo-column {
        padding-left: 34px;
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
        margin: 0 0 64px;
    }

    .about-bio {
        max-width: 566px;
        margin-left: 0;
    }

    .about-location {
        margin-top: 64px;
        margin-left: -32px;
    }

    .site-footer {
        align-items: flex-start;
        padding-top: 54px;
        padding-bottom: 0;
    }

    .footer-divider {
        height: 21px;
    }
}

/* ≤997px: 997px artboard lock before tablet layout */
@media (max-width: 997px) {
    .hero-decor {
        left: 222px;
        top: 422px;
    }

    .hero-decor-line {
        height: 302px;
    }

    .hero-decor-arrow {
        top: 295px;
    }

    .portfolio-main:has(.project--featured:hover) .hero-decor-line,
    .portfolio-main:has(.project--featured:focus-within) .hero-decor-line {
        height: 269px;
    }

    .portfolio-main:has(.project--featured:hover) .hero-decor-arrow,
    .portfolio-main:has(.project--featured:focus-within) .hero-decor-arrow {
        top: 262px;
    }

    .hero {
        margin-bottom: 238px;
    }

    .hero-intro {
        max-width: 798px;
        margin: 98px 0 0;
    }

    .cta-button {
        margin-top: 90px;
        margin-left: 565px;
    }

    .top-bar-content {
        width: 100%;
    }

    .project--offset {
        margin-top: 120px;
        margin-left: 0;
    }

    .project:last-child {
        margin-top: 120px;
    }

    .project-caption {
        margin-top: 32px;
    }

    .project-description {
        line-height: 25px;
    }

    .about {
        margin-top: 350px;
        padding: 80px 0 90px;
    }

    .about-inner {
        grid-template-columns: 345px 1fr;
        max-width: 800px;
        padding: 0;
    }

    .about-photo-column {
        padding-left: 32px;
    }

    .about-line {
        left: calc((100vw - 800px) / 2);
        top: -219px;
        height: 421px;
    }

    .about-photo,
    .about-photo--placeholder {
        width: 281px;
        height: 402px;
    }

    .about-location {
        margin: 64px 0 0 -20px;
    }

    .about-text-column {
        padding-top: 100px;
    }

    .about-heading {
        margin: 0 0 64px;
    }

    .about-bio {
        max-width: 455px;
        margin-left: 0;
        line-height: 25px;
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
        top: 120px;
        right: var(--page-pad);
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
        margin-top: 90px;
        margin-left: 0;
        min-width: 233px;
        width: fit-content;
        height: 57px;
    }

    .work {
        gap: 80px;
    }

    .top-bar-content {
        width: 100%;
    }

    .project,
    .project--featured,
    .project--offset,
    .project:last-child {
        width: 100%;
        max-width: 100%;
    }

    .project--offset,
    .project:last-child {
        margin-top: 0;
        margin-left: 0;
    }

    .project-image,
    .project--featured .project-image,
    .project--offset .project-image,
    .project:last-child .project-image {
        height: auto;
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
        padding-left: 0;
    }

    .about-photo,
    .about-photo--placeholder {
        width: 201px;
        height: auto;
        aspect-ratio: 348 / 498;
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
    .top-bar-inner {
        padding: 0 24px;
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
