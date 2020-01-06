<template>
  <li>
    <div class="view">
      <input 
      class="toggle" 
      type="checkbox" 
      />
      <label 
      @dblclick="replace(val,key)"
      >{{val.txt}}</label>
      <button 
      class="destroy" 
      @click="rm(val.id)"></button>
    </div>
    <input
      class="edit"
      ref="edit"
      :value="val.txt"
      @blur="off(val,$event)"
      @keyup.esc="onoff_FN(val.id,false)"
    />
  </li>
</template>

<script>
export default {
    props:{
        pv:{
            type:Object,
            required:true
        }
    },
    data(){
        return{
            val:Object.assign({},this.pv)
        }
    },
    methods: {
        checkedChange(ev){
            const {checked} = ev.target;
            const {id} = this.val;
            this.val.checked =  checked;
            this.$emit('cc',id,checked)
        }
    },
    //  replace({id,txt},num){
    //         this.onoff_FN(id,true);
    //         this.$refs.edit[num].value = txt;
    //        Vue.nextTick( ()=> {
    //         this.$refs.edit[num].focus();  
    //     })
    //     },

   
};
</script>

<style lang="scss" scoped>
</style>