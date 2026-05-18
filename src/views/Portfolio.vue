<template>
    <ProjectDetail>
        <p class="intro">
            I'm Justina, <strong>a Product Designer</strong> with a background in Neuroscience and research.
            I deeply enjoy understanding complex problems and providing creative solutions
            <strong>for people.</strong>
        </p>

        <section class="shot-entry">
            <router-link to="/project/MedicationDashboard" class="shot-image-link">
                <div class="full-image">
                    <img :src="Shot1" alt="Tracking Medication Adherence: Dashboard Design" loading="lazy"
                        decoding="async" />
                </div>
            </router-link>
            <p class="shot-title">
                <router-link to="/project/MedicationDashboard" class="project-link">
                    Tracking Medication Adherence: Dashboard Design
                </router-link>
            </p>
            <p class="shot-meta">Lead Product Designer</p>
            <p class="shot-meta">Kin Technology | 2023-2025</p>
        </section>

        <section class="shot-entry">
            <router-link to="/project/MultiplatformSolution" class="shot-image-link">
                <div class="full-image">
                    <img :src="Shot1" alt="Multiplatform Design for Home Medication Solution" loading="lazy"
                        decoding="async" />
                </div>
            </router-link>
            <p class="shot-title">
                <router-link to="/project/MultiplatformSolution" class="project-link">
                    Multiplatform Design for Home Medication Solution
                </router-link>
            </p>
            <p class="shot-meta">Lead Product Designer</p>
            <p class="shot-meta">Kin Technology | 2023-2025</p>
        </section>

        <section class="shot-entry">
            <router-link to="/project/art-curation" class="shot-image-link">
                <div class="full-image">
                    <img :src="Shot1" alt="Art Curation Experience and Marketplace" loading="lazy"
                        decoding="async" />
                </div>
            </router-link>
            <p class="shot-title">
                <router-link to="/project/art-curation" class="project-link">
                    Art Curation Experience and Marketplace: Mobile App Design
                </router-link>
            </p>
            <p class="shot-meta">Founding Designer</p>
            <p class="shot-meta">PONS.ai | 2019</p>
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

.shot-entry :deep(p) {
    text-align: left;
    font-family: 'Maven Pro', sans-serif;
    margin-bottom: 8px;
}

.shot-image-link {
    display: block;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
}

.shot-image-link:hover :deep(img) {
    opacity: 0.92;
}

.shot-title {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.3;
    margin-top: 16px;
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
