import Hello from "../components/MyComponent";
import Hobbies from "../components/Hobbies";
import Home from "../pages/Home";

function App() {
const hobbyNumber = 2;

  return (
    <div>
      {hobbyNumber === 1 ? (
        <>
          <p>This is my components</p>
          <Hello display = "Im Patricia"/>
          <Hello display = "I love art"/>
          <Hobbies hobby = {{title: "coding", time: "always"}}/>
        </>
      ) : (
        <Home />
      ) }
      </div>
  );
}

export default App;