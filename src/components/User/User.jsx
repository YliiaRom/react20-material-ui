import { useState } from "react";

function User() {
  const [idUser, setIdUser] = useState(1);
  const [userData, setUserData] = useState(null);
  const handlerClick = async (userId) => {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const data = await result.json();
    console.log(data);
    setUserData(data);
  };

  return (
    <>
      <div className="practiceWrap">
        <div className="title">
          Запитт на jsonplaceholder запит за ID:
          <a href="https://jsonplaceholder.typicode.com/users" target="_blank">
            <button> jsonplaceholder</button>
          </a>
          jsonplaceholder
        </div>

        <div>
          <button onClick={() => handlerClick(idUser)}> Зробити запит</button>
          <p> тут треба відобразити name:{userData?.name || "-"}</p>
          <p> тут треба відобразити Email:{userData?.email || "-"}</p>
        </div>
      </div>
    </>
  );
}

export default User;
