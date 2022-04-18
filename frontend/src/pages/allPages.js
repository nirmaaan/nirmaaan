import './allPages.css'
import image from '../static/nirman.jpg'

import SkillBar from 'react-skillbars';
import skills from '../static/skillsData.json'

const colors = {
    "bar": "orange",
    "title": {
      "text": "black",
      "background": "white"
    }
  }


export function AboutPage(){

    return(
        <>      {/*RIGHT PANE HAS DEFINED GRID. EACH DIV IS ADDED IN GRID*/}
                <div className="image-info-box">
                    <img src={image} alt="profile"></img>
                </div>

                <div className="image-info-box"> 
                    
                    <h3 className='fname'>NIRMAN </h3>
                    <h3 className='lname'>KESARI</h3>

                    <h5 className='role'> Data Consultant </h5>

                    <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quasi. Repellendus fugit aperiam pariatur recusandae laboriosam dolores, nesciunt praesentium et numquam eligendi voluptatum eaque tempora non temporibus a facilis sit, minima aut. Doloremque quibusdam commodi asperiores consequuntur natus error officia quia. Fugit dignissimos, dolores beatae fugiat quasi veniam. </p>

                </div>

                             
        </>
        
    )
}

export function ResumePage(){
    return(
        <>
                 <div className="cell">
                    <img src={image} alt="profile"></img>
                </div>

                <div className="intro cell"> 
                
                <h3 className='fname'>NIRMAN </h3>
                <h3 className='lname'>KESARI</h3>
                <h5 className='role'> Data Consultant </h5>

                <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quasi. Repellendus fugit aperiam pariatur recusandae laboriosam dolores, nesciunt praesentium et numquam eligendi voluptatum eaque tempora non temporibus a facilis sit, minima aut. Doloremque quibusdam commodi asperiores consequuntur natus error officia quia. Fugit dignissimos, dolores beatae fugiat quasi veniam. </p>

                </div>


                <div className='skillbox'>

                    <SkillBar skills={skills} height={'2vh'} animationDuration={750} colors={colors}/>

                </div>
                
                <div className='intro'>
                <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quasi. Repellendus fugit aperiam pariatur recusandae laboriosam dolores, nesciunt praesentium et numquam eligendi voluptatum eaque tempora non temporibus a facilis sit, minima aut. Doloremque quibusdam commodi asperiores consequuntur natus error officia quia. Fugit dignissimos, dolores beatae fugiat quasi veniam. </p>
                </div>

                
                <div className='skillbox'>

                    <SkillBar skills={skills} height={'2vh'} animationDuration={750} colors={colors}/>

                </div>
                
              
        </>
    )
}

export function PortfolioPage(){
    return(
        <>
                <h3> Portfolio Page </h3>
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