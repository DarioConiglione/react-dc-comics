import DigitalCom from '../assets/img/buy-comics-digital-comics.png'
import DcMerchan from '../assets/img/buy-comics-merchandise.png'
import Subscrip from '../assets/img/buy-comics-subscriptions.png'
import ShopLoc from '../assets/img/buy-comics-shop-locator.png'
import DcPowVisa from '../assets/img/buy-dc-power-visa.svg'

import comics from '../comics';

export default function Main() {

    return (

        <main>
            <div className='bg-black'>
                <div className='container'>
                    <div className='row row-col-6'>
                        <div className='col'>
                            <div className='card'>
                                <img className='image-top' src="" alt="" />
                                <div className='card-body'></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='bg-blue d-flex justify-content-center align-items-center py-5'>

                <div className='m-3'>
                    <img width={40} src={DigitalCom} alt="" />
                    <span className='m-3'>Digital Comics</span>
                </div>

                <div className='m-3'>
                    <img width={40} src={DcMerchan} alt="" />
                    <span className='m-3'>DC Merchandise</span>
                </div>

                <div className='m-3'>
                    <img width={40} src={Subscrip} alt="" />
                    <span className='m-3'>Subscription</span>
                </div>

                <div className='m-3'>
                    <img width={30} src={ShopLoc} alt="" />
                    <span className='m-3'>Comic Shop Location</span>
                </div>

                <div className='m-3'>
                    <img width={40} src={DcPowVisa} alt="" />
                    <span className='m-3'>DC Power Visa</span>
                </div>


            </div>




        </main>
    );

}