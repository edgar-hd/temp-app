<template>
  <div class="full-image">
    <button
      type="button"
      class="zoomable-trigger"
      :aria-expanded="isOpen"
      :aria-label="`View full size: ${alt}`"
      @click="open"
    >
      <img :src="src" :alt="alt" loading="lazy" decoding="async" />
    </button>
    <p v-if="caption" class="caption">{{ caption }}</p>

    <Teleport to="body">
      <div
        v-if="isOpen"
        class="lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="alt"
        @click="close"
      >
        <img :src="src" :alt="alt" class="lightbox-img" />
      </div>
    </Teleport>
  </div>
</template>

<script>
export default {
  name: 'ZoomableImage',
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: true },
    caption: { type: String, default: '' },
  },
  data() {
    return { isOpen: false }
  },
  mounted() {
    window.addEventListener('keydown', this.onKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.onKeydown)
    document.body.style.overflow = ''
  },
  methods: {
    open() {
      this.isOpen = true
      document.body.style.overflow = 'hidden'
    },
    close() {
      this.isOpen = false
      document.body.style.overflow = ''
    },
    onKeydown(e) {
      if (e.key === 'Escape') this.close()
    },
  },
}
</script>

<style scoped>
.zoomable-trigger {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  background: none;
  cursor:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Ccircle cx='10' cy='10' r='6.5' fill='white' stroke='%232c2c2c' stroke-width='1.5'/%3E%3Cpath stroke='%232c2c2c' stroke-width='1.5' stroke-linecap='round' d='M14.2 14.2L19 19'/%3E%3Cpath stroke='%232c2c2c' stroke-width='1.5' stroke-linecap='round' d='M8 10h4M10 8v4'/%3E%3C/svg%3E")
      12 12,
    zoom-in;
}

.zoomable-trigger img {
  width: 100%;
  display: block;
  pointer-events: none;
}

.caption {
  font-size: 14px;
  color: #757575;
  margin-top: 12px;
  text-align: center;
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(255, 255, 255, 0.96);
  cursor:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Ccircle cx='10' cy='10' r='6.5' fill='white' stroke='%232c2c2c' stroke-width='1.5'/%3E%3Cpath stroke='%232c2c2c' stroke-width='1.5' stroke-linecap='round' d='M14.2 14.2L19 19'/%3E%3Cpath stroke='%232c2c2c' stroke-width='1.5' stroke-linecap='round' d='M8 10h4'/%3E%3C/svg%3E")
      12 12,
    zoom-out;
}

.lightbox-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  pointer-events: none;
}
</style>
