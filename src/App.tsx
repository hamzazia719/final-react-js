import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/index";
import Sell from "./pages/sell/sell";
import Rent from "./pages/rent/rent";
import Buy from "./pages/buy/index"
import SignupPage from "./components/signUp"
import SignIn from "./components/logIn"
import Realtor from "./pages/realtors/realtor"
import Detail from "./pages/propertyDetailPage/detail";
import FilterComponent from "./components/filter";

function App() {
  return (
    <div>
      <Header />
        {/* <Detail /> */}
        <Routes>
        <Route path="/detail" element={<Detail />}/>
        <Route path="/" element={<Home />} />
        <Route path="/sell/*" element={<Sell />} />
        <Route path="/rent/*" element={<Rent />} />
        <Route path="/realtor/*" element={<Realtor />}/>
        <Route path="/contact/*" element={<Contact />}/>
        <Route path="/signUp/*" element={<SignupPage/>}/>
        <Route path="/logIn/*" element={<SignIn/>}/>
        <Route path="/Buy/*" element={<Buy/>}/>
        <Route path="/search-page" element={<FilterComponent/>}/>

        </Routes>
      <Footer />
    </div>
  );
}

export default App;
