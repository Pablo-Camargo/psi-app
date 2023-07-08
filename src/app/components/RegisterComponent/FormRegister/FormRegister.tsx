import Field from '../../Field/Field';
import Link from 'next/link';

export default function Form() {
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <div
        className="bg-opacity-25  p-5  shadow-lg bg-gray-800 backdrop-blur-md max-sm:px-8  px-4
          sm:px-6
          md:px-6
          lg:px-6
          py-8
          rounded-3xl
          w-50
          max-w-md"
      >
        <form className="space-y-6" action="#" method="POST">
          <Field.Text
            text="Nome"
            htmlFor="nome"
            id="nome"
            name="nome"
            type="text"
            placeholder="Nome"
            required
          />
          <Field.Text
            text="E-mail"
            htmlFor="email"
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            required
          />

          <Field.Text
            text="Senha"
            htmlFor="password"
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
            required
          />
          <Field.Text
            text="epita sua senha"
            htmlFor="password"
            id="password"
            name="name"
            type="password"
            placeholder="Repita sua senha"
            required
          />

          <div className="flex w-full">
            <button
              type="submit"
              className=" text-white  px-6  flex
              mt-2
              items-center
              justify-center
              focus:outline-none
               text-sm
              sm:text-base
              bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in"
            >
              Registrar
            </button>
          </div>
        </form>
        <div
          className="px-6  flex
              mt-2
              items-center
              justify-center"
        >
          <span className=" text-white">
            Já tem uma conta?{' '}
            <Link
              href="/login"
              className="text-base  text-blue-500 font-semibold hover:underline"
            >
              Entrar
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
