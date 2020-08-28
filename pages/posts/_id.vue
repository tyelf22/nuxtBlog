<template>
  <v-container class="postInfo">
    <v-btn to='/' class="ma-2" fab small outlined color="#EA178C"><arrowLeft class="largeIcon"/></v-btn>
    <p>Home > Posts > Post {{post.id}}</p>
      <v-img class="bannerImg" height="50vh" :src=post.imageUrl></v-img>
      <h1>{{post.title}}</h1>
      <p> <span>{{post.tag}}</span> {{post.date}}</p>
      <div class="postBody">
        <p v-html="post.bodyOne">{{post.bodyOne}}</p>
        <v-img v-if="post.imageUrlInPost" contain :src=post.imageUrlInPost ></v-img>
        <p v-if="post.bodyTwo" v-html="post.bodyTwo" >{{post.bodyTwo}}</p>
      </div>
      
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

.largeIcon {
  font-size: 30px;
  margin-bottom: 6px;
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

.postBody {
  margin-top: 20px;
  font-size: 24px;
  padding: 0 200px;
}


</style>