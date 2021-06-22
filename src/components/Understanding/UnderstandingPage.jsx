import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function UnderstandingPage() {
  const history = useHistory(); // used to push the next page
  const dispatch = useDispatch(); // used to send feeling score to redux

  const [understanding, setUnderstanding] = useState(0);
  console.log(understanding);

  function nextButton(event) {
    if (Number(understanding) === 0 || Number(understanding) === NaN) {
      alert('Please enter a value');
      return;
    }
    let formFeedback = understanding;

    dispatch({
      type: 'SET_UNDERSTANDING',
      payload: formFeedback,
    });
    history.push('/support');
  }

  return (
    <div className='App'>
      <h2>How well are you understanding the content?</h2>
      <br />
      <form className='form-rating' onSubmit={(event) => nextButton(event)}>
        Select Rating <br />
        <select
          className='drop-down'
          name='Select Rating'
          onChange={(event) => setUnderstanding(event.target.value)}
          required
        >
          <option defaultValue={'DEFAULT'} selected disabled>
            - Select a Rating -
          </option>
          <option value={5}>5: Excellent</option>
          <option value={4}>4: Good</option>
          <option value={3}>3: I'm Ok</option>
          <option value={2}>2: Not So Good</option>
          <option value={1}>1: Horrible</option>
        </select>
        <br />
        <br />
        <button className='next-btn'> Next </button>
      </form>
    </div>
  );
}

export default UnderstandingPage;
