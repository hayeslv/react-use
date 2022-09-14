import ClassComp from "./Components/ClassComp"
import Logs from "./Components/Logs/Logs"
import LogsForm from "./Components/LogsForm"
import Ref from "./Components/Ref"
import UseState from "./Components/UseState"

import "./App.css"

export default function App() {
  return <div className="app">
    {/* <Ref /> */}
    <LogsForm />
    <Logs />
    {/* <UseState /> */}
    {/* <ClassComp /> */}
  </div>
}