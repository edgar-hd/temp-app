<template>
  <div class="component-web">
    <div class="sidebar" :class="{ 'hide': isHidden }">
      <div class="text-links-container">
        <div class="text-wrapper">Portfolio</div>
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
          problems and providing creative
          solutions
          <span class="bold-text">for people.</span>
        </p>
      </div>
      <div class="right_shot">
        <img class="shot-image" :src="Shot1" alt="shot1" />
        <div class="shot-info">
          <p class="shot-title">Tracking Medication Adherence: Dashboard Design</p>
          <p class="shot-role">Lead Product Designer</p>
          <p class="shot-company">Kin Technology | 2023-2025</p>
        </div>
      </div>
      <div class="left_shot">
        <img class="shot-image" :src="Shot1" alt="left shot" />
        <div class="shot-info">
          <p class="shot-title">Multiplatform Design for Home Medication Solution </p>
          <p class="shot-role">Lead Product Designer</p>
          <p class="shot-company">Kin Technology | 2023-2025</p>
        </div>
      </div>
      <div class="right_shot">
        <img class="shot-image" :src="Shot1" alt="shot1" />
        <div class="shot-info">
          <p class="shot-title">Art Curation Experience and Marketplace: Mobile App Design</p>
          <p class="shot-role">Founding Designer</p>
          <p class="shot-company">PONS.ai | 2019</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TjyCutoutLogo from './assets/TjyCutoutLogo.svg';
import HeartIcon from './assets/heart.svg';
import Shot1 from './assets/shot1.png';

export default {
  name: 'ComponentWeb',
  data() {
    return {
      TjyCutoutLogo,
      HeartIcon,
      Shot1,
      isHidden: false,
      lastScrollY: 0
    };
  },
  mounted() {
    console.log('Component mounted');
    this.lastScrollY = 0;
  },
  methods: {
    handleScroll(event) {
      const currentScrollY = event.target.scrollTop;

      if (currentScrollY > this.lastScrollY) {
        // Scrolling down
        this.isHidden = true;
      } else {
        // Scrolling up
        this.isHidden = false;
      }

      this.lastScrollY = currentScrollY;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  padding: 0px;
  height: 100vh;
  overflow-y: hidden;
  background-color: #ffffff;
  scroll-behavior: smooth;
}

#app {
  height: 100vh;
  width: 100%;
  margin: 0;
  display: flex;
  max-width: max-content;
  padding: 0;
  overflow-y: hidden;
}

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
  font-style: normal;
  line-height: 100%;
  letter-spacing: -2%;
  cursor: pointer;
  transition: color 0.2s ease;
  vertical-align: middle;
}

.text-links-container .text-wrapper:hover {
  color: #44E1C5;
}

.main-content {
  --padding-top: 82px;
  width: clamp(746px, calc(100% - 238px), 1204px);
  min-height: 100vh;
  height: auto;
  background-color: #ffffff;
  padding-left: 82px;
  padding-top: var(--padding-top);
  display: flex;
  flex-direction: column;
  position: relative;
  order: 1;
  overflow-x: visible;
  overflow-y: auto;
}

.main-content p {
  margin-bottom: 1rem;
}

.main-content::before {
  content: '';
  position: absolute;
  left: 82px;
  top: var(--padding-top);
  width: 1px;
  height: calc(100% - var(--padding-top));
  background-color: #BABABA;
}

.main-content::after {
  content: '';
  position: absolute;
  right: 0;
  top: var(--padding-top);
  width: 1px;
  bottom: 0;
  background-color: #BABABA;
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
  margin-top: 0px
}

.name-wrapper {
  font-family: "Maven Pro", sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.64px;
  text-align: left;
  margin-top: 8px;
  margin-bottom: 60px;
}

.body-text {
  font-family: "Maven Pro", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 28px;
  line-height: 40px;
  letter-spacing: -2%;
  color: #4D4D4D;
  max-width: calc(100% - 80px);
  text-align: left;
}

.bold-text {
  font-weight: 500;
  color: #0914c5;
}

.heart-icon {
  margin-left: 12px;
  position: relative;
  top: 4px;
  width: 26px;
  height: auto;
}

.right_shot {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 82px;
  margin-right: 0;
  width: calc(100% - 82px);
}

.left_shot {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: auto;
  margin-left: 0;
  width: calc(100% - 82px);
}

.right_shot .shot-info {
  align-self: flex-start;
  text-align: left;
  max-width: 100%;
}

.left_shot .shot-info {
  align-self: flex-start;
  text-align: left;
  max-width: 100%;
}

.left_shot .shot-image {
  align-self: flex-start;
}

.left_shot .shot-info {
  align-self: flex-end;
  text-align: right;
}

.shot-image {
  position: relative;
  top: 4px;
  max-width: 1040px;
  height: auto;
  width: 100%;
}

.shot-info {
  font-family: "Maven Pro", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 32px;
  letter-spacing: -2%;
  color: #4D4D4D;
  margin-top: 16px;
  margin-bottom: 40px;
}

.shot-info p {
  margin: 0;
}

.shot-title {
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
}

.shot-role {
  font-weight: 500;
  font-size: 25px;
  line-height: 24px;
}

.shot-company {
  font-size: 25px;
  line-height: 24px;
}

/* Mobile Styles */
@media (max-width: 998px) {

  #app {
    padding: 0;
  }

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
    flex-direction: column;
    align-items: center;
    background-color: #ece5e5;
    display: flex;
    transform: translateY(0);
    transition: transform 0.3s ease-in-out;
    transform-origin: top;
    /* Add this */
    will-change: transform;
    /* Add this for performance */
  }

  .sidebar.hide {
    transform: translateY(-100%);
  }

  .TJY-cutout-logo {
    height: 60px;
    width: auto;
    margin-bottom: 0;
  }

  .text-wrapper {
    font-size: 18px;
  }

  .main-content {
    margin-left: 0;
    width: 100%;
    font-size: 16px;
    height: auto;
    padding: 16px;
    padding-top: 200px;
    overflow-y: auto;
  }

  .text-links-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Style for the text links */
  .text-links-container .text-wrapper {
    margin: 0 5px;
    white-space: nowrap;
  }

  .name-wrapper {
    align-self: flex-start;
    text-align: left;
    width: 100%;
    order: -1;
    /* Move to top in mobile view */
  }

  .body-text {
    font-size: 14px;
  }
}
</style>// Triggering a new deployment
