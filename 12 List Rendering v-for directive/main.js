var myapp=new Vue({
    el:'#view-app',
    data:{
     studentes:["ALI","MAJID","SHAH","KHAN"],
    techers:[
        {
            name:"Adnan shah",
            subject:"Computer",
            section:"S2",
            Block:"A1",
            location:{
                street:"islamabd I10",
                city:"kalam"
            }
        },
        {
            name:"Majid shah",
            subject:"Computer",
            section:"S3",
            Block:"B3",
            location:{
                street:"islamabd G8",
                city:"islamabd"
            }
        },
        {
            name:"ali shah",
            subject:"Computer",
            section:"S1",
            Block:"F1",
            location:{
                street:"islamabd F8",
                city:"mardan"
            }
        },
        {
            name:"Luqman",
            subject:"Computer",
            section:"S4",
            Block:"E8",
            location:{
                street:"islamabd E8",
                city:"karchi"
            }
        },
        
    ]
},
    methods:{

    }

});