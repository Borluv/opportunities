import ContactCard from './contact-card/ContactCard';
import type { FC } from 'react';
import styles from './PropertyFooter.module.scss';

const PropertyFooter: FC = () => (
  <footer className={styles.footer}>
    <p className={styles.question}>Ready to Learn More?</p>
    <h2>Contact Us</h2>
    <ContactCard
      pictureURL="https://preview.redd.it/iysnv0fpu9341.png?auto=webp&s=c68b73a93c76194899dc583965a299e89b7ba683"
      name="Cheems"
      role="Meme"
      phone="555-55-5rriente"
      email="cheems@email.com"
    />
    <div className={styles.decoline} />
    <ContactCard
      pictureURL="https://th.bing.com/th/id/R.3cf3c37393739ce7f5c0ba3a179c7181?rik=fUvZED9AHykqiw&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f15900000%2ftaylor-swift-taylor-swift-15913910-1600-1200.jpg&ehk=fPcj8GRiWRCyHxfy9YKb4zFXd45NHNlamjR5rFLdBKA%3d&risl=&pid=ImgRaw&r=0"
      name="Taylor Swift"
      role="Superstar"
      phone="Not Available"
      email="superstar@email.com"
    />
  </footer>
);

export default PropertyFooter;
