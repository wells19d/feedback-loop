import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function CommentsPage() {
  const history = useHistory(); // used to push the next page
  const dispatch = useDispatch(); // used to send feeling score to redux

  const [review, setReview] = useState('');
  console.log(review);

  function nextButton(event) {

    let formFeedback = review;

    dispatch({
      type: 'SET_COMMENTS',
      payload: formFeedback,
    });
    history.push('/review');
  }

  return (
    <div className='App'>
      <h2>Any comments you would like to leave?</h2>
      <br />
      <form className='form-rating' onSubmit={(event) => nextButton(event)}>
        Select Rating <br />
        <textarea
          className='text-field'
          placeholder='Comments... (optional)'
          maxLength='300'
          onChange={(event) => setReview(event.target.value)}
        ></textarea>
        <br />
        <br />
        <button className='next-btn'>Next</button>
      </form>
    </div>
  );
}

export default CommentsPage;
