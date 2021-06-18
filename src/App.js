import Header from "./Header";
import Form from "./Form";
import Table from "./Table";
import currencies from "./currencies";
import Container from "./Container";
import Footer from "./Footer";

function App() {
  return (
    <Container>
      <Header title="Kalkulator walut online" />
      <Form currencies={currencies} />
      <Table currencies={currencies} />
      <Footer text=" &copy; Tania Mishakova 2021" />
    </Container>
  );
};

export default App;
