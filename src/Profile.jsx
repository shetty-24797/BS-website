import React from 'react';

function Profile({user}){
    return(
        <div class="background">
          
          
          <div class = 'profile'> 
            <div class = 'name'>
                {user.name}
            </div>
            <div>
                {user.designation}
            </div>
            <div>
                {user.education}
            </div>
            <div>
                {user.age}
            </div>
            <div>
                {user.nationality}
            </div>
          </div>
            
        </div>
    )
}

export default Profile;