import React, { Fragment, useEffect } from "react";
import GrapesJS from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapesjs/dist/grapes.min.js';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css';
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js';


function Dashboard() {
  useEffect(()=>{
    GrapesJS.init({
          container: '#gjs',
          plugins: ['gjs-preset-webpage']
      })
  },[])
  return (
    <Fragment>
        <div id="gjs"></div>
    </Fragment>
  );
}

export default Dashboard;
