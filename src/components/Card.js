import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.item.location === 'Online') {
    badgeText = 'Online';
  }
  return (
    <div className="card">
      <div className="card--badge">{badgeText}</div>
      <img
        className="card--image"
        src={`./images/${props.item.coverImg ? props.item.coverImg : ''}`}
        alt="smokeImage"
      />
      <div className="card--stats">
        <span className="card--star">
          <FontAwesomeIcon icon={faStar} />
        </span>
        <span className="rating">{props.item.stats.rating}</span>
        <span className="review-count">({props.item.stats.reviewCount})</span>
        <span className="country">.{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="card--price">FROM ${props.item.price}</span> / person
      </p>
    </div>
  );
}
