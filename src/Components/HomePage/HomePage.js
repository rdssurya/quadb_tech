import React, { useEffect, useState } from 'react';
import './HomePage.css';
import ShowCard from '../ShowCard/ShowCard';


const HomePage = () => {
  const [showsList, setShowsList] = useState([]);

  useEffect(()=>{
    fetchShowsList();
  },[]);

  async function fetchShowsList(){
    try{
      const results = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await results.json();
      setShowsList(data);
    } 
    catch(e){
      console.error(e);
    }
  }

  return (
    <>
      <div className='header'>Welcome To Quad Tech Shows</div>
      <div className='shows-list'>
        {showsList.map((item) => (
          <ShowCard 
            key={item.show.id}
            name={item.show.name} 
            language={item.show.language} 
            imgUrl={item.show.image ? item.show.image.medium : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAACUCAMAAADbGilTAAAASFBMVEXm5+mBgobq6+19foJ6e3/t7vB2d3vU1dfc3d+Zmp3w8fOIiY3j5OaLjJCTlJjP0NKztLehoqXIycvAwcSpqq25ur5wcXbm6ecbCzu2AAAEu0lEQVR4nO2c25akIAxFJYCA93v9/5+OWs50OWW1SiBYa3le+nWvdAwhnFQU3bp169atW7du3foOAYCUEiA0x44mzEg3bd/3baOj6xIDZKqt2TDEYlI8DLzuy+yCuJCoyjDB2au44KYqk2vRgtQm5WvQBZczo+R1aAG0ibdAF9y4UFfJBMgqJj6SzrSs05eAlbr4HNO/ErmSoUFHtfEu6aS4DxrZx2NMgGo/qEtouyhsHiTdUdQRtk5CokL3+0f1P2xI1OoM6pQGwbJANscTYIHtk+gRAhX0uahOilWYyGbFaVTG8iwELPRnM2ASr0KwagvSSQFO26Q+n61zYA15lYVssIzrQB5YeeoUWAW2Ju5iQKeWqKOI6xa0NkVgCSxxx5Wd6FneWOuMlNW2YD1hNSUqlMca7G3FDWUSnG2w1hIdZSWQB65Yn8VzUlYE6RRY0hzApOt4dFEWggzHStrFattmYGEt6VhBIeNKWLS+iTX6Ilb4onzF1oGBsiEAzBE7xpUQNZI5ipVRnluyRvUDBWU/AAeHrtsSpDMCUJiEJS0D03wIkQQp6b0gig6Ps9/FO1pUaOzDylriYYbVkPCpnPYaO1Yt60oQ9+SvR9I2YUkPradsS2xcBXiUy4zVrLigztZJUFrFlXSO8QNrMdYUdaBXo6Q4C0s7xXgV6PxcyvI00JNRNKfsKVgeJlktYHlQ1OmZMz0Ky1kT2O4AZX7sA+Mpbde6CRsdamV5mMfN/yWrdC+0nFUXcRKBqodfYxubcLXqTVAWm06yOaY8by4S1KcAGpOKd1wumGkvRToJItUaFr/wchFz06vA7qFtjeHTZVXn4399FMuLqtTRJUknTS7dRGZaKaUzmSTX9b9Kqcu26mpTjDKm7qq21PJCHs1FIJOyMil7/v/5v7/pmAjJlXABsrITw0YZmD+wuG6u4i4GqftC/HZyCVFUV/DrQpJ1247i9XmQ1llgLzSA7jb/9Ru4cR3Or/t4RJD1u23LSyqwPliv9ZDqcxewHduiDGMrhag6P3mJgxh2pTY2s21R0Bu3pTp80VqL9to1G1itjI9LaGmfNmzGQy+wHd0xhkSltMRDhESdRnBElRYs3aRrWP+RfWAcmitYCku8nfX5XQRmaIxBcy3h264JyhHpKF56PRQgOjkd/lXp2CR63IxwUAJ+xI3HNxl3ybrAevy+UA7dTVhvVwVAOUk3WVNPrLJ3maxPeeq5QCPNQ5vy84qEba625WVXDpTrZF1gPTx5JM4/rKd46vxqC6WPDJgk3NtfjCdUxlw7ClC+oR1x14FFGQh3WB23BShP3p7cevbc3Fs+Sbhd68P5iPfkcjfC3jh2TC6XecDK3nRChTvUErFceEzOHBu4ba0jcjctsHO4nZEzN5zLe/Ynueq2oPdbBWZWR/cD3MLeQTkyxCGXNI4pdpKw2AWog6xOqpb0XrEmudlIT+xd5GfkJGEz74fWrNTBCMbSPnxeDhIWWiJWB6Pj4z+OhJOTzRPELw2cYnXwqwT+G5eFtcBvH2makuWiEFA0WYvQE0M6Vo5uC6GhOGEnCXSBhZaMtUeijo02GWuFZiXpsmZW9P3wq1i9TrJWrOgVJDpW/k2s5mYNw/oH+Mk/Tu7VE88AAAAASUVORK5CYII='}
            rating={item.show.rating.average}
          />
        ) )}
      </div>
    </>
  );
};

export default HomePage;