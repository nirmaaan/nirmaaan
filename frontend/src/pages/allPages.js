import './allPages.css'
import image from '../static/nirman.jpg'


export function AboutPage(){
    return(
        <>
                <div className="cell">
                    <img src={image} alt="profile"></img>
                </div>

                <div className="intro cell"> 
                
                <text className='fname'>NIRMAN </text>
                <text className='lname'>KESARI</text>
                <h5 className='role'> Data Consultant </h5>

                <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, quasi. Repellendus fugit aperiam pariatur recusandae laboriosam dolores, nesciunt praesentium et numquam eligendi voluptatum eaque tempora non temporibus a facilis sit, minima aut. Doloremque quibusdam commodi asperiores consequuntur natus error officia quia. Fugit dignissimos, dolores beatae fugiat quasi veniam. </p>

                </div>
        </>
        
    )
}

export function ResumePage(){
    return(
        <>
                <h3> Resume Page </h3>
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