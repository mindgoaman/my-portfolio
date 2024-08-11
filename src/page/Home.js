import React from 'react'
import pdf from '../res/pdf/resume.pdf'
import Profile from '../res/data/profile.json'
import Pro from '../res/images/profile.jpg'

function Home() {
  return (
    <div>
       <div className='container home'>
        <div className='left'>
          <h1>React Native(Hybrid Mobile Application)</h1>
          <a href={pdf} download={"aman_sharma_resume.pdf"} className='btn btn-outline-warning'>Download Resume</a>
        </div>
        <div className='right'>
           <div className='img'>
               <img src={Pro} alt={'Profile'}/>
           </div>
        </div>
       </div>
    </div>
  )
}

export default Home
