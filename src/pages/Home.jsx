import React from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';

const Home = () => {
  return (
    <div className="flex h-screen text-white bg-gray-800">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Home;
