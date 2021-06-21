<template>
    <div>
        <ul>
            <BlogItem 
            v-bind:edit="edit"
            v-for="blog in blogs"
            :key="blog._id"
            v-bind:blog="blog"
            v-on:remove-blog="removeblog(blog._id)"
            
            />
            
        </ul>
    </div>
</template>
<script>
import BlogItem from './BlogItem';
export default {
    props:['blogs'],
    components:{
        BlogItem
    },
    methods:{
        removeblog(_id){
            
            fetch("http://localhost:4000/app/blog-message/"+_id, {
                method: 'DELETE'
            }).then(() => {
                console.log('removed');
            }).catch(err => {
                console.error(err)
            });
            this.$emit('remove-blog',_id)
        }
    }
}
</script>
