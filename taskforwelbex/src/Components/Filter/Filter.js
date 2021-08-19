 import React from 'react'
 



 export default function Filter(props) {
   
     let tempArray = props.array.concat();
    

   
    function Filt () {
        
        let data = document.getElementById('sel').value
        
        const FiltName = () => {
      tempArray.sort((a, b) => (a.name > b.name ? 1 : -1));
     
      return  props.fu(tempArray)
        }
    const FiltNumb = () => {
      tempArray.sort((a, b) => (a.value > b.value ? 1 : -1));
      return props.fu(tempArray)
    };
    const FiltDistance = () => {
      tempArray.sort((a, b) => (a.distance > b.distance ? 1 : -1));
      return props.fu(tempArray)
    };

    if (data === "name") return FiltName()
    else if (data === "numb") return FiltNumb();
    else if (data === "distance") return FiltDistance();
    }
   

    
    
    return <form  >
    <select id="sel" onChange={Filt} defaultValue='1'>
      <option value='1' disabled>Choose</option>
      <option value="name">Name</option>
      <option value="numb">Amount</option>
      <option value="distance">Расстояние</option>
    </select>
  </form>
    
  }
