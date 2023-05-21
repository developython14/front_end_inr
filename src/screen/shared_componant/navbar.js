import React from 'react';

export const Header = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <h1 className="text-light">
            <a href="../index.html">INREPM</a>
            <a href="index-2.html"> Intranet</a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a> */}
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="active" href="outils.html" title="Outils"><i className="fa-solid fa-screwdriver-wrench" style={{ fontSize: '27px' }}></i>{/* Outils */}</a></li>
            <li><a href="monespace.html" title="Espace personnel"><i className="fa-solid fa-chalkboard-user" style={{ fontSize: '27px' }}></i>{/* Mon espace */}</a></li>
            <li><a href="team.html" title="Mon Equipe"><i className="fa-solid fa-people-group" style={{ fontSize: '27px' }}></i>{/* Mon équipe */}</a></li>
            <li className="dropdown">
              <a href="blog.html" title="Vie de l'entreprise">
                <i className="bi bi-buildings" style={{ fontSize: '27px' }}></i>{/* Vie de l'entreprise */}
              </a>
              <ul>
                <li><a href="#">Plan du site</a></li>
                <li><a href="#">Organigramme / annuaire</a></li>
                <li><a href="#">CSE</a></li>
                <li className="dropdown">
                  <a href="#"><span>Ressources</span><i className="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Bibliothèque</a></li>
                    <li><a href="#">Vidéothèque</a></li>
                    <li><a href="#">Formations</a></li>
                  </ul>
                </li>
                <li><a href="#">Événements</a></li>
                <li><a href="blog.html">Newsletter</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" title="Services support">
                <i className="fas fa-hands-helping" style={{ fontSize: '27px' }}></i>
                <span>{/* Services support */}</span>
              </a>
              <ul>
                <li className="dropdown">
                  <a href="#"><span>Comptabilité</span> <i className="bi bi-chevron-right"></i></a>
                  <ul>
                    <li><a href="#">Valider une facture</a></li>
                    <li><a href="#">Remboursement note de frais</a></li>
                  </ul>
                </li>
                <li class="dropdown"><a href="#"><span>Service Achats</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Créer une demande d'achats</a></li>
                  <li><a href="#">Process Achats</a></li>
                  <li><a href="#">Indiquer un litige</a></li>
                </ul>
              </li>
              <li><a href="#">IT</a></li>
              <li><a href="#">Service Juridique</a></li>
              <li><a href="#">RH</a></li>
            </ul>
          </li>
          <li><a href=""><i class="fa-regular fa-comments"style="font-size:27px" title=" Réseau"></i></a></li>
          <li><a href="" title="Notifications"><i class="bi bi-bell"style="font-size: 27px"></i></a></li>
          <li><a href="" title="Tickets"><i class="fa-solid fa-ticket"style="font-size: 27px"></i></a></li>
          <li><a href="" title="Messagerie"><i class="fa-regular fa-envelope" style="font-size: 27px"></i></a></li>
          <li class="dropdown"><a href="profile.html" title="Profil"><i class="bi bi-person-circle"style="font-size: 32px"></i></a>
            <ul>
              <li><a href="#">Editer</a></li>
              <li><a href="#">Préférences</a></li>
              <li><a href="#">Déconnexion</a></li>
            </ul>
          </li>
          <li><a href="utilitaires.html" title="Apps"><i class="bi bi-boxes"style="font-size: 27px"></i></a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>)}


