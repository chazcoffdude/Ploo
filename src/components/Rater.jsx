import React, { createElement } from "react";

const RateBar = (rating) =>{

let rbar = createElement("div");

for(let i = rating; i > 0; i-=1){

if(i < 1){
rbar = rbar + '*';
}else{
rbar = rbar + 'o';
}

console.log(i)
}
return rbar 


}


export default RateBar; 