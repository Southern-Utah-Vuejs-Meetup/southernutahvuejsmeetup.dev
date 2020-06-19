<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ title }}</h1>
    <p v-html="msg"></p>
    <h2 class="coming-soon">Website coming soon!</h2>
  </div>
</template>

<script>
export default {
  name: "Home",

  data: () => ({
    title: "Welcome to the Southern Utah Vue.js Meetup",
    msg:
      "Vue.js is a progressive JavaScript framework.<br>" +
      "This group is to get Vue developers together to talk about a variety of topics from the most basic to the more advanced.<br>" +
      "All skill levels are welcome, if you're interested in Vue we would love to have you join us!<br>" +
      "This group will be doing it's events online until further notice."
  })
};
</script>

<style lang="scss">
.coming-soon {
  margin-top: 80px;
}
</style>
