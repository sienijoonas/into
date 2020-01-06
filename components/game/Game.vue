<template>
  <div class="game-container">
    <transition name="fadeOut">
      <Start v-if="hasStarted == false" />
    </transition>
    <transition name="fadeIn">
      <NotePlayer
        v-if="hasStarted == true"
        :notes="[baseNote, baseNote + currentInterval]"
        :key="currentInterval"
      />
    </transition>
    <transition
      name="fadee"
      mode="out-in"
      enter-active-class="fadeIn"
      leave-class="pizza"
      leave-active-class="fadeOut"
    >
      <AnswerOptions v-if="hasStarted == true" :correct="currentInterval" :key="currentInterval" />
    </transition>
    <!-- <Splash :key="currentInterval" /> -->
  </div>
</template>

<script>
import Start from '~/components/game/Start'
import NotePlayer from '~/components/game/NotePlayer'
import AnswerOptions from '~/components/game/AnswerOptions'
// import Splash from '~/components/Splash'

export default {
  components: {
    Start,
    NotePlayer,
    AnswerOptions
    // Splash
  },
  data() {
    return {
      hasStarted: false,
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
    startGame() {
      console.log('penis')
      this.hasStarted = true
    },
    nextQuestion() {
      this.currentQuestion += 1
      this.currentInterval = Math.floor(Math.random() * 12) + 1
      this.baseNote = Math.floor(Math.random() * 10) + 2
    }
  }
}
</script>

<style lang="scss" scoped>
.game-container {
  position: relative;
}

// .fade-enter-active {
//   transition: all 1s;
// }
// .fade-enter,
// .fade-leave-active,
// .fade-leave-to,
// .fade-leave {
//   opacity: 0;
//   transition: all 1s;
//   transform: scale(0.75);
// }
// .fade-enter {
// }

.pizza {
  display: none;
  animation-fill-mode: forwards;
}
.fadeIn {
  animation: fadeIn 1s ease-in-out;
}
.fadeOut {
  opacity: 0;
  animation: fadeOut 1s ease-in-out;
  animation-fill-mode: forwards;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.75);
  }
}

.fadeIn-enter,
.fadeIn-enter-active {
  opacity: 0;
  transition: all 1s;
  transform: scale(0.75);
}

.fadeOut-leave-active,
.fadeOut-leave-to,
.fadeOut-leave {
  opacity: 0;
  transition: all 1s;
}
</style>
