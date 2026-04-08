import { useState } from 'react';

export const useUsers = () => {
    const [loading, setLoading] = useState(false);
    
    const fetchTeam = async () => {
        setLoading(true);
        // await api.get('/team');
        setLoading(false);
    };

    return { loading, fetchTeam };
};
