
import './App.css'
import Card from './components/Card'
import './dist/css/main.css'

function App() {

  return (
    <>
      <div className="bg-dark d-flex align-items-center justify-content-center">
        <div className="container-fluid col-lg-12 col-md-8 col-sm-10 bg-light vh-100 app">
          <div className="row d-flex justify-content-center align-items-center">
            
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              
            
          </div>

        </div>
      </div>
    </>
  );
}

export default App
