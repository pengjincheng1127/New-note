<template>
    <div>
        {{$route.params.id}}
        <div>我是🐍路由（公共的）</div>
        <hr>

        <img v-if="$route.params.id==1" src="../../assets/1.jpg">
        <img v-else-if="$route.params.id==2" src="../../assets/2.jpg">
    </div>
</template>

<script>
    export default {
        name:'bb',
        created() {
            console.log('组件加载');
        },
        //复用组件使用beforeRouteUpdate去进行监听
        beforeUpdate(to,from,next) {
            console.log('👁',to.params.id);
            next()
        },
        beforeRouteLeave (to, from, next) {
            const b = confirm('这就溜了?')
            if(b){
                next();
            }else{
                next(false);
            }
        },
        data(){
            return{
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>