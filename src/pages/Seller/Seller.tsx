import React from 'react';
import { IonList, IonItem, IonLabel, IonItemSliding, IonItemOption, IonItemOptions, IonContent, IonPage} from '@ionic/react';

import ActiveButton from '../../components/ActiveButton';
import Alert from '../../components/Alert';

/* Components */

import Header from "../../components/Header/Header"


const sellers = {
  data : [
    {
      name : 'Cristian D. Ceballos'
    },
    {
      name : 'Mateo Sánchez Toro'
    },
    {
      name : 'Nicolás Roldán'
    }
  ]
}

const Seller: React.FC = () => {

    return (
      <IonPage>
        <Header/>
        <IonContent>
          <Vendedor />
        </IonContent>
      </IonPage>
    );
  };

const Vendedor = ()=> {
  return (
    <IonList>
      {
        sellers.data.map((obj, i) => {
          return (
          <IonItem key={i}>
            <IonLabel>{obj.name}</IonLabel>
            < ActiveButton />
          </IonItem>
          )
        })
      }
    </IonList>
);
}

export default Seller;
