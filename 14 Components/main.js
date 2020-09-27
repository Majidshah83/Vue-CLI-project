var data={
    name:"Majid shah",
    author:"zafar merza"
}
Vue.component("owt",{   //compont name owt
    template:"<div><p>This is called online web tutor mark,</p><h4>Name:{{ name }},author:{{ author }}, Method running:{{ method1()}}, computed:{{methodss}}</h4><button @click='firebt'>click me</button></div>",//in view component section we pass data properties
    data:function(){
        return {
            name:"Majid shah",
            author:"zafar merza"
        } 
    },
    methods:{
        method1:function(){
            return "this is vue componetes";
        },
        firebt:function(){
            return this.name="Ali shah";
        }
    },
    computed:{
        methodss:function(){
            return "this is simple mesg";
        }
    }
});

var myapp1=new Vue({
    el:'#view-app1',
    data:{

      
    },
    methods:{

    }
});

var myapp2=new Vue({
    el:'#view-app2',
    data:{

    },
    methods:{
        
    }
});