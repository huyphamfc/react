import classes from './UserList.module.css';


function UserList({ list }) {
    let content = list.length === 0 ?
        <p>No users found</p> :
        list.map(({ username, age }, index) =>
            <li key={index}>
                {`${username} ${age}-year-old`}
            </li>
        );

    return (
        <ul className={classes.users}>{content}</ul>
    );
}

export default UserList;