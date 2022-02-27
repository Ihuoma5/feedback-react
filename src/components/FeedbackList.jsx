import React from 'react';
import { motion, AnimatePresence } from "framer-motion"
import FeedBackItem from './FeedBackItem';


function FeedbackList({feedback, handleDelete}) {
    console.log(feedback)
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback yet</p>
    }
    return <div className='feedback-list'>
        <AnimatePresence>
               {feedback.map((item) => (
             <motion.div 
             key={item.id}
             initial={{opacity: 0}}
             animate= {{opacity:1}}
             exit= {{opacity:0}}
             >
              <FeedBackItem key={item.id} item={item}
              handleDelete={handleDelete}/> 
              </motion.div>
           ))}
           </AnimatePresence>
           </div>;

//   return <div className='feedback-list'>
//       {feedback.map((item) => (
//           <FeedBackItem key={item.id} item={item}
//           handleDelete={handleDelete    }/> 
//       ))}
//       </div>;
}

export default FeedbackList;
