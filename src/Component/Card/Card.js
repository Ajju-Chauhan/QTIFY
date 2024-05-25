import Tooltip from '@mui/material/Tooltip';
import styles from './Card.module.css';

const Card = ({ image, text, title, tooltipText }) => {
  return (
    <Tooltip
      title={tooltipText ? `${tooltipText} songs` : ``}
      placement="top"
      arrow
    >
      <div className={`${styles.cardbox} ${styles.title} ${styles.cardcontainer}`} >
        <div className={styles.card}>
          <div className={styles.cardimage}>
            <img src={image} alt={title} />
          </div>
          <div className={styles.cardtext}>
            <p>{text}</p>
          </div>
        </div>
        <div className={styles.title}>{title}</div>
      </div>
    </Tooltip>
  );
};

export default Card;