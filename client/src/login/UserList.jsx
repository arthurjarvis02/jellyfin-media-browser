import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import UserListItem from "./UserListItem";

function UserList({onUserSelected, ...props}) {

    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jellyfin.jarv.io/Users/Public")
            .then(res => res.json())
            .then((res) => {
                setIsLoaded(true);
                setUsers(res);
            }
          )
      }, [])

    if (!isLoaded) {

        return;

    } else {

        return (
            <ListGroup horizontal className="text-center">
                {users.map(user => (
                    <UserListItem key={user.Id}  user={user} />
                ))}
            </ListGroup>
        );
    }
}

export default UserList;