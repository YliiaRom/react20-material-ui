import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

function UseErrorBoundaryComponent() {
  const [user, setUser] = useState(null);
  const { showBoundary } = useErrorBoundary();

  let id = 1;
  useEffect(() => {
    const fetchtoJsonPlaceholder = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log(`логування звичайного error в catch`, {
          error: { message: error.message },
        });
        showBoundary(error);
      }
    };
    fetchtoJsonPlaceholder();
  }, [id]);
  return (
    <>
      <div>
        <div>{user && user.name && <p> user.name: {user.name}</p>}</div>
        <div>{user && user.email && <p>user.email: {user.email}</p>}</div>
      </div>
    </>
  );
}

export default UseErrorBoundaryComponent;
