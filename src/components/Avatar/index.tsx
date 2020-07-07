import React from 'react';
import { User } from '../../types/types';
import generetaAvatarFromHash from '../../utils/helpers/generetaAvatarFromHash';
import './Avatar.scss';

type Avatar = {
    user: User;
};
const Avatar: React.FC<Avatar> = ({ user }) => {
    if (user.avatar) {
        return <img className={'avatar'} src={user.avatar} alt={`avatar ${user.fullName}`} />;
    }
    const { color, colorLighten } = generetaAvatarFromHash(user._id);
    const firstChar = user.fullName[0].toUpperCase();
    return (
        <div
            className={'avatar avatar--symbol'}
            style={{ background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%` }}
        >
            {firstChar}
        </div>
    );
};

export default Avatar;
