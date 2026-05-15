<template>
    <div class="project-detail">
        <Topbar />
        <div class="content">
            <slot />
        </div>
    </div>
</template>

<script>
import Topbar from '../components/Topbar.vue'

export default {
    name: 'ProjectDetail',
    components: { Topbar }
}
</script>

<style>
.project-detail {
    padding-top: 211px;
}

.content {
    width: 100%;
    padding: 40px 0;
}

h1 {
    font-size: 35px;
    font-family: "Maven Pro", sans-serif;
    font-weight: 400;
    color: #2C2C2C;
    margin-bottom: 20px;
    text-align: center;
}

.meta {
    color: #757575;
    font-size: 24px;
    font-family: "Maven Pro", sans-serif;
    font-weight: 400;
    text-align: center;
    margin-bottom: 40px;
}

.intro {
    font-size: 20px;
    font-family: "EB Garamond", serif;
    line-height: 30px;
    color: #2C2C2C;
    max-width: 650px;
    margin: 0 auto 60px auto;
    text-align: center;
}

section {
    max-width: 650px;
    margin: 0 auto 60px auto;
}

h2 {
    font-size: 24px;
    font-family: "Maven Pro", sans-serif;
    font-weight: 600;
    color: #2C2C2C;
    margin-bottom: 20px;
}

h3 {
    font-size: 22px;
    font-family: "Maven Pro", sans-serif;
    font-weight: 600;
    color: #2C2C2C;
    margin-top: 30px;
    margin-bottom: 20px;
}

p {
    font-size: 20px;
    font-family: "EB Garamond", serif;
    line-height: 30px;
    color: #2C2C2C;
    margin-bottom: 20px;
}

strong {
    font-weight: 700;
}

.highlight {
    color: #FC0F0F;
}

.full-image {
    margin: 40px 0;
    width: 100%;
}

.full-image img {
    width: 100%;
    height: auto;
}

.caption {
    font-size: 14px;
    font-family: "Maven Pro", sans-serif;
    color: #757575;
    text-align: center;
    margin-top: 8px;
}
</style>