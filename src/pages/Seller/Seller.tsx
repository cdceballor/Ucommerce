import React from 'react';
import { IonList, IonItem, IonLabel, IonItemSliding, IonItemOption, IonItemOptions, IonContent, IonPage, IonCard, IonButton} from '@ionic/react';

import ActiveButton from '../../components/ActiveButton';
import Alert from '../../components/Alert';

/* Components */

import Header from "../../components/Header/Header"


const sellers = {
  data : [
    {
      name : 'Cristian D. Ceballos',
      available : "Disponible"
    },
    {
      name : 'Mateo Sánchez Toro',
      available : "No disponible"
    },
    {
      name : 'Nicolás Roldán',
      available : "No disponible"
    }
  ]
}

const Seller: React.FC = () => {

    return (
      <IonPage>
        <Header/>
        <IonContent color="primary">
          <IonCard className="center">
            <Vendedor/>
          </IonCard>
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
            <Available obj={obj}/>
          </IonItem>
          )
        })
      }
    </IonList>
);
}

const Available = (obj: any) => {
  if (obj.obj.available === "Disponible") {
    return (
      <IonButton color="tertiary">
        Disponible
      </IonButton>
    )
  }
  return (
    <IonButton color="danger">
        No disponible
    </IonButton>
  )
}

export default Seller;
