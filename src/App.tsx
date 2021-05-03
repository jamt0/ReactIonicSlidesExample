import React from "react";
import {
  IonApp,
  IonSlides,
  IonSlide,
  IonImg,
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const slideOptions = {
  slidesPerView: 3.5,
  spaceBetween: 20
};

const App: React.FC = () => (
  <IonApp>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recipes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSlides options={slideOptions} className="z-0 my-4">
          <IonSlide>
            <IonImg src="https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/01/09214916/RFB-2312-2-tacos.jpg" />
          </IonSlide>
          <IonSlide>
            <IonImg src="https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/01/09214916/RFB-2312-2-tacos.jpg" />
          </IonSlide>
          <IonSlide>
            <IonImg src="https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/01/09214916/RFB-2312-2-tacos.jpg" />
          </IonSlide>
          <IonSlide>
            <IonImg src="https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/01/09214916/RFB-2312-2-tacos.jpg" />
          </IonSlide>
          <IonSlide>
            <IonImg src="https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/01/09214916/RFB-2312-2-tacos.jpg" />
          </IonSlide>
          <IonSlide>
            <IonImg src="https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/01/09214916/RFB-2312-2-tacos.jpg" />
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  </IonApp>
);

export default App;
