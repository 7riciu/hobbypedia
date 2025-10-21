import Hello from "../components/MyComponent";
import Hobbies from "../components/Hobbies";

function App() {
  return (
    <div>
      <p>This is my components</p>
      <Hello display = "Im Patricia"/>
      <Hello display = "I love art"/>
      <Hobbies hobby = {{title: "coding", time: "always"}}/>
    </div>
  )
}

export default App