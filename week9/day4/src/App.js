import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'

import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome';
import BookList from './components/BookList';

import fantasyColl from './data/fantasy.json';
import historyColl from './data/history.json';
import horrorColl from './data/horror.json';
import romanceColl from './data/romance.json';
import scifiColl from './data/scifi.json';

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <BookList/>
      <MyFooter />
    </div>
  );
}

export default App;
