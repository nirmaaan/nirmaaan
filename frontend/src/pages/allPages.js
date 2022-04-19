import { useState } from 'react';
import './allPages.css'
import image from '../static/nirman.jpg'
import page1 from './Page 1.PNG'
import page2 from './Page 2.PNG'
import page3 from './Page 3.PNG'

import SkillBar from 'react-skillbars';
import skills from '../static/skillsData.json'

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
                    <div className="image-info-box">
                        <img src={image} alt="profile"></img>
                    </div>

                    <div className="image-info-box"> 
                        
                        <h3 className='fname'>NIRMAN </h3>
                        <h3 className='lname'>KESARI</h3>

                        <h5 className='role'> Data Consultant </h5>

                        <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quasi. Repellendus fugit aperiam pariatur recusandae laboriosam dolores, nesciunt praesentium et numquam eligendi voluptatum eaque tempora non temporibus a facilis sit, minima aut. Doloremque quibusdam commodi asperiores consequuntur natus error officia quia. Fugit dignissimos, dolores beatae fugiat quasi veniam. </p>

                    </div>
                </div>
         
        </>
        
    )
}

export function ResumePage(){

  


    return(
        <>      
               <div className="right-pane resumepage">

                <div className='resumepages'>
                    <img src={page1}></img>
                </div>
                <div className='resumepages'>
                    <img src={page2}></img>
                </div>
                <div className='resumepages'>
                    <img src={page3}></img>
                </div>

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
                        <img src={imagePlaceholder}></img> 
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
        <       h3> Let's Talk Page </h3>
        </>
    )
}