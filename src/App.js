import './App.css';
import { useEffect,useRef, useState } from 'react';
import InputBlock from './InputBlock';
import Tabs from './Tabs';
import TodoItems from './TodoItems';
import FooterTab from './FooterTab';

function App() {
  
  let listToDojson = 
  [
    {
      // "id" : 1,
      "task" : "待辦事項1",
      "checked" : false
    },
    {
      // "id" : 2,
      "task" : "待辦事項2",
      "checked" : false
    }
  ] 

  /*-Hook設定--*/
  const [text, setText] = useState(listToDojson); // 存Todo列表的陣列
  const [currentTab, setCurrentTab] = useState('all'); // Tab位置(預設all)
  const [currentToDoNum, setCurrentToDoNum] = useState(text.filter(text => text.checked != true).length);

  // 新增Todo
  const addItem = (item) => {
    setText(prev => ([...prev,item]));
  }
  
  //checkBox改變Todo列表陣列
  const boxChecked = (str) => {
    let id = str.substr(1)
    text[id].checked = !text[id].checked;
    reNewToDoNum();
  }

  //點擊刪除 問一下prev=>
  const deleteByID = (id) => {
    // console.log(text.filter(text => text.id != id));
    let temp = [...text];
    setText(temp.filter(pre => pre.id!=id));
  }

  // 刪除所有Todo
  const deleteAll = () => {
    let temp = [...text];
    setText(temp.filter(pre => pre.checked===false));
    
  }

  //tab切換
  const tabSwitch = (tabItem) =>{
    setCurrentTab(tabItem);
  }
  const tabSwitchRender = () =>{
    if(currentTab === 'all'){
      return (
        <div>
          {
            text.map(
              (item,index)=> {
                item.id = index;
                return <TodoItems key={`${item.task}${index}`} todoItems={item} itemIndex={index} boxChecked={boxChecked} deleteByID={deleteByID}/>;
              }
            )
          }
          </div>
      )
    }else if(currentTab === 'unfinished'){
      
      return (
        <div>
          {
            text.filter(text=>text.checked!=true).map(
              (item,index)=> {
                item.id = index;
                return <TodoItems key={`${item.task}${index}`} todoItems={item} itemIndex={index} boxChecked={boxChecked} deleteByID={deleteByID}/>;
              }
            )
          }
        </div>  
      )
    }else if(currentTab === 'done'){
      
      return (
        <div>
          {
            text.filter(text=>text.checked==true).map(
              (item,index)=> {
                item.id = index;
                return <TodoItems key={`${item.task}${index}`} todoItems={item} itemIndex={index} boxChecked={boxChecked} deleteByID={deleteByID}/>;
              }
            )
          }
        </div>  
      )
    }    
  }

  //更新footer總數
  const reNewToDoNum = () =>{
    setCurrentToDoNum(text.filter(text => text.checked != true).length);
  }
  //text更新時，更新數字
  useEffect(() => {
    // console.log(text);
    reNewToDoNum();
  }, [text]);

  return (
    <div className="App"> 
      <h1>Todo List</h1>
      <InputBlock addItem={addItem}/>
      <Tabs tabSwitch={tabSwitch}/>
      {tabSwitchRender()}
      <FooterTab deleteAll={deleteAll} toDoNum={currentToDoNum}/> 
    </div>
  );
}

export default App;
