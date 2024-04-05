import './App.css';
import SpacesMain from './components/SpacesMain';

function App() {
  return (
    <div className="container mx-auto p-10 flex flex-wrap">
      <h1 className='text-2xl mb-5 font-bold w-full'>SpaceX launch Programs</h1>
     <SpacesMain />
    </div>
  );
}

export default App;
