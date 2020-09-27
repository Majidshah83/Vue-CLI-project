
var wemsg=new Vue({
el:"#our-app",
data:{
    msg:"Welcome here",
    msg2:"In first class",
},
methods:{
    msg23: function(time1){
        return "Good"+" "+time1;
    },
    welcome:function (p2){
        return "i am running with rashid"+" "+p2;
    },
    valueacsses:function()
    {
        return this.msg+" "+this.msg2;
    },
    run:function(x,y,z){
      return x+" "+y+" "+z;
    }
}
});