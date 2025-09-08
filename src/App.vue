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
          I'm Justina, a <span class="bold-text">Product Designer</span> with a background in
          Neuroscience and research. I deeply enjoy understanding complex
          problems and providing creative
          solutions for
          <span class="bold-text">people</span>
          <img class="heart-icon" :src="HeartIcon" alt="heart" />
        </p>
      </div>
      <img class="shot" :src="Shot1" alt="shot1" />
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
  overflow-y: scroll;
  background-color: #ffffff;
  scroll-behavior: smooth;
  /* Add background color to body */
}

#app {
  height: 100vh;
  width: 100%;
  margin: 0;
  display: flex;
  max-width: max-content;
  padding: 0;
  /* Prevent scroll on the app */
}

.component-web {
  display: flex;
  height: 100vh;
  width: 100%;
}

.sidebar {
  position: fixed;
  right: 0;
  top: 0;
  width: 238px;
  height: 100vh;
  background-color: #ffffff;
  padding-top: 60px;
  padding-left: 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.sidebar::after {
  content: '';
  position: absolute;
  left: 0;
  top: 60px;
  /* Start border 60px from top */
  width: 1px;
  height: calc(100% - 60px);
  /* Adjust height to account for top offset */
  background-color: #BABABA;
}

.text-links-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
}

.text-links-container .text-wrapper {
  text-align: left;
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.48px;
  cursor: pointer;
  transition: color 0.2s ease;
}

.text-links-container .text-wrapper:hover {
  color: #44E1C5;
}

.main-content {
  margin-right: 300px;
  width: calc(100% - 300px);
  height: 100vh;
  overflow-y: visible;
  background-color: #ffffff;
  font-family: "Maven Pro", sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  padding-left: 80px;
  padding-top: 60px;
  gap: 0px;
  display: flex;
  flex-direction: column;
}

.main-content p {
  margin-bottom: 1rem;
  /* Adds space after paragraphs */
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
  font-size: 30px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: -0.6px;
  color: #4D4D4D;
  max-width: 880px;
}

.bold-text {
  font-family: "Maven Pro", sans-serif;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -0.64px;
  display: inline;
  position: relative;
}

.heart-icon {
  margin-left: 12px;
  position: relative;
  top: 4px;
  width: 26px;
  height: auto;
}

.shot {
  position: relative;
  top: 4px;
  width: 1200px;
  height: auto;
  /* Align to right */
  margin-left: 120px;
  margin-right: 0;
}

/* Mobile Styles */
@media (max-width: 768px) {

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
</style>