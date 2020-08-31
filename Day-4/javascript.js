$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            firstname:{
                required:true,
                minlenght:5
                
            },
            sname:{
                required:true,
                minlenght:4,

        },
        email:{
            required:true,
            email:true,

        },    
        password:{
            required:true,
                minlenght:8, 
        },
        day:{
            required:true, 
        },
        month:{
            required:true,
        },
        year:{
            required:true,
        },
        sex:{
            required:true,
        }

    }     
    
})
    })