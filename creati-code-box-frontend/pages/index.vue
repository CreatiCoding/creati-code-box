<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">creati-code-box-frontend UPDATED</h1>
      <h2 class="subtitle">creati code box frontend with nuxt</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
        <h1>{{data}}</h1>
      </div>
    </div>
  </section>
</template>


<script >
import AppLogo from "~/components/AppLogo.vue";
import axios from "axios";
export default {
  components: {
    AppLogo
  },
  data() {
    return {
      data: ""
    };
  },
  async created() {
    if (!process.client) return;
    this.data = window.location.protocol;
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    const port = 3000;
    axios.defaults.headers.common["code"] = process.env.CODE;
    const { data } = await axios.get(
      `${protocol}//${hostname}:${port}/test/hello`
    );
    this.data = `'${data}' is from server`;
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

