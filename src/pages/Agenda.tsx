import React from 'react';
import { IonItem, IonLabel, IonDatetime, IonContent } from '@ionic/react';

const customDayShortNames = [
  's\u00f8n',
  'man',
  'tir',
  'ons',
  'tor',
  'fre',
  'l\u00f8r'
];

  const Agenda: React.FC = () => {
    return (
  <IonContent>
    <IonItem>
      <IonLabel>MM DD YY</IonLabel>
      <IonDatetime displayFormat="MM DD YY" placeholder="Selecciona fecha"></IonDatetime>
    </IonItem>

    <IonItem>
      <IonLabel>Disabled</IonLabel>
      <IonDatetime id="dynamicDisabled" displayFormat="MM DD YY" disabled value="1994-12-15"></IonDatetime>
    </IonItem>

    <IonItem>
      <IonLabel>D/ MMM/ YYYY/ H:mm</IonLabel>
      <IonDatetime displayFormat="D MMM YYYY H:mm A" min="2020" max="2020" value="2005-06-17T11:06Z"></IonDatetime>
    </IonItem>

  </IonContent>
);
}
export default Agenda;
