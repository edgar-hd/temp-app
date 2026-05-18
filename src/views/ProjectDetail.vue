<template>
  <div :class="$style.page">
    <header :class="[$style.topBar, headerHidden && $style.topBarHidden]">
      <router-link to="/" :class="$style.logoBlock">
        <img :class="$style.logo" :src="logo" alt="" />
        <div :class="$style.name">TIM JUSTINA YEUNG</div>
      </router-link>
      <nav :class="$style.nav">
        <router-link to="/" :class="$style.navLink">Portfolio</router-link>
        <span :class="$style.navLink">About</span>
        <span :class="$style.navLink">Other work</span>
        <span :class="$style.navLink">CV</span>
      </nav>
    </header>
    <main :class="$style.main">
      <slot />
    </main>
  </div>
</template>

<script>
import logo from '../assets/TjyCutoutLogo.svg'

export default {
  name: 'ProjectDetail',
  data() {
    return {
      logo,
      headerHidden: false,
      lastScrollY: 0,
    }
  },
  mounted() {
    this.lastScrollY = window.scrollY
    window.addEventListener('scroll', this.onScroll, { passive: true })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const y = window.scrollY
      const delta = y - this.lastScrollY

      if (y <= 0) {
        this.headerHidden = false
      } else if (delta > 0) {
        this.headerHidden = true
      } else if (delta < 0) {
        this.headerHidden = false
      }

      this.lastScrollY = y
    },
  },
}
</script>

<style module>
.page {
  background: #fff;
  color: #2c2c2c;
  font-family: 'Maven Pro', sans-serif;
  font-size: 20px;
  min-height: 100vh;
}

.topBar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: 82px 82px 40px;
  background: #fff;
  transition: transform 0.35s ease;
  transform: translateY(0);
}

.topBarHidden {
  transform: translateY(-100%);
}

.logoBlock {
  display: flex;
  align-items: center;
  gap: 24px;
  text-decoration: none;
  color: inherit;
}

.logo {
  width: 87px;
  height: 46px;
}

.name {
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: #000aaa;
}

.nav {
  display: flex;
  gap: 40px;
  font-size: 16px;
}

.navLink {
  color: inherit;
  text-decoration: none;
  letter-spacing: -0.02em;
}

.main {
  max-width: calc(650px + 6ch);
  margin: 0 auto;
  padding: 170px 20px 120px;
  line-height: 1.5;
}

.main :global(h1) {
  font-size: 35px;
  letter-spacing: -0.02em;
  line-height: 1.25;
  text-align: center;
  margin: 0 0 24px;
}

.main :global(.meta) {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 24px;
  color: #757575;
  letter-spacing: -0.02em;
  margin-bottom: 48px;
}

.main :global(.meta span:nth-child(2)) {
  width: 1px;
  height: 29px;
  background: #757575;
  padding: 0;
  overflow: hidden;
  text-indent: -999px;
}

.main :global(.intro) {
  font-family: 'EB Garamond', Georgia, serif;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 32px;
}

.main :global(section) {
  margin-top: 64px;
  text-align: left;
}

.main :global(h2) {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
}

.main :global(h3) {
  font-size: 29px;
  letter-spacing: -0.02em;
  line-height: 1.3;
  margin-bottom: 24px;
}

.main :global(section p) {
  font-family: 'EB Garamond', Georgia, serif;
  font-size: 20px;
  line-height: 30px;
  text-align: left;
  margin-bottom: 32px;
}

.main :global(.full-image) {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1100px;
  width: min(1100px, calc(100vw - 40px));
  margin: 48px 0;
  text-align: center;
}

.main :global(.hero-image) {
  max-width: 1920px;
  width: min(1920px, calc(100vw - 40px));
}

.main :global(.full-image img) {
  width: 100%;
  display: block;
  margin: 0 auto;
}

.main :global(.caption) {
  font-size: 14px;
  color: #757575;
  margin-top: 12px;
  text-align: center;
}

.main :global(.highlight) {
  color: #f20606;
}
</style>
