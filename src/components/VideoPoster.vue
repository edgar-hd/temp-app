<template>
  <div class="full-image">
    <video
      v-if="isPlaying"
      ref="video"
      class="video-player"
      :src="videoSrc"
      controls
      playsinline
      @click.stop
    />
    <button
      v-else
      type="button"
      class="poster-trigger"
      :aria-label="`Play video: ${alt}`"
      @click="play"
    >
      <img :src="poster" :alt="alt" loading="lazy" decoding="async" />
    </button>
    <p v-if="caption" class="caption">{{ caption }}</p>
  </div>
</template>

<script>
export default {
  name: 'VideoPoster',
  props: {
    poster: { type: String, required: true },
    videoSrc: { type: String, required: true },
    alt: { type: String, required: true },
    caption: { type: String, default: '' },
  },
  data() {
    return { isPlaying: false }
  },
  methods: {
    play() {
      this.isPlaying = true
      this.$nextTick(() => {
        this.$refs.video?.play()
      })
    },
  },
}
</script>

<style scoped>
.poster-trigger {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}

.poster-trigger img {
  width: 100%;
  display: block;
}

.poster-trigger:hover img {
  opacity: 0.92;
}

.video-player {
  width: 100%;
  display: block;
  background: #000;
}

.caption {
  font-size: 14px;
  color: #757575;
  margin-top: 12px;
  text-align: center;
}
</style>
