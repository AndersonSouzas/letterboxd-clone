import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Profile() {
    const [profile, setProfile] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    const fetchPtofile = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:5000/profile', {
                headers: { Authorization: token },
            });
            setProfile(response.data);
        } catch (error) {
            console.error('Error ao carregar perfil:', error);
        }
    };

    useEffect(() => {
        fetchPtofile();
    }, []);

    const handleSave = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.put(
                'http://localhost:5000/profile',
                profile,
                { headers: { Authorization: token } }
            );
            setIsEditing(false);
        } catch (error) {
            console.error('Erro ao salver perfil', error);
        }
    };

    return (
        <div>
            <h1>Perfil</h1>
            {isEditing ? (
                <div>
                    <input
                    type='text'
                    value={profile.username}
                    onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                    />
                <textarea
                    value={profile.bio}
                    onChange={(e) => setProfile({ ...profile, bio: e.target.value})}
                />
                <button onClick={handleSave}>Salvar</button>
                </div>

            ) : (
                <div>
                    <h2>{profile.username}</h2>
                    <p>{profile.bio}</p>
                    <button onClick={() => setIsEditing(true)}>Editar Perfil</button>
                </div>
            )}
        </div>
    );
}

export default Profile;