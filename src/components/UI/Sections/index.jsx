import PropTypes from 'prop-types'
import './styles.scss'

const Sections = ({ isFavourites, setAllOrFavourite }) => (
  <div className='sections'>
    <p
      className={`sections__text ${!isFavourites && 'sections__selected'}`}
      onClick={() => setAllOrFavourite('all')}
    >
      All
    </p>
    <p
      className={`sections__text ${isFavourites && 'sections__selected'}`}
      onClick={() => setAllOrFavourite('favourites')}
    >
      Favourites
    </p>
    <div className='sections__line' />
  </div>
)

Sections.propTypes = {
  setAllOrFavourite: PropTypes.func.isRequired,
  isFavourites: PropTypes.bool.isRequired,
}

export default Sections
