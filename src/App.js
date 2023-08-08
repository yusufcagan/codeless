import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";
import Primary from "./component/Primary";

const data = [
  {
    id: "1",
    element: `<div style="border: 1px solid black; padding:20px">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>`,
  },
  {
    id: "2",
    element: `<div
    style=
      "width: 100%;
      height: 300px;
      border: 1px solid black;"
  >
    2
  </div>`,
  },
  {
    id: "3",
    element: `<div style="border: 1px solid black; padding:20px">
    <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password">
    </div>
  </div>
  </div>`,
  },
];

function App() {
  const [element, setElemen] = useState(data);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(element);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    console.log(items);
    setElemen(items);
  }

  return (
    // <DragDropContext onDragEnd={handleOnDragEnd}>
    //   <Droppable droppableId="content">
    //     {(provided) => (
    //       <div
    //         className="content"
    //         {...provided.droppableProps}
    //         ref={provided.innerRef}
    //       >
    //         {element.map(({ id, element }, index) => {
    //           return (
    //             <Draggable key={id} draggableId={id} index={index}>
    //               {(provided) => (
    //                 <div
    //                   ref={provided.innerRef}
    //                   {...provided.draggableProps}
    //                   {...provided.dragHandleProps}
    //                   dangerouslySetInnerHTML={{ __html: element }}
    //                 />
    //               )}
    //             </Draggable>
    //           );
    //         })}
    //         {provided.placeholder}
    //       </div>
    //     )}
    //   </Droppable>
    // </DragDropContext>
    <>
      <Primary />
    </>
  );
}

export default App;
