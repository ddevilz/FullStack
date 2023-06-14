import React, { useState } from 'react'

const choices = [
  {
    id: 'stone',
    img: 'https://iili.io/Hgg4upV.md.png',
  },
  {
    id: 'paper',
    img: 'https://iili.io/Hgg4fh7.md.png',
  },
  {
    id: 'scissors',
    img: 'https://iili.io/HggrbLX.md.png',
  },
];


function App() {
  const [userChoice, setUserChoice] = useState('')
  const [compChoice, setCompChoice] = useState('')
  const [result, setResults] = useState(0)

  const handleChoice = (choice) => {
    setUserChoice(choice);
    generateCompChoice();
    tellResult(choice, compChoice);
  }

  const generateCompChoice = () => {
    const randomNum = Math.floor(Math.random() * choices.length);
    setCompChoice(choices[randomNum].id);
  }

  const lose = () => {
    if (result == 0){
      setResults(result);
    } else {
      setResults(result - 1)
    }
  }
  const tellResult = (user, comp) => {
    if (user === comp){
      setResults(result)
    } else if (
      (user === 'stone' && comp === 'scissors') ||
      (user === 'paper' && comp === 'stone') ||
      (user === 'scissors' && comp === 'paper')  
    ) {
      setResults(result + 1)
    } else {
      setResults(lose)
    }
  }

  return (
    <div>
      <div className='choices'>
        {
          choices.map((choice) => (
            <img
            key={choice.id}
            src={choice.img}
            alt={choice.id}
            width={200}
            onClick={() => handleChoice(choice.id)}
          />
          ))
        }
      </div>
      <div className='result'>{result}</div>
      
    </div>
  )
}

export default App
