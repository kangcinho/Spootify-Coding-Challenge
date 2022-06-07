import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { authLogin } from '../../store/auth/AuthActionAsync';

import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Player from '../components/Player';

const CoreLayout = ({ children , history }) => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(authLogin());
  }, [dispatch]);

  return (
    <div className="main">      
      <SideBar />
      <div className="main__content">
        <Header history={history} />
        <div className="main__content__child">
          {children}
        </div>
      </div>
      <Player />
    </div>
  ); 
  
}

export default CoreLayout;
