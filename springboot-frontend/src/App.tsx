import axios from 'axios';
import {useEffect, useState} from "react";

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8081/hello')
            .then(res => setMessage(res.data))
            .catch(err => setMessage('Error: ' + err.message));
    }, []);

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Spring Boot says:</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;