import "./style.css";

const UserAvatar = ({ navigateToUser }) => {
    return (
        <div onClick={navigateToUser}>
            <div className="post-avatar" />
        </div>
    );
};

export default UserAvatar;
