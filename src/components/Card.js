// !General
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
// ! Styles
import '../styles/Card.css';

dayjs.extend(relativeTime);
const STYLES = ['card-simple', 'card-extended'];

const Card = ({ cardImage, cardImageTimestamp, cardTitle, cardStyle, onClick }) => {
  
  const checkCardStyle = STYLES.includes(cardStyle) ? cardStyle : STYLES[0];

  const isNew = dayjs(cardImageTimestamp).isAfter(dayjs().subtract(7, 'day'));

  const generateCardContent = () => {
    if(checkCardStyle === STYLES[0]) {
      return (
        <div className="card__footer">
          <p className='card__title'>{cardTitle}</p>
        </div>
      );
    } else {
      if(isNew) return (
        <div className="card__footer">
          <p className="card__label">NEW</p>
          <p className="card__timestamp">{dayjs(cardImageTimestamp).fromNow()}</p>
        </div>
      );
      else return (
        <div className="card__footer">
          <p className="card__timestamp">{dayjs(cardImageTimestamp).fromNow()}</p>
        </div>
      )
    }
  }

  return (
    <div 
    className={`card ${checkCardStyle} ${isNew ? 'new' : ''}`} 
    style={{
      backgroundImage: `url(${cardImage})`,
    }}
    onClick={onClick}
    >
      {generateCardContent()}
    </div>
  );
}

export default Card;