var myapp=new Vue({
    el:"#view-app",
    data:{
        counter:0,
    },
    methods:{
        incrment: function(){
            this.counter++;
        },
        submitclick:function(){
            console.log("keys");
        },
        parentclass:function (){
            console.log("parent");
        },
        btnclick: function (){
            console.log("child");
        }
    }

});