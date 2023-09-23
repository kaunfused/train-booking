import "./App.css";

function App() {
  return (
    <div className="main-container">
      <h1>TCKT</h1>

      <Form />
    </div>
  );
}

function Form() {
  return (
    <form className="input-form" action="/search" method="POST">
      <div className="lala">
        <p>To : </p>
        <input
          type="text"
          name="to"
          id="to"
          placeholder="Enter your destination"
        />
      </div>
      <div className="lala">
        <p>From : </p>
        <input
          type="text"
          name="from"
          id="from"
          placeholder="Enter your current location"
        />
      </div>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}

export default App;
