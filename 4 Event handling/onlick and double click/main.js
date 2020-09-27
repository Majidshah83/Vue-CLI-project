var myapp=new Vue({
el:'#view-app',
data:{
    counter:0
},
methods:{
    increment:function(pp1){
      this.counter +=pp1;
    },
    decrement:function(ppp2){
         this.counter -=ppp2;
    },
    
}
});