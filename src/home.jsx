import './App.css'
import Calendar from './calendar'

import './slider.css'
import ImageSlider from './slider.js'
import { sliderData, sliderData2 } from './sliderdata.js'
const Home = () => {
    const image1 = '/img/sm2.png'
    const image2 = '/img/sm3.png'
    const image3 = '/img/sm4.png'
    const image4 = '/img/sm5.png'
    return (
        <div className="App">
            <div className='hero-section'>
                <nav>
                    <div className='title-container'>
                        <span>School</span>
                        <span>Management</span>
                    </div>
                    <img src='./assets/images/menu.svg' width="48px" height="48px" />
                </nav>
                <div className='main-title'>
                    <p>
                        The Takshashila School of Art is a graduate school
                        that confers MFAs in Graphic Design, Painting/Printmaking, Photography, and Sculpture; and offers undergraduate-level art courses to Yale College students.
                    </p>


                </div>
                <div className='main'>
                    <h1>Explore  </h1>

                    <img src='./assets/images/down.svg' width="48px" height="48px" />
                </div>
            </div>

            {/* <div className='dark-overlay'></div>
            <img src={image} alt="schoolimage" className='center-image'></img>
            <h1 className='mng'>School Management</h1>
            <p className='text'>The Takshashila School of Art is a graduate school
                that confers MFAs in Graphic Design, Painting/Printmaking, Photography, and Sculpture; and offers undergraduate-level art courses to Yale College students.</p> */}
            <div className='programmes-section'>
                <p className='name'>PROGRAMMES</p>
                <div className='image-container'>
                    <img src={image1} alt="schoolimage" className='center-image1'></img>
                    <img src={image2} alt="schoolimage" className='center-image2'></img>
                </div>
                <div className='image-container'>
                    <img src={image3} alt="schoolimage" className='center-image2'></img>
                    <img src={image4} alt="schoolimage" className='center-image1'></img>
                </div>
                <div>
                    <p >UPCOMMING EVENTS
                        <div className='midbutt'>  <img src='./assets/images/info_circle.svg'></img>Editor's option </div>
                    </p>

                    <ImageSlider slides={sliderData} />
                    {/* <div className='image-container1'>
                        <img src={image5} alt="schoolimage" className='center-image1'></img>
                        <img src={image6} alt="schoolimage" className='center-image2'></img>
                        <img src={image7} alt="schoolimage" className='center-image2'></img>
                    </div> */}
                </div>
                <p className='name'>HAPPENING THIS WEEK</p>
                <div className='editor'>
                    <div className='date'>3rd - 9th of May, 2021</div>
                    <div className='date'>  <img src='./assets/images/info_circle.svg'></img>Editor's option </div>

                </div>
            </div>
            <div className='slider-section'>
                <Calendar />
                <ImageSlider slides={sliderData2} />
            </div>
        </div>
    )
}
export default Home;