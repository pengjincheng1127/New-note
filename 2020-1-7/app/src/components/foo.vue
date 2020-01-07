<template>
    <div>
        foo
    </div>
</template>

<script>
export default {
    created(){
        console.log(1,this.$route.params);
    },
    beforeRouteUpdate (to, from, next) {
        console.log('路由切换')
        next();
    },
    beforeRouteLeave (to, from, next) {
       let b = confirm('走？');
        if (b) {
            next()
        } else {
            next(false)
        }
    }
}
</script>

<style scoped>

</style>