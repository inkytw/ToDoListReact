import './InputBlock.css';
import { useState } from 'react';

function InputBlock(props) {

    const [value, setValue] = useState('');
    //handle 點擊 or enter 事件
    const handleClick = (e) => {
        if(value.length !== 0)
        {
            let item = {
                "task": value,
                "checked" : false
            }
            props.addItem(item);
            setValue([]);   
        }
        else{
            alert("Please input something");
        }
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if(value.length !== 0)
            {   
                let item = {
                    "task": value,
                    "checked" : false
                }
                props.addItem(item);
                setValue([]);  
            }else{
                alert("Please input something");
            }
        }
      }
    
    // 拿到 input 的 value
    const handleInputChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className="todo_input-block">
            <input className="todo_input" type="text" value={value} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder="新增待辦事項" minLength="1" maxLength="48"/>
            <button className="btn-new" onClick={handleClick}>+</button>
        </div>
    )  
}
  
export default InputBlock;