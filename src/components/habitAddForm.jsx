//import React, { PureComponent } from 'react';

import React, { memo } from 'react';
//함수 안에서는 바로 변수에 접근 가능
//memo PureComponent와 비슷한 기능
const HabitAddForm = memo((props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();
    
    //submit 발생하면 reload 됨
    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        //this.inputRef.current.value = '';
        formRef.current.reset();
    return (
                <form ref={formRef} className="add-form" onSubmit={onSubmit}>
                    <input ref={inputRef} type="text" className="add-input" placeholder="Habit" />
                    <button className="add-button">Add</button>
                </form>
            );
    }            
});


//클래스에서는 this로 변수에 접근
//PureComponent state,props 안에 있는 데이터가 변하지않으면 render함수 호출되지 않음
// class HabitAddForm extends PureComponent {
//     //바로 Dom요소에 직접 접근이 아닌 Ref로 input의 요소와 연결해줌
//     formRef = React.createRef();
//     inputRef = React.createRef();
//     //submit 발생하면 reload 됨
//     onSubmit = event => {
//         event.preventDefault();
//         const name = this.inputRef.current.value;
//         name && this.props.onAdd(name);
//         //this.inputRef.current.value = '';
//         this.formRef.current.reset();
//     }
//     render() {
//         return (
//             <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
//                 <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit" />
//                 <button className="add-button">Add</button>
//             </form>
//         );
//     }
// }
// export default HabitAddForm;
export default HabitAddForm;