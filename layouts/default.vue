<template>
  <div class="wrapper">
    <header class="header">
      <nuxt-link to="/"><Logo /></nuxt-link>
    </header>
    <div class="container">
      <nuxt />
    </div>
    <footer class="footer">
      <p>sienidev</p>
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  }
}
</script>

<style>
html {
  /* font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif; */
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #1a0930;
}
body {
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.wrapper {
  position: relative;
  min-height: 100vh;
  max-height: 100vh;
  padding: 128px 0 64px;
}
.header {
  position: absolute;
  top: 0;
  height: 128px;
  width: 100%;
  background-color: #000;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  padding: 0 10px;
  height: 100%;
}
.footer {
  position: absolute;
  bottom: 0;
  height: 64px;
  width: 100%;
  background-color: #3d5e99;
}
</style>
