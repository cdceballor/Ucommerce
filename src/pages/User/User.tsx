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
  IonItem
} from "@ionic/react";
import "./User.css";

/* Components */

import Header from "../../components/Header/Header"


const profile = {
  data : [
    {
      name : "Pablo Pineda",
      email: "pablo@mail.com",
      img : "https://lgfstatic.com/2015/conversions/virtudes-de-una-persona-large.jpg"
    },
  ]
}

const user: React.FC = () => {
  return (
    <IonPage>
      <IonContent color="primary">
        
        <Header/>

        <IonCard className="center" color="secondary">
          <IonGrid>

            <IonRow>
              <IonCol className="label">
                <IonLabel color="light">Mi perfil</IonLabel>
              </IonCol>
            </IonRow>

            <TopList/>

          </IonGrid>

        </IonCard>
      </IonContent>

    </IonPage>
  );
};

const TopList = () => {
  return (
    <div>
      { 
        profile.data.map((obj, i) => {
          return (
          <IonRow>
            <IonCol>
              <IonItem key={obj.name}>
                <IonAvatar className='avatar' >
                  <img src={obj.img}  alt={obj.name} />
                </IonAvatar>
              </IonItem>
                <IonItem>
                  <IonRow>
                    <IonCol>
                    <p className='data'>Nombre:  {obj.name}</p>
                    </IonCol>
                  </IonRow>
                </IonItem>

                <IonItem>
                  <IonRow>
                    <IonCol>
                    Email:  {obj.email}
                    </IonCol>
                  </IonRow>
                </IonItem>
                
            </IonCol>
          </IonRow>
          )
        })
      }
    </div>
  )
}

export default user;