import { WidgetsGrid } from '../../../dashboard/WidgetsGrid';

export const metadata = {
  title: 'Dashboard',
  description: 'Información general'
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1>Dashboard</h1>
      <span>Información general</span>
      <WidgetsGrid />
    </div>
  );
}
