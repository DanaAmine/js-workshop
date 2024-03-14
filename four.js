

function fetch(callback){

    setTimeout( ()=>{
    const data = "amine" ;
    
    callback(data);
    },2000) 
}


fetch((data) =>{
    console.log(data); 
});
