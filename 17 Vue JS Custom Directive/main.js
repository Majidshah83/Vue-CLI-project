// Vue.directive('directive_name',{
//     directive_function
// });
// Vue.directive('custom-owt',{
// bind:function(el,binding,vnode){

// },
// update:function(obj1,boj2){

// },
// unbind:function()
// });
Vue.directive('owt',function(el,binding){
    // console.log(el);
    // console.log(binding);
    var dir_arg=binding.arg;
    if(dir_arg=="blue"){
        el.style.backgroundColor="blue";
        el.style.color="black";
        el.style.fontSize="20px";
        el.title="Title is updated";
       

    }
    if(dir_arg=="red"){
        el.style.backgroundColor="red";
        el.style.color="green";
        el.style.fontSize="20px";
        el.title="Title is updated";
        
    }

});

var app=new Vue({
el:'#view-app',
data:{
channelname:"online web toutor"
},
methods:{

},

});