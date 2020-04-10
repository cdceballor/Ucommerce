import React from 'react';
import { IonList, IonItem, IonLabel, IonItemSliding, IonItemOption, IonItemOptions, IonContent, IonPage} from '@ionic/react';

import ActiveBotton from '../../components/ActiveButton';
import Alert from '../../components/Alert';

/* Components */

import Header from "../../components/Header/Header"

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
  <IonContent>
    {/*-- List of Text Items --*/}
    <IonList>
      <IonItem>
        <IonLabel>Cristian D. Ceballos</IonLabel>
        < ActiveBotton />
      </IonItem>
      <IonItem>
        <IonLabel>Mateo Sánchez Toro</IonLabel>
        <Alert />
      </IonItem>
      <IonItem>
        <IonLabel>Nicolás Roldán</IonLabel>
        <Alert />
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
