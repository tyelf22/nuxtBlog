<template>
  <v-container class="mainCont" fluid>
    <div class="wave one"></div>
    <div class="wave two"></div>
    <div class="wave three"></div>
    <div class="welcomeImage">
      <div class="title">
        <h1>Hello,</h1>
        <h3>
          I'm
          <span>Tyson Elfors</span> and this is my blog. Feel free to take a look around, enjoy your visit.
        </h3>
      </div>
      <div class="fixedImage"></div>
    </div>
    <div class="divider"></div>
    <div class="welcomeText container">
      <h3>All articles</h3>
      <h1>Here is a list of articles by Tyson:</h1>
      <div class="articles">
        <Cards/>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: "Tyson's Blog",
    };
  }
};
</script>

<style scoped>
.mainCont {
  display: flex;
  padding: 0;
  font-family: "Martel Sans", sans-serif;
  overflow-x: hidden;
  position: relative;
}

/* Waves */
.wave {
  position: absolute;
  top: -1000px;
  right: 50%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 1000px;
  height: auto;
  background-color: #EA178C;
  opacity: 0.6;
  border-radius: 40%;
  z-index: 99;
}
.wave.one {
  animation: wave 15s linear -1s infinite;
}
.wave.two {
  animation: wave 18s linear -1s infinite;
}
.wave.three {
  animation: wave 21s linear -1s infinite;
}
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.welcomeImage {
  width: 50%;
  height: 9vh;
}

.fixedImage {
  background-color: #1e1e1e; /* Used if the image is unavailable */
  height: 500px; /* You must set a specified height */
  width: 50%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}

.title {
  position: fixed;
  top: 20%;
  left: 20px;
  width: 45%;
  color: white;
  font-size: 30px;
}

.title h1 {
  font-size: 70px;
}

.title span {
  color: #ea178c;
}

.divider {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
  height: 10px;
  width: 40px;
  background: #ea178c;
}

.welcomeText {
  width: 50%;
  padding: 50px;
}

.welcomeText h1 {
  line-height: 1.5;
  margin-top: 30px;
}

.articles {
  display: flex;
  justify-content: center;
  overflow: hidden;
}



/* Media Query */
@media only screen and (max-width: 500px) {
  .title h3 {
    font-size: 28px;
  }
}



/* Media Query */
@media only screen and (max-width: 800px) {
.mainCont {
  display: block;

}

/* Waves */
.wave {
  top: -920px;
}

.welcomeImage {
  width: 100%;
  height: 100%;
}

.fixedImage {
  height: 500px;
  width: 100%;
  position: absolute;
}

.title {
  position: static;
  margin: 30px auto 0;
  width: 100%;
  padding: 0 50px;
}

.title h1 {
  font-size: 50px;
  position: relative;
}


.divider {
  position: absolute;
  top: 480px;
  left: 50%;
  transform: translate(-50%, 0);
  height: 40px;
  width: 10px;
  background: #ea178c;
}

.welcomeText {
  width: 100%;
  margin: 0 auto;
  margin-top: 140px;
  height: auto;
}
}

</style>

