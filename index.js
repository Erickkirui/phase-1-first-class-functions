function receivesAFunction (callback){
   callback();

}

function myCallback(){
    console.log(" what is happens")
}
//receivesAFunction(myCallback)


function returnsANamedFunction(){

    function namedFunction(){
        return "still not sure what is happening"
    }
    return namedFunction
}
 

const myFunction = returnsANamedFunction();

//console.log(myFunction());


function returnsAnAnonymousFunction () {
    function anonymous(){

        return "starting to get there"
    }

    return anonymous;

}

const thisFunction  =  returnsAnAnonymousFunction();


console.log(thisFunction);





