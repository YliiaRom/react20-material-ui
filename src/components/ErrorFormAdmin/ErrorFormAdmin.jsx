import { useRef, useState } from "react";

function ErrorFormAdmin() {
  const [error, setError] = useState(null);
  // const userRef = useRef();
  // const passwordRef = useRef();
  // const [role, setRole] = useState("");
  // const [password, setPassword] = useState("");

  console.log(`___render  ErrorFormAdmin`);

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(`--handlerSubmit in ErrorFormAdmin`);
    const form = e.target;
    const name = form.elements.role.value;
    const password = form.elements.password.value;

    if (name !== "admin" || password !== "1234") {
      setError(
        new Error(
          "моє повідомлення в handleSubmit > setError( new Error('...')"
        )
      );
      return;
    }
    console.log(name, password);
    form.reset();
    return alert("Успішно");
  };
  if (error) throw error;
  // const handlerSubmit = (e) => {
  //   e.preventDefault();
  // --------------------------------ref
  // if (
  //   userRef.current.value !== "admin" ||
  //   passwordRef.current.value !== "1234"
  // ) {
  //   throw new Error("невірний пароль або role");
  // }
  // alert("успіх");
  // ------------------------------state
  // if (role !== "admin" || password !== "1234") {
  //   throw new Error("невірний пароль або role");
  // }
  // alert("успіх");
  // };
  return (
    <>
      <form className="form" onSubmit={handlerSubmit}>
        <label>
          Role: if !== "admin" буде помилка
          <input
            type="text"
            name="role"
            placeholder="admin"
            // onChange={(e) => setRole(e.target.value)}
            // ref={userRef}
          />
        </label>
        <label>
          Password: if !=="1234" буде помилка
          <input
            type="password"
            name="password"
            placeholder="1234"
            // onChange={(e) => setPassword(e.target.value)}
            // ref={passwordRef}
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default ErrorFormAdmin;
