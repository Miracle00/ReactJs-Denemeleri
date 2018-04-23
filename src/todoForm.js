import React from 'react';

export class TodoForm extends React.Component{
   constructor(){
       super();
       this.addTask=this.addTask.bind(this);
   }
    addTask(e){
        e.preventDefault();//input a değer girilip enter'e basıldığı zaman sayfayı refresh etmemesi için yazıldı
        const inp=document.getElementById('todoInput');
        const val=inp.value;
        inp.value='';
        this.props.addTask(val);
    }
    render(){
        return(
            <div>
                <div className="todo type1">
                    <form className="input-wrapper" onSubmit={this.addTask}>
                        <input id="todoInput" type="test" className="add-todo" autoComplete="off" placeholder="Ne yapmak istiyorsun?"/>
                    </form>
                </div>
                <button type="button" className="add-btn" onClick={this.addTask}/>
            </div>
        )
    }
}