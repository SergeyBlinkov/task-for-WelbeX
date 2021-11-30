import Stash from "./Components/Stash/Stash";
import "./App.css";
import React, { useState } from "react";
import Data from './Components/Data';
import Filter1 from './Components/Filter1/Filter1'

function App() {
  const [array1, setArray1] = useState(Data());
  const [state, setState] = useState(1);
  
  const test = () => {
    setState(+(state + 1));
  };


  return (
    <>
      <div className="filt">
        <div>Фильтры</div>
        {<Filter1 array={array1} fu={setArray1} />}
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
