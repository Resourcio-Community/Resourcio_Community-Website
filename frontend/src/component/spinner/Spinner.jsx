import './spinner.css'

const Spinner = ({ width, height }) => {
    return (
        <div className="spinner-container">
            <div className="loading-spinner" style={{ width: `${width}`, height: `${height}`}}>
            </div>
        </div>
    )
}

export default Spinner
