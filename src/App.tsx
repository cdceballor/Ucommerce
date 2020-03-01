import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AppPage } from './declarations';

import Menu from './components/Menu';
import Home from './pages/Home';
import Inventario from './pages/Inventario';
import Servicios from './pages/Servicios';
import Vendedores from './pages/Vendedores';
import { home, list, people, pricetag } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    icon: home
  },
  {
    title: 'Inventario',
    url: '/home/inventario',
    icon: list
  },
  {
    title: 'Vendedores',
    url: '/home/vendedores',
    icon: pricetag
  },
  {
    title: 'Servicios',
    url: '/home/servicios',
    icon: people
  }
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route path="/home" component={Home} exact={true} />
          <Route path="/home/vendedores" component={Vendedores} exact={true} />
          <Route path="/home/inventario" component={Inventario} exact={true} />
          <Route path="/home/servicios" component={Servicios} exact={true} />
          <Route path="/" render={() => <Redirect to="/home"/> } exact={true} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
