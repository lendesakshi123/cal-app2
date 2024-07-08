import { useState } from "react";
import CalWrapper from "../CalWrapper/CalWrapper";

const Cal = () => {

   const[inputVal1, setInputVal1] = useState(0);
   const [operationValue, setOperationValue] = useState(0);
   const [currentOperation, setCurrentOperation] = useState('')

    const allBtArr = [
        {value:0, 
            btFun: () => {
                
       setInputVal1((preValue)=>parseInt(preValue.toString()+0));

            },
        },

        {
            value:1, 
            btFun: () => {
                setInputVal1((preValue)=>parseInt(preValue.toString()+1));
        },        
    },

    {
        value:2, 
        btFun: () => {
            const newValue = inputVal1.toString() + 2
            setInputVal1(parseInt(newValue));
    },        
},
    
{
    value:3, 
    btFun: () => {
        const newValue = inputVal1.toString() + 3
        setInputVal1(parseInt(newValue));
},        
},
        
  {
    value:4, 
    btFun: () => {
        const newValue = inputVal1.toString() + 4
        setInputVal1(parseInt(newValue));
  },        
  },

  {
    value:5, 
    btFun: () => {
        const newValue = inputVal1.toString() + 5
        setInputVal1(parseInt(newValue));
  },        
  },

  {
    value:6, 
    btFun: () => {
        const newValue = inputVal1.toString() + 6
        setInputVal1(parseInt(newValue));
  },        
  },

  {
    value:7, 
    btFun: () => {
        const newValue = inputVal1.toString() + 7
        setInputVal1(parseInt(newValue));
  },        
  },

  {
    value:8, 
    btFun: () => {
        const newValue = inputVal1.toString() + 8
        setInputVal1(parseInt(newValue));
  },        
  },

  {
    value:9, 
    btFun: () => {
        const newValue = inputVal1.toString() + 9
        setInputVal1(parseInt(newValue));
  },        
  }
       
  ];

  const operationArr = [
  
    {
        value:'+', 
        btFun: () => {
            setCurrentOperation('+')
            setOperationValue(inputVal1)
            setInputVal1(0);
    },        
},

{
    value:'-', 
    btFun: () => {
        setCurrentOperation('-')
            setOperationValue(inputVal1)
            setInputVal1(0);
},        
},

{
    value:'*', 
    btFun: () => {
        setCurrentOperation('*')
        setOperationValue(inputVal1)
        setInputVal1(0);
},
},

{
    value:'/', 
    btFun: () => {
        setCurrentOperation('/')
        setOperationValue(inputVal1)
        setInputVal1(0);
},
},

{
    value:'=', 
    btFun: () => {
        if(currentOperation === '+')
            {
                setInputVal1((preValue)=>
                {
                    return preValue + operationValue;
                })
            }else if (currentOperation === '-')
                {
                    setInputVal1((preValue)=>
                    {
                        return operationValue-preValue;
                    })
                }

                else if (currentOperation === '*')
                    {
                        setInputVal1((preValue)=>
                        {
                            return preValue*operationValue;
                        })
                    }

                    else if (currentOperation === '/')
                        {
                            setInputVal1((preValue)=>
                            {
                                return preValue/operationValue;
                            })
                        }

                        else if(currentOperation === '=')
                            {
                                setInputVal1((preValue)=>
                                {
                                    return preValue=operationValue;
                                })
                            }    
},        
},


];


    return(
        <div>
            <p>This is Cal {inputVal1}</p>
            <p>{operationValue} {currentOperation}</p>
            
            <CalWrapper allBtArr={allBtArr} operationArr={operationArr}/>
        </div>
    )
}

export default Cal;