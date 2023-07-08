import AsideBar from '@/app/components/AsideBar/AsideBar';
import PacienteDetails from '@/app/components/PacienteDetails/PacienteDetails';

export default function PacientesDetailsPage() {
  return (
    <main className="min-h-screen w-full flex">
      <AsideBar />
      <PacienteDetails />
    </main>
  );
}
