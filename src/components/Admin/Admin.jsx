import { useState, useEffect } from 'react';
import axios from 'axios';

function Admin () {
const [feedback, setFeedback] = useState([]);
useEffect(() => {
    console.log('in useEffect');
    getFeedback();
  }, []);

  const getFeedback = (event) => {
    console.log('Retrieving Feedback');

    axios({
      method: 'GET',
      url: '/api/feedback',
    }).then((response) => {
      setFeedback(response.data);
      console.log(response.data);
    });
  }
    return (
      <>
        <table className='admin_table'>
          <thead>
            <tr>
              <th className='admin_head'>Feeling</th>
              <th className='admin_head'>Comprehension</th>
              <th className='admin_head'>Support</th>
              <th className='comments-head'>Comments</th>
              <th className='delete-head'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {feedback.map((feedback) => (
              <tr key={feedback.id}>
                <td className='admin_line'>{feedback.feeling}</td>
                <td className='admin_line'>{feedback.understanding}</td>
                <td className='admin_line'>{feedback.support}</td>
                <td className='comments'>{feedback.comments}</td>
                <td className='delete'><button className='trash-btn'></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );

}

export default Admin;