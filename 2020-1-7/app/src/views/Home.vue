<template>
 <div>
   <div id="nav">
     {{$route.params.un}}🐍
     <router-link tag="button" to="/about/dd/id/1">About1</router-link>
    <router-link tag="button" to="/about/ddd/id/2">About2</router-link>
    <router-link tag="button" to="/public">public</router-link>
   </div>
 </div>
</template>

<script>
export default {
  name: 'home',
 data(){
   return{
     n:'xxxx'
   }
 }
}
</script>

