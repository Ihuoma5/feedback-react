import React from 'react';
import Card from './shared/Card';


function FeedBackItem({item,handleDelete}) {

  return (
  <Card >
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className='close'>
      <p>x</p>
      </button>
      <div className="text-display"> {item.text}</div>
      
  </Card>
  )
}


export default FeedBackItem;
