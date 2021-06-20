import './FooterTab.css';
// import { useState } from 'react';

function FooterTab(props) {
  // console.log(props);
  const deleteAll = () => {
    props.deleteAll();
  }
  
  return (
    <div className="footerTab">
        <ul>
            <li className="sum__num"><span id="todo__num">{props.toDoNum}</span> 個待完成項目</li>
            <li className="clean__all" onClick={deleteAll}>清除已完成項目</li>
        </ul>
    </div>  
  )

}

export default FooterTab;