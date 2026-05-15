<!-- views/Portfolio.vue -->
<template>
    <div>
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
</template>

<script>
import TjyCutoutLogo from '../assets/TjyCutoutLogo.svg';
import Shot1 from '../assets/shot1.png';

export default {
    name: 'Portfolio',
    data() {
        return {
            TjyCutoutLogo,
            Shot1
        }
    }
}
</script>

<style scoped>
.project-link {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
}

.project-link:hover {
    color: #44E1C5;
}
</style>