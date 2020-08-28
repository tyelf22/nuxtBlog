<template>
  <div class="allCards">
    <v-card v-for="post in posts" :key="post.id" class="card" max-width="344">
      <v-img :src=post.imageUrl height="200px"></v-img>

      <v-card-title>{{post.title}}</v-card-title>

      <v-card-subtitle>{{post.subtitle}}</v-card-subtitle>

      <v-card-actions>
        <v-btn :to="`/posts/${post.id}`" text color="#EA178C">Read</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import posts from '../posts'
export default {
    data() {
        return {
            posts
        }
    }
};
</script>

<style>
.allCards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.card{
    margin: 15px 0.8%;
}
</style>