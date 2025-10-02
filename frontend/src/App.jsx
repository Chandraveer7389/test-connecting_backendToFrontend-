import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  const [jok,setjok] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await fetch("/jokes");
        const data = await response.json();
        setjok(data);
      } catch (error) {
        console.error("Failed to fetch jokes:", error);
      }
    };

    
    fetchJokes();
  }, [])
  return (
    <>
      <h1>Jokes</h1>
      {
        jok.map((element) => {
          return (
            <div key={element.id}>
              <h2>{element.element}</h2>
              <h2>{element.joke}</h2>
            </div>
          )
        })
      }
    </>
  )
}

export default App
