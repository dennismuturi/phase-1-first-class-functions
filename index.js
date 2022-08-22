function myFunc(){
    return "Hello,I'm a Callback Function";
}

function func(){
    return "Hello,I'm a Callback Function";
}

function receivesAFunction(func){
   console.log(func());
}

function returnsANamedFunction(){
    myFunc();
}

function returnsAnAnonymousFunction() {
    return function(){
        
    };
}