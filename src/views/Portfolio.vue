<template>
    <ProjectDetail>
        <p class="intro">
            I'm Justina, <strong>a Product Designer</strong> with a background in Neuroscience and research.
            I deeply enjoy understanding complex problems and providing creative solutions
            <strong>for people.</strong>
        </p>

        <section class="shot-entry shot-entry--right">
            <div class="portfolio-shot-block">
                <router-link to="/project/MedicationDashboard" class="shot-image-link">
                    <div class="portfolio-shot-frame">
                        <img :src="Shot1" alt="Tracking Medication Adherence: Dashboard Design" />
                    </div>
                </router-link>
                <div class="shot-details">
                    <p class="shot-title">
                        <router-link to="/project/MedicationDashboard" class="project-link">
                            Tracking Medication Adherence: Dashboard Design
                        </router-link>
                    </p>
                    <p class="shot-meta">Lead Product Designer</p>
                    <p class="shot-meta">Kin Technology | 2023-2025</p>
                </div>
            </div>
        </section>

        <section class="shot-entry shot-entry--left">
            <div class="portfolio-shot-block">
                <router-link to="/project/MultiplatformSolution" class="shot-image-link">
                    <div class="portfolio-shot-frame">
                        <img :src="Shot1" alt="Multiplatform Design for Home Medication Solution" />
                    </div>
                </router-link>
                <div class="shot-details">
                    <p class="shot-title">
                        <router-link to="/project/MultiplatformSolution" class="project-link">
                            Multiplatform Design for Home Medication Solution
                        </router-link>
                    </p>
                    <p class="shot-meta">Lead Product Designer</p>
                    <p class="shot-meta">Kin Technology | 2023-2025</p>
                </div>
            </div>
        </section>

        <section class="shot-entry shot-entry--right">
            <div class="portfolio-shot-block">
                <router-link to="/project/art-curation" class="shot-image-link">
                    <div class="portfolio-shot-frame">
                        <img :src="Shot1" alt="Art Curation Experience and Marketplace" />
                    </div>
                </router-link>
                <div class="shot-details">
                    <p class="shot-title">
                        <router-link to="/project/art-curation" class="project-link">
                            Art Curation Experience and Marketplace: Mobile App Design
                        </router-link>
                    </p>
                    <p class="shot-meta">Founding Designer</p>
                    <p class="shot-meta">PONS.ai | 2019</p>
                </div>
            </div>
        </section>
    </ProjectDetail>
</template>

<script>
import ProjectDetail from './ProjectDetail.vue'
import Shot1 from '../assets/shot1.png'

export default {
    name: 'Portfolio',
    components: { ProjectDetail },
    data() {
        return { Shot1 }
    },
}
</script>

<style scoped>
.shot-entry {
    margin-top: 64px;
}

.portfolio-shot-block {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: min(1100px, calc(100vw - 40px));
    margin: 48px 0;
}

.portfolio-shot-frame {
    display: flex;
}

.shot-entry--right .portfolio-shot-frame {
    justify-content: flex-end;
}

.shot-entry--left .portfolio-shot-frame {
    justify-content: flex-start;
}

.portfolio-shot-frame img {
    width: 90%;
    height: auto;
    display: block;
}

.shot-details {
    width: 90%;
    margin-top: 16px;
}

.shot-entry--right .shot-details {
    margin-left: 10%;
    text-align: left;
}

.shot-entry--left .shot-details {
    margin-right: 10%;
    margin-left: auto;
    text-align: right;
}

.shot-details p {
    font-family: 'Maven Pro', sans-serif;
    margin-bottom: 8px;
}

.shot-image-link {
    display: block;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
}

.shot-image-link:hover img {
    opacity: 0.92;
}

.shot-title {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.3;
}

.shot-meta {
    font-size: 20px;
    color: #757575;
    letter-spacing: -0.02em;
}

.project-link {
    color: inherit;
    text-decoration: none;
}

.project-link:hover {
    color: #000aaa;
}

.router-link-active {
    color: #000aaa;
}
</style>
