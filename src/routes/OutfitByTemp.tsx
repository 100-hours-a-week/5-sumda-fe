import React from "react";
import './styles/OutfitByTemp.css';
import outfit from '../assets/Outfit.png';

const OutfitByTemp: React.FC = () => {
  return (
    <div>
        <h2 className="title">기온별 옷차림 추천</h2>
        <img src={outfit} className="outfit"/>
    </div>
  );
};

export default OutfitByTemp;