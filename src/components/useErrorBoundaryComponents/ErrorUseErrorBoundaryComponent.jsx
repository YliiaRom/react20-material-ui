import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

function ErrorUseErrorBoundaryComponent({ idData }) {
  const [user, setUser] = useState(null);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    const fetchtoJsonPlaceholder = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${idData}`
        );
        if (!response.ok) {
          throw new Error(
            " тут описую помилку: if(!response.ok) throw new Error"
          );
        }
        const data = await response.json();
        if (!data.name) {
          throw new Error(
            " тут описую помилку:  if (!data.name) throw new Error"
          );
        }

        setUser(data);
      } catch (error) {
        console.log(`логування звичайного error в catch`, {
          error: { message: error.message },
        });
        showBoundary(error);
      }
    };
    fetchtoJsonPlaceholder();
  }, [idData]);
  return (
    <>
      <div>
        <div>{user && user.name && <p> user.name: {user.name}</p>}</div>
        <div>{user && user.email && <p>user.email: {user.email}</p>}</div>
      </div>
    </>
  );
}

export default ErrorUseErrorBoundaryComponent;
