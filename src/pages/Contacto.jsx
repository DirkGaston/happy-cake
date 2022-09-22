import Container from "../layouts/container";

const Contacto = () => {
  return (
    <Container>
      <div className="contactContainer flex flex-col justify-center items-center">
        <h1 className="text-5xl mb-5">Cuéntanos, ¿En qué te podemos ayudar?</h1>

        <label
          for="email"
          class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
        >
          Correo:
        </label>
        <input
          type="email"
          id="email"
          class="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@example.com"
          required
        />

        <label
          for="message"
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400"
        >
          Descripción:
        </label>
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-3/4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></textarea>

        <button
          type="button"
          class="text-white mt-5 bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Enviar
        </button>
      </div>
    </Container>
  );
};

export default Contacto;
