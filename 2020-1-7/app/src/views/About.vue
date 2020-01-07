<template>
  <div class="about">
    <router-link to="/">Home</router-link>
    <router-link to="/about/dd/id/1">About1</router-link>
    <router-link to="/about/ddd/id/2">About2</router-link>
    <router-link to="/public">public</router-link>
    <h1>This is an about page</h1>
    <div>
      用户：{{$route.params.uname}}
      <h2 v-if="$route.params.id == 1">🐍皮</h2>
      <p v-if="$route.params.id == 2">🐖皮</p>
    </div>
    {{$route.params.id}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0
    };
  },
  created() {
    this.num = 1;
    console.log("created");
    if (this.$route.params.id === "1") {
      setTimeout(() => {
        console.log("请求1");
      }, 1000);
    } else if (this.$route.params.id === "2") {
      setTimeout(() => {
        console.log("请求二");
      }, 1000);
    }
  },
  watch: {
    $route(to, from) {
      if (to.params.id === "1") {
        setTimeout(() => {
          console.log("1");
        }, 1000);
      } else if (to.params.id === "2") {
        setTimeout(() => {
          console.log(2);
        }, 1000);
      }
    }
  }
};
</script>
