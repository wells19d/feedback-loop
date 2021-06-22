import { useHistory } from 'react-router-dom';

function ThankYouPage() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div className='App'>
      <h2>Thank You Page</h2>
      <br />
      <button className='next-btn' onClick={(event) => handleClick()}>
        Click Here to Start a New Survery
      </button>
    </div>
  );
}

export default ThankYouPage;
