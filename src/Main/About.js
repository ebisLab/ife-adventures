import React from 'react';
import {title, author} from '../utils'

export default function About() {

  return <div style={{display: 'inline-flex', padding: '5% 20%'}}>
      <div style={{width: '33%'}}>
          <img style={{ 
              width: '200px',
              height: '200px',
              borderRadius: '50%',
            //   overflow: 'hidden'
            }}
              src="./img/img5_ife.png"/>
      </div>
      <div 
    //   style={{paddingRight: '55%'}}
      >
        <p>{title} is a children's book by {author}.</p>
        <p>Ife adventures teaches how to listen, learn from and forgive each other. While Ife interacts with her friends, she learns about their customs and ways of life from fashion, dance and food and forms a greater appreciation of her environment. </p>
      </div>
  </div>;
}
