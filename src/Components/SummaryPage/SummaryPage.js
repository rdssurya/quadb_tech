import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SummaryPage.css';

const SummaryPage = () => {
  const { state } = useLocation();
  const [buttonClicked, setButtonClicked] = useState(false);
  const [ticketsBooked, setTicketsBooked] = useState(false);
  const [detailsNotFilled, setDetailsNotFilled] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState(0);

  const handleBooking = (e) => {
    e.preventDefault();
    if(name && number>0){
      setTicketsBooked(true);
      const obj = {
        userName: name,
        numberOfTickets: number,
        showName: state.show.name,
        showLanguage: state.show.language,
        showRuntime: state.show.runtime
      }
      localStorage.setItem('userDetails',JSON.stringify(obj));
      setTimeout(()=>{setTicketsBooked(false)}, 2000);
      setName('');
      setNumber(0);
    }
    else{
      setDetailsNotFilled(true);
      setTimeout(()=>{setDetailsNotFilled(false)}, 2000);
    }
  }
  
  return (
    <div className='summary-contents'>
      <div className='summary-card'>
        <div className='details-div'> 
          <img className='summary-image' src={state.show.image? state.show.image.medium : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAACUCAMAAADbGilTAAAASFBMVEXm5+mBgobq6+19foJ6e3/t7vB2d3vU1dfc3d+Zmp3w8fOIiY3j5OaLjJCTlJjP0NKztLehoqXIycvAwcSpqq25ur5wcXbm6ecbCzu2AAAEu0lEQVR4nO2c25akIAxFJYCA93v9/5+OWs50OWW1SiBYa3le+nWvdAwhnFQU3bp169atW7du3foOAYCUEiA0x44mzEg3bd/3baOj6xIDZKqt2TDEYlI8DLzuy+yCuJCoyjDB2au44KYqk2vRgtQm5WvQBZczo+R1aAG0ibdAF9y4UFfJBMgqJj6SzrSs05eAlbr4HNO/ErmSoUFHtfEu6aS4DxrZx2NMgGo/qEtouyhsHiTdUdQRtk5CokL3+0f1P2xI1OoM6pQGwbJANscTYIHtk+gRAhX0uahOilWYyGbFaVTG8iwELPRnM2ASr0KwagvSSQFO26Q+n61zYA15lYVssIzrQB5YeeoUWAW2Ju5iQKeWqKOI6xa0NkVgCSxxx5Wd6FneWOuMlNW2YD1hNSUqlMca7G3FDWUSnG2w1hIdZSWQB65Yn8VzUlYE6RRY0hzApOt4dFEWggzHStrFattmYGEt6VhBIeNKWLS+iTX6Ilb4onzF1oGBsiEAzBE7xpUQNZI5ipVRnluyRvUDBWU/AAeHrtsSpDMCUJiEJS0D03wIkQQp6b0gig6Ps9/FO1pUaOzDylriYYbVkPCpnPYaO1Yt60oQ9+SvR9I2YUkPradsS2xcBXiUy4zVrLigztZJUFrFlXSO8QNrMdYUdaBXo6Q4C0s7xXgV6PxcyvI00JNRNKfsKVgeJlktYHlQ1OmZMz0Ky1kT2O4AZX7sA+Mpbde6CRsdamV5mMfN/yWrdC+0nFUXcRKBqodfYxubcLXqTVAWm06yOaY8by4S1KcAGpOKd1wumGkvRToJItUaFr/wchFz06vA7qFtjeHTZVXn4399FMuLqtTRJUknTS7dRGZaKaUzmSTX9b9Kqcu26mpTjDKm7qq21PJCHs1FIJOyMil7/v/5v7/pmAjJlXABsrITw0YZmD+wuG6u4i4GqftC/HZyCVFUV/DrQpJ1247i9XmQ1llgLzSA7jb/9Ru4cR3Or/t4RJD1u23LSyqwPliv9ZDqcxewHduiDGMrhag6P3mJgxh2pTY2s21R0Bu3pTp80VqL9to1G1itjI9LaGmfNmzGQy+wHd0xhkSltMRDhESdRnBElRYs3aRrWP+RfWAcmitYCku8nfX5XQRmaIxBcy3h264JyhHpKF56PRQgOjkd/lXp2CR63IxwUAJ+xI3HNxl3ybrAevy+UA7dTVhvVwVAOUk3WVNPrLJ3maxPeeq5QCPNQ5vy84qEba625WVXDpTrZF1gPTx5JM4/rKd46vxqC6WPDJgk3NtfjCdUxlw7ClC+oR1x14FFGQh3WB23BShP3p7cevbc3Fs+Sbhd68P5iPfkcjfC3jh2TC6XecDK3nRChTvUErFceEzOHBu4ba0jcjctsHO4nZEzN5zLe/Ynueq2oPdbBWZWR/cD3MLeQTkyxCGXNI4pdpKw2AWog6xOqpb0XrEmudlIT+xd5GfkJGEz74fWrNTBCMbSPnxeDhIWWiJWB6Pj4z+OhJOTzRPELw2cYnXwqwT+G5eFtcBvH2makuWiEFA0WYvQE0M6Vo5uC6GhOGEnCXSBhZaMtUeijo02GWuFZiXpsmZW9P3wq1i9TrJWrOgVJDpW/k2s5mYNw/oH+Mk/Tu7VE88AAAAASUVORK5CYII='} alt="show-name"/>
          <div className='summary-show-details'>
            <span>Show Name: <b>{state.show.name}</b></span>
            <span>Language: <b>{state.show.language}</b></span>
            <span>Type: <b>{state.show.type}</b></span>
            <span>Runtime: <b>{state.show.runtime ? state.show.runtime:60} mins</b></span>
          </div>
        </div>
        <div>
          <span><u><b>SUMMARY:</b></u> </span>
          <span dangerouslySetInnerHTML={{ __html: state.show.summary }} />
          <button className='book-tickets-button' onClick={() => setButtonClicked(!buttonClicked)}>Close / Open Bookings</button>
        </div>
      </div>
      <form className='form-details' style={{display: buttonClicked ? 'flex' : 'none'}}>
          <div style={{textAlign:'center', width:'100%',fontSize:'20px'}}><b><u>Fill in your details</u></b></div>
          <span>Show Name: <b>{state.show.name}</b></span>
          <span>Language: <b>{state.show.language}</b></span>
          <span>Type: <b>{state.show.type}</b></span>
          <span>Runtime: <b>{state.show.runtime ? state.show.runtime:60} mins</b></span>
          <span>Name: <input 
                          type="text" 
                          placeholder='Please enter your name' 
                          onChange={(e)=>setName(e.target.value)} 
                          value={name}
                          /></span>
          <span>No. of tickets: <input 
                                  type="number" 
                                  min="1" 
                                  max="100" 
                                  step="1" 
                                  onChange={(e)=>setNumber(e.target.value)} 
                                  value={number} 
                                  /></span>
          <button onClick={handleBooking} type="submit" className='book-tickets-button'>BOOK</button>
          {ticketsBooked && <span className='happy-msg'>Yayy! Tickets Booked Successfully!</span>}
          {detailsNotFilled && <span className='error-msg'>Please enter valid details...</span>}
      </form>
    </div>
  );
};

export default SummaryPage;