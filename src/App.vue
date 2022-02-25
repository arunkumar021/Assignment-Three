<template>
  <StoryBook/>
</template>

<script>

import StoryBook from './components/StoryBook.vue'
export default {
  name: 'App',
  data() {
     return {
       activeTab:'StoryBook',
     }
  },
  components: {
    StoryBook,

  }
}
</script>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
