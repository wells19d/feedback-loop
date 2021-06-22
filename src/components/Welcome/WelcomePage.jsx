import { useHistory } from 'react-router-dom';

function WelcomePage() {

    const history = useHistory();

    const handleClick = () => {
      history.push('/feeling');
    }; 

  return (
    <div className='App'>
      <br />
      <h1>Welcome Page</h1>
      <h2>Please answer on a scale of 1 - 5</h2>
      <br />
      <br />
      <button className='next-btn' onClick={(event) => handleClick()}>
        Click Here to Start
      </button>
    </div>
  );
}

export default WelcomePage;
