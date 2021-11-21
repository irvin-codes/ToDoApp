import React, {useState, useEffect} from "react"
import './App.css';

//COMPONENTES
import Header from "./components/Header"
import Todo from "./components/Todo"
import Loader from "./components/Loader"

const App = () => {
  //STATE
  const [dataApi, setDataApi] = useState([])
  const [all, setAll] = useState([])

  //USEEFFECT
  useEffect(() => {
    const handleDataApi = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const result = await response.json()
      const myToDos = result.slice(0,8)
      console.log(myToDos)
      setDataApi(myToDos)
      setAll(myToDos)
    }
    setTimeout(() => {
      handleDataApi()
    },3000)
  },[])

  //FUNCTIONS
  const handleTodo = (id) => {
    setDataApi(dataApi.map(todo => todo.id === id ? {...todo, completed: !todo.completed}: {...todo}))
    console.log(dataApi)
  }

  const handleDataApiIncomplete = () => { 
    const filtered = dataApi.filter(todo => todo.completed === false)
    console.log(filtered)
    setDataApi(filtered)
  }

  
  const handleDataComplete = () => { 
    const filteredComplete = dataApi.filter(todo => todo.completed === true)
    console.log(filteredComplete)
    setDataApi(filteredComplete)
  }

   const handleDataAll = () => { 
    setDataApi(all)
    
  }

  return (
    <div className="App">

      <Header handleDataComplete={handleDataComplete} handleDataAll={handleDataAll} handleDataApiIncomplete={handleDataApiIncomplete}/>

      <div className="container">
        {dataApi ? dataApi.map(todo => (
          <Todo  
          key={todo.id} 
          title={todo.title} 
          status={todo.completed}
          handleTodo={handleTodo}
          id={todo.id}/>
        )) : <Loader/>
        }
      </div>

    </div>
  );
}

export default App;
