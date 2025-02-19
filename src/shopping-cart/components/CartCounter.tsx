'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/index';
import { decrement, increment, reset } from '@/store/counter/counterSlice';

export const CartCounter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(state => state.counter.count);

  useEffect(() => {
    dispatch(reset());
  }, []);

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex items-center justify-center mt-4">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
      </div>
    </>
  );
};
