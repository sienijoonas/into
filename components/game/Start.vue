<template>
  <div class="start">
    <span @click="$parent.startGame()">START!</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.start {
  position: absolute;
  right: 50%;
  transform: translateX(50%);

  span {
    display: inline-block;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 64px;
    font-weight: 900;
    text-shadow: 4px 4px 0 #00e1ff;
    text-align: center;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
