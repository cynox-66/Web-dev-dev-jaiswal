import React, { useState } from 'react';
import LikeCount from './LikeCount';
import LikeBtn from './LikeBtn';

function Ques5() {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div style={{ border: '2px solid #38e02dff', padding: '15px', borderRadius: '2px' }}>
      <h3>Q5. Like Button with Count Display</h3>
      <LikeCount likes={likes} />
      <LikeBtn handleLike={handleLike} />
    </div>
  );
}

export default Ques5;
