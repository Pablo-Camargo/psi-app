import Field from '../Field/Field';

export default function RegisterUser() {
  return (
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
        text="Telefone"
        htmlFor="phone"
        id="phone"
        name="phone"
        type="phone"
        placeholder="Telefone"
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
  );
}
