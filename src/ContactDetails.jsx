import React from 'react';




function ContactDetails({ email , phone , xtweeter }) {
     
    return (
        <>

            <div  style={{paddingTop:'40px'}}>

            <div style={{color: 'lightgreen' , textAlign: 'center' , paddingBottom : '10px'}}> Send me a message here  </div>
            <div>

                <label style={{paddingRight : '60px' , color : 'lightcyan'}}> name :</label>
                <input style={{width : '300px' , height: '20px'}} type="text" id="name" name="name" /><br />
                <label style={{paddingRight : '62px' , color : 'lightcyan'}}> email :</label>
                <input style={{width : '300px' ,height: '20px'}} type="text" id="email" name="email" /> <br />
                <label  style={{paddingRight : '18px' ,color : 'lightcyan'}}> message :</label>
                <input style={{ width : '300px' , paddingBottom : '70px'}} type="text" id="message" name="message" />
            </div>



            </div>



            









        </>
    )
}

export default ContactDetails;