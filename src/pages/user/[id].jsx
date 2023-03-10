import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const UserItem = ({userData}) => {

  // const [user, setUser] = useState([]);
  // console.log(router);
  // const { id } = router.query;
  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch(
  //       `https://jsonplaceholder.typicode.com/users/${id}`
  //     );
  //     const data = await res.json();
  //     setUser(data);
  //   };
  //   getData();
  // }, [id]);
  return (
    <div
      style={{
        fontSize: "25px",
        paddingLeft: "100px",
        paddingTop: "30px",
        color: "red",
      }}
    >
      {console.log(userData)}
      <p>
        <b>ID : {userData.id}</b>
      </p>
      <p>
        <b>Name : {userData.name}</b>
      </p>
      <p>
        <b>UserName : {userData.username}</b>
      </p>
      <p>
        <b>Email : {userData.email}</b>
      </p>
      <p>
        <b>Website : {userData.website}</b>
      </p>
      <p>
        <b>Phone : {userData.phone}</b>
      </p>
    </div>
  );
};

export default UserItem;

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const userData = await res.json();

  return {
    props: {
      userData,
    },
  };
};
