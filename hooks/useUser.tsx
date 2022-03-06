import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Host } from '../models';
interface Data {
  user: Host['fields'];
}

export function useUser() {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    const fetchUser = async () => {
      try {
        const response = await axios.get('/api/hosts');
        isMounted.current && setData(response.data);
      } catch (error: any) {
        console.error(error);
        isMounted.current && setError(error.message);
      }

      return setLoading(false);
    };

    fetchUser();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return { data, loading, error };
}
