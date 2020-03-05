import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {square} from 'ionicons/icons';


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

/* Views */
import Home from './pages/Home/Home'
import Productos from './pages/Productos/Productos';
import Servicios from './pages/Servicios/Servicios';
import Vendedores from './pages/Vendedores/Vendedores';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/Home" component={Home} exact={true} />
          <Route path="/Productos" component={Productos} exact={true} />
          <Route path="/Servicios" component={Servicios} exact={true} />
          <Route path="/Vendedores" component={Vendedores} exact={true} />
          <Route path="/" render={() => <Redirect to="/Home" />} exact={true} />
        </IonRouterOutlet>
        

        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/Home">
            <IonIcon icon={square} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab2" href="/Productos">
            <IonIcon icon={square} />
            <IonLabel>Productos</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab3" href="/Servicios">
            <IonIcon icon={square} />
            <IonLabel>Servicios</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab4" href="/Vendedores">
            <IonIcon icon={square} />
            <IonLabel>Vendedores</IonLabel>

          </IonTabButton>
        </IonTabBar>

      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

