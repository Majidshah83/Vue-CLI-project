var myapp1=new Vue({
    el:'#view-app1',
    data:{
        titile:"this title",
        author:"majid shah"

    },
    methods:{
        secondapp:function(){
            return "this is a second instance";
        }
    },
    computed:{
        fullname:function(){
        return this.author;
        }
    }
});

var myapp2=new Vue({
    el:'#view-app2',
    data:{
        secondTitle:"this is a second title",
        titile:myapp1.titile
    },
    methods:{
        secondapp:function(){
            return "this is a first instance";
        },
        thirdapp:function(){
         return myapp1.secondapp();
        },
        accesscomputed:function(){
            return myapp1.fullname;
        }

    }
});