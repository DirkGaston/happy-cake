import Container from "../layouts/container";

const Home = () => {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <h1 className="text-5xl mb-7">
          Bienvenido a <b>Happy Cake</b>
        </h1>
        <h3 className="text-2xl mb-10">El lugar de los pasteles felices</h3>
        <p className="text-9xl">🎂</p>
      </div>
    </Container>
  );
};

export default Home;
