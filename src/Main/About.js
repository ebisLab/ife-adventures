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
      <div>
        <p><b>{title} is a children's book theory by {author}.
        </b></p>
        <p>
        Ife's Adventure series is semi-autobiography told through the eyes of the Nigerian-American girl, Ife. Ife guides the reader through numerous adventures she and her family & friends (Chinye, Wohali, Maryamm, Haru, Ramon, Deepa, John, Fiona, and many more)  get into. Readers will be engaged by the characters' stories, trials, and successes while at the same time learning life lessons and values.        </p>
      </div>
  </div>;
}
