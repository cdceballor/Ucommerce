import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { square } from "ionicons/icons";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./App.css";

/* Views */
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Service from "./pages/Service/Service";
import Seller from "./pages/Seller/Seller";


/* Components */

import Header from "./components/Header/Header"

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/Home" component={Home} exact={true} />
          <Route path="/Products" component={Products} exact={true} />
          <Route path="/Service" component={Service} exact={true} />
          <Route path="/Seller" component={Seller} exact={true} />
          <Route path="/" render={() => <Redirect to="/Home" />} exact={true} />
        </IonRouterOutlet>

        <Header></Header>
        
        <IonTabBar slot="bottom">
            
            <IonTabButton tab="tab1" href="/Home" className="style">
              <IonIcon icon={square} />
              <IonLabel >Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="tab2" href="/Products">
              <IonIcon icon={square} />
              <IonLabel >Products</IonLabel>
            </IonTabButton>

            <IonTabButton tab="tab3" href="/Service">
              <IonIcon icon={square} />
              <IonLabel >Service</IonLabel>
            </IonTabButton>

            <IonTabButton tab="tab4" href="/seller">
              <IonIcon icon={square} />
              <IonLabel >Sellers</IonLabel>
            </IonTabButton>
            
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
