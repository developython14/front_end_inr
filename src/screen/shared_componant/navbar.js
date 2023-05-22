import React from 'react';

export const Header = () => {
  return (
    <>
  {/* Hello world */}
  {/* ======= Header ======= */}
  <header id="header" className="fixed-top d-flex align-items-center ">
    <div className="container d-flex justify-content-between align-items-center">
      <div className="logo">
        <h1 className="text-light">
          <a href="../index.html">INREPM</a>
          <a href="index-2.html"> Intranet</a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <a className="active" href="outils.html" title="Outils">
              <i
                className="fa-solid fa-screwdriver-wrench"
                style={{ fontSize: 27 }}
              />
              {/*Outils*/}
            </a>
          </li>
          <li>
            <a href="monespace.html" title="Espace personnel">
              <i
                className="fa-solid fa-chalkboard-user"
                style={{ fontSize: 27 }}
              />
              {/*Mon espace*/}
            </a>
          </li>
          <li>
            <a href="team.html" title="Mon Equipe">
              <i
                className="fa-solid fa-people-group"
                style={{ fontSize: 27 }}
              />
              {/*Mon équipe*/}
            </a>
          </li>
          <li className="dropdown">
            <a href="blog.html" title="Vie de l'entreprise">
              <i className="bi bi-buildings" style={{ fontSize: 27 }} />
              {/*Vie de l'entreprise*/}
            </a>
            <ul>
              <li>
                <a href="#">Plan du site</a>
              </li>
              <li>
                <a href="#">Organigramme / annuaire</a>
              </li>
              <li>
                <a href="#">CSE</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Ressources</span>
                  <i className="bi bi-chevron-right" />
                </a>
                <ul>
                  <li>
                    <a href="#">Bibliothèque</a>
                  </li>
                  <li>
                    <a href="#">Vidéothèque</a>
                  </li>
                  <li>
                    <a href="#">Formations</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Evénements</a>
              </li>
              <li>
                <a href="blog.html">Newsletter</a>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" title="Services support">
              <i className="fas fa-hands-helping" style={{ fontSize: 27 }} />
              <span>{/*Services support*/}</span>
            </a>
            <ul>
              <li className="dropdown">
                <a href="#">
                  <span>Comptabilité</span>{" "}
                  <i className="bi bi-chevron-right" />
                </a>
                <ul>
                  <li>
                    <a href="#">Valider une facture</a>
                  </li>
                  <li>
                    <a href="#">Remboursement note de frais</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Service Achats</span>{" "}
                  <i className="bi bi-chevron-right" />
                </a>
                <ul>
                  <li>
                    <a href="#">Créer une demande d'achats</a>
                  </li>
                  <li>
                    <a href="#">Process Achats</a>
                  </li>
                  <li>
                    <a href="#">Indiquer un litige</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">IT</a>
              </li>
              <li>
                <a href="#">Service Juridique</a>
              </li>
              <li>
                <a href="#">RH</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">
              <i
                className="fa-regular fa-comments"
                style={{ fontSize: 27 }}
                title=" Réseau"
              />
            </a>
          </li>
          <li>
            <a href="" title="Notifications">
              <i className="bi bi-bell" style={{ fontSize: 27 }} />
              {/*notifications*/}
            </a>
          </li>
          <li>
            <a href="" title="Tickets">
              <i className="fa-solid fa-ticket" style={{ fontSize: 27 }} />
              {/*tickets */}
            </a>
          </li>
          <li>
            <a href="" title="Messagerie">
              <i className="fa-regular fa-envelope" style={{ fontSize: 27 }} />
              {/*messagerie*/}
            </a>
          </li>
          <li className="dropdown">
            <a href="profile.html" title="Profil">
              <i className="bi bi-person-circle" style={{ fontSize: 32 }} />
              {/* profil */}
            </a>
            <ul>
              <li>
                <a href="#">Editer</a>
              </li>
              <li>
                <a href="#">Préférences</a>
              </li>
              <li>
                <a href="#">Déconnexion</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="utilitaires.html" title="Apps">
              <i className="bi bi-boxes" style={{ fontSize: 27 }} />
              {/*APP*/}
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
    </div>
  </header>
  {/* End Header */}
</>
  )}


