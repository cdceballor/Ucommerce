import React from 'react';
import { IonList, IonItem, IonLabel, IonContent, IonPage, IonButton, IonCard } from '@ionic/react';
import ActiveButton from '../../components/ActiveButton';

/* Components */

import Header from "../../components/Header/Header"

const availableServices = {
  data : [
    {
      id : Math.floor(Math.random()*100 + 1),
      name : 'Clase matemáticas'
    },
    {
      id : Math.floor(Math.random()*100 + 1),
      name : 'Asesoría PI1'
    },
    {
      id : Math.floor(Math.random()*100 + 1),
      name : 'Clase cálculo 1'
    }
  ]
}

const Service: React.FC = () => {
  return (
    <IonPage>
      <Header/>
      <IonContent color="primary">
        <IonCard className="center">
          <ServiceList/>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

const ServiceList = () => {
  return (
    <IonList>
      {
        availableServices.data.map((obj, i) => {
          return (
            <IonItem key={obj.id}>
              <IonLabel>{obj.name}</IonLabel>
              <IonButton color="tertiary" href="/Seller">
                ¡Quiero este Servicio!
              </IonButton>
            </IonItem>
          );
        })
      }
    </IonList>
  );
};

export default Service;
