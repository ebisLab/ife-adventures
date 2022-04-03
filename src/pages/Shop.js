import React from 'react';
import Arrow from '../Header/components/Arrow/Arrow';
import Input from '../Header/Input';
import {title} from '../utils'


export default function Shop() {
    return (
        <div style={{display: 'inline-flex', 
        padding: '5%'}}>
            <div style={{width: '43%'}}>
                    <img src="./img/img0_life.png" width="100%" />
      
                {/* </div> */}
            </div>
            <div style={{padding: '2%', width: '450px'}}>
                <div style={{background: 'dodgerblue', padding: '5%'}}>
                <h3>Synopsis of Book #1 of {title} </h3>

                <p>
It's Ife's first day in school and there are many new things that Ife is learning. But will a misunderstanding with Wohali and an encounter with the Brute Twins ruin her day?
                </p>
                </div>
            <div style={{
                // display: 'flex', 
            flexWrap: 'wrap',justifyContent: 'space-between'}}>
                {/* div[style={{width:'33%'}}] */}
                {/* the buy buttons */}
                {/* <div
                style={{flex: '0 32%',  margin: '3% 5%', padding: '1%' }} 
                >
                    <button style={{
                        background: '#ff9900',
                        color: 'rgb(14 73 118)',
                        border: 'none',
                        width: '150px',
                        height:' 70px',
                    }}>Buy on Amazon</button>
                </div>
                <div
                style={{flex: '0 32%',  margin: '3% 5%', padding: '1%' }} 
                >
                    <button style={{
                        background: 'rgb(89,163,100)',
                        color: 'white',
                        border: 'none',
                        width: '150px',
                        height:' 70px',
                    }}>Buy on Barnes and Nobles</button>
                </div> */}

                {/* <div>hey there</div> */}
<Input/>
<Arrow/>

      
            </div>
            </div>
      
        </div>
        );
}
