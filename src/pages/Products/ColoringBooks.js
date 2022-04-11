import React from 'react'
import { Link } from 'react-router-dom';
import mpdf from './img/color1.pdf'

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
        <div style={{
        display: 'flex', 
        flexWrap: 'wrap',
        textAlign:'center',
        justifyContent: 'center',
        minHeight: '60vh'
        }}>
          <div
          style={{flex: '0 32%', 
          maxHeight: '200px', 
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
            <iframe src={mpdf} width="100%"  height="200px" 
            frameBorder="0" 
            />
                </div>
                
            <div style={{width: '200px', textAlign: 'left', paddingLeft:'20px', paddingTop: '15px'}}>
                <div style={{minHeight: '80px'}}>
                    <div style={{fontSize: '16px'}}>
Ife's Incredible Friends                    </div>
<div style={{padding: '5% 0', fontSize:'20px'}} >Free</div>
</div>
             <div
                style={{margin: '3% 5%', padding: '1%' }} 
                >
                    <Link to="" download="http://localhost:3000/img/coloring/color1.pdf">
                        <button                     className='prod-btn'
                    className='prod-btn'

                        style={{
                        background: 'rgb(168, 203, 122)',
                        color: 'rgb(14 73 118)',
                        borderColor: 'rgb(119 145 86',
                        // borderBottom:'6px solid rgb(119 145 86)',
                        width: '100%',
                        height:' 50px',
                    }}>Download</button></Link>
                </div>
            </div>
        </div>
        <div
          style={{flex: '0 32%', 
          maxHeight: '200px', 
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
            {/* <iframe src="./img/coloring/color1.pdf" width="100%"  height="200px" 
            frameBorder="0" 
            /> */}
                        <iframe src={mpdf} width="100%"  height="200px" 
            frameBorder="0" 
            />
                </div>
            <div style={{width: '200px', textAlign: 'left', paddingLeft:'20px', paddingTop: '15px'}}>
                <div style={{}}>
                    <div style={{fontSize: '16px'}}>Ten Things Ife wants You to Know About You</div>
                <div style={{padding: '5% 0', fontSize:'20px'}}>$20</div>
                </div>
             <div
                style={{margin: '3% 5%', padding: '1%' }} 
                >
                    <button 
                    className='prod-btn'
                    style={{
                        background: 'rgb(168, 203, 122)',
                        color: 'rgb(14 73 118)',
                        borderColor: 'rgb(119 145 86)',
                        width: '100%',
                        height:' 50px',
                    }}>Buy Now</button>
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
