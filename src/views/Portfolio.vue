<template>
    <div class="component-web">
        <div class="sidebar" :class="{ 'hide': isHidden }">
            <div class="text-links-container">
                <div class="text-wrapper">
                    <router-link to="/">Portfolio</router-link>
                </div>
                <div class="text-wrapper">About</div>
                <a class="text-wrapper" href="https://www.linkedin.com/in/timjustina/" target="_blank"
                    rel="noopener noreferrer">Linkedin</a>
                <div class="text-wrapper">CV</div>
            </div>
        </div>
        <div class="main-content" @scroll="handleScroll">
            <img class="TJY-cutout-logo" alt="Logo" :src="TjyCutoutLogo" />
            <div class="name-wrapper text-wrapper">TIM JUSTINA YEUNG</div>
            <div class="body-text">
                <p>
                    I'm Justina, <span class="bold-text">a Product Designer</span> with a background in
                    Neuroscience and research. I deeply enjoy understanding complex
                    problems and providing creative solutions
                    <span class="bold-text">for people.</span>
                </p>
            </div>
            <div class="shots-container">
                <div class="right_shot">
                    <img class="shot-image" :src="Shot1" alt="shot1" />
                    <div class="shot-info">
                        <p class="shot-title">
                            <router-link to="/project/MedicationDashboard" class="project-link">
                                Tracking Medication Adherence: Dashboard Design
                            </router-link>
                        </p>
                        <p class="shot-role">Lead Product Designer</p>
                        <p class="shot-company">Kin Technology | 2023-2025</p>
                    </div>
                </div>

                <div class="left_shot">
                    <img class="shot-image" :src="Shot1" alt="left shot" />
                    <div class="shot-info">
                        <p class="shot-title">
                            <router-link to="/project/MultiplatformSolution" class="project-link">
                                Multiplatform Design for Home Medication Solution
                            </router-link>
                        </p>
                        <p class="shot-role">Lead Product Designer</p>
                        <p class="shot-company">Kin Technology | 2023-2025</p>
                    </div>
                </div>

                <div class="right_shot">
                    <img class="shot-image" :src="Shot1" alt="shot1" />
                    <div class="shot-info">
                        <p class="shot-title">
                            <router-link to="/project/art-curation" class="project-link">
                                Art Curation Experience and Marketplace: Mobile App Design
                            </router-link>
                        </p>
                        <p class="shot-role">Founding Designer</p>
                        <p class="shot-company">PONS.ai | 2019</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TjyCutoutLogo from '../assets/TjyCutoutLogo.svg';
import Shot1 from '../assets/shot1.png';

export default {
    name: 'Portfolio',
    data() {
        return {
            TjyCutoutLogo,
            Shot1,
            isHidden: false,
            lastScrollY: 0
        };
    },
    methods: {
        handleScroll(event) {
            const currentScrollY = event.target.scrollTop;
            if (currentScrollY > this.lastScrollY) {
                this.isHidden = true;
            } else {
                this.isHidden = false;
            }
            this.lastScrollY = currentScrollY;
        }
    }
}
</script>

<style scoped>
.component-web {
    display: flex;
    height: 100vh;
    width: 100%;
    position: relative;
    max-width: 1442px;
    overflow: hidden;
}

.sidebar {
    position: sticky;
    top: 0;
    width: 238px;
    min-width: 236px;
    height: 100vh;
    background-color: #ffffff;
    padding-top: 82px;
    padding-left: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: auto;
    order: 2;
    z-index: 10;
    transition: transform 0.3s ease-in-out;
}

.sidebar.hide {
    transform: translateY(-100%);
}

.text-links-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    width: 100%;
}

.text-links-container .text-wrapper {
    text-align: left;
    width: 100%;
    font-size: 25px;
    cursor: pointer;
    transition: color 0.2s ease;
}

.text-links-container .text-wrapper:hover {
    color: #44E1C5;
}

.main-content {
    --padding-top: 82px;
    width: clamp(746px, calc(100% - 238px), 1204px);
    min-height: 100vh;
    background-color: #ffffff;
    padding-left: 82px;
    padding-top: var(--padding-top);
    overflow-y: auto;
    background:
        linear-gradient(to right, transparent 82px, #BABABA 82px, transparent 83px),
        linear-gradient(to left, transparent 0px, #BABABA 0px, transparent 1px),
        linear-gradient(to bottom,
            transparent calc(100% - 82px),
            #BABABA calc(100% - 82px),
            #BABABA calc(100% - 81.5px),
            transparent calc(100% - 81.5px));
    background-repeat: no-repeat;
    background-size:
        100% calc(100% - 164px),
        100% calc(100% - 164px),
        calc(100% - 82px) 100%;
    background-position:
        0 82px,
        100% 82px,
        82px 0;
    background-attachment: local;
}

.TJY-cutout-logo {
    height: auto;
    width: 293px;
    margin-bottom: 16px;
}

.text-wrapper {
    font-family: "Maven Pro", sans-serif;
    font-weight: 500;
    color: #0914c5;
    white-space: nowrap;
}

.name-wrapper {
    font-family: "Maven Pro", sans-serif;
    font-size: 32px;
    font-weight: 500;
    text-align: left;
    margin-top: 8px;
    margin-bottom: 60px;
}

.body-text {
    font-family: "Maven Pro", sans-serif;
    font-weight: 400;
    font-size: 28px;
    line-height: 40px;
    color: #4D4D4D;
    max-width: calc(100% - 80px);
    text-align: left;
}

.bold-text {
    font-weight: 500;
    color: #0914c5;
}

.shots-container {
    padding-bottom: 164px;
}

.right_shot {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 82px;
    width: calc(100% - 82px);
}

.left_shot {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(100% - 82px);
}

.left_shot .shot-info {
    align-self: flex-end;
    text-align: right;
}

.shot-image {
    max-width: 1040px;
    width: 100%;
    height: auto;
}

.shot-info {
    font-family: "Maven Pro", sans-serif;
    line-height: 32px;
    color: #4D4D4D;
    margin-top: 16px;
    margin-bottom: 40px;
}

.shot-title {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
}

.shot-role {
    font-weight: 500;
    font-size: 25px;
}

.shot-company {
    font-size: 25px;
}

.sidebar a {
    text-decoration: none;
    color: inherit;
}

.router-link-active {
    color: #44E1C5;
}

.project-link {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
}

.project-link:hover {
    color: #44E1C5;
}

/* Mobile Styles */
@media (max-width: 998px) {
    .component-web {
        flex-direction: column;
        height: auto;
        min-height: 100vh;
    }

    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 174px;
        padding: 10px;
        background-color: #ece5e5;
        margin-left: 0;
        order: 1;
    }

    .sidebar.hide {
        transform: translateY(-100%);
    }

    .main-content {
        margin-left: 0;
        width: 100%;
        padding: 16px;
        padding-top: 200px;
        background: none;
    }

    .text-links-container {
        flex-direction: row;
        justify-content: center;
    }

    .text-links-container .text-wrapper {
        margin: 0 5px;
        font-size: 18px;
    }

    .TJY-cutout-logo {
        height: 60px;
        width: auto;
    }

    .name-wrapper {
        order: -1;
    }

    .body-text {
        font-size: 14px;
    }
}
</style>