import React from 'react'

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
                <h3>Synopsis</h3>

                <p>
                Book#1 of the Ife Adventure series
It's Ife's first day in school and there are many new friends and new things to learn. But will a misunderstanding with Wohali and an encounter with the Brute Twins ruin her day?
                </p>
                </div>
            <div style={{display: 'flex', flexWrap: 'wrap',justifyContent: 'space-between'}}>
                {/* div[style={{width:'33%'}}] */}
                <div
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
                </div>


      
            </div>
            </div>
      
        </div>
        );
}
