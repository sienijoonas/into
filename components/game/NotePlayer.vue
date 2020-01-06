<template>
  <div :class="isPlaying === true ? 'isPlaying' : ''" class="play">
    <img
      @click="playSound(notes)"
      :src="require(`~/assets/img/${isPlaying === true ? 'icon_play.png' : 'icon_play.png'}`)"
      alt="Play sound!"
    />
  </div>
</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      required: true,
      default: () => [1, 1]
    }
  },
  data() {
    return {
      iconPlay: 'icon_play.png',
      iconStop: 'icon_stop.png',
      isPlaying: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.playSound(this.notes)
    }, 1500)
  },
  methods: {
    playSound(notes) {
      if (this.isPlaying === false) {
        this.isPlaying = true

        const firstNote = new Audio(
          require('~/assets/audio/note-' + notes[0].toString().padStart(2, '0') + '.mp3')
        )
        const secondNote = new Audio(
          require('~/assets/audio/note-' + notes[1].toString().padStart(2, '0') + '.mp3')
        )

        firstNote.addEventListener('ended', () => {
          secondNote.addEventListener('ended', () => {
            this.isPlaying = false
          })
          secondNote.play()
        })
        firstNote.play()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.play {
  margin: 0 auto 32px;
  width: 64px;
  height: 64px;
  border-radius: 666px;
  text-align: center;
  opacity: 0.9;

  &:hover {
    opacity: 0.7;
  }

  img {
    max-width: 100%;
    min-width: 1px;
  }

  &.isPlaying {
    opacity: 0.5;
    box-shadow: 0px 0px 16px #ff8;

    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
