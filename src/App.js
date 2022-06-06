import React,{Component} from 'react';
import {v4 as uuidv4} from 'uuid';
import Header from './components/common/TeamOmegaHeader';
import InputBox from './components/common/TeamOmegaInputBox';
import Button from './components/common/TeamOmegaButtons';
import TodoListApp from './components/TodoListElement';
import Modal from './components/common/TeamOmegaModalPopup';


class App extends Component {
  state = {
    todos:[],
    id:null,
    todo:"",
    modalInput:""
  }
  changeHandler = (e) => {
    this.setState({
      todo: e,
      id:uuidv4()
    })
  }
  submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id:this.state.id,
      title:this.state.todo
    }
    if (newTodo.title !== '') {
      const updatedtodos = [...this.state.todos, newTodo]
      this.setState({
        todos:updatedtodos,
        todo:'',
        
      })
    }
  }
  editHandler = (id) => {
    let todos = this.state.todos
    const selectedTodo = todos.find(todo => todo.id === id);
    this.setState({
      modalInput: selectedTodo.title,
      id
    })
    
  }
  deleteHandler = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }
  editValue = (e) =>{
    if(e === ""){
      alert("Please write something")
    }else{

      this.setState({
        modalInput: e
      })
    }
  }
  saveChanges = (e) => {
    e.preventDefault();
    let todos = this.state.todos
    const selectTodo = todos.find(todo => todo.id === this.state.id);
    const index= todos.indexOf((selectTodo))
    todos[index]= {
      id: selectTodo.id,
      title: this.state.modalInput
    }
    
    this.setState({
      todos
    })
  }
 
  render() { 
    return (        
      < main role="main" >
       

        <Header />
        
        <form onSubmit={this.submitHandler} className='container-fluid d-flex justify-content-center mt-5'>
          <InputBox onChange={this.changeHandler} todo={this.state.todo} placeholder='Add your todo item' className='form-control rounded  p-3  ' />
          <Button onSubmit={this.submitHandler} Value={<img src="https://th.bing.com/th/id/R.d6cb306bb44b7206f52f3767eec18fd5?rik=E79jb5TUoLvS8A&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_80917.png&ehk=B2WU%2bDgif6ck7uF1xAyZrX2aWvr%2bA9UJyHiHrpI%2faqo%3d&risl=&pid=ImgRaw&r=0" alt='Add' height="35px" width="35px"/>} className='btn btn-light rounded mx-3 p-2 '/>
        </form>
        <TodoListApp todos={this.state.todos} deleteHandler={this.deleteHandler} editHandler={this.editHandler}/>
        <Modal todo={this.state.modalInput} onChange={this.editValue} onSubmit={this.saveChanges} />  
      </main>
        
    )
    
  }
}

export default App;