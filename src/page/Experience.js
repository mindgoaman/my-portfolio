import React from 'react';
import experience from '../res/data/experience.json'
import cardekho from '../res/images/cardekho.jpg'

function Experience() {
  return (
    <div>
       <h1>Experience</h1>
       {
        experience.map((data)=>{
          return <>
                   <div key={data.id} className='ex-item'>
                     <div className='left'>
                       {console.log("sharma_6655",cardekho)}

                       <img src={cardekho} alt={'company'}/>
                     </div>
                     <div className='right'>
                     </div>
                   </div>
                 </>
        })

       }
    </div>
  )
}

export default Experience
