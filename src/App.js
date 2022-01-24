import React, { useState } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [input, setInput] = useState("");

  const [items, setItems] = useState([]);

  function handleSubmit() {
    if (input === "") {
      alert("Please enter a task");
      return;
    }
    const item = {
      id: Date.now(),
      text: input,
      complete: false,
    };

    setItems((oldList) => [...oldList, item]);

    setInput("");
  }

  function handleToggle(id) {
    let mapped = items.map((item) => {
      if (item.id === Number(id)) {
        return { ...item, complete: !item.complete };
      } else {
        return item;
      }
    });

    setItems(mapped);
  }

  const handleDelete = (id) => {
    const newList = items.filter((item) => item.id !== Number(id));

    setItems(newList);
  };

  return (
    <div className="App">
      <Container>
        <h1>Todo List</h1>
        <div className="d-flex mx-auto mb-3" style={{ maxWidth: "456px" }}>
          <input
            className="form-control me-3"
            type="text"
            placeholder="Text..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="btn btn-primary"
            onClick={() => handleSubmit()}
            type="submit"
          >
            Submit
          </button>
        </div>
        <ul className="todolist shadow">
          {items.map((item) => {
            return (
              <>
                <div className="d-flex justify-content-between p-3">
                  <li
                    className={item.complete ? "todo strike" : "todo"}
                    onClick={() => handleToggle(item.id)}
                    key={item.id}
                    id={item.id}
                  >
                    {item.text}
                  </li>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}

export default App;
