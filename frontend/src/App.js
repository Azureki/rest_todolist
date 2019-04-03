// App.js
import React, { Component } from 'react';
import axios from 'axios';


class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detail: null };
  }

  getDetail = () => {
    axios.get(`/api/todos/${this.props.id}`)
      .then(res => this.setState({ detail: res.data }))
  }
  render() {
    return (
      <div>
        {this.props.id}
      </div>
    );
  }

}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      ifShowAll: false,

      detail: {
        id: null,
        title: '',
        description: '',
        completed: false,
      }
    };
  }

  getAllTasks = () => {
    axios
      .get("/api/todos/")
      .then(res => this.setState({ todos: res.data }))
      .catch(err => console.log(err));
  }

  addTask = (event) => {

    this.setState({
      detail: {
        title: '',
        description: '',
        completed: false,
      }
    });

  }

  showAll = () => {
    this.setState({ ifShowAll: !this.state.ifShowAll })
  }

  deleteTask = (id) => {
    axios.delete(`/api/todos/${id}`)
      .then(res => this.getAllTasks())
  }


  finishTask = (id, event) => {
    axios
      .patch(`/api/todos/${id}/`, { 'completed': event.target.checked })
      .then(res => this.getAllTasks())
      .catch(err => console.log(err));
  }

  editTask = (id) => {
    axios
      .get(`/api/todos/${id}`)
      .then(item => {
        this.setState({ detail: { id: id, title: item.data.title, description: item.data.description, completed: item.data.completed } });
      });
  }


  handleChange = (event) => {
    // 改变的是title
    if (event.target.name === "title") {
      this.setState({ detail: { id: this.state.detail.id, title: event.target.value, description: this.state.detail.description, completed: this.state.detail.completed } });
    }
    // 改变的是note
    else if (event.target.name === "note") {
      this.setState({ detail: { id: this.state.detail.id, description: event.target.value, title: this.state.detail.title, completed: this.state.detail.completed } });
    }
    // 改变的是完成/未完成的状态
    else {
      this.setState({ detail: { id: this.state.detail.id, description: this.state.detail.description, title: this.state.detail.title, completed: event.target.checked } });
    }
  }

  handleSubmit = (event) => {
    const tid = this.state.detail.id;
    if (tid) {
      // this.setState({detail:{id: '8', title:'test',description:'12432'}});

      axios.put(`/api/todos/${tid}/`, this.state.detail)
        .then(res => this.getAllTasks())
        .catch(err => console.log(err));
    }
    else {
      axios.post(`api/todos/`, this.state.detail)
        .then(res => this.getAllTasks())
        .catch(err => console.log(err));
    }
  }


  componentDidMount() {
    try {
      // const res = await fetch('http://127.0.0.1:8000/api/');
      // const res = axios.get('http://localhost:8000/api/');
      axios
        .get("/api/todos/")
        .then(res => this.setState({ todos: res.data }))
        .catch(err => console.log(err));
      //  const todos = await res.json();
      //  this.setState({
      //    todos
      //  });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <h1> Todolist </h1>
        <hr />
        <div id="left">
          <button onClick={this.showAll}>{this.state.ifShowAll ? 'Show UnCompleted Tasks' : 'Show All Tasks'}</button>
          {this.state.todos.map(item => this.state.ifShowAll || !item.completed ? (
            <div key={item.id}>
              <ul>
                <table>
                  <tr>
                    <td>
                      <input onChange={(e) => this.finishTask(item.id, e)} type="checkbox" checked={item.completed} />
                    </td>
                    <td width="200px">{item.title}
                    </td>
                    <td>
                      <button onClick={() => this.editTask(item.id)}>编辑任务</button>
                      <button onClick={() => this.deleteTask(item.id)}>删除任务</button>
                    </td>
                  </tr>
                </table>
              </ul>
            </div>
          ) : null)}
          <button onClick={() => this.addTask()}>Add Task</button>
        </div>
        <div id="line">
        </div>
        <div id="right">


          <label>
            标题:
          <input type="text" name="title" value={this.state.detail.title} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            笔记:
          <textarea name="note" value={this.state.detail.description} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            完成:
          <input name="completed" type="checkbox" checked={this.state.detail.completed} onChange={this.handleChange} />
          </label>

          <br />

          <button onClick={this.handleSubmit}>提交</button>

        </div>
      </div>
    );
  }
}
    
export default App;
