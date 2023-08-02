import { useState, useEffect} from 'react';
import { User } from  '../interfaces/user.model';
import { Config } from '../../Utils/config';

const URL = Config.API_URL || 'http://localhost:3002';

export function useFetchUsers() {

    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(`${URL}/users`, { method: 'GET' })
        .then((response) => {
            if (!response.ok) throw Error('error');
            return response.json();
        })
        .then((json: User[]) => setData(json))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };

}