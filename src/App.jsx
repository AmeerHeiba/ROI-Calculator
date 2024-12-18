import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput";
import Results from "./components/Results";


function App() {

  const [userInput,setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 200,
    expectedReturn: 3,
    duration: 12
});

const duration = userInput.duration>=1 ;

function handleInput(identifier, newValue) {
    setUserInput(prevUserInput => {
        return {              
            ...prevUserInput,
            [identifier]: +newValue  
        };

    });

}
  return (
    <>
    <Header />
    <UserInput userInput={userInput} handleInput={handleInput} />
    {duration && <Results userInput={userInput}/>}
    {!duration && <p className="center">Please enter a duration greater than 0</p>}
    </>
  )
}

export default App
