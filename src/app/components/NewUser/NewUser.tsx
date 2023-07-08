'use client';

import { useState } from 'react';

import Button from './Button';
import RegisterUser from '../FormRegisterUser/RegisterUser';

import { XMarkIcon } from '@heroicons/react/24/outline';

interface NewUser {
  title: string;
}

export default function NewUser(props: NewUser) {
  const [open, setOpen] = useState('none');

  const openModal = () => {
    setOpen('block');
  };
  const closeModal = () => {
    setOpen('none');
  };
  return (
    <div className=" m-8 flex gap-80 justify-between items-center ">
      <h1 className="font-bold text-3xl">{props.title}</h1>
      <div>
        <Button onClick={() => openModal()} titleButton="Novo Paciente" />
      </div>
      <div
        className={`  ${open} absolute inset-0 w-full h-full pointer-events-auto z-[9995] bg-black bg-opacity-60 backdrop-blur-sm`}
        data-projection-id="154"
      ></div>
      <div
        className={`${open} absolute top-1/3 right-1/3   z-[9995] bg-opacity-25  p-5  shadow-lg bg-gray-800 backdrop-blur-md max-sm:px-8  px-4
        sm:px-6
        md:px-6
        lg:px-6
        w-2/4
        
        rounded-3xl
        
        max-w-md`}
      >
        <div
          className="flex justify-between
        "
        >
          {' '}
          <h3 className="text-white">Registe um novo Paciente</h3>
          <button
            className="h-7 w-7 hover:bg-gray-500 rounded-md text-white"
            onClick={() => closeModal()}
          >
            <XMarkIcon className="h-7 w-7 " />
          </button>
        </div>
        <div>
          <RegisterUser />
        </div>
      </div>
    </div>
  );
}
