import React from "react";
import Data from "../Data";

export default function Filter1(props) {
  let tempArray = Data().concat();

  function Filt() {
    let sel1 = document.getElementById("sel").value;
    let sel = document.getElementById("sel2").value;
    const inpt = document.getElementById("inpt").value;

    const FiltName = () => {
      let text = [];
      const tempArray1 = tempArray.sort((a, b) => (a.name > b.name ? 1 : -1));
      if (sel === "=" && sel1 === "name" && inpt.length > 0) {
        const result = tempArray1.filter((el) => {
          return el.name.toLowerCase().includes(inpt);
        });

        return props.fu(result);
      }
      if ((sel === "nothing" && sel1 === "name") || inpt.length < 1) {
        return props.fu(tempArray1);
      }
    };

    const FiltNumb = () => {
      const tempArray1 = tempArray.sort((a, b) => (a.value > b.value ? 1 : -1));
      if (sel === ">" && sel1 === "numb") {
        const result = tempArray1.filter((el) => {
          return +el.value >= +inpt;
        });
        return props.fu(result);
      } else if (sel === "<" && sel1 === "numb") {
        const result = tempArray1.filter((el) => {
          return +el.value < +inpt;
        });
        return props.fu(result);
      }

      if (sel === "=" && sel1 === "numb") {
        const result = tempArray1.filter((el) => {
          return +el.value === +inpt;
        });

        return props.fu(result);
      }
      if ((sel === "nothing" && sel1 === "numb") || inpt.length < 1) {
        return props.fu(tempArray1);
      }
    };
    const FiltDistance = () => {
      const tempArray1 = tempArray.sort((a, b) =>
        a.distance > b.distance ? 1 : -1
      );
      if (sel === ">" && sel1 === "distance") {
        const result = tempArray1.filter((el) => {
          return +el.distance >= +inpt;
        });
        return props.fu(result);
      } else if (sel === "<" && sel1 === "distance") {
        const result = tempArray1.filter((el) => {
          return +el.distance < +inpt;
        });
        return props.fu(result);
      }
      if (sel === "=" && sel1 === "distance") {
        const result = tempArray1.filter((el) => {
          return +el.distance === +inpt;
        });
        return props.fu(result);
      }
      if ((sel === "nothing" && sel1 === "distance") || inpt.length < 1) {
        return props.fu(tempArray1);
      }
    };

    if (sel1 === "name") return FiltName();
    else if (sel1 === "numb") return FiltNumb();
    else if (sel1 === "distance") return FiltDistance();
  }

  return (
    <>
      <div>
        <form>
          <select id="sel" onChange={Filt} defaultValue="1">
            <option value="1" disabled>
              Choose
            </option>
            <option value="name">Название</option>
            <option value="numb">Количество</option>
            <option value="distance">Расстояние</option>
          </select>
        </form>
        <form>
          <select id="sel2" onChange={Filt} defaultValue="1">
            <option value="nothing">Nothing</option>
            <option value="=">=</option>
            <option value=">">{`>`}</option>
            <option value="<">{`<`}</option>
          </select>
        </form>
        <form>
          <input type="text" id="inpt" onChange={Filt} />
        </form>
      </div>
    </>
  );
}
