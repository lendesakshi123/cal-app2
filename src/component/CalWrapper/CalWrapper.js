import Button from "../../common/Button/Button";
import './CalWrapper.css';
const CalWrapper = (props) => {

    

    const allButton = props.allBtArr.map((btObj)=>{
        return <Button key = {btObj.value} btName={btObj.value} btFun={btObj.btFun}/>

    });

    const allOpnBtn = props.operationArr.map((btObj)=>{
        return <Button key = {btObj.value} btName={btObj.value} btFun={btObj.btFun}/>

    });

    

    return(
        <div className="main-cal">
           <div className="bt-name"> {allButton}</div>
            <div className="op-name">{allOpnBtn}</div>
         </div>
    )
}

export default CalWrapper;