import React, { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'

import './Carousel.css'

export const CarouselItem = ({ children, width }) => {
    return (
        <div className='carousel-item' style={{width: width}}>
            {children}
        </div>
    )
}

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }

    setActiveIndex(newIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (false) {
        updateIndex(activeIndex + 1)
      }
    }, 3000)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  })

  return (
    <div>
    <div className='carousel'
      {...handlers}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className='inner' style={{ transform: `translateX(-${activeIndex * 100}%)`}}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {width: '100%'})
        })}
      </div>
    </div>
    <div className='indicators'>
      <div className='circles'>
        {React.Children.map(children, (child, index) => {
          return (
            <div className={`${index === activeIndex ? 'circle active' : 'circle'}`}></div>
          )
        })}
      </div>
      <div className='buttons'>
        <button 
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
        </div>      
      </div>
    </div>
    
  )
}

export default Carousel

/*
      
*/