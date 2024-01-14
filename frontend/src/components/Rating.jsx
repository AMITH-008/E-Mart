import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'

const Rating = ({value, text}) => {
  return (
    <div className='rating'>
        <span style={{ marginRight: '2px' }}>
            {value}
        </span>
        <span style={{ marginRight: '5px', marginBottom:'3px' }}>
            <FaStar style={{color:"gold"}} />
        </span>
        <span>
            &nbsp; {text}
        </span>
    </div>
  ) 
}

export default Rating