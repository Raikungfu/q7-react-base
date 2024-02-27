import React, { useEffect, useState } from 'react';

const nation = ['India', 'Nepal', 'Bangladesh', 'Brazil', 'China', 'Danmark', 'Germany', 'Japan', 'Lithuania'];

const OpenSelection = () => {
  const [isOptionDivVisible, setOptionDivVisible] = useState(false);
  const [nationSelected, setNationSelected] = useState(nation[0]);
  const [isNationSelected, setIsNationSelected] = useState(false);

  const handleNationClick = () => {
    setOptionDivVisible(!isOptionDivVisible);
  };

  useEffect(() => {
    setIsNationSelected(true);
  }, [nationSelected]);

  useEffect(() => {
    setIsNationSelected(false);
    setOptionDivVisible(false);
  }, [isNationSelected]);


  const SelectNation: React.FC<{ country: string }> = ({ country }) => {
    return (
      <div className="SelectNation" onClick={() => setNationSelected(country)}>
        <i className="bi bi-geo-alt-fill"></i>
        <span>{country}</span>
      </div>
    );
  };

  return (
    <>
      <div className="nation" onClick={handleNationClick}>
        <i className="bi bi-geo-alt-fill"></i>
        <span>{nationSelected}</span>
      </div>
      <div className={`option-div ${(isOptionDivVisible && !isNationSelected) ? 'visible' : ''}`}>
        <div className='option-item'>
          {nation.map((country) => (
            <SelectNation key={country} country={country} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OpenSelection;
