'use client';

import { IoCafeOutline } from 'react-icons/io5';
import { SimpleWidget } from './SimpleWidget';
import { useAppSelector } from '@/store';

export const WidgetsGrid = () => {
  const cartState = useAppSelector(state => state.counter.count);

  return (
    <div className="flex flex-col items-center p-2 w-full gap-4">
      <SimpleWidget
        title="Contador"
        subtitle="Client counter"
        label={cartState.toString()}
        icon={<IoCafeOutline size={50} className="text-blue-500" />}
        href="./counter"
      />
      <SimpleWidget />
    </div>
  );
};
