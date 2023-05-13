const input  = document.querySelector("input[type='password']")

const changeType = function(){
    if(input.type==='password'){
        input.type = 'text';
    }else{
        input.type = 'password';
    }
}