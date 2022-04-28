import { useState } from 'react';
import './allPages.css'
import image from '../static/nirman.jpg'
import badge from '../static/badge.png'
import python from '../static/python.png'
import aecomlogo from '../static/aecom-logo.png'
import tfnswlogo from '../static/tfnsw.png'

import twitter from '../static/twitter.png'
import linkedin from '../static/linkedin.png'
import github from '../static/github.png'
import mail from '../static/mail.png'
import call from '../static/call.png'

import downloadArrow from '../static/download-arrow.png'

import page1 from '../static/Page 1.PNG'
import page2 from '../static/Page 2.PNG'
import page3 from '../static/Page 3.PNG'

import SkillBar from 'react-skillbars';
import skills from '../static/skillsData.json'

import React, { Component } from 'react'
import Pdf from '../static/Resume.pdf'

import imagePlaceholder  from '../static/project.jpg'

const colors = {
    "bar": "orange",
    "title": {
      "text": "black",
      "background": "white"
    }
  }

export function AboutPage(){

    return(
        <>      

                {/* RIGHT PANE - Second Grid Box */}
                <div className="right-pane aboutpage"> 

                    <div className='flex-row'> 
                    
                        <div className="image-box">
                            <img src={image} alt="profile-picture"></img>
                        </div>
                        
                        <div className="info-box"> 
                            
                            <h3 className='fname'>NIRMAN </h3>
                            <h3 className='lname'>KESARI</h3>

                            <h5 className='role'> Data Consultant </h5>

                            <p>  Nirman is an analyst with 4+ years of experience in delivering insights, data visualisations, and consulting teams in driving data-based decisions.</p>
                            <p>  He is a certified in building Power BI applications by Microsoft and is proficient in python libraries such as pandas, Django & React, TensorFlow etc for data processing, web development and machine learning end to end development of applications.</p>
                            {/* <p>  Currently, he has been contracted full-time by AECOM and partly supporting teams in Transport for NSW for requirement of data solutions. </p> */}

                        </div>

                    </div>


                    <div className='flex-row certifications'>
                    <h5>CERTIFIED</h5>
                        <div className='badge'>
                        
                            <a href='https://docs.microsoft.com/en-us/learn/certifications/exams/pl-300'>
                                <img src={badge} alt="badge"></img>
                            </a>
                        </div>

                        <div className='python'>
                       
                        <a href='https://pythoninstitute.org/certification/pcep-certification-entry-level/'>
                            <img src={python} alt="badge"></img>
                        </a>
                        </div>        
                        
                    </div>


                    <div className='flex-row clients'>
                        <h5>CONTRACT</h5>
                        <div className='logo'>
                        <a href='https://www.aecom.com' targe="_blank"><img src={aecomlogo} alt="aecom-logo"></img></a>
                        </div>

                        <div className='logo tfnsw'>
                        <a href='https://www.transport.nsw.gov.au/'><img src={tfnswlogo} alt="tfnsw-logo"></img></a>
                        </div>

                    </div>


                    <div className='flex-row profile-links'>
                        
                    <a href='https://www.linkedin.com/in/nirman-kesari-a23188a8' target="_blank"><img src={linkedin} alt="linkedin-logo"></img></a>
                <a href='https://github.com/nirmaaan' target="_blank"><img src={github} alt="github-logo"></img></a>
                {/* <a href='https://twitter.com/nirmaaan' target="_blank"><img src={twitter} alt="twitter-logo"></img></a> */}
                <a href='mailto:nkesari@outlook.com' target="_blank"><img src={mail} alt="mail-logo"></img></a>
                {/* <a href='tel:+61'><img src={call} alt="call-logo"></img></a> */}
                        


                    </div>
                    <div className='copyright'>&copy; nirmankesari.info</div>


                  
                        
                        
              

                
                 
                   

                  
                </div>
         
        </>
        
    )
}

