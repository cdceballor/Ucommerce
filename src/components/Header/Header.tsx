import React from 'react'
import { IonHeader, IonIcon, IonButton} from '@ionic/react';
import { home, person} from "ionicons/icons";

/* Style */
import "./Header.css"

const Header: React.FC = () => {
    return (
        <IonHeader>

            <IonButton className="home" color="tertiary" href="/Home">
                <IonIcon icon={home}/>
            </IonButton>

            <a href="/Home">uCommerce</a>

            <IonButton className="user" color="tertiary" href="/User">
                <IonIcon icon={person}/>
            </IonButton>

        </IonHeader>
    )
}

export default Header;
