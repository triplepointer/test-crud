<template>
    <div class="edit-post">
    <form class="edit-post__form" @submit="onSubmit">
        <label for="edit-post__title">Название поста:</label>
        <input v-model="title" type="text" class="edit-post__title" required>
        <label for="edit-post__text">Текст поста:</label>
        <textarea v-model="text" class="edit-post__text" id="" cols="30" rows="10" required></textarea>
        <button class="btn btn-primary" type="submit">Сохранить изменения</button>
    </form>
    </div>
</template>

<script>
export default {
    name: "EditPost",
    data() {
        return {
            title: this.$route.params.title ?? '',
            text: this.$route.params.text ?? '',
            id: this.$route.params.id ?? '',
            userId: this.$route.params.userId ?? ''
        }
    },
    methods: {
        onSubmit: async function(event) {
            event.preventDefault();
            const id = this.id;
            const title = this.title;
            const body = this.text;
            const userId = this.userId;
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    id: id,
                    title: title,
                    body: body,
                    userId: userId,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const data = await response.json();
            console.log(data);
            // this.title = '';
            // this.text = '';
            this.$router.go(-1);
    }
    }
}
</script>


<style lang="scss">
.edit-post {
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