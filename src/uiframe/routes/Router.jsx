import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../../usecase/Layout';
import Home from '../../interface/pages/home/Home';
import Contact from '../../interface/pages/contact/index';
import Sell from '../../interface/pages/sell/sell';
import Rent from '../../interface/pages/rent/rent';
import Buy from '../../interface/pages/buy/index';
import SignupPage from '../../interface/components/signUp/index';
import SignIn from '../../interface/components/logIn/index';
import Realtor from '../../interface/pages/realtors/realtor';
import Detail from '../../interface/pages/propertyDetailPage/detail';

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="detail" element={<Detail />} />
          <Route path="sell/*" element={<Sell />} />
          <Route path="rent/*" element={<Rent />} />
          <Route path="realtor/*" element={<Realtor />} />
          <Route path="contact/*" element={<Contact />} />
          <Route path="signUp/*" element={<SignupPage />} />
          <Route path="logIn/*" element={<SignIn />} />
          <Route path="Buy/*" element={<Buy />} />
          {/* <Route path="search-page" element={<FilterComponent />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;

