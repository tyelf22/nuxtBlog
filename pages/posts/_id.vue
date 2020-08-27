<template>
  <v-container class="postInfo">
    <p>Home > Posts > Post {{post.id}}</p>
      <v-img height="525px" :src=post.imageUrl></v-img>
      <h1>{{post.title}}</h1>
      <p> <span>{{post.tag}}</span> {{post.date}}</p>
      <p class="body">{{post.body}}</p>
  </v-container>
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
@import url("https://fonts.googleapis.com/css2?family=Martel+Sans:wght@400;700&display=swap");
.postInfo {
  font-family: "Martel Sans", sans-serif;
}

.postInfo p span {
  background: black;
  color: white;
  padding: 1px 15px;
  border-radius: 4px;
}

.postInfo h1 {
  margin-top: 20px;
  font-size: 50px;
}

.body {
  margin-top: 20px;
  font-size: 24px;
}


</style>