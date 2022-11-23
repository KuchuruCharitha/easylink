import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import { Navigate, Route,Routes } from 'react-router-dom';
import Profile from "./components/Profile";
import { useContext } from "react";
import { TransactionContext } from "./context/TransactionContext";

const App = () => {
  const {currentAccount} = useContext(TransactionContext);
  return(
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Routes>
        <Route path='/'  exact element={<Welcome/>} ></Route>
        <Route path='/Profile'  exact element={<Profile/>} ></Route>
      </Routes>
    </div>
      <Routes>  <Route path='/Services'  exact element={<Services/>} ></Route></Routes>
      <Routes>  <Route path='/Transactions' exact element={<Transactions/>} ></Route></Routes>
    <Footer />
  </div>
);
}

export default App;
