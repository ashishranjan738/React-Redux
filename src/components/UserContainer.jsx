import React, {useEffect} from 'react';
import {fetchUsers} from "../redux";
import {connect} from "react-redux";

function UserContainer({userData, fetchUsers}) {
    console.log(userData);
    useEffect(() => {
        fetchUsers()
    }, []);
    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (<div>
        <h2>Users List:</h2>
        {
            userData && userData.users && userData.users.map(user => <p>{user.name}</p>)
        }
    </div>)
}

const mapStateToProps = state => {
    console.log(state);
    return {
        userData: state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);