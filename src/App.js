import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Github from "./pages/Github";
import MainContextProvider from "./context/mainContext";

function App() {
  return (
    <MainContextProvider>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/github" component={Github} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </MainContextProvider>
  );
}

export default App;
