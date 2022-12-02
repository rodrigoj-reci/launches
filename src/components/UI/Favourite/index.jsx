import PropTypes from 'prop-types'
import blackStar from 'assets/icons/blackStar.png'
import star from 'assets/icons/star.png'
import './styles.scss'

const Favourite = ({ style, launch, isFavourite, saveFavourite, deleteFavourite }) => (
  <img
    src={isFavourite ? blackStar : star}
    alt='star'
    className={`star ${style}`}
    onClick={() => (isFavourite ? deleteFavourite(launch) : saveFavourite(launch))}
  />
)

Favourite.propTypes = {
  style: PropTypes.string,
  launch: PropTypes.object,
  isFavourite: PropTypes.bool.isRequired,
  saveFavourite: PropTypes.func.isRequired,
  deleteFavourite: PropTypes.func.isRequired,
}

Favourite.defaultProps = {
  style: '',
  launch: {},
}

export default Favourite
