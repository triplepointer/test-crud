<template>
  <div>
    <h2>Посты</h2>
    <div class="posts">
    <Post v-bind:key="post.id" v-for="post in posts" v-on:delete-post="deletePost" v-bind:post="post" />
  </div>
  </div>
</template>

<script>
import Post from '@/components/Post'

export default {
  name: "Posts",
  components: {
    Post
  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => this.posts = data)
  },
  methods: {
    deletePost(id) {
      this.posts = this.posts.filter(post => post.id !== id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.posts {
  display: flex;
  flex-wrap: wrap;
}
</style>