export function ResumePage(){

  
    return(
        <>    
               <div className="right-pane resumepage">

                    <div className='iframe'><iframe src={Pdf}></iframe></div>
                    
                    <div className='resume-download'><a href={Pdf} download="Resume - Nirman Kesari"> Download</a></div>
                    <div className='flex-row profile-links'>
                            <a href='https://www.linkedin.com/in/nirman-kesari-a23188a8' target="_blank" rel="noopener"><img src={linkedin} alt="linkedin-logo"></img></a>
                            <a href='https://github.com/nirmaaan' target="_blank" rel="noopener"><img src={github} alt="github-logo"></img></a>
                            {/* <a href='https://twitter.com/nirmaaan' target="_blank"><img src={twitter} alt="twitter-logo"></img></a> */}
                            <a href='mailto:nkesari@outlook.com' target="_blank" rel="noopener"><img src={mail} alt="mail-logo"></img></a>
                            {/* <a href='tel:+61'><img src={call} alt="call-logo"></img></a> */}
                        </div>

                        <div className='copyright'>&copy; nirmankesari.info</div>

                </div>


              
        </>
    )
}



export function PortfolioPage(){


    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
          setIsReadMore(!isReadMore);
        };

        if (text.length < 500) {
            return(
                <>
                <p className="text">
                    {text}
                </p>
                </>
            )
        }

        else {

        return (
          <p className="text">
            {isReadMore ? text.slice(0, 500) + '......' : text}
            <br></br>
            <button onClick={toggleReadMore} className="read-or-hide">
              {isReadMore ? "Read more" : " Show less"}
            </button>
          </p>
        );
      }
    };
        

   

    return(
        <>
                <div className="right-pane portfoliopage">
                    
                    <div className='x'>
                        <img src={imagePlaceholder}></img>
                        
                    </div> 

                    <div className='x words'>
                        <h1> Lorem ipsum dolor </h1>
                        <ReadMore>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto soluta suscipit accusantium voluptates perspiciatis reprehenderit necessitatibus. Harum assumenda esse odit eos, quo atque dicta dignissimos nesciunt nemo reprehenderit, eius suscipit ad vitae. Quam consequuntur voluptas natus laudantium molestias voluptatum laboriosam architecto ad dignissimos eligendi! Quis aliquam, quod minima fugiat sunt sint ipsum voluptas libero? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto soluta suscipit accusantium voluptates perspiciatis reprehenderit necessitatibus. Harum assumenda esse odit eos, quo atque dicta dignissimos nesciunt nemo reprehenderit, eius suscipit ad vitae. Quam consequuntur voluptas natus laudantium molestias voluptatum laboriosam architecto ad dignissimos eligendi! Quis aliquam, quod minima fugiat sunt sint ipsum voluptas libero?  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto soluta suscipit accusantium voluptates perspiciatis reprehenderit necessitatibus. Harum assumenda esse odit eos, quo atque dicta dignissimos nesciunt nemo reprehenderit, eius suscipit ad vitae. Quam consequuntur voluptas natus laudantium molestias voluptatum laboriosam architecto ad dignissimos eligendi! Quis aliquam, quod minima fugiat sunt sint ipsum voluptas libero? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto soluta suscipit accusantium voluptates perspiciatis reprehenderit necessitatibus. Harum assumenda esse odit eos, quo atque dicta dignissimos nesciunt nemo reprehenderit, eius suscipit ad vitae. Quam consequuntur voluptas natus laudantium molestias voluptatum laboriosam architecto ad dignissimos eligendi! Quis aliquam, quod minima fugiat sunt sint ipsum voluptas libero?
                        </ReadMore>
                    </div>

                    <div className='x words'>
                    <h1> Lorem ipsum dolor </h1>
                    <ReadMore>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto soluta suscipit accusantium voluptates perspiciatis reprehenderit necessitatibus. Harum assumenda esse odit eos, quo atque dicta dignissimos nesciunt nemo reprehenderit, eius suscipit ad vitae. Quam consequuntur voluptas natus laudantium molestias voluptatum laboriosam architecto ad dignissimos eligendi! Quis aliquam, quod minima fugiat sunt sint ipsum voluptas libero? A repellendus quae nisi vero, laudantium eveniet doloremque delectus et illum nam dignissimos. Aliquid error itaque vel eaque aut inventore eligendi adipisci, asperiores consectetur neque dicta magnam.
                    </ReadMore>
                    </div> 

                    <div className='x'>
                        {/* <img src={imagePlaceholder}></img> */}
                        {/* <embed href='https://app.powerbi.com/view?r=eyJrIjoiNTYzMGQxYWQtM2M2Zi00ODRmLWI3ZDAtMTBlNzI1YzAwYTE5IiwidCI6Ijg5YzhjNjhmLWIwMDYtNGM1OS05NTBkLWY3ZDgzMzNiNDU0OCJ9&pageName=ReportSection'></embed>  */}
                        <iframe title="Demo - Travel Time" src="https://app.powerbi.com/view?r=eyJrIjoiNTYzMGQxYWQtM2M2Zi00ODRmLWI3ZDAtMTBlNzI1YzAwYTE5IiwidCI6Ijg5YzhjNjhmLWIwMDYtNGM1OS05NTBkLWY3ZDgzMzNiNDU0OCJ9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
                    </div>

                    <div className='x'>
                        <img src={imagePlaceholder}></img> 
                    </div>  

                    <div className='x words'>
                    <ReadMore>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto soluta suscipit accusantium voluptates perspiciatis reprehenderit necessitatibus. Harum assumenda esse odit eos, quo atque dicta dignissimos nesciunt nemo reprehenderit, eius suscipit ad vitae. Quam consequuntur voluptas natus laudantium molestias voluptatum laboriosam architecto ad dignissimos eligendi! Quis aliquam, quod minima fugiat sunt sint ipsum voluptas libero? A repellendus quae nisi vero, laudantium eveniet doloremque delectus et illum nam dignissimos. Aliquid error itaque vel eaque aut inventore eligendi adipisci, asperiores consectetur neque dicta magnam.
                    </ReadMore>
                    </div> 

                    <div className='x words'>
                    <ReadMore>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.Architecto soluta suscipit accusantium voluptates perspiciatis reprehenderit necessitatibus. Harum assumenda esse odit eos, quo atque dicta dignissimos nesciunt nemo reprehenderit, eius suscipit ad vitae. Quam consequuntur voluptas natus laudantium molestias voluptatum laboriosam architecto ad dignissimos eligendi! Quis aliquam, quod minima fugiat sunt sint ipsum voluptas libero? A repellendus quae nisi vero, laudantium eveniet doloremque delectus et illum nam dignissimos. Aliquid error itaque vel eaque aut inventore eligendi adipisci, asperiores consectetur neque dicta magnam.
                    </ReadMore>

                    </div>

                    <div className='x'>
                        <img src={imagePlaceholder}></img> 
                    </div> 

                    <div className='x'>
                        <img src={imagePlaceholder}></img> 
                    </div>

                    <div className='x words'>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto soluta suscipit accusantium voluptates perspiciatis reprehenderit necessitatibus. Harum assumenda esse odit eos, quo atque dicta dignissimos nesciunt nemo reprehenderit, eius suscipit ad vitae. Quam consequuntur voluptas natus laudantium molestias voluptatum laboriosam architecto ad dignissimos eligendi! Quis aliquam, quod minima fugiat sunt sint ipsum voluptas libero? A repellendus quae nisi vero, laudantium eveniet doloremque delectus et illum nam dignissimos. Aliquid error itaque vel eaque aut inventore eligendi adipisci, asperiores consectetur neque dicta magnam.</p>
                    </div>  

                </div>
        </>
    )
}





