<template>
  <div >
    <h1>Blog application</h1>
    <hr>
    <addBlog @add-blog="addBlog"/>
    <Loader v-if="loading"/>
    <BlogList  v-else-if="blogs.length" v-bind:blogs="blogs"  @remove-blog="removeBlog"/>
    <p v-else>No message...</p>
    <Edit v-if="edit"/>
  </div>
</template>
<script>
import BlogList from '../BlogList'
import addBlog from '../AddBlog'
import Loader from '../Loader/Loader'
import Edit from './Edit'
export default {
  data(){
        return {
            blogs:[],
            loading:true,
            edit:false
        }
  },
  computed:{
  },
  mounted(){
      fetch('http://localhost:4000/app/getBlogMessage')
      .then(response => response.json())
      .then(json=>{
          this.blogs=json.message
          console.log(json)
          this.loading = false
      })
      
  },
  components: {
   BlogList,
   addBlog,
   Loader,
   Edit
  },
  methods:{
    removeBlog(_id){
      this.blogs = this.blogs.filter(t=>t._id !==_id)
    },
    addBlog(blogs){
      this.blogs.push(blogs)
    },
  }
}
</script>

