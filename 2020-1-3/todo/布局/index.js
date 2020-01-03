new Vue({
    el:".todoapp",
    data:{
        val:'',
        all:false,
        ary:[
            {
                id:0,
                txt:'哈哈',
                checked:false,
                onoff:false
            },
            {
                id:1,
                txt:'呵呵',
                checked:true,
                onoff:false
            }
        ]
    
    },
    methods: {
        //回车发送
        add(){
            if(!this.val)return;
            // console.log(this.ary);
            this.ary.unshift({
                id:+new Date,
                txt:this.val,
                checked:false,
                onoff:false
            })
            this.val = ''
            
        },
        rm(id){
            this.ary = this.ary.filter(e=>e.id !== id)
        },
        changeAll(ev){
            this.ary = this.ary.map(e=>{
                e.checked = ev.target.checked;
                return e;
            });
        },
        replace({id,txt},num){
            this.onoff_FN(id,true);
            this.$refs.edit[num].value = txt;
            /*
            改变数据之后一个元素会刷新，刷新之后就看不见select
            */
           Vue.nextTick( ()=> {
            this.$refs.edit[num].focus();  
        })
        },
        off({id,txt,onoff},ev){
            //onoff为false说明已经关闭了修改框，还有可能是安了esc
            if(!onoff)return;
            const {value} = ev.target;
            //有内容并且内容不一样，这个时候需要修改数据
            if(value && txt !=value){
                this.ary.forEach(e=>{
                    if(e.id === id){
                        e.txt = value;
                    }
                })
            }
            this.onoff_FN(id,false)
        },
        onoff_FN(id,b){
            this.ary.forEach(e=>{
                if(e.id === id){
                    e.onoff = b;
                }
            })
        }

    },
    filters:{
        unchecked(val){
            return val.filter(e=>!e.checked).length;
        }
    },
})