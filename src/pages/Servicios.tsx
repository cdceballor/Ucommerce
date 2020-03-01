import React from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent, IonRadioGroup, IonListHeader, IonPage, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonHeader,IonButton } from '@ionic/react';
import Agenda from '../components/Agenda';

const Servicios: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Servicios</IonTitle>
          </IonToolbar>
        </IonHeader>
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
    <IonListHeader>
      <IonLabel>Nombre del Proveedor de servicio</IonLabel>
    </IonListHeader>
    <IonList>
      <IonItem>
        <IonLabel>Cristian D. Ceballos</IonLabel>
        <IonButton color="primary">Activo </IonButton>
      </IonItem>
      <IonInput></IonInput>
      <IonItem>
        <IonLabel>Mateo Sánchez Toro</IonLabel>
        <IonButton color="primary">Activo </IonButton>
      </IonItem>
      <IonInput></IonInput>
      <IonItem>
        <IonLabel>Nicolás Roldán</IonLabel>
        <IonButton color="primary">Activo </IonButton>
      </IonItem>
      <IonInput></IonInput>
      <IonItem>
        <IonLabel>Paola Vallejo</IonLabel>
        <IonButton color="primary">Activo </IonButton>
      </IonItem>
      <IonInput></IonInput>
      <IonItem>
        <IonLabel>Super Mario Bros</IonLabel>
        <IonButton color="danger">Inactivo </IonButton>
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

export default Servicios;
