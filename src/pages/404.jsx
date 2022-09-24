import Container from "../layouts/container";

const Error404 = () => {
  return (
    <Container>
      <div className="errorContainer mt-10 flex flex-col justify-center items-center">
        <iframe
          src="https://giphy.com/embed/kTnukKmf3TL8Y"
          width="480"
          height="270"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
};

export default Error404;
