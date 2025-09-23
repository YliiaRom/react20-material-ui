import { useEffect, useState } from "react";

function WithErrorBoundaryHOCComponent({ id }) {
  const [user, setUser] = useState({});

  const [crash, setCrash] = useState(false);
  if (crash) {
    // Реальный краш React, приложение остановится
    throw new Error(
      " Навмисно зробила помилку - ломаю (onClick={() => setCrash(true)}) /   (if (crash) throw new Error) "
    );
  }

  useEffect(() => {
    console.log(`---- WithErrorBoundaryHOCComponent > useEffect`);
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );

        if (!response.ok)
          throw new Error("Описию помилку в useEffect > if(!response.ok) ");

        const data = await response.json();
        if (!data.name)
          throw new Error("Описию помилку в useEffect > if(!data.name) ");
        if (data) setUser(data);
      } catch (error) {
        console.log("працює withErrorBoundary", error);
      }
    };
    fetchUser();
  }, [id]);

  return (
    <div className="practiceWrap">
      <p className="title">помилка: id=0</p>
      <p>Данні з JSONPlaceholder:</p>
      <p> user.name: {user.name || "-"}</p>

      <p> user.email: {user.email || "-"}</p>
      <p className="title">зломати:</p>
      <p style={{ color: "#000" }}>
        При кліке спрацює функція зміни стану, буде перерендер: <br />
        if (crash) =&gt; throw new Error( "...опис " ); <br />
        Результат все біле
      </p>
      <button onClick={() => setCrash(true)}>Ломаю сторінку</button>
    </div>
  );
}

export default WithErrorBoundaryHOCComponent;
