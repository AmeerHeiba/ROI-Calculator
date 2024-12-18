import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function Results({userInput}){
    const results = calculateInvestmentResults(userInput);
    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
    console.log(results);
    return (
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest Earned</th>
                    <th>Invested Capital</th>
                    <th>Total Interest Earned</th>
                    <th>Total Capital Investment</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result) => {
                    const totalInterestEarned = result.valueEndOfYear - result.annualInvestment* result.year -initialInvestment;
                    const totalAmountInvested = result.valueEndOfYear - totalInterestEarned;
                    return (
                        <tr key={result.year}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(result.annualInvestment)}</td>
                            <td>{formatter.format(totalInterestEarned)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );
                })}
            </tbody> 
        </table>
    );
}