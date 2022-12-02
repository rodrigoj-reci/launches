import PropTypes from 'prop-types'
import Favourite from 'components/UI/Favourite'
import './styles.scss'
import { formatDate } from 'utils/helpers'
import { DEFAULT_SPACE_X_IMAGE } from 'utils/constants'

const LaunchCard = ({ launch, setSelectedLaunch, isFavourite, saveFavourite, deleteFavourite }) => {
  return (
    <div className='launchCard'>
      <div className='launchCard__description' onClick={() => setSelectedLaunch(launch)}>
        <img
          src={launch.links.mission_patch_small || DEFAULT_SPACE_X_IMAGE}
          alt='launch'
          className='launchCard__launch'
        />
        <div className='launchCard__description__container'>
          <h3 className='launchCard__description__container__title'>{launch.mission_name}</h3>
          <p className='launchCard__description__container__details'>
            {launch.details || 'No information'}
          </p>
          <p className='launchCard__description__container__date'>
            {formatDate(new Date(launch.launch_date_local))}
          </p>
        </div>
      </div>
      <Favourite
        style='launchCard__star'
        launch={launch}
        isFavourite={isFavourite}
        saveFavourite={saveFavourite}
        deleteFavourite={deleteFavourite}
      />
    </div>
  )
}

LaunchCard.propTypes = {
  launch: PropTypes.object,
  setSelectedLaunch: PropTypes.func.isRequired,
  isFavourite: PropTypes.bool.isRequired,
  saveFavourite: PropTypes.func.isRequired,
  deleteFavourite: PropTypes.func.isRequired,
}

LaunchCard.defaultProps = {
  launch: {},
}

export default LaunchCard
