import React from 'react';
import { IonList, IonItem, IonLabel, IonContent, IonPage } from '@ionic/react';
import ActiveButton from '../../components/ActiveButton';

/* Components */

import Header from "../../components/Header/Header"

const Service: React.FC = () => {
    return (
      <IonPage>
        <Header/>
        <IonContent>
          <Servidores />
        </IonContent>
      </IonPage>
    );
  };

const Servidores = ()=> {
  return (
  <IonContent>
    {/*-- List of Text Items --*/}
    <IonList>
      <IonItem>
        <IonLabel>Cristian D. Ceballos</IonLabel>
        <ActiveButton/>
      </IonItem>
      <IonItem>
        <IonLabel>Mateo Sánchez Toro</IonLabel>
        <ActiveButton/>
      </IonItem>
      <IonItem>
        <IonLabel>Nicolás Roldán</IonLabel>
        <ActiveButton/>
      </IonItem>
    </IonList>
  </IonContent>
);
}

export default Service;
