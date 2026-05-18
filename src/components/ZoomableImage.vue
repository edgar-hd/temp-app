<template>
  <div class="full-image">
    <button
      v-show="!isOpen"
      type="button"
      class="zoomable-trigger"
      :aria-label="`View full size: ${alt}`"
      @click="open"
    >
      <img :src="src" :alt="alt" />
    </button>
    <p v-if="caption" class="caption">{{ caption }}</p>

    <Teleport to="body">
      <div
        v-if="isOpen"
        ref="lightbox"
        class="lightbox"
        :class="{ 'lightbox--scroll': isZoomed }"
        role="dialog"
        aria-modal="true"
        :aria-label="alt"
      >
        <button type="button" class="lightbox-close" aria-label="Close" @click.stop="close">×</button>
        <div
          class="lightbox-stage"
          :class="isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'"
          @click="toggleZoom($event)"
        >
          <img
            :src="src"
            :alt="alt"
            class="lightbox-img"
            :class="isZoomed ? 'lightbox-img--zoomed' : 'lightbox-img--fit'"
          />
        </div>
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
    return {
      isOpen: false,
      isZoomed: false,
      savedScroll: 0,
    }
  },
  mounted() {
    window.addEventListener('keydown', this.onKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.onKeydown)
    this.unlockScroll()
  },
  methods: {
    open() {
      this.savedScroll = window.scrollY
      this.isZoomed = false
      this.isOpen = true
      document.body.style.overflow = 'hidden'
    },
    toggleZoom(event) {
      const lightbox = this.$refs.lightbox
      if (!lightbox) return

      if (!this.isZoomed) {
        const img = lightbox.querySelector('.lightbox-img')
        if (!img) return

        const lbRect = lightbox.getBoundingClientRect()
        const imgRect = img.getBoundingClientRect()
        const ratioX = this.clamp((event.clientX - imgRect.left) / imgRect.width, 0, 1)
        const ratioY = this.clamp((event.clientY - imgRect.top) / imgRect.height, 0, 1)
        const viewX = event.clientX - lbRect.left
        const viewY = event.clientY - lbRect.top

        this.isZoomed = true
        this.$nextTick(() => {
          requestAnimationFrame(() => {
            const scrollX = ratioX * img.scrollWidth - viewX
            const scrollY = ratioY * img.scrollHeight - viewY
            lightbox.scrollLeft = this.clamp(
              scrollX,
              0,
              lightbox.scrollWidth - lightbox.clientWidth
            )
            lightbox.scrollTop = this.clamp(
              scrollY,
              0,
              lightbox.scrollHeight - lightbox.clientHeight
            )
          })
        })
      } else {
        this.isZoomed = false
        this.$nextTick(() => {
          lightbox.scrollLeft = 0
          lightbox.scrollTop = 0
        })
      }
    },
    clamp(value, min, max) {
      return Math.max(min, Math.min(value, max))
    },
    close() {
      const scrollY = this.savedScroll
      this.isOpen = false
      this.isZoomed = false
      this.unlockScroll()
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollY)
      })
    },
    unlockScroll() {
      document.body.style.overflow = ''
    },
    onKeydown(e) {
      if (e.key === 'Escape' && this.isOpen) this.close()
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
  background: rgba(255, 255, 255, 0.96);
}

.lightbox--scroll {
  overflow: auto;
}

.lightbox-close {
  position: fixed;
  top: 20px;
  right: 24px;
  z-index: 1001;
  width: 44px;
  height: 44px;
  border: none;
  background: transparent;
  font-size: 36px;
  line-height: 1;
  color: #2c2c2c;
  cursor: pointer;
}

.lightbox-close:hover {
  color: #000aaa;
}

.lightbox-stage {
  min-height: 100%;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
}

.lightbox--scroll .lightbox-stage {
  display: block;
  width: max-content;
  min-width: 100%;
  min-height: 100%;
  padding: 48px 24px;
}

.cursor-zoom-in {
  cursor:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Ccircle cx='10' cy='10' r='6.5' fill='white' stroke='%232c2c2c' stroke-width='1.5'/%3E%3Cpath stroke='%232c2c2c' stroke-width='1.5' stroke-linecap='round' d='M14.2 14.2L19 19'/%3E%3Cpath stroke='%232c2c2c' stroke-width='1.5' stroke-linecap='round' d='M8 10h4M10 8v4'/%3E%3C/svg%3E")
      12 12,
    zoom-in;
}

.cursor-zoom-out {
  cursor:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Ccircle cx='10' cy='10' r='6.5' fill='white' stroke='%232c2c2c' stroke-width='1.5'/%3E%3Cpath stroke='%232c2c2c' stroke-width='1.5' stroke-linecap='round' d='M14.2 14.2L19 19'/%3E%3Cpath stroke='%232c2c2c' stroke-width='1.5' stroke-linecap='round' d='M8 10h4'/%3E%3C/svg%3E")
      12 12,
    zoom-out;
}

.lightbox-img {
  display: block;
  pointer-events: none;
}

.lightbox-img--fit {
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 48px);
  width: auto;
  height: auto;
  object-fit: contain;
}

.lightbox-img--zoomed {
  max-width: none;
  max-height: none;
  width: 300vw;
  height: auto;
}
</style>
