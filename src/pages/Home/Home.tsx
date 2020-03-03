import {
  IonButtons,
  //IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  //IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  //IonIcon,
  //IonItem,
  //IonLabel,
  //IonList,
  //IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
  } from '@ionic/react';

//import { book, build, colorFill, grid } from 'ionicons/icons';
import Button from '../../components/Button';
import Search from '../../components/Search';

import React from 'react';
import './Home.css';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle><i>Home</i></IonTitle>
        </IonToolbar>

        <Search/>

      </IonHeader>
      <IonContent>


        <IonCard className="welcome-card">
          <img src="/assets/ucommerce.png" alt=""/>
          <IonCardHeader>
            <IonCardTitle><i>Bienvenido a Ucommerce</i></IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              <i>Disfruta</i>
            </p>
          </IonCardContent>
        </IonCard>

        <Button />

      </IonContent>
    </IonPage>
  );
};

export default HomePage;
