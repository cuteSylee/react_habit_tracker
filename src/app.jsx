import Habits from './components/habits';
import React, { Component } from 'react';
import './app.css';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    //데이터를 가지고있는 곳에서 업데이트 로직 추가하는게 좋음
    habits: [
        { id: 1, name: 'Reading', count: 0 },
        { id: 2, name: 'Running', count: 0 },
        { id: 3, name: 'Coding', count: 0 },
    ],
};

handleIncrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;

    //새로운 오브젝트 생성
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
          return { ...habit, count: habit.count + 1};
      } 
      return item;
    })
    //키(스테이트) : 값(로컬 변수) - 변수이름이 동일하면 하나만 작성해도 됨
    this.setState({ habits });
}

handleDecrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count;
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count};
      }
      return item;
    })
    //키(스테이트) : 값(로컬 변수) - 변수이름이 동일하면 하나만 작성해도 됨
    this.setState({ habits });
}

handleDelete = (habit) => {
    //filter 스테이트를 빙글빙글 돌면서
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState( {habits} );
}

handleAdd = name => {
    const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
    this.setState( {habits} );
}

handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if(habit.count !== 0) {
        return { ...habit, count: 0};
      }
      return habit;
    });
    this.setState( {habits} );
}

  render() {
    return ( 
    <>
    <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
    <Habits 
    habits={this.state.habits} 
    onIncrement={this.handleIncrement}
    onDecrement={this.handleDecrement}
    onDelete={this.handleDelete}
    onAdd={this.handleAdd}
    onReset={this.handleReset}
    />
    </>
    );
  }
}

export default App;
