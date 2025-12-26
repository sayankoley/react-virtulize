import "./styles.css";
import { Virtulized } from "./components/virtulized";
const List = Array.from({ length: 1000 }, (_, ind) => ind + 1);
console.log(List);
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Virtulized list={List} height={500} itemHeiht={35} />
    </div>
  );
}
