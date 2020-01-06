<template>
  <div>
    <NotePlayer :notes="[baseNote, baseNote + currentInterval]" :key="currentInterval" />
    <transition name="fade">
      <AnswerOptions :correct="currentInterval" :key="currentInterval" />
    </transition>
  </div>
</template>

<script>
import NotePlayer from '~/components/game/NotePlayer'
import AnswerOptions from '~/components/game/AnswerOptions'

export default {
  components: {
    NotePlayer,
    AnswerOptions
  },
  data() {
    return {
      currentQuestion: 0,
      currentInterval: 0,
      baseNote: 0
    }
  },
  created() {
    this.currentInterval = Math.floor(Math.random() * 12) + 1
    this.baseNote = Math.floor(Math.random() * 10) + 2
  },
  methods: {
    nextQuestion() {
      this.currentQuestion += 1
      this.currentInterval = Math.floor(Math.random() * 12) + 1
      this.baseNote = Math.floor(Math.random() * 10) + 2
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: all 1s;
}
.fade-leave-active,
.fade-enter,
.fade-leave-to,
.fade-leave {
  opacity: 0;
  transition: all 1s;
  transform: scale(0.75);
}

.fade-enter,
.fade-enter-active {
  transition-delay: 1.1s;
}
</style>
