<template>
  <div>
      <h1>{{post.title}}</h1>
      <h2>{{post.body}}</h2>
  </div>
</template>

<script>
import posts from '../../posts'
export default {
  data() {
    return {
      posts
    }

  },
  computed: {
    post() {
      let id = this.$route.params.id
      return this.posts.find(post => {
        return post.id == id
      })
    }
  }

}
</script>

<style>

</style>