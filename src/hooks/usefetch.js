import {useEffect ,useState} from 'react';
import axios from 'axios';
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading ] = useState(false);
    const [error, setError] = useState(false);


    useEffect(()=>{
        const fetchData  = async ()=>{
        setLoading(true);
        try {
            const result = await axios.get(url,{ withCredentials: true });
            setData(result.data);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
        }
        fetchData();
    },[url]);

    const refetchData  = async ()=>{
        setLoading(true);
        try {
            const result = await axios.get(url, {withCredentials: true });
            setData(result.data);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
        }
     return {data, loading,error,refetchData}
}

export default useFetch;
