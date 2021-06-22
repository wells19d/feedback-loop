import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function ReviewPage(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const feeling = useSelector((store) => store.feelingReducer); console.log('Feelings', feeling);
  const understanding = useSelector((store) => store.understandingReducer); console.log('under', understanding);
  const support = useSelector((store) => store.supportReducer); console.log('support', support);
  const comments = useSelector((store) => store.commentsReducer);



  const submitFeedback = () => {

    let formSubmit = {
      feeling: Number(feeling),
      understanding: Number(understanding),
      support: Number(support),
      comments
    };
    console.log('Form Submit test', formSubmit);

axios({
  method: 'POST',
  url: '/api/feedback',
  data: formSubmit,
})
  .then((response) => {
    dispatch({
      type: 'RESET',
    });
    history.push('/thanks');
  })
  .catch((error) => {
    alert('Error');
  });
    
  };

  const reduxStore = useSelector((store) => store);
  // console.log(reduxStore);

  return (
    <div className='App'>
      <h2>Review Page</h2><br />
      <p className='review-1'>How Your Feeling is:<p className='review-2'>{reduxStore.feelingReducer}</p></p><br />
      <p className='review-1'>Your Content Understanding is:<p className='review-2'>{reduxStore.understandingReducer}</p></p><br />
      <p className='review-1'>How Well You're Feeling Supported is:<p className='review-2'>{reduxStore.supportReducer}</p></p><br />
      <p className='review-1'>Your Comments are:<p className='review-2'>{reduxStore.commentsReducer}</p></p><br /><br />


      <p><button className='next-btn' onClick={(event) => submitFeedback()}>Submit</button></p>
    </div>
  );
}

export default ReviewPage;
