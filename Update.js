import React from 'react'
import './Login.css'
import {useState} from 'react'
const Update=()=> {const [idToUpdate, setIdToUpdate] = useState('');
const [name, setUsername] = useState('');
const [password, setPassword] = useState('');
const [type, setType] = useState('');

const handleModify = async () => {
  try {
    
    console.log(`Modifying user with ID: ${idToUpdate}`, name, password, type);

   
     const response = await fetch(`http://localhost:3000/updateUser/${idToUpdate}`, {
       method: 'PUT',
       headers: {
        'Content-Type': 'application/json',
       },
       body: JSON.stringify({ name, password, type }),
     });

  

  } catch (error) {
    console.error('Error:', error);
  }
};


    return (
<div className='container'>
<div className='header'>
<div className='text'>Update Page</div>
</div>
<div className="inputs"></div>
<div className="input">
Id
<input type="text" />
</div>
<div className="input">
Username
<input type="text" onChange={(e) => setUsername(e.target.value)} />
</div>
<div className="input">
Password
<input type="password" onChange={(e) => setPassword(e.target.value)} />
</div>
<div className="input">
Type
<input type="text" onChange={(e) => setType(e.target.value)}/>
</div>
<div className="submit-container">
<button type="submit" onClick={handleModify}>Modify</button>

</div>
</div>
)
}
export default Update