export function LetstalkPage(){
    return(
        <>
        <div className="right-pane letstalkpage ">
        
               
                
                    <div className='contact'>
                        <h3> Let's Talk</h3>
                        <a className="tooltip" href='https://www.linkedin.com/in/nirman-kesari-a23188a8' target="_blank"><img src={linkedin} alt="linkedin-logo"></img><span className='tooltiptext'>LinkedIn</span></a>
                        <a className="tooltip" href='https://github.com/nirmaaan' target="_blank"><img src={github} alt="github-logo"></img><span className='tooltiptext'>github.com/nirmaaan</span></a>
                        {/* <a className="tooltip" href='https://twitter.com/nirmaaan' target="_blank"><img src={twitter} alt="twitter-logo"></img><span className='tooltiptext'>twitter.com/nirmaaan</span></a> */}
                        <a className="tooltip" href='mailto:nkesari@outlook.com' target="_blank"><img src={mail} alt="mail-logo"></img><span className='tooltiptext'>E-mail: nkesari@outlook.com</span></a>
                        {/* <a href='tel:+61'><img src={call} alt="call-logo"></img></a> */}
                    </div>

                
                
                    <div className='copyright'>&copy; nirmankesari.info</div>
                  

                    
          

        </div>
        
        
        
        </>
    )
}





