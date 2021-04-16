import React from "react"
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import Card from "./components/card/Card"

function App() {

  // state / management memory
  let [data, setData] = React.useState([])

  // component lifecycle
  React.useEffect(() => {
    
    // function fetch
    fetch('http://localhost:8000/api/absen', {
      method : 'GET',
      mode : 'cors',
      headers : {
        "Content-Type" : 'application/json',
        Accept : 'application/json'
      }
    })
    .then(res => res.json())
    .then(result => {
      console.log(result)
      setData(result)
    })
    .catch(err => console.log(err))


    // return ini untuk clean up
    return () => {}
  }, [])

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        {data.map((e) => {
          return (
            <Card
            key={e.id}
            id={e.id}
            name={e.name}
            email={e.email}
            phone={e.phone}
            batch={e.batch}
            date={e.date}
            />
          )
        })}
      </header>
    </div>
  );
}

export default App;
