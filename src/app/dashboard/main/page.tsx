import { Cartwidget } from '@/dashboard/Cartwidget';

export const metadata = {
  title: 'Dashboard',
  description: 'Información general'
};

export default function MainPage() {
  return (
    <div className='text-black p-2'>
      <h1>Dashboard</h1>
      <span>Información general</span>
      <div className='flex flex-col items-center p-2 w-full gap-4'>
        <Cartwidget />
      </div>
    </div>
  );
}
