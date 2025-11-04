import './App.css'
import Header from './components/header';


export default function App() {


  return (
    <>

      <Header />

      <main>
        <div className='bg-black'>
          Content goes here!
        </div>

        <div className='container'>
          <ul class="list-group list-group-horizontal">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>

        </div>


      </main>
      <footer></footer>

    </>
  )
}


