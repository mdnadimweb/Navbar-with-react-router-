import { useState } from "react";

function Demo() {
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [show, setShow] = useState(false);
  const inputHandler = (e) => {
    console.log(e.target);
    setFn(e.target.value);
  };

  const inputHandler2 = (e) => {
    console.log(e.target);
    setLn(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    console.log(e.target.ln.value);
    setShow(true);
    // setValue(e.target);
  };
  return (
    <>
      <section>
        <form onSubmit={formHandler}>
          <input
            onChange={inputHandler}
            placeholder="name"
            value={fn}
            name="fn"
            type="text"
          />
          <input
            onChange={inputHandler2}
            placeholder="name"
            value={ln}
            name="ln"
            type="text"
          />
          <button type="submit">submit</button>
        </form>
      </section>
      {show && (
        <section>
          <h1>First Name : {fn}</h1>
          <h1>Last Name : {ln}</h1>
        </section>
      )}
    </>
  );
}

export default Demo;
