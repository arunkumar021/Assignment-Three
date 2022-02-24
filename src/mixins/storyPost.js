export default{
data() {
    return {
        posts:'',
        str:'',
        str1:'',
        temp1:'',
    }
},
   methods: {
    fillStory() {
    let temp = this.posts.story
    console.log(temp)         
    this.str = temp.substr(0 , 450)
    temp = temp.substr(450 , temp.length)
    this.str1 = temp.substr(0 , 500)
    temp = temp.substr(500 , temp.length)
    this.temp1 = temp
    // console.log(this.temp1)
   } ,
  fillSecond() {
      console.log(this.temp1)
      let k = this.temp1
    this.str = k.substr(0 , 450)
    k = k.substr(450 , k.length)
    this.str1 = k.substr(0 , 500)
    k = k.substr(500 , k.length)
    this.temp1 = k
  },
},
}
