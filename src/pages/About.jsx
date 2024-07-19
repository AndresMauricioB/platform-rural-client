import React, { useEffect, useState } from 'react';
import { useAuthFirebase } from '../contexts/AuthFirebaseContext';
import axios from 'axios';

export default function About() {
  const { currentUser } = useAuthFirebase();
  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
   // console.log(currentUser.accessToken);
   if(currentUser){
    const idToken = currentUser.accessToken;
    setToken(idToken);
    console.log(token);
   }
  }, [])

  const fetchProtectedData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/person/create', {
        headers: {
          withCredentials: true,
          Authorization: `Bearer ${token}`
          
        }
      });
      setData(response);
    } catch (error) {
      console.error('Error fetching protected data:', error);
    }
  };

  return (
    <div>
     
      {token && <button onClick={fetchProtectedData}>Fetch Protected Data</button>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}


