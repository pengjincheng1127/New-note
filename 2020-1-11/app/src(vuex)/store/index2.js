const state = {
    val:'vue真的难顶'
}

const mutations = {
    changeval(state,newV){
        state.val = newV;
    },
    aaa(){
        console.log('index2的aaa')
    }
}
const getters = {
    revsers(){
        return state.val.split('').reverse().join('')
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    getters
}