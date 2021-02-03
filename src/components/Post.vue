<template>
<div class="post">
    <h2 class="post__title">{{post.title}}</h2>
    <p class="post__text">{{post.body}}</p>
    <router-link :to="{name: 'edit', params: { id: post.id, text: post.body, title: post.title, userId: post.userId }}" class="btn btn-success edit-post-link">Редактировать пост</router-link>
    <button class="btn btn-danger delete-post" @click="deletePost(post.id)">Удалить пост</button>
</div>
</template>

<script>
export default {
    name: "Post",
    props: ['post'],
    methods:{
        deletePost(id) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE',
            });
            this.$emit('delete-post',id);
        },
    }
}
</script>

<style lang="scss">
.post {
    border: 1px dashed black;
    padding: 20px;
    max-width: 400px;
    margin-right: 20px;
    margin-bottom: 20px;
    word-wrap:break-word; 
}
.delete-post {
    margin-left: 20px;
}
</style>