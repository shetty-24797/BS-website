
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const user = {
  name: "Bharath Shetty",
  age: 26,
  designation: "Software Developer",
  education: "B.E.",
  nationadivty: "Indian",
  contact: {
    email: "bharathkumar24797@gmail.com",
    phone: "8970417538",
    xtweeter: "t",
    instagram: "t"
  }
}

function App() {
  return (
    <div className="App-header" >
      <Header />
      <Content />
      <Footer contactInfo={user.contact} />
    </div>
  );
}

export default App;
