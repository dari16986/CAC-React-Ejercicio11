import './App.css';
import Image from './components/movies/movies';



function App() {

  const filterResult = words.filter(word => word.length > 6);

  const characterList = myData.map((element) => {
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
