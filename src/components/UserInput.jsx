
export default function UserInput({userInput,handleInput}){ 
    return (
        <section id="user-input">
            <div className="input-group">
                <p> 
                    <label> Initial Investment</label>
                    <input type="number" value={userInput.initialInvestment} onChange={(e)=>handleInput('initialInvestment',e.target.value)} required/>
                </p>
                <p> 
                    <label> Annual Investment</label>
                    <input type="number" value={userInput.annualInvestment} onChange={(e)=>handleInput('annualInvestment',e.target.value)} required/>
                </p>
                <p> 
                    <label> Expected Return</label>
                    <input type="number" value={userInput.expectedReturn} onChange={(e)=>handleInput('expectedReturn',e.target.value)} required/>
                </p>
                <p> 
                    <label> Duration</label>
                    <input type="number" value={userInput.duration} onChange={(e)=>handleInput('duration',e.target.value)} required/>
                </p>
            </div>
        </section>
);
}