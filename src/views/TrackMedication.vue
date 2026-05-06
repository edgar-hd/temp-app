<template>
    <div class="project-detail">
        <div class="back-link">
            <router-link to="/">← Back to Portfolio</router-link>
        </div>

        <h1>Tracking Medication Adherence: Dashboard Design</h1>

        <div class="project-meta">
            <span class="role">Lead Product Designer</span>
            <span class="company">Kin Technology | 2023-2025</span>
        </div>

        <div class="project-content">
            <section>
                <h2>Overview</h2>
                <p>Your detailed content for the medication dashboard project...</p>
            </section>

            <section>
                <h2>The Challenge</h2>
                <p>Healthcare providers struggled to track patient medication adherence...</p>
            </section>

            <section>
                <h2>My Process</h2>
                <ul>
                    <li>Interviewed 15 healthcare providers</li>
                    <li>Created journey maps of current tracking process</li>
                    <li>Designed and prototyped dashboard concepts</li>
                    <li>Conducted usability testing with 20 users</li>
                </ul>
            </section>

            <section>
                <h2>The Solution</h2>
                <p>A comprehensive dashboard showing adherence patterns, alerts, and patient insights...</p>
            </section>

            <section>
                <h2>Outcomes</h2>
                <p>40% reduction in missed medication tracking and improved patient outcomes...</p>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TrackMedication'
}
</script>

<style scoped>
/* Same styles as before */
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

.project-content h2 {
    font-family: "Maven Pro", sans-serif;
    font-size: 32px;
    font-weight: 500;
    margin-top: 40px;
    margin-bottom: 20px;
    color: #0914c5;
}

.project-content p,
.project-content li {
    font-family: "Maven Pro", sans-serif;
    font-size: 20px;
    line-height: 1.6;
    color: #4D4D4D;
    margin-bottom: 20px;
}

.project-content ul {
    margin-left: 20px;
    margin-bottom: 20px;
}
</style>