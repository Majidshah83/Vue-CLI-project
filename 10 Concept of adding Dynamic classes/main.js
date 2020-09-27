var myapp=new Vue({
el:'#view-app',
data:{
    isActive:true
},
methods:{
    toggleClasses:function(){
         this.isActive=!this.isActive;
    }
}
});