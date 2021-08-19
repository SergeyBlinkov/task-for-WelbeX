import Stash from "./Components/Stash/Stash";
import "./App.css";
import React, { useState } from "react";
import data from './Components/data';

import Filter from './Components/Filter/Filter'

function App() {
  const [array1, setArray1] = useState(data());
  const [state, setState] = useState(1);
  
  const test = () => {
    setState(+(state + 1));
  };
console.log(array1)

  return (
    <>
      <div className="filt">
        <div>Фильтры</div>
        {<Filter array={array1} fu={setArray1} />}
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
        <tbody><Stash array={array1} /></tbody>
      </table>
    </>
  );
}

export default App;
