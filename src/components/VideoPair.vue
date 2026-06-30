<template>
  <div class="video-pair">
    <div ref="row" class="video-pair-videos" :style="rowStyle">
      <div class="video-pair-media">
        <video
          ref="leftVideo"
          class="project-video"
          :src="leftSrc"
          autoplay
          loop
          muted
          playsinline
          @loadedmetadata="scheduleLayout"
        />
      </div>
      <div class="video-pair-media">
        <video
          ref="rightVideo"
          class="project-video"
          :src="rightSrc"
          autoplay
          loop
          muted
          playsinline
          @loadedmetadata="scheduleLayout"
        />
      </div>
    </div>
    <p v-if="caption" class="caption">{{ caption }}</p>
  </div>
</template>

<script>
const STACK_QUERY = '(max-width: 997px)'

export default {
  name: 'VideoPair',
  props: {
    leftSrc: { type: String, required: true },
    rightSrc: { type: String, required: true },
    caption: { type: String, default: '' },
  },
  data() {
    return {
      sharedHeight: null,
      stacked: false,
    }
  },
  computed: {
    rowStyle() {
      if (this.stacked || this.sharedHeight == null) {
        return {}
      }
      return { '--video-pair-height': `${this.sharedHeight}px` }
    },
  },
  mounted() {
    this.mediaQuery = window.matchMedia(STACK_QUERY)
    this.onMediaChange = () => this.scheduleLayout()
    this.mediaQuery.addEventListener('change', this.onMediaChange)

    this.resizeObserver = new ResizeObserver(() => this.scheduleLayout())
    this.resizeObserver.observe(this.$refs.row)

    this.scheduleLayout()
  },
  beforeUnmount() {
    this.mediaQuery?.removeEventListener('change', this.onMediaChange)
    this.resizeObserver?.disconnect()
  },
  methods: {
    scheduleLayout() {
      requestAnimationFrame(() => this.updateLayout())
    },
    updateLayout() {
      const row = this.$refs.row
      const left = this.$refs.leftVideo
      const right = this.$refs.rightVideo
      if (!row || !left || !right) {
        return
      }

      this.stacked = this.mediaQuery.matches
      if (this.stacked) {
        this.sharedHeight = null
        return
      }

      if (!left.videoWidth || !right.videoWidth) {
        return
      }

      const styles = getComputedStyle(row)
      const gap = parseFloat(styles.columnGap || styles.gap) || 0
      const containerWidth = row.clientWidth
      const leftAspect = left.videoWidth / left.videoHeight
      const rightAspect = right.videoWidth / right.videoHeight

      this.sharedHeight = (containerWidth - gap) / (leftAspect + rightAspect)
    },
  },
}
</script>

<style scoped>
.video-pair-videos {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: clamp(12px, 1.5vw, 20px);
  width: 100%;
}

.video-pair-media {
  flex: 0 0 auto;
}

.project-video {
  display: block;
  height: var(--video-pair-height, auto);
  width: auto;
  max-width: none;
  object-fit: contain;
}

@media (max-width: 997px) {
  .video-pair-videos {
    flex-direction: column;
    align-items: flex-start;
  }

  .project-video {
    width: 100%;
    height: auto;
  }
}
</style>
