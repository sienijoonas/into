<template>
  <div class="container">
    <div class="links">
      <nuxt-link to="/game">PELI</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  text-align: center;
  color: #fff;
}

.pizza {
  align-self: center;
}

.title {
  display: block;
  color: #00e1ff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 100px;
  letter-spacing: 1px;
}

.subtitle {
  color: #ff7740;
  font-family: Montserrat, sans-serif;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;

  & a {
    font-size: 64px;
    color: #fff;
  }
}
</style>
