<template>
  <div>
    <p>请登录</p>用户名:
    <input v-model="uname" type="text" />
    密码:
    <input v-model="pass" type="password" />
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname: "",
      pass: ""
    };
  },
  methods: {
    login() {
      const { uname, pass } = this;
      setTimeout(() => {
        if (uname === "xxx" && pass === "123") {
          //跳转
          // this.$router.push('/');
          // this.$router.push({
          //     path:'/',   //  ?name=xxx
          //     query:{
          //         name:'xxx'
          //     }
          // });

          this.$router.push({
            name: "home",
            params: {
              un: "xxx"
            }
          });

          //替换
          // this.$router.replace({
          //     path:'/',   //  ?name=xxx
          //     // name:'home',
          //     // params:{
          //     //     name:'xxx'   // /name/xxx
          //     // }
          //     // query:{
          //     //     name:'xxx'
          //     // }
          // });
        }
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>