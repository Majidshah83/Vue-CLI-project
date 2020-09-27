var myapp=new Vue({
    el:'#view-app',
   data:{

    },
    methods:{
        btnsubmit:function(){
            // console.log("click me");
            console.log(this.$refs);
            console.log("Name:"+this.$refs.textname.value);
            console.log("Email:"+this.$refs.textemail.value);
            console.log("Paraghraph:"+this.$refs.para.innerHTML);
          
           
        }
    },
    
});