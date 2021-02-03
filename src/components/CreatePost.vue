<template>
    <div class="create-post">
            <h2>Создать новый пост</h2>
    <form class="create-post__form" @submit="onSubmit">
        <label for="create-post__title">Название поста:</label>
        <input v-model="title" type="text" class="create-post__title" required>
        <label for="create-post__text">Текст поста:</label>
        <textarea v-model="text" class="create-post__text" id="" cols="30" rows="10" required></textarea>
        <button class="btn btn-primary" type="submit">Создать пост</button>
    </form>
    </div>
</template>

<script>
export default {
    name: "CreatePost",
    data() {
        return {
            title: '',
            text: '',
        }
    },
    methods: {
        onSubmit: async function(event) {
            event.preventDefault();
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: this.title ,
                    body: this.text,
                    userId: Math.floor(Math.random()),
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                })
            const data = await response.json();
            console.log(data);
            this.title = '';
            this.text = '';
        },
    }
}
</script>


<style lang="scss">
.create-post {
    &__form {
        display: flex;
        flex-direction: column;
        border: 1px solid black;
        padding: 20px;
        max-width: 400px;
    }
    &__title, &__text {
        margin-bottom: 20px;
    }
}
</style>