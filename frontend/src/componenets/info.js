import './info.css'
import image from '../static/nirman.jpg'


export default function Info(){

   return( 
    <>
   <div className="row grid">

      <div className="cell"> 

            <div className="nav">
                <a href="/"> About </a><br></br>
                <a href="/resume"> Resume </a><br></br>
                <a href="/portfolio"> Portfolio</a><br></br>
                <a href="/letstalk"> Let's Talk </a><br></br>
          
            </div>
      
      </div>



      <div className="cell info-grid"> 
      
        <div className="cell">
            <img src={image}></img>
        </div>



        <div className="intro cell"> 
        
        <text className='fname'>NIRMAN </text>
        <text className='lname'>KESARI</text>

        <p> Data Consultant </p>

        
        </div>
        
      </div>

    
   </div>

   

    </>

   )
   

}

