import DigitalCom from '../assets/img/buy-comics-digital-comics.png'
import DcMerchan from '../assets/img/buy-comics-merchandise.png'
import Subscrip from '../assets/img/buy-comics-subscriptions.png'
import ShopLoc from '../assets/img/buy-comics-shop-locator.png'
import DcPowVisa from '../assets/img/buy-dc-power-visa.svg'

export default function Main() {

    return (

        <main>
            <div className='bg-black'>
                Content goes here!
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