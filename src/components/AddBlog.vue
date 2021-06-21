<template>

    <form >
        <input type="text" v-model="message">
        <button v-on:click="onSubmit" type="submit">Create</button>
    </form>
</template>
<script>
export default {
    data(){
        return{
            message:''
        }
    },
    methods:{
        onSubmit(){
            if(this.message.trim()){
                console.log(this.title)
                const newTodo = {
                   
                    message:this.message,
                }
                console.log(newTodo)
                 fetch("http://localhost:4000/app/blog-message",{
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body:JSON.stringify(newTodo)
                    })
                    .then(res=>{
                            res.json()
                        }
                    )
                this.$emit('add-blog',newTodo)
                this.message = ''
                
            }
        }
    }
}
</script>