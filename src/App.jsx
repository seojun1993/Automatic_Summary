import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <div className="flex h-screen text-white bg-gray-800">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
