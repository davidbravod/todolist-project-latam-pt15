import React, {useState, useEffect} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import "../../styles/index.css"

//create your first component
const ToDoList = () => {
	const [arrTemp, setArrTemp] = useState([
		{ tarea: "Pasear al perro", done: false },
		{ tarea: "Ir al cine", done: false }
	  ])
	
	  const eliminarTarea = (indice) => {
		setArrTemp(
		  arrTemp.filter((item, index) => {
			return index != indice
		  })
		)
	  }
	
	  useEffect(() => {
	
	  }, [arrTemp])
	
	  return (
		<>
		  <div className="container bg-light" style={{ width: '700px', height: '100%', paddingBottom: '50px' }}>
			<h1 className="text-center mt-3 pt-3">To Dos</h1>
			<div className="container bg-white border" style={{ width: '500px' }}>
			  <ul className="list-group list-group-flush">
				<input
				  className="list-group-item"
				  placeholder="What needs to be done?"
				  onKeyDown={(e) => {
					if (e.keyCode == "13") {
					  setArrTemp([...arrTemp, { tarea: e.target.value, done: false }])
					  e.target.value = "";
					}
				  }}
				/>
	
				{arrTemp && arrTemp.length > 0 ?
				  <>{arrTemp.map((item, index) => {
					return <li key={index} className="list-group-item d-flex justify-content-between">
					  {item.tarea}
					  <i className="ocultar pt-1 fa-solid fa-xmark" onClick={() => {
						eliminarTarea(index)
					  }}></i>
	
					</li>
				  })}
	
					<span className="font-weight-light m-2">{arrTemp.length} items left</span>
				  </>
				  :
				  <div className="text-center h6 m-3">"No tasks, add a task"
				  </div>
				}
	
			  </ul>
			</div>
		  </div>
		</>
	  );
};

export default ToDoList;
