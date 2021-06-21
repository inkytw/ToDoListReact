import './Tabs.css';

function Tabs(props) {
  
  const tabSwitch = (e) =>{
    props.tabSwitch(e.target.id);
    if (e.target.id === "all") {
      tabSelected(e.target);
      tabUnSelected(document.getElementById("unfinished"));
      tabUnSelected(document.getElementById("done"));
    }else if(e.target.id === "unfinished"){
      tabSelected(e.target);
      tabUnSelected(document.getElementById("all"));
      tabUnSelected(document.getElementById("done"));
    }else if(e.target.id === "done"){
      tabSelected(e.target);
      tabUnSelected(document.getElementById("unfinished"));
      tabUnSelected(document.getElementById("all"));
    }
  }

  // tab切換變色
  const tabSelected = (target) => {
    target.style.borderBottomColor = "#333333";
    target.style.color = "#333333"
  }
  
  const tabUnSelected = (target) => {
    target.style.borderBottomColor = "#EFEFEF";
    target.style.color = "#9F9A91"
  }

  return (
    <div className="tab_list">
      <ul className="tab">
          <li id="all" className="tab__selected" onClick={tabSwitch}>全部</li>
          <li id="unfinished" className="tab__unselected" onClick={tabSwitch}>待完成</li>
          <li id="done" className="tab__unselected" onClick={tabSwitch}>已完成</li>
       </ul>
    </div>  
  )
    
}

export default Tabs;