import React  from 'react'
import {useState} from 'react'
import './Login.css'
const Delete=()=> {

 const [idToDelete, setIdToDelete] = useState({
 id: '',
 name: '',
 password: '',
 type: '',});

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3000/deleteUser/${idToDelete}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('User deleted successfully');
       
      } else {
        console.error('Error deleting user');
       
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

    return (
<div className='container'>
<div className='header'>
<div className='text'>Delete Page</div>
</div>
<div className="inputs"></div>
<div className="del" onChange={(e) => setIdToDelete(e.target.value)}>
Id
<input type="text"/>
</div>
<div className="submit-container"></div>
<button className="buton" type="submit" onClick={handleDelete}>Remove</button>
</div>


)
}
export default Delete