import './info.css'
import image from '../static/nirman.jpg'


export default function Info(){

   return( 
    <>
   <div className="row grid">

      <div className="cell"> 

            <div className="nav">
                <p> About </p>
                <p> Résumé </p>
                <p> Portfolio</p>
                <p> Let's Talk </p>
                
            </div>
      
      </div>



      <div className="cell info-grid"> 
      
        <div className="cell">
            <img src={image}></img>
        </div>



        <div className="intro cell"> 
        
        <text className='fname'>NIRMAN </text>
        <text className='lname'>KESARI</text>

        <p> Information about yourself. </p>

        
        </div>
        
      </div>

    
   </div>

   

    </>

   )
   

}

