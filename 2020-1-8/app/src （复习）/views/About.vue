<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/b/1" tag="button">去🐍</router-link>
    <router-link :to="{name:'bb',params:{id:'2'}}" tag="button">去🐖</router-link>
  <router-view></router-view>
  </div>
</template>
