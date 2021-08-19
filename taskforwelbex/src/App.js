import Stash from "./Components/Stash/Stash";
import "./App.css";
import React, { useState } from "react";
import RandomDate from "./Components/RandomDate";
import RandomName from "./Components/RandomName";
import RandomDistance from "./Components/RandomDistance";
import RandomNumb from "./Components/RandomNumb";

function App() {
  const [array1, setArray1] = useState([
    {
      date: RandomDate(),
      name: RandomName(),
      value: RandomNumb(),
      distance: RandomDistance(),
    },
    {
      date: RandomDate(),
      name: RandomName(),
      value: RandomNumb(),
      distance: RandomDistance(),
    },
    {
      date: RandomDate(),
      name: RandomName(),
      value: RandomNumb(),
      distance: RandomDistance(),
    },
    {
      date: RandomDate(),
      name: RandomName(),
      value: RandomNumb(),
      distance: RandomDistance(),
    },
    {
      date: RandomDate(),
      name: RandomName(),
      value: RandomNumb(),
      distance: RandomDistance(),
    },
  ]);
  const [state, setState] = useState(1);
  const test = () => {
    setState(+(state + 1));
  };

  function Filter1() {
    let sel = document.getElementById("sel");
    let tempArray = array1.concat();

    const FiltName = () => {
      tempArray.sort((a, b) => (a.name > b.name ? 1 : -1));
      console.log(sel.action)
      return setArray1(tempArray)
    };
    const FiltNumb = () => {
      tempArray.sort((a, b) => (a.value > b.value ? 1 : -1));
      return setArray1(tempArray);
    };
    const FiltDistance = () => {
      tempArray.sort((a, b) => (a.distance > b.distance ? 1 : -1));
      return setArray1(tempArray);
    };

    if (sel.value === "name") return FiltName()
    else if (sel.value === "numb") return FiltNumb();
    else if (sel.value === "distance") return FiltDistance();
  }

  // function Filt() {
  //   debugger
  //   return (
  //     <>
        
        
  //     </>
  //   );
  // }

  return (
    <>
      <div className="filt">
        <div>Фильтры</div>
        <form>
          <select id="sel" onChange={Filter1}>
            <option>Choose</option>
            <option value="name">Name</option>
            <option value="numb">Amount</option>
            <option value="distance">Расстояние</option>
          </select>
        </form>
        <p onClick={test}>{`Твой счетчик ${state}`}</p>
      </div>
      <table className="tab">
        <thead>
          <tr>
            <th>Дата</th>
            <th>Название</th>
            <th>Количество</th>
            <th>Расстояние</th>
          </tr>
        </thead>
        <tbody>{Stash(array1)}</tbody>
      </table>
    </>
  );
}

export default App;
