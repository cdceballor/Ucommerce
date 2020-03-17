import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent, IonRadioGroup, IonListHeader, IonPage } from '@ionic/react';
import Alert from '../../components/Alert';
import ActiveBotton from '../../components/ActiveBotton';

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
        <ActiveBotton/>
      </IonItem>
      <IonInput></IonInput>
      <IonItem>
        <IonLabel>Mateo Sánchez Toro</IonLabel>
        <ActiveBotton/>
      </IonItem>
      <IonInput></IonInput>
      <IonItem>
        <IonLabel>Nicolás Roldán</IonLabel>
        <ActiveBotton/>
      </IonItem>
      <IonInput></IonInput>
      <IonItem>
        <IonLabel>Paola Vallejo</IonLabel>
        <ActiveBotton/>
      </IonItem>
      <IonInput></IonInput>
      <IonItem>
        <IonLabel>Super Mario Bros</IonLabel>
        <Alert/>
      </IonItem>
    </IonList>

    {/*-- List of Input Items --*/}
    <IonList>
<IonRadioGroup value="biff">
  <IonListHeader>
    <IonLabel>Tipo de servicio</IonLabel>
  </IonListHeader>

  <IonItem>
    <IonLabel>Monitorías de cálculo</IonLabel>
    <IonRadio slot="start" value="biff" />
  </IonItem>

  <IonItem>
    <IonLabel>Monitorías de lógica</IonLabel>
    <IonRadio slot="start" value="griff" />
  </IonItem>

  <IonItem>
    <IonLabel>Monitorías de cálculo</IonLabel>
    <IonRadio slot="start" value="buford" />
  </IonItem>
</IonRadioGroup>
{/*--------------------------------------------------------------*/}
      <IonItem>
        <IonLabel>Monitorías de citación</IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>
      <IonItem>
        <IonLabel>Monitorías de Proyecto integrador 1</IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>
      <IonItem>
        <IonLabel>Monitorías de física II</IonLabel>
        <IonCheckbox slot="start" />
      </IonItem>
      <IonItem>
        <IonLabel>Monitorías de natación</IonLabel>
        <IonCheckbox slot="start" />
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

export default Service;
