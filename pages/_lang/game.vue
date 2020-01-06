<template>
  <div id="content" class="content">
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
.content {
  padding-top: 64px;
}
</style>
