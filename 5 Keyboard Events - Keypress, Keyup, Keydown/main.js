var app=new Vue({
el:'#view-app',
data:{

},
methods:{
    keypressfunction: function(){
        console.log("key press");
    },
    keyupfunction:function(){
        console.log("key up");
    },
    keydownfunction: function(event){
        console.log(event);
    }
}

});