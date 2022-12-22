import './stat.css'

const Stat = ({ style, cardTitle, cardText }) => {
    return (
        <div class="stats-card" style={{ "--color": `${style}` }}>
            <h3 class="card-title">{cardTitle}</h3>
            <p class="card-text">{cardText}</p>
        </div>
    )
}

export default Stat