import React from 'react'
import SideBar from './compo/SideBar';
// import Header from './compo/Header';
import Header from './compo/Header';
import Ecommerce from './compo/section/Ecommerce';
//importation du css dasboard


import Head from './compo/Head';

function Index(props) {

  var titre = props.title;


  document.title = titre;


  return (
    <>

    <Head /> {/* Inclure le composant Head ici */}
      <SideBar />
      <main className="main-wrapper">
        <Header />
        <Ecommerce />
      </main>

    </>

  );
}

export default Index
