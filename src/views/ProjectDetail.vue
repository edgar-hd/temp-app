<!-- views/ProjectDetail.vue -->
<template>
    <div class="project-detail">
        <div class="back-link">
            <router-link to="/">← Back to Portfolio</router-link>
        </div>

        <!-- Show different content based on project ID -->
        <div v-if="projectId === 'medication-dashboard'">
            <h1>Tracking Medication Adherence: Dashboard Design</h1>
            <div class="project-meta">
                <span class="role">Lead Product Designer</span>
                <span class="company">Kin Technology | 2023-2025</span>
            </div>
            <div class="project-content">
                <p>Your medication dashboard content here...</p>
            </div>
        </div>

        <div v-else-if="projectId === 'multiplatform-solution'">
            <h1>Multiplatform Design for Home Medication Solution</h1>
            <div class="project-meta">
                <span class="role">Lead Product Designer</span>
                <span class="company">Kin Technology | 2023-2025</span>
            </div>
            <div class="project-content">
                <p>Your multiplatform content here...</p>
            </div>
        </div>

        <div v-else-if="projectId === 'art-curation'">
            <h1>Art Curation Experience and Marketplace: Mobile App Design</h1>
            <div class="project-meta">
                <span class="role">Founding Designer</span>
                <span class="company">PONS.ai | 2019</span>
            </div>
            <div class="project-content">
                <p>Your art curation content here...</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectDetail',
    computed: {
        projectId() {
            return this.$route.params.id
        }
    }
}
</script>

<style scoped>
/* Your existing project detail styles */
.project-detail {
    max-width: 1000px;
    padding-bottom: 164px;
}

.back-link {
    margin-bottom: 40px;
}

.back-link a {
    color: #0914c5;
    text-decoration: none;
    font-family: "Maven Pro", sans-serif;
    font-size: 18px;
}

.back-link a:hover {
    color: #44E1C5;
}

h1 {
    font-family: "Maven Pro", sans-serif;
    font-size: 48px;
    font-weight: 500;
    color: #0914c5;
    margin-bottom: 20px;
}

.project-meta {
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
    font-family: "Maven Pro", sans-serif;
    color: #4D4D4D;
}

.role {
    font-weight: 500;
}

.project-content p {
    font-family: "Maven Pro", sans-serif;
    font-size: 20px;
    line-height: 1.6;
    color: #4D4D4D;
    margin-bottom: 20px;
}
</style>