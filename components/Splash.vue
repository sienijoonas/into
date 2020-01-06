<template>
  <div class="notes">
    <div class="note"></div>
    <div class="note"></div>
    <div class="note"></div>
    <div class="note"></div>
    <div class="note"></div>
    <div class="note"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.notes {
  position: absolute;
  bottom: 25%;
  left: 50%;
}
.note {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 48px;
  width: 48px;
  opacity: 0;

  background-image: url('~assets/img/note_single.png');
  background-size: contain;
  background-repeat: no-repeat;
  animation: flyleft 1s linear;

  &:nth-child(even) {
    background-image: url('~assets/img/note_double.png');
  }
  &:nth-child(1) {
    left: 45%;
    animation-name: flyright;
  }
  &:nth-child(2) {
    left: 47%;
  }
  &:nth-child(3) {
    left: 49%;
    animation-name: flyright;
  }
  &:nth-child(4) {
    left: 51%;
  }
}

@keyframes flyleft {
  0% {
    bottom: 0;
    transform: scale(1);
    opacity: 0;
  }
  50% {
    bottom: -50%;
    opacity: 1;
  }
  100% {
    bottom: 0;
    left: -150px;
    transform: scale(3) rotate(360deg);
    opacity: 0;
  }
}
@keyframes flyright {
  0% {
    bottom: 0;
    transform: scale(1);
    opacity: 0;
  }
  50% {
    bottom: -50%;
    opacity: 1;
  }
  100% {
    bottom: 0;
    right: -150px;
    transform: scale(3) rotate(360deg);
    opacity: 0;
  }
}
</style>
