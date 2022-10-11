import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/users/userActions";

const UserContainer = (props) => {
  const { users, fetchUser } = props;

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      {users.loading
        ? "Loading..."
        : users.error
        ? "Error..."
        : users.map((user) => <p>{user.name}</p>)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
