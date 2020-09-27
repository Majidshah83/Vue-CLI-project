var myapp=new Vue({
el:'#view-app',
data:{
    fristname:"",
    lastname:"",
    channelname:"owt"

},
methods:{
    

},
computed:{
    // fullname:function(){
    //     return this.fristname+" "+this.lastname;
    // }
    fullname:{
        get:function() //geter function of fullname
        {
            return this.fristname+" "+this.lastname;
        },
        set:function(){
            return this.channelname="owt updated";
        }
    }
},

});