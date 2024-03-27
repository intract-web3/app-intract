//@ts-nocheck
import React, { useEffect, useState } from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div style={{ width: '100%', backgroundColor: '#ddd' }}>
      <div
        style={{
          height: '20px',
          width: `${progress}%`,
          backgroundColor: 'blue',
          transition: 'width 0.1s linear'
        }}
      ></div>
    </div>
  );
};

const LineComponent = ({ text, isActive, onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer', color: isActive ? 'red' : 'black' }}>
      {text}
    </div>
  );
};

const ProgressComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let intervalId:any;

    if (progress < 100) {
      // Update progress more frequently for a smoother transition
      intervalId = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 1); // Increment by 1 for smoothness
      }, 50); // Update every 50ms
    } else {
      clearInterval(intervalId); // Clear the interval to stop the progress
      setProgress(0); // Reset progress
      setActiveIndex((current) => (current + 1) % 5); // Move to next line or loop back to the first
    }

    return () => clearInterval(intervalId);
  }, [progress]);

  const handleClick = (index:number) => {
    setActiveIndex(index);
    setProgress(0); // Reset progress on click
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <div key={index}>
          <LineComponent
            text={`Line ${index + 1}`}
            isActive={index === activeIndex}
            onClick={() => handleClick(index)}
          />
          {index === activeIndex && <ProgressBar progress={progress} />}
        </div>
      ))}
    </div>
  );
};

export default ProgressComponent;
