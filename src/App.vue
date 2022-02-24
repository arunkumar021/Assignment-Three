<template>
  <button @click="activeTab = 'StoryBook'">Page-1</button>
  <button @click="activeTab = 'PageTwo'">Page-2</button>
  <button @click="activeTab = 'PageThree'">Page-3</button>
  <StoryBook v-if="activeTab === 'StoryBook'"/>
  <PageTwo v-if="activeTab === 'PageTwo'"/>
  <PageThree v-if="activeTab === 'PageThree'"/>
</template>

<script>

import StoryBook from './components/StoryBook.vue'
import PageThree from './components/PageThree.vue'
import PageTwo from './components/PageTwo.vue'
export default {
  name: 'App',
  data() {
     return {
       activeTab:'StoryBook',
     }
  },
  components: {
    StoryBook,
    PageTwo,
    PageThree,
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
