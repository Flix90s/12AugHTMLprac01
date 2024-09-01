//pending, fullfilled, rejected  states in promise. asynchronose 
function flippingACoin(){
    return new Promise((resolve, reject)=>{
        const val1 = Math.round(Math.random() * 1);
        val1 ? resolve('Heads!!') : reject('Tails!!')
    })
}
async function result(){
    try {
        const result = await flippingACoin();
        console.log(result);        
    } catch (error) {
       console.log("error:-",error);       
    }
}
result();
result();
result();
result();
result();