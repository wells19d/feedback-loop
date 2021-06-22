import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function FeelingPage(props) {
  const history = useHistory(); // used to push the next page
  const dispatch = useDispatch(); // used to send feeling score to redux

  const [feeling, setFeeling] = useState(0);
  console.log(feeling);

  function nextButton(event) {
     if (Number(feeling) === 0 || Number(feeling) === NaN) {
            alert('Please enter a value');
            return;
     }

    // let formFeedback = {feeling: feeling}; // had this wrong, it was causing my fields to change from [] to {} and throwing an error.

    let formFeedback = feeling;

    dispatch({
      type: 'SET_FEELING',
      payload: formFeedback,
    });
    history.push('/understanding');
  }

  return (
    <div className='App'>
      <h2>How are you feeling today?</h2>
      <br />
      <form className='form-rating' onSubmit={(event) => nextButton(event)}>
        Select Rating <br />
        <select
          className='drop-down'
          name='Select Rating'
          onChange={(event) => setFeeling(event.target.value)}
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

export default FeelingPage;
