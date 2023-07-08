import AsideBar from '@/app/components/AsideBar/AsideBar';

import { CardDetailPaciente } from '@/app/components/CardDetailPaciente/CardDetailPaciente';

import TitelPage from '@/app/components/TitlePage/TitelPage';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar
} from '@material-tailwind/react';

export default function PacientesDetailsPage() {
  return (
    <main className="min-h-screen w-full flex">
      <AsideBar />
      <div className="m-8">
        <TitelPage title="paciente" />
        <CardDetailPaciente />
      </div>
    </main>
  );
}
