
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Catalog from './pages/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Catalog/>        
      <Footer/>          
    </div>
  );
}

export default App;

//create a Product component with a header  (h5) as a title and render a 
//a quantityPicker component inside / render 5 <Product>  </Product> in
//Catalog
