import React from 'react';
import {  Link } from 'react-router-dom';
import { Button } from '@mui/material';
export default function NavBar() {
  return (
    

      <div className='fixed top-0 left-0 w-full bg-slate-300 shadow-md p-2 z-40 '>
        <div className='container mx-auto flex justify-end items-center'>
          <Link to='/'> <Button> Home </Button></Link>
          <Link to='/about'><Button> About</Button></Link>
          <Link to='/loginPage'><Button> LogIn</Button></Link>
          <Link to='/weather'><Button> Weather</Button></Link>
        </div>
      </div>
    

  );
}
