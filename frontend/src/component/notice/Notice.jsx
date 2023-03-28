import './notice.css'

const Notice = ({ notice, link }) => {
  return (
    <div className='notice'>
      <a href={link} target='_blank'>
        <div className="notice-holder">
          <p>{notice}</p>
          <p className='know-more'>Know more</p>
        </div>
      </a>
    </div>
  )
}

export default Notice