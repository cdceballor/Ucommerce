import React from "react";
import {
  IonList,
  IonItem,
  IonLabel,
  IonContent,
  IonRadioGroup,
  IonPage,
  IonButton,
  IonCard
} from "@ionic/react";

/* Components */

import Header from "../../components/Header/Header"

const availableProducts = {
  data : [
    {
      id : Math.floor(Math.random()*100 + 1),
      name : 'Mango biche'
    },
    {
      id : Math.floor(Math.random()*100 + 1),
      name : 'Gomitas'
    },
    {
      id : Math.floor(Math.random()*100 + 1),
      name : 'Burbujas jet'
    },
    {
      id : Math.floor(Math.random()*100 + 1),
      name : 'Chicles'
    },
    {
      id : Math.floor(Math.random()*100 + 1),
      name : 'Chepe patatas'
    },
    {
      id : Math.floor(Math.random()*100 + 1),
      name : 'Bombones'
    }
  ]
}

const Products: React.FC = () => {
  return (
    <IonPage>
      <Header/>
      <IonContent color="primary">
        <IonCard className="center" color="secondary">
          <ProductList/>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

const ProductList = () => {
  return (
    <IonList color="secondary">
      <IonRadioGroup slot="start" value="biff" key="1">
        {availableProducts.data.map((obj, i) => {
          return (
            <IonItem key={obj.id}>
              <IonLabel>{obj.name}</IonLabel>
              <IonButton color="tertiary" href="/Seller">
                ¡Quiero este Producto!
              </IonButton>
            </IonItem>
          );
        })}
      </IonRadioGroup>
    </IonList>
  );
};

export default Products;
