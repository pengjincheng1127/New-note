<template>
  <div>
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo"
       placeholder="请输入内容"
        v-model.trim="val"
       @keyup.13="ent" />
    </header>
  </div>
</template>

<script>
export default {
    data(){
        return{
            val:'',
        }
    },
    methods: {
        ent(){
            this.$emit('cv',this.val);
            this.val = '';
        }
    },
};
</script>

<style lang="scss" scoped>
</style>