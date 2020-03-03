import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonCard, IonGrid, IonRow, IonCol, IonIcon} from '@ionic/react';
import './Productos.css';
import { beer } from 'ionicons/icons';

const Productos: React.FC = () => {
    return (
    <IonPage>
        <IonContent  color="primary">
            <IonHeader >
                <IonTitle>Ucommerce</IonTitle>
            </IonHeader>

            <IonSearchbar className="my-searchbar center">
            
            </IonSearchbar>   
            
            <IonCard className="center">
                <IonGrid >
                    <IonRow>
                        <IonCol className="options">
                            Servicios
                        </IonCol>
                        <IonCol className="options">
                            Productos
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            Destacados
                        </IonCol>
                    </IonRow>



                    <IonRow>
                        <IonCol>
                            <IonIcon icon={beer} className="logo"></IonIcon>
                        </IonCol>
                        <IonCol>
                            <IonIcon icon={beer} className="logo"></IonIcon>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonIcon icon={beer} className="logo"></IonIcon>
                        </IonCol>
                        <IonCol>
                            <IonIcon icon={beer} className="logo"></IonIcon>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonIcon icon={beer} className="logo"></IonIcon>
                        </IonCol>
                        <IonCol>
                            <IonIcon icon={beer} className="logo"></IonIcon>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonIcon icon={beer} className="logo"></IonIcon>
                        </IonCol>
                        <IonCol>
                            <IonIcon icon={beer} className="logo"></IonIcon>
                        </IonCol>
                    </IonRow>

                </IonGrid> 
            </IonCard>

        </IonContent>
    </IonPage>
    );
};

export default Productos;
