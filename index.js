function myFunc(){
    return "Hello,I'm a Callback Function";
}

function func(){
    return "Hello,I'm a Callback Function";
}

function receivesAFunction(func){
    func();
}

function returnsANamedFunction(){
    myFunc();
}

function returnsANamedFunction(){
    return function(){
        
    };
}