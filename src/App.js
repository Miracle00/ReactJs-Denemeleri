import React, { Component } from 'react';
import {TodoList}  from './todoList';
import {TodoForm} from './todoForm';
import {Header} from './inc/header';
import {Footer} from './inc/footer';

class App extends Component {
  constructor(){
    super();
    this.state={
          myTasks:[
            {text:"Bitirme Projesi",status:"passive"},
            {text:"NodeJS",status:"passive"},
            {text:"Arduino Çalış",status:"passive"},
            {text:"Kitap Oku",status:"passive"}
          ]};
          this.addTask=this.addTask.bind(this);
          this.doneTask=this.doneTask.bind(this);
          this.removeTask=this.removeTask.bind(this);
  }
  addTask(val){
    let updatedeList=this.state.myTasks;
    updatedeList.push({text:val,status:"passive"});
    this.setState({myTasks:updatedeList});      
  }
  doneTask(task_id){
    task_id=task_id.replace('task_','');
    let updatedeList=this.state.myTasks;
    let newStatus='active';
    let currentStatus=updatedeList[task_id].status;
    if(currentStatus==='active'){
      newStatus='passive';
    }
    updatedeList[task_id].status=newStatus;
    this.setState({myTasks:updatedeList});
  }
  removeTask(task_id){
    task_id=task_id.replace('task_','');
    let updatedeList=this.state.myTasks;
    updatedeList.splice(task_id,1);
    this.setState({myTasks:updatedeList});
  }
  render() {
    return (
      <div className="content">
      <Header/>
      <TodoForm addTask={this.addTask}/>
      <TodoList myTasks={this.state.myTasks} 
                doneTask={this.doneTask} 
                removeTask={this.removeTask} />
      <Footer/>
      </div>
    );
  }
}

export default App;
