<template>
  <div class="logo">
    <span class="title">into</span>
    <span class="subtitle">interval trainer</span>
  </div>
</template>
<style lang="scss" scoped>
.logo {
  position: absolute;
  top: 8px;
  left: 16px;
  user-select: none;

  &:hover {
    animation-name: pop;
    animation-duration: 0.3s;
    animation-timing-function: ease-in-out;
  }
}
.title {
  position: relative;
  left: 16px;
  display: block;
  color: #00e1ff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 72px;
  line-height: 64px;
  letter-spacing: 1px;
  transform: rotate(-5deg);
  text-shadow: 1px 1px 0px #ff7740, 2px 2px 0px #ff7740, 3px 3px 0px #ff7740, 4px 4px 0px #ff7740;

  @media (max-width: 600px) {
    font-size: 16vw;
  }
}

.subtitle {
  position: relative;
  color: #ff7740;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 32px;
  word-spacing: 5px;
  text-shadow: 1px 1px 0px #0092a5, 2px 2px 0px #0092a5;

  @media (max-width: 600px) {
    font-size: 7vw;
  }
}

@keyframes pop {
  0% {
    transform: scale(1) rotate(0deg);
  }
  10% {
    transform: scale(0.97) rotate(-2deg);
  }
  60% {
    transform: scale(1.02) rotate(3deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
}
</style>
