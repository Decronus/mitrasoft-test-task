import UserAvatar from "../user-avatar/UserAvatar";
import "./style.css";

const UserCard = ({ user }) => {
    return (
        <div className="user-card">
            <UserAvatar />
            {user ? (
                <div className="user-card-text">
                    <div>{user?.name}</div>
                    <div className="user-card-email">{user?.email}</div>
                </div>
            ) : (
                <div>Загрузка...</div>
            )}
        </div>
    );
};

export default UserCard;
