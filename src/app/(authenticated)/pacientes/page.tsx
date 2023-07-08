import ListPacientes from '@/app/components/ListPacientes/ListPacientes';
import AsideBar from '../../components/AsideBar/AsideBar';

export default function PacientesPage() {
  return (
    <main className="min-h-screen w-full flex">
      <AsideBar />

      <ListPacientes />
    </main>
  );
}
