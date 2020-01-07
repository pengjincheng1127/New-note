<template>
    <div>
        <p>请登录</p>
        用户名: <input v-model="uname" type="text"> <br>
        密码: <input v-model="pass" type="password">
        <button @click="login">登录</button>
    </div>
</template>

<script>
    export default {
        created() {
            this.path = this.$route.query.topath;
        },
        data(){
            return{
                unmae:'',
                pass:'',
                path:''
            }
        },
        methods: {
            login(){
                let ary = [
                    {
                        un:'冉德鹏',
                        pass:'123'
                    },
                    {
                        un:'尹德智',
                        pass:'123'
                    }
                ];
                const {uname,pass} = this;
                setTimeout(()=>{
                    if(ary.some(item=>item.un === uname && item.pass === pass)){
                        localStorage.setItem('login',uname);
                        this.$router.push({
                            path:this.path
                        });
                    }else{
                        localStorage.clear();
                    }
                },2000)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>