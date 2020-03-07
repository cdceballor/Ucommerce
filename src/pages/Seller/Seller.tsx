import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent, IonRadioGroup, IonListHeader, IonPage, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonHeader, IonButton  } from '@ionic/react';

import ActiveBotton from '../../components/ActiveBotton';
import Alert from '../../components/Alert';


const Seller: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
              <ActiveBotton />
              <Alert />

            </IonButtons>
            <IonTitle>Seller</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <Vendedor />
        </IonContent>
      </IonPage>
    );
  };

const Vendedor = ()=> {
  return (
  <IonContent>
    {/*-- List of Text Items --*/}
    <IonListHeader>
      <IonLabel>Nombre del Vendedor</IonLabel>
    </IonListHeader>
    <IonList>
      <IonItem>
        <IonLabel>Cristian D. Ceballos</IonLabel>
        < ActiveBotton />
      </IonItem>
      <IonInput></IonInput>
      <IonItem>
        <IonLabel>Mateo Sánchez Toro</IonLabel>
        <Alert />
      </IonItem>
      <IonInput></IonInput>
      <IonItem>
        <IonLabel>Nicolás Roldán</IonLabel>
        <Alert />
      </IonItem>
      <IonInput></IonInput>
      <IonItem>
        <IonLabel>Paola Vallejo</IonLabel>
        <ActiveBotton />
      </IonItem>
      <IonInput></IonInput>
      <IonItem>
        <IonLabel>Super Mario Bros</IonLabel>
        <ActiveBotton />
      </IonItem>
    </IonList>
{/*--------------------------------------------------------------*/}
    {/*-- List of Sliding Items --*/}
    <IonList>
      <IonItemSliding>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      <IonItemSliding>
        <IonItemOptions side="end">
          <IonItemOption onClick={() => {}}>Unread</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>
    </IonList>
  </IonContent>
);
}

export default Seller;
