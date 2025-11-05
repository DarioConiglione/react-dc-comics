import bgLogoDc from '../assets/img/dc-logo-bg.png'
import FaceBook from '../assets/img/footer-facebook.png'
import Periscope from '../assets/img/footer-periscope.png'
import Pinta from '../assets/img/footer-pinterest.png'
import Twitt from '../assets/img/footer-twitter.png'
import Youtube from '../assets/img/footer-youtube.png'

export default function Footer() {

    return (
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


            <div className='d-flex justify-content-around last-footer'>

                <button className='btn btn-outline-primary'>SIGN UP NOW!</button>

                <div className='d-flex align-items-center gap-3'>
                    <p><strong>FOLLOW US!</strong></p>
                    <img src={FaceBook} alt="" />
                    <img src={Twitt} alt="" />
                    <img src={Youtube} alt="" />
                    <img src={Pinta} alt="" />
                    <img src={Periscope} alt="" />
                </div>
            </div>




        </footer>
    );
}
