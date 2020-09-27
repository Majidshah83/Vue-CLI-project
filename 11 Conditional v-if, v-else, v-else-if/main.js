var myapp=new Vue({
    el:'#view-app',
    data:{
        issActive:true,
        conunt:0
    },
    methods:{
        inctremt:function(){
      this.conunt++;
        }
    }
});