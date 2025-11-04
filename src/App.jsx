import './App.css'
import Header from './components/header';
import Main from './components/main';
import bgLogoDc from './assets/img/dc-logo-bg.png'




export default function App() {


  return (
    <>

      <Header />

      <Main />

      <footer>

        <div className='d-flex pt-4'>


          <div class="list">

            <ul><h4>DC COMICS</h4>

              <li>Characters</li>
              <li>Comics</li>
              <li>Movies</li>
              <li>TV</li>
              <li>Games</li>
              <li>Videos</li>
              <li>News</li>
            </ul>
            <ul><h4>SHOP</h4>

              <li>Shop DC</li>
              <li>Shop DC Collectibles</li>

            </ul>

          </div>

          <div class="list">

            <ul><h4>DC </h4>

              <li>Characters</li>
              <li>Comics</li>
              <li>Movies</li>
              <li>TV</li>
              <li>Games</li>
              <li>Videos</li>
              <li>News</li>
              <li>TV</li>
              <li>Games</li>
              <li>Videos</li>
              <li>News</li>
            </ul>

          </div>

          <div class="list">

            <ul><h4>SITE</h4>

              <li>Characters</li>
              <li>Comics</li>
              <li>Movies</li>
              <li>TV</li>
              <li>Games</li>
              <li>Videos</li>
              <li>News</li>
            </ul>

          </div>

          <span><img src={bgLogoDc} alt="" /> </span>

        </div>





      </footer>

    </>
  )
}


