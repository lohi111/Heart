import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './Song.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
        My Dear Chinnu 🖤 ,
        You know nvu naku crush ani ! But crush is strating thing or step for love ! nvu anta pranam , nvu lekapotha chachipoth ani cheppanu gani me parents taruvatha ninnu 
        valla kanna annanu kani vallu preminchinatu premista ! nvu ok anu chalu , life kotha ga vuntundhi , nvu ok annagana simhachalam
          velali , ninnnu baga chusukovali , nenu oka manchi job tecchukovali , intlo oppinchi pelli chasukovali , pilallu 
            illu antuu,life long premistu ninnu chustu brathikayali,na dream idi,na dream ni full chyu bangram . 
              DISCLIMAR: Please mataladam manayaku !
        <br />
        @Lohith
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
