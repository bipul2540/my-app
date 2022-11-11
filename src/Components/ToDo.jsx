import React, { useState } from "react";
import "./ToDo.css";

function ToDo() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  function addActivity() {
    setListData((listData) => {
      const data = [...listData, activity];
      console.log(data);
      return data;
    });
    setActivity("");
  }

  function removeActivity(val) {
    const updtatedListData = listData.filter((elem, id) => {
      return val != id;
    });

    setListData(updtatedListData);
  }
  return (
    <>
      <div className="container">
        <h4>TODO LIST</h4>
        <div className="container_entry">
          <input
            type="text"
            placeholder="Add Activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
          <button onClick={addActivity}>Add</button>
        </div>
        <h3 className="heading">Here is your List....</h3>
        <>
          {listData != [] &&
            listData.map((data, val) => {
              return (
                <div className="container_data" key={val}>
                  <p className="data">{data}</p>
                  <button onClick={() => removeActivity(val)}>Delete</button>
                </div>
              );
            })}
        </>
      </div>
    </>
  );
}

export default ToDo;
