import React, { useCallback, useEffect, useRef, useState } from 'react';

const SimpleHabit = () => {
    // state = {
    //     count:0,
    // };
    //state 선언 동일
    const [count, setCount] = useState(0);
    //한번만 만들고 메모리에 저장해서 다시 재사용 useRef()
    const spanRef = useRef();

    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    });

    //componentDidMount,componentDidUpdate 기능 []에 넣으면 그 값이 변경될때만
    useEffect(() => {
        
    }, [count])
    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrement}>
                <i className="fa-solid fa-square-plus"></i>
            </button>
        </li>
    );
};

export default SimpleHabit;