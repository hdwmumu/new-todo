import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
// import styles from './Counter.module.css'
// import { styled } from 'styled-component';



//counter
export function Counter() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div>
			<div>
				<button
					aria-label='Increment value'
					onClick={() => dispatch(increment())}
				>
					+
				</button>
				<span className='counter'>{count}</span>

				<button
					aria-label='Decrement value'
					onClick={() => dispatch(decrement())}
				>
					-
				</button>
			</div>
		</div>
	);
}

export default Counter;
