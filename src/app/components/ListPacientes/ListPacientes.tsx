import Tbody from './PacienteTable/Tbody';
import NewUser from '../NewUser/NewUser';

export default async function ListPacientes() {
  const Users = [
    {
      nome: 'Pablo',
      email: 'Pablo.m.c.elis@gmail.com',
      phoneNumber: '5551983516227',
      idCliente: 1,
      status: true
    },
    {
      nome: 'Joao',
      email: 'Joao.m.c.elis@gmail.com',
      phoneNumber: '5551983516227',
      idCliente: 2,
      status: true
    },
    {
      nome: 'Maria',
      email: 'Maria.m.c.elis@gmail.com',
      phoneNumber: '5551983516227',
      idCliente: 3,
      status: true
    }
  ];
  return (
    <div className="w-full relative">
      <NewUser title="Pacientes" />

      <div className=" bg-white m-8 rounded-md ">
        <div className=" w-full">
          <table className="w-full rounded-3xl">
            <thead>
              <tr>
                <th className="border-b-2">
                  <div className="px-5 py-3   text-xs font-semibold text-gray-600 uppercase tracking-wider w-full text-center">
                    {' '}
                    Nome
                  </div>
                </th>
                <th className="border-b-2">
                  <div className="px-5 py-3   text-xs font-semibold text-gray-600 uppercase tracking-wider w-full text-center">
                    Numero Telefonico
                  </div>
                </th>
                <th className="border-b-2">
                  <div className="px-5 py-3   text-xs font-semibold text-gray-600 uppercase tracking-wider w-full text-center">
                    {' '}
                    Email
                  </div>
                </th>
                <th className="border-b-2">
                  <div className="px-5 py-3   text-xs font-semibold text-gray-600 uppercase tracking-wider w-full text-center">
                    {' '}
                    Status
                  </div>
                </th>
                <th className="border-b-2">
                  <div className="px-5 py-3   text-xs font-semibold text-gray-600 uppercase tracking-wider w-full text-center">
                    {' '}
                    Operação
                  </div>
                </th>
              </tr>
            </thead>
            {Users.map((users) => {
              return (
                <Tbody
                  key={users.idCliente}
                  name={users.nome}
                  email={users.email}
                  phoneNumber={users.phoneNumber}
                  idCliente={users.idCliente}
                  status={users.status}
                />
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
