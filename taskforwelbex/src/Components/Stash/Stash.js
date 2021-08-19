import React from "react";




export default function Stash(props) {
  
let array = props.array.concat()
 
  

  return array.map((p) => {
    
      
    
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
