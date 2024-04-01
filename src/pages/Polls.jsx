import { useState, useEffect } from 'react';
import { fetchPolls } from '../api/axios'; 

const Polls = () => {
    const [polls, setPolls] = useState([]);

    useEffect(() => {
        const address = "1263 Pacific Avenue, Kansas City, KS 66102"; // Example address
        const fetchData = async () => {
            try {
                const data = await fetchPolls(address);
                setPolls(data);
            } catch (error) {
                console.error('Error fetching polls:', error);
            }
        };
        fetchData();
    }, []);

};

export default Polls;


