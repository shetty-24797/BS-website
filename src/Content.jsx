import React from "react";
import profilePic from './profilePic.png'
import MovingCard from "./MovingCard";
import Skill from "./Skill";
import Education from "./Education";
import Carrer from "./Carrer";


function Content(userInfo) {

    const cards = [
        { title: 'Skills', content: <Skill></Skill> },
        { title: 'Education', content: <Education></Education> },
        { title: 'Carrer', content: <Carrer></Carrer> },
    ];



    return (

        <div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '40px' }}>

                <h1 style={{ color: '#DC2065' }}>
                    Bharath Shetty
                </h1>


                

            </div>


            <div style={{ paddingBottom: '20px', paddingTop: '10px' , display:'flex' , justifyContent: 'center' , alignItems: 'center' , marginRight:'10px'}}>  
                      <div style={{ width:'200px' , height:'200px' , textAlign: 'center'}}>
                        <img src={profilePic} width={'200px'} height={'200px'} alt="profilePic" />
                      </div>           
                      
                     
            </div>


            <div className="card-container">
                {
                    cards.map((card, index) => (
                        <MovingCard key={index} title={card.title} content={card.content} />
                    ))}
            </div>

        </div>




    )



}


export default Content;