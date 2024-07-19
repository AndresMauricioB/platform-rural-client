import React, { useEffect, useState } from 'react'
import { useAuthFirebase } from '../../contexts/AuthFirebaseContext';
import { useServer } from '../../contexts/ServerContext';

export default function Profile() {
    const { currentUser, logout } = useAuthFirebase();
    const { postRequest ,getRequest } = useServer();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [department, setDepartment] = useState('');
    const [country, setCountry] = useState('');
    const [error, setError] = useState('');

    const getMembers = () => {
        setLoading(true);
        getRequest(endpoints.getMembers + course.id + '/members/list', {}, (res) => { 
          if (res[0]){
            const resI = res[1];
            setMembers(resI.members);
          }
          setLoading(false);
        });

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = {
            name,
            email,
            img,
            description,
            address,
            city,
            department,
            country
        };

        try {
            const response = await axios.post('/api/person/create', data, {
                headers: {
                    Authorization: `Bearer ${yourFirebaseAuthToken}`
                }
            });
            console.log(response.data);
        } catch (error) {
            setError('Failed to create person');
        }
    };

  return (
    <>

    <div className='section1'>
        <div className='container1'>
            {currentUser ? (
                <>
                <h3>{currentUser.email}</h3>
                <button className='btn-logout' onClick={logout}>LogOut</button>
                </>) : (<h1>Please login</h1>)}
        </div>

        <div className='container1'>
          ¡Te damos la bienvenida!
          Puedes completar la información de tu cuenta en este momento
        </div>
       
        <div className='container1'>
            <div className='container-form-user'>
                <form onSubmit={handleSubmit} className='form-user'> 
                    <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="text" placeholder='Image URL' value={img} onChange={(e) => setImg(e.target.value)} />
                    <textarea placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <input type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                    <input type="text" placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
                    <input type="text" placeholder='Department' value={department} onChange={(e) => setDepartment(e.target.value)} />
                    <input type="text" placeholder='Country' value={country} onChange={(e) => setCountry(e.target.value)} />
                    <button type="submit">Register</button>
                </form>
                <p>{error}</p>
            </div>       
        </div>

    </div>
    
    </>

  )
}
