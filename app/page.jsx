import Hello from "../components/MyComponent";
import Hobbies from "../components/Hobbies";

function App() {
const hobbyNumber = 1;

  return (
    <div>
      {hobbyNumber === 1 ? (
        <>
          <p>This is my components</p>
          <Hello display = "Im Patricia"/>
          <Hello display = "I love art"/>
          <Hobbies hobby = {{title: "coding", time: "always"}}/>
        </>
      ) : null }
      </div>
  );
}

export default App;