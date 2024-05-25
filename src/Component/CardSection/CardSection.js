import { useEffect, useState } from 'react';

import CardCarouselSection from '../CardCarouselSection/CardCarouselSection';
import CardGridSection from '../CardGridSection/CardGridSection';
import Filters from '../Filters/Filters';
import styles from './CardSection.module.css';

const CardSection = ({ name, songsData, showFilters }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [filteredSongsData, setFilteredSongsData] = useState([]);

  useEffect(() => {
    setFilteredSongsData([...songsData]);
  }, [songsData]);

  return (
    <div className={styles.sectioncontainer}>
      <div className={styles.textcontainer}>
        <p>{name}</p>
        <p
          className={styles.collapsebtn}
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          {isCollapsed ? 'Show all' : 'Collapse'}
        </p>
      </div>
      {showFilters ? (
        <Filters
          setFilteredSongsData={setFilteredSongsData}
          songsData={songsData}
        />
      ) : null}
      <div className={styles.cardcontainer}>
        {isCollapsed ? (
          <CardCarouselSection name={name} songsData={filteredSongsData} />
        ) : (
          <>
            <CardGridSection songsData={filteredSongsData} />
          </>
        )}
      </div>
    </div>
  );
};

export default CardSection;