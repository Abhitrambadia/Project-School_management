import './card.css'

const artNewsList = [
    {
        image: "./img/sm9.png",
        title: "The Yale school of arts virtual studio is open!",
        description: "Launched at 12AM on April 10, the Yale School of Art’s virtual open studios platform—with work presented from the departments of Graphic Design, Painting/Printmaking, Photography, and Sculpture—will remain online until March 2022."
    },
    {
        image: "./img/sm10.png",
        title: "Art Out: A deep dive into Yale MFA photography",
        description: "Yale is one of the leading school when it comes to photography, she stands out among her peers. Today, we dive into photography at Yale school of art, exhamining the studios, texture, composirion and formstorming.",
    },
    {
        image: "./img/sm12.png",
        title: "The Hundreds X Yale School of Arts",
        description: "Speakers during the spring 2021 semester include Moyra Davey, Wang Qingsong, Basel Abbas & Ruanne Abou-Rahme, Tanyth Berkeley, Ragnar Kjartansson, Aria Dean, Sohrab Hura, Lieko Shiga, Ashley James, and others",
    }
]

const Card = () => {
    return (
        <div className='main'>
            <div className='title1'>
                SCHOOL OF ART NEWS
            </div>
            <div className="main-row">
                {
                    artNewsList.map((art) => {
                        return (
                            <div className="card-container">
                                <div>
                                    <img src={art.image} alt="" />
                                </div>
                                <div className="title">
                                    <p>{art.title}</p>
                                </div>
                                <div className="desc">
                                    <p>{art.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div> <br />
            
        </div>
    )
}
export default Card;