import TitelPage from '../TitlePage/TitelPage';
import CardPaciente from './Cardpaciente/CardPaciente';

const Users = {
  nome: 'Pablo',
  email: 'Pablo.m.c.elis@gmail.com',
  phoneNumber: '5551983516227',
  idCliente: 1,
  status: true
};

export function CardDetailPaciente() {
  return (
    <div className="flex flex-col w-full">
      <TitelPage title="Paciente" />
      <div className=" bg-white  rounded-md   m-8 p-8 ">
        <div className=" w-full flex flex-row">
          <CardPaciente />
        </div>
      </div>
    </div>
  );
}
