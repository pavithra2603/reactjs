import React from 'react'
import './Login.css'
import {useState} from 'react'
const Add=()=> {
    const [Data, setData] = useState({
        id: '',
        name: '',
        password: '',
        type: '',
      });
    
      const handleChange = (e) => {
         setData({ ...Data, [e.target.id]: e.target.value });
      };
    
      const handleSubmit = async () => {
       
        try {
          const response = await fetch('http://localhost:3000/addUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(Data)          
          });
    
          if (response.ok) {
            console.log('User added successfully');
            
          } else {
            console.error('Error adding user');
            
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    return (
        
<div className='container'>
<div className='header'>
<div className='text'>Create Page</div>
</div>
<div className="inputs"></div>
<div className="input">
Id
<input type="text" onChange={handleChange}/>
</div>
<div className="input">
Username
<input type="text" onChange={handleChange}/>
</div>
<div className="input">
Password
<input type="password"  onChange={handleChange}/>
</div>
<div className="input">
Type
<input type="text"  onChange={handleChange}/>
</div>
<div className="submit-container">
<button type="submit" onClick={handleSubmit}>Add</button>
</div>
</div>
)
}
export default Add