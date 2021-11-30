import RandomDate from "./RandomDate";
import RandomName from "./RandomName";
import RandomDistance from "./RandomDistance";
import RandomNumb from "./RandomNumb"

const getFill = () =>{
    let array = []
    for (let i = 0; i < 25; i++) {
      const obj1 = {date: RandomDate(), name: RandomName(),
            value: RandomNumb(), distance: RandomDistance()}
       
             array.push( obj1 )
    }
    return array
  }

  const Fill = getFill()

export default function Data() {
   
     
   return Fill
}
