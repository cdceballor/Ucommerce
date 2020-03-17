import { IonContent, IonIcon, IonItem, IonList, IonPage} from '@ionic/react';
import { americanFootball, basketball, beer, bluetooth, boat, build, flask, football, paperPlane, wifi, pizza } from 'ionicons/icons';
import React from 'react';

/* Components */

import Header from "../../components/Header/Header"

const Inventario: React.FC = () => {
  return (
    <IonPage>
      <Header/>
      <IonContent>
        <ListItems />
      </IonContent>
    </IonPage>
  );
};

const ListItems = () => {
  const icons = [
    flask,
    wifi,
    beer,
    football,
    basketball,
    paperPlane,
    americanFootball,
    boat,
    bluetooth,
    build,
    pizza
  ];

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(x => {
    return (
      <IonItem key={x}>
        <IonIcon icon={icons[x - 1]} slot="start" />
        Item {x}
        <div className="item-note" slot="end">
          Producto # {x} de tu inventario
        </div>
      </IonItem>
    );
  });

  return <IonList>{items}</IonList>;
};

export default Inventario;
