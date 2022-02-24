<template>
    <div id="btn">
        <button @click="getPost">Fetch Data</button>
    </div>
    <div id="btn1">
        <button @click="fillStory">Load Story</button>
    </div>
    <br>
    <div class="row">
        <div class="column" id="pre1" style="background: #CCCCCC">
          <h4>Column 1</h4>
          <p>{{str}}</p>
        </div>
        <div class="column" style="background: #d3d3d3">
           <h4>Column 2</h4>
           <p>{{str1}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import FetchMixins from '../mixins/storyPost'
    export default {
        name:'StoryBook',
        data() {
            return {
                posts:''
            }
        },
        mixins: [FetchMixins],    
        methods: {
            getPost() {
                axios.get('https://mocki.io/v1/71ef24f0-526e-4f50-81b0-384504a02728')
                 .then((response) => {
                      console.log(response.data)
                      this.posts = response.data
                 })
                 .catch((error) => {
                     console.log('Error while fetching ' , error)
                 })
            }
        }
    }
</script>

<style scoped>
 .row {
     display: grid;
     grid-template-columns: 300px 300px;
     height: 400px;
     width: 50%;
     margin: auto;
 }
 .column{
     height: 400px;
 }
 #btn {
     text-align: center;
     margin: 30px;
 }
 #btn1 {
     text-align: center;
     margin: 30px;
 }
 #pre1 {
         overflow-x: hidden;
            white-space: pre-wrap;
            word-wrap: break-word;
            font-size: 15px;

 }

</style>