var myapp = new Vue({
    el: '#view-app',
    data: {
        firstname: "",
        lastname: "",
        meter: "",
        math:0,
        english:0,
        computer:0

    },
    methods: {
        rume: function () {
            return "I am method"
        }
    },
    computed: {
        getFulllname: function () {
            return this.firstname + " " + this.lastname;
        },
        convetMeterto: function () {
            return this.meter * 100;
        },
        totalMarks: function () {
            return parseInt(this.math) + parseInt(this.computer)+parseInt(this.english);
        }
    }
});