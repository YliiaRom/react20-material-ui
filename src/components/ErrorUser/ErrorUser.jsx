import { useEffect, useState } from "react";

function ErrorUser({ userId }) {
  const [error, setError] = useState(null);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        if (!res.ok) {
          // кидаємо помилку для ErrorBoundary
          throw new Error(`404 - Користувача з id=${userId} не існує`);
        }

        const data = await res.json();

        if (!data.id) {
          throw new Error(`User з id=${userId} не існує`);
        }

        setUserData(data);
      } catch (errorVal) {
        setError(errorVal);
      }
    };

    fetchUser(); // ErrorBoundary спіймає помилку, якщо вона кидається всередині useEffect
  }, [userId]);

  if (error) throw Error;
  return (
    <>
      <div className="practiceWrap">
        <div className="title">User з помилкою</div>

        <div>
          <p> тут треба відобразити name:{userData?.name || "-"}</p>
          <p> тут треба відобразити Email:{userData?.email || "-"}</p>
        </div>
      </div>
    </>
  );
}

export default ErrorUser;
