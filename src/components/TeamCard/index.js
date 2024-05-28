import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {displayData} = props
  const {name, imageUrl, id} = displayData
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="liItem">
        <img className="logoItem" src={imageUrl} />
        <p className="teamName">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
