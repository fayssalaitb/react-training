import React from 'react';

const Card = (props) => {
  const {name, email, id} = props;
  let urlId = 'https://robohash.org/' + id + '?200*200';
  
  return(

    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>

      <img alt='robots' src={urlId} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
