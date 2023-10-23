import About from "./components/about"
import Info  from "./components/info";
import Interest from "./components/interest";
import Footer from "./components/footer";
import './App.css';

function App() {
  return (
    <div className="main-body">
      <Info/>
     <About/>
     <Interest/>
     <Footer/>
    </div>
  );
}

export default App;
