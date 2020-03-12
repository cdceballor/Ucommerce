import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonSearchbar,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonLabel,
  IonAvatar,
  IonItem,
  IonIcon
} from "@ionic/react";
import "./Home.css";
import { person, home, square } from "ionicons/icons";
import Button from './../../components/Button';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="primary">
        <IonHeader>
          <IonTitle>uCommerce
          <IonButton href="/home" color="secondary" align-right> <IonIcon icon={person}/></IonButton>
          </IonTitle>
        </IonHeader>

        <IonSearchbar className="my-searchbar center"></IonSearchbar>

        <IonCard className="center" color="secondary">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton href="/service" className="Button" expand="block" color="light">
                  Servicios
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton href="/products" className="Button" expand="block" color="light">
                  Productos
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="label">
                <IonLabel color="light">Destacados</IonLabel>
              </IonCol>
            </IonRow>
          </IonGrid>


          <IonItem>
            <IonAvatar slot="start">
              <img src="https://media.mercola.com/assets/images/foodfacts/mango-nutrition-facts.jpg" />
            </IonAvatar>
            <IonLabel>Mango</IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img src="https://cdn2.cocinadelirante.com/sites/default/files/images/2017/03/gomitascaseras.jpg" />
            </IonAvatar>
            <IonLabel>Gomitas</IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img src="https://http2.mlstatic.com/jet-burbujas-x-12-unidades-D_NQ_NP_900207-MCO29934945457_042019-F.jpg" />
            </IonAvatar>
            <IonLabel>Burbujas Jet</IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img src="https://www.lacasadelasgolosinas.com/4484-large_default/chicles-trident-fresh-formato-gragea-sabor-menta.jpg" />
            </IonAvatar>
            <IonLabel>Chicles</IonLabel>
          </IonItem>


        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
