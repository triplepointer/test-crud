<template>
  <div class="app">
    <h1 class="app__header">Тестовое приложение</h1>
    <nav>
      <router-link :to="{name: 'posts'}" class="btn btn-warning edit-post-link">Посты</router-link>
      <router-link :to="{name: 'create'}" class="btn btn-warning edit-post-link">Создать Пост</router-link>
    </nav>
              <br/>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App"
}
</script>

<style lang="scss">
.app {
  padding: 20px;
}
.btn-warning {
  margin-right: 20px;
}
</style>
