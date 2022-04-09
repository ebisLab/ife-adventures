import React from 'react'
import Gallery2 from '../../Main/Gallery2'
import { Link } from 'react-router-dom';

export default function HardCoverBooks() {

    const books =[{
        id:1,
        title: 'Ife Incredible Adventures', 
        summary: "It's Ife's first day in school and there are many new things that Ife is learning. But will a misunderstanding with Wohali and an encounter with the Brute Twins ruin her day?",
        imgUrl: './img/img1_ife.png'
    },
    {
        id:2,
        title: 'Ife Incredible Adventures part 2', 
        summary: "It's Ife's first day in school and there are many new things that Ife is learning. But will a misunderstanding with Wohali and an encounter with the Brute Twins ruin her day?",
        imgUrl: './img/img1_ife.png'
    },
    {
        id:3,
        title: 'Ife Incredible Adventures', 
        summary: "It's Ife's first day in school and there are many new things that Ife is learning. But will a misunderstanding with Wohali and an encounter with the Brute Twins ruin her day?",
        imgUrl: './img/img1_ife.png'
    }]
  return (
    <div>
        {/* <h1>Products coming really soon</h1> */}
        <div style={{
        display: 'flex', 
        flexWrap: 'wrap',
        textAlign:'center',
        justifyContent: 'center',
        minHeight: '60vh'
        // justifyContent: 'space-between', 
        }}>
          <div
          style={{flex: '0 32%', 
          maxHeight: '250px', 
          margin: '3% 5%', 
          width: '400px', 
          padding: '1%',
          borderRadius:'5px',
          background: 'white',
          display: 'inline-flex',
          fontFamily:'Roboto,  sans-serif',
          fontSize: '13px',
          color: '#8b939c'
        }} 
          >
            <div style={{width: '200px'}}>
            <Link to="/"><img className='bookshadow' src="./img/img1_ife.png" width="100%" /></Link>
            </div>
            <div style={{width: '200px', textAlign: 'left', paddingLeft:'20px', paddingTop: '15px'}}>
                <div style={{fontSize: '16px'}}>Ife's Incredible Friends</div>
                <div>★★★★★</div>
            <div style={{paddingTop: '15px'}}>It's Ife's first day in school and there are many new things that Ife is learning. But will a misunderstanding with Wohali and an encounter with the Brute Twins ruin her day?
            </div>
            <div style={{display: 'inline-flex'}}>
             <div
                style={{padding: '2%' }} 
                >
                    <button style={{
                        background: '#ff9900',
                        color: 'rgb(14 73 118)',
                        border: 'none',
                        borderBottom: '10px solid #b17507',
                        width: '80px',
                        height:' 50px',
                    }}>Buy on Amazon</button>
                </div>
                <div
                style={{ padding: '2%' }} 
                >
                    <button style={{
                        background: 'rgb(89,163,100)',
                        color: 'white',
                        border: 'none',
                        borderBottom: '10px solid rgb(49 89 55)',
                        width: '90px',
                        height:' 50px',
                    }}>Buy on Barnes and Nobles</button>
                </div>
                </div>
            </div>
        </div>
        {/* {books.map(item=>(
            <div
            style={{flex: '0 32%', 
            height: '250px', 
            margin: '3% 5%', 
            width: '400px', 
            padding: '1%',
            borderRadius:'5px',
            background: 'white',
            display: 'inline-flex',
            fontFamily:'Roboto,  sans-serif',
            fontSize: '13px',
            color: '#8b939c'
          }} 
            >
              <div style={{width: '200px'}}>
              <Link to="/shop"><img src={item.imgUrl} width="100%" /></Link>
              </div>
              <div style={{width: '200px', textAlign: 'left', paddingLeft:'15px', paddingTop: '15px'}}>
                  <div style={{fontSize: '16px'}}>{item.title}</div>
                  <div>★★★★★</div>
              <div style={{paddingTop: '15px'}}>
                  {item.summary}              </div>
              </div>
          </div>
        ))} */}
      </div>
    </div>
  )
}
