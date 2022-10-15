import './App.css';
import Movies from './components/movies/movies';

const myData = [
  { Framework: "Bootstrap" },
  { Framework: "Material" },
  { Framework: "Tailwind" },
  { Framework: "Next" }
];

const words = ["Pera", "Sandia", "Manzana", "Mandarina", "Naranja", "Ajo"];

function App() {

  const filterResult = words.filter(word => word.length > 6);

  const myDataList = myData.map((element) => {
    return (<h2> {element.Framework} </h2>)
  });


  return (
    <div className="App">
      { myDataList }
      <Movies data = { filterResult } />
    </div>
  );
}

export default App;
