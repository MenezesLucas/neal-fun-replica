<template>
  <div id="app">
    <div class="container">
      <Top/>
      <Fortune/>
      <ContentProduct/>
      <Bottom/>
    </div>
  </div>
</template>

<script>
import Top from './components/Top'
import Fortune from './components/Fortune'
import ContentProduct from './components/ContentProduct'
import Bottom from './components/Bottom'

export default {
  name: 'App',
  components: {
    Top, Fortune, ContentProduct, Bottom
  }
}
</script>

<style src="./assets/scss/global.scss" lang="scss"></style>
