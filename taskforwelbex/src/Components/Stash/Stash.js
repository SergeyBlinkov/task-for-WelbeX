import React from "react";

const gg = () =>{
  
}

export default function Stash(array1) {

// array1 = []

  // for (let i = 0; i < 5; i++) {
   
  //   const obj1 = {date: RandomDate(), name: RandomName(),
  //     value: RandomNumb(), distance: RandomDistance()}
 
  //      array1.push( obj1 );
  //   }
  

  return array1.map((p) => {
    
      
    
    return (
      <tr key={p.name}>
        <td>{p.date}</td>
        <td>{p.name}</td>
        <td>{p.value}</td>
        <td>{p.distance}</td>
      </tr>
    );
  });
}
