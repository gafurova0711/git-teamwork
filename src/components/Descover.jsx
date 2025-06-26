import "./Descover.css"
import img7 from "../assets/img7.png"
import img8 from "../assets/img8.png"
import img9 from "../assets/img9.png"
function Descover(params) {
    return(
        <div className="Discover">
            <h1>Discover The Most <br /> Attractive Places</h1>
            <div className="Bigcard-Des">
                 <div className="card-img7 card1">
                    <div className="B-text1">
                <h3>Pakis Beach</h3>
                <p>Karawang, Indonesian</p>
                    </div>
            </div>
            <div className="card-img8 card2">
                    <div className="B-text2">
                 <h3>Suluban Beach</h3>
                <p>Bali, Indonesian</p>
                    </div>
            </div>
            <div className="card-img9 card1">
                    <div className="B-text1">
                <h3>Karimun Java</h3>
                <p>Jawa Tengah, Indonesian</p>
                    </div>
            </div>
                 </div>
        </div>

    )
}
export default Descover