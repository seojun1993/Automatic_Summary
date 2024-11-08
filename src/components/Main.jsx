import React from 'react';
import { Outlet } from 'react-router';

const Main = () => {
  return (
    <div className="grow py-[70px]">
      <Outlet />
    </div>
  );
};

export default Main;
