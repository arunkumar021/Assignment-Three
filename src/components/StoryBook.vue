<template>
    <div id="btn">
        <button @click="getPost">Load Story</button>
    </div>
    <br>
    <div class="row">
        <div class="column" id="pre1" style="background: #CCCCCC" >
          <h4 id="header1">Column 1</h4>
          <div v-for="(post,index) in posts[count]" :key="index">
              <p class="par1">{{post}}</p>
          </div>
        </div>
        <div class="column" id="pre2" style="background: #d3d3d3">
           <h4>Column 2</h4>
          <div v-for="post in posts[count+1]" :key="post">
              <p class="par1">{{post}}</p>
          </div>
        </div>
    </div>
    <div id="btns">
        <button @click="count-=2" id="btn2"> Prev Page </button>
        <button @click="count+=2" id="btn3"> Next Page  </button>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'StoryBook',
        data() {
            return {
                posts:[],
                count:0
            }
        }, 
        methods: {
            getPost() {
                axios.get('https://mocki.io/v1/71ef24f0-526e-4f50-81b0-384504a02728')
                 .then((response) => {
                      console.log(response.data)
                      let temp = response.data
                      temp = temp.story.split("\n\n")
                      console.log(temp);
                      let k = []
                      let a = []
                      let b = []
                      let c = []
                      let d = []
                      let e = []
                      for(let i=0; i<temp.length;i++) {
                        if(i>=0 && i<7) {
                            a.push(temp[i])
                        }
                        else if(i>=7 && i<14) {
                            b.push(temp[i])
                        }
                        else if(i>=14 && i<21) {
                            c.push(temp[i])
                      }
                        else if(i>=21 && i<28) {
                            d.push(temp[i])
                        }
                        else if(i>=28 && i<temp.length) {
                            e.push(temp[i])
                        }
                      }
                      k.push(a,b,c,d,e)
                      this.posts = k
                      console.log(k)
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
 .par1{
     margin-top: 30px;
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
 #pre2 {
         overflow-x: hidden;
            white-space: pre-wrap;
            word-wrap: break-word;
            font-size: 15px;
 }
 #btns{
     margin: 10px;
     color: red;
     text-align: center;
 }
 #btn2{
     margin: 5px;
 }

</style>