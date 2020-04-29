import React from "react";
import {
  IonContent,
  IonPage,
  IonSearchbar,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonLabel,
  IonAvatar,
  IonItem,
  IonList,
  IonListHeader
} from "@ionic/react";
import "./Home.css";

/* Components */

import Header from "../../components/Header/Header"


const topProducts = {
  data : [
    {
      name : "Mango",
      img : "https://media.mercola.com/assets/images/foodfacts/mango-nutrition-facts.jpg"
    },
    {
      name : "Gomitas",
      img : "https://cdn2.cocinadelirante.com/sites/default/files/images/2017/03/gomitascaseras.jpg"
    },
    {
      name : "Burbujas jet",
      img : "https://http2.mlstatic.com/jet-burbujas-x-12-unidades-D_NQ_NP_900207-MCO29934945457_042019-F.jpg"
    },
    {
      name : "Chicles",
      img : "https://www.lacasadelasgolosinas.com/4484-large_default/chicles-trident-fresh-formato-gragea-sabor-menta.jpg"
    }
  ]
}

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="primary">
        
        <Header/>

        <IonSearchbar className="my-searchbar center"></IonSearchbar>

        <IonCard className="center" color="secondary">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton href="/service" className="Button" expand="block" color="light">
                  Servicios
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton href="/products" className="Button" expand="block" color="light">
                  Productos
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>

          <TopList/>

        </IonCard>
      </IonContent>

    </IonPage>
  );
};

const TopList = () => {
  return (
    <IonList className="center">
      <IonListHeader className="center">
        <IonLabel>
          <h3>Destacados</h3>
        </IonLabel>
      </IonListHeader>
      {
        topProducts.data.map((obj, i) => {
          return (
          <IonItem key={obj.name}>
            <IonAvatar slot="start">
              <img src={obj.img} alt={obj.name} />
            </IonAvatar>
            <IonLabel>
              <h2>{obj.name}</h2>
            </IonLabel>
          </IonItem>
          )
        })
      }
    </IonList>
  )
}

export default Home;
