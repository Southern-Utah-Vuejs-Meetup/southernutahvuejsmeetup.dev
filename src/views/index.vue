<script setup lang="ts">
import { ref } from 'vue';

const title = ref("Welcome to the Southern Utah Vue.js Meetup");
const msg = ref(
  "Vue.js is a progressive JavaScript framework.<br>" +
  "This group is to get Vue developers together to talk about a variety of topics from the most basic to the more advanced.<br>" +
  "All skill levels are welcome, if you're interested in Vue we would love to have you join us!<br>" +
  "This group will be doing it's events online until further notice."
);
</script>

<template>
  <div class="home">
    <img
      class="logo"
      alt="Souther Utah Vue.js Meetup logo"
      src="../assets/suvm-logo.png"
    />
    <h1 class="title">{{ title }}</h1>
    <p v-html="msg"></p>
    <h2 class="coming-soon">Website coming soon!</h2>
  </div>
</template>

<style lang="scss" scoped>
h1.title {
  font-size: 2rem;
  margin: 0.67em 0;
}
p {
  font-size: 0.9em;
  line-height: 1.5em;
}
.coming-soon {
  margin-top: 80px;
}
</style>
