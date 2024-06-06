import pro from './assets/pro.jpeg'

function Card() {
    return(
        <div className="card">
            <img className='card-image' src={pro} alt="profile" width={200} height={200}/>
            <h2 className='card-title'>HEE TAD</h2>
            <p className='card-text'>I make something what i want ma fuq</p>
        </div>
    )
}

export default Card