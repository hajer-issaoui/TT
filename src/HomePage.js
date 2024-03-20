import react from 'react';
import { BrowserRouter, Routes,Route , Link } from 'react-router-dom';
import Infrastructure from './Infrastructure';

import logoImage from './assets/LOGO_TT_.jpg'; 
import liaisonFOImage from './assets/LiaisonFo.jpeg';
import clientsFTTxImage from './assets/ClientsFTTx.jpeg';
import EquipementsTTImage from './assets/EquipementsTT.jpeg';
import './App.css';

function HomePage(){ 
return( 
    <div className="home-page">
    <header className="header">

    <nav className="navbar">
        <img src={logoImage} className='logo' width={50}/>
      <ul className="nav-links">
        <li>
          <Link to="/Infrastructure" style={{color:'inherit' , textDecoration:'none'}}>Infrastructure Fo</Link>
        </li>
       
      </ul>
    </nav>
    </header>


    <main className="main-content">
        {/* Paragraphs */}
        <section className="paragraphs">
          <h2>Welcome to the Fiber management application !</h2>
          <p>
          You can manage FO links, FTTx clients and TT devices. 
          This application allows you to have an overview and effectively control your fiber infrastructure.
          </p>
        </section>


        <h2>Main features</h2>

        <section className="cards">
          <div className="card-container">
            {/* Add individual cards with details here */}
            <div className="card-face front-face">
                <img src={liaisonFOImage}/>
                <h3>FO links</h3>
            </div>
            <div className="card-face back-face">
                <div className="container-about">
                    <h2>About</h2>
                    <p>Manage your fiber optic links centrally.</p>
                </div>
            </div>
           </div>
          
            <div className="card-container">
              <div className="card-face front-face">
                 <img src={clientsFTTxImage}/>
                 <h3>FTTx clients</h3>
              </div>
            <div className="card-face back-face">
                <div className="container-about">
                    <h2>About</h2>
                    <p>View and manage your FTTx customer information.</p>
                </div>
            </div>
           </div>


            <div className="card-container">
            <div className="card-face front-face">
                <img src={EquipementsTTImage}/>
                <h3>TT devices</h3>
            </div>
            <div className="card-face back-face">
                <div className="container-about">
                    <h2>About</h2>
                    <p>Control and supervise your line termination equipment.</p>

                </div>
            </div>
          </div>
          </section>
        </main>
        
    </div>

    
    )


 }
export default HomePage;