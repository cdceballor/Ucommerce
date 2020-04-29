import React from "react";
import {
  IonContent,
  IonPage,
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonAvatar,
  IonItem
} from "@ionic/react";
import "./User.css";

/* Components */

import Header from "../../components/Header/Header"


const profile = {
  name : "Pablo Pineda",
  email: "pablo@mail.com",
  img : "https://lgfstatic.com/2015/conversions/virtudes-de-una-persona-large.jpg"
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

            <IonRow>
              <IonCol>
                  <IonAvatar className='avatar' >
                    <img src={profile.img}  alt={profile.name} />
                  </IonAvatar>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonRow>
                  <IonCol className="data">
                  Nombre:  {profile.name}
                  </IonCol>
                </IonRow>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonRow>
                  <IonCol className="data">
                  Email:  {profile.email}
                  </IonCol>
                </IonRow>
              </IonCol>
          </IonRow>

          </IonGrid>

        </IonCard>
      </IonContent>

    </IonPage>
  );
};

export default user;