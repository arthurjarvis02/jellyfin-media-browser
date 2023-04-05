import ListGroupItem from "react-bootstrap/ListGroupItem";

function UserListItem({user, onUserSelected, ...props}) {

    return (
        <ListGroupItem action style={{border: "none"}}>
            <img
                src={`https://jellyfin.jarv.io/Users/${user.Id}/Images/Primary?tag=${user.PrimaryImageTag}&width=128`}
                style={{objectFit: "cover", width: "128px", height: "128px"}}
            />
            <p>{user.Name}</p>
        </ListGroupItem>
    );
}

export default UserListItem;