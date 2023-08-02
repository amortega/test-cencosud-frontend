import React from 'react';
import { User } from './User/interfaces/user.model';
import { UserList } from './User/components/UserList';
import { UserDetail } from './User/components/UserDetail';
import { useFetchUsers } from './User/services/user.service';
import './App.css';

function App() {

  const { data, loading, error } = useFetchUsers();
  return (
    <>
      <UserList
        loading={loading}
        error={error}
      >
        {data?.map( (user: User) => (
          <UserDetail
            key={user.id}
            id={user.id}
            full_name={user.full_name}
            email={user.email}
            city={user.city}
          />
        ))}
      </UserList>
    </>
  );
}

export default App;
