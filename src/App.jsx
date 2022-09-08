import logo from './logo.svg';
import './App.css';
import Person from './componets/Person';


function App() {
  return (
    <div className="App">
      <Person name={"Jane, Doe"} age= {45} hColor="Black" >
        <p>Who is she?</p>
      </Person>
      <Person name={"Smith, Smith"} age= {88} hColor="Brown" ></Person>
      <Person name={"Fillmore, Millard"} age= {50} hColor="Brown" ></Person>
      <Person name={"Smith, Maria"} age= {62} hColor="Brown" ></Person>
    </div>
  );
}

export default App;
