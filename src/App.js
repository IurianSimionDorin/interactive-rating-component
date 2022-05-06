import Star from './assets/images/icon-star.svg';
import Illustration from './assets/images/illustration-thank-you.svg';

import './App.css';
import { useState } from 'react';

function App() {
  const [rankingVisible, setRankingVisible] = useState(true);
  const [count, setCount] = useState(0);

  return (
    <div>
      {
        rankingVisible
          ?
          <div className="rating-form-container">

            <div className="rating-form">

              <img className='star' src={Star} alt="star" />
              <h2 className="question">
                How did we do?
              </h2>
              <p className="question-description">
                Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
              </p>

              <div className="btn-container">
                <button className="btn" onClick={() => setCount(1)}>1</button>
                <button className="btn" onClick={() => setCount(2)}>2</button>
                <button className="btn" onClick={() => setCount(3)}>3</button>
                <button className="btn" onClick={() => setCount(4)}>4</button>
                <button className="btn" onClick={() => setCount(5)}>5</button>
              </div>

              <button className="buttonSubmit" onClick={() => setRankingVisible(false)}>
                Submit
              </button>

            </div >
          </div >
          :
          <div className="message-form-container">

            <div className="message-form">

              <img className='Illustration' src={Illustration} alt="Illustration" />
              <p className="message-result">You selected out of {count}</p>
              <h2 className='message'>Thank you!</h2>
              <p className='message message-large'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>

            </div>

          </div>
      }

      <div className="footer">
        <p>Challenge by Frontend Mentor. Coded by Iurian Simion Dorin.</p>
      </div>
    </div>
  )
}
export default App;
