import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import TodoLayout from '../components/TodoLayout/TodoLayout';

const IndexPage = (props: any) => (
  <>
    <Header />
    <TodoLayout initTodos={props.data} />
    <Footer />
  </>
);

export async function getServerSideProps() {
  // get todos data from API
  const res = await fetch(process.env.API_URL as string);
  const todos = await res.json();

  return {
    props: { ...todos },
  }
}

export default IndexPage;
