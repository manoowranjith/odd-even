import React, { useState } from "react";
import './Number.css'
var generatedRandomNumber=[]
function Number()
{
    const [input, setInput] = useState("");

    function randomNumber()
    {
        generatedRandomNumber=[]
        if(input === "")
        {
            document.getElementsByClassName("OddEven")[0].style.display="none"
        }
        else
        {
            document.getElementsByClassName("OddEven")[0].style.display="flex"
        }

        document.getElementById("filtered-number-generate-id").innerHTML=""
        const numberGenerated=document.getElementById("number-generate-id")
        numberGenerated.innerHTML=""

        for(let i=0; i<parseInt(input);i++)
        {
            generatedRandomNumber.push(Math.floor(Math.random() * (100 - 1) + 1))
            var p=document.createElement("p")
            p.innerHTML=generatedRandomNumber.slice(-1)
            numberGenerated.appendChild(p);
        }
        setInput("")
    }

    function oddFilter()
    {
        console.log(generatedRandomNumber)
        const oddnumberGenerated=document.getElementById("filtered-number-generate-id")
        oddnumberGenerated.innerHTML=""
        for(let i=0; i<generatedRandomNumber.length;i++)
        {
            var extractedNumber=parseInt(generatedRandomNumber[i])
            if(extractedNumber%2 !==0)
            {
                var p=document.createElement("p")
                p.innerHTML=extractedNumber
                oddnumberGenerated.appendChild(p);
            }
        }
    }

    function evenFilter()
    {
        console.log(generatedRandomNumber)
        const evennumberGenerated=document.getElementById("filtered-number-generate-id")
        evennumberGenerated.innerHTML=""
        for(let i=0; i<generatedRandomNumber.length;i++)
        {
            var extractedNumber=parseInt(generatedRandomNumber[i])
            if(extractedNumber%2 === 0)
            {
                var p=document.createElement("p")
                p.innerHTML=extractedNumber
                evennumberGenerated.appendChild(p);
            }
        }
    }
    
    return (
        <div className="Number">
            <h1>Number Filter</h1>
            <div className="number-input">
                <input id="number-entered" type="text" placeholder="Enter the number of inputs" value={input} onChange={(e)=>setInput(e.target.value)} /> <br></br>
                <button className="random-number" onClick={randomNumber}>Generate Random Numbers</button>
                <div className="number-generate" id="number-generate-id">
                </div>
                <div className="OddEven">
                    <button onClick={oddFilter} className="odd" >ODD</button>
                    <button onClick={evenFilter} className="even" >EVEN</button>
                </div>
                <div id="filtered-number-generate-id">
                </div>
            </div>
        </div>
      );
}

export default Number