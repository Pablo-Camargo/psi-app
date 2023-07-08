'use client';
import Link from 'next/link';

import { useRouter } from 'next/navigation';

interface TbodyInterface {
  idCliente: number;
  name: string;
  phoneNumber: string;
  email: string;
  status: boolean;
}

import { Chip } from '@material-tailwind/react';
import {
  TrashIcon,
  PencilSquareIcon,
  PencilIcon
} from '@heroicons/react/24/outline';

export default function Tbody(props: TbodyInterface) {
  // const { push } = useRouter();

  //const handleEditUser = (id: number) => {
  // push(`/pacientes/${id}`);
  // };
  const id: number = props.idCliente;
  return (
    <tbody>
      <tr>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center justify-center gap-2">
            <div className="flex-shrink-0 w-10 h-10">
              <img
                className="w-full h-full rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                alt=""
              />
            </div>
            <div className="">
              <p className="text-gray-900 whitespace-no-wrap">{props.name}</p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center justify-center">
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">
                {props.phoneNumber}
              </p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center justify-center">
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">{props.email}</p>
            </div>
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className=" flex justify-center">
            <Chip
              variant="ghost"
              value={props.status ? 'Ativo' : 'inativo'}
              color={props.status ? 'green' : 'red'}
            />
          </div>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex gap-2 justify-center">
            {' '}
            <Link
              href={`/prontuario/${props.idCliente}`}
              className="h-8 w-8 rounded flex justify-center items-center hover:bg-slate-300  "
            >
              <PencilSquareIcon className="h-7 w-7 " />
            </Link>
            <Link
              href={`/pacientes/${id}`}
              className="h-8 w-8 rounded flex justify-center items-center hover:bg-slate-300  "
            >
              <PencilIcon className="h-7 w-7 " />
            </Link>
            <button className="h-8 w-8 rounded flex justify-center items-center hover:bg-slate-300 ">
              <TrashIcon className="h-7 w-7" />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
