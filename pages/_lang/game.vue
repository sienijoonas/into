<template>
  <div id="content" class="content">
    <h1 @click="nextQuestion()">NEXT</h1>
    <Game />
  </div>
</template>

<script>
import Game from '~/components/game/Game'

export default {
  components: {
    Game
  },
  transition: {
    appear: true
  }
}
</script>

<style lang="scss" scoped>
#game {
  display: flex;
  align-content: center;
  height: 100%;
}
</style>
