import React, { useEffect, useState, useRef } from 'react';

function FernandoComponent() {
  const [sequence, setSequence] = useState('');
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: { key: any }) => {
      const key = event.key;
      const updatedSequence = sequence + key;

      setSequence(updatedSequence);

      if (updatedSequence.includes('33')) {
        setSequence('');
        setShowVideo(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [sequence]);

  useEffect(() => {
    if (showVideo && videoRef.current !== null) {
      videoRef.current.play();
    }
  }, [showVideo]);

  const handleVideoEnded = () => {
    setShowVideo(false);
  };

  return (
    <div>
      {showVideo && (
        <video className='animate-in' ref={videoRef} onEnded={handleVideoEnded} src='33.mp4' />
      )}
    </div>
  );
}

export default FernandoComponent;
