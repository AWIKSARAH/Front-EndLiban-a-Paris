import React, { useState } from 'react';
import ActionAreaCard from '../../components/listingcard/card';
import "./fourCardsSlider.css"
import { IconButton } from '@mui/material';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Slider(props) {
  const [currentPosition, setCurrentPosition] = useState(0);

  const { cardData } = props;

  const totalCards = cardData.length;
  const cardWidth = 300; // Change this to adjust the card width
  const wrapperWidth = totalCards * cardWidth; // Width of the slider wrapper
  const maxPosition = -wrapperWidth + 4 * cardWidth; // Maximum position of the slider

  function handlePrevClick() {
    if (currentPosition < 0) {
      setCurrentPosition(currentPosition + cardWidth);
    }
  }

  function handleNextClick() {
    if (currentPosition > maxPosition) {
      setCurrentPosition(currentPosition - cardWidth);
    }
  }

  return (
    <div className="slider">
      <h2>
        Latest Additions To Our Website
      </h2>
      <div className="slider-wrapper" style={{ transform: `translateX(${currentPosition}px)`, width: `${wrapperWidth}px` }}>
        {cardData.map((card, index) => (
          <div key={index} className="carde" style={{ width: `${cardWidth}px` }}>
            <ActionAreaCard {...card} />
          </div>
        ))}
      </div>
      <IconButton className="slider-prev" onClick={handlePrevClick} disabled={currentPosition >= 0}><FaChevronLeft/></IconButton>
      <IconButton className="slider-next" onClick={handleNextClick} disabled={currentPosition <= maxPosition}><FaChevronRight/></IconButton>
    </div>
  );
}

export default Slider;
