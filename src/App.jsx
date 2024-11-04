import * as Pics from './components/Parallax-pics.jsx'
import './assets/ground.svg'
import './App.css'

function App() {
  return (
    <>
      <div style={{ height: "50rem" }}>
        <Pics.Trees />
        <Pics.Sun />
        <Pics.Cloud1 />
      </div>
    </>
  );
}

export default App
