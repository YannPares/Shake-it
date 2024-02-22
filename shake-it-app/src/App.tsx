
import './App.css';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';


function App() {

  return (
    <>
    <main className='page-container'>
    <Header/>
    
    <SearchBar/>
    <Container/> 
   
    <Footer/>
    </main>
    </>
  );
}

export default App;
