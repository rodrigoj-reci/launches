import PropTypes from 'prop-types'
import LaunchCard from 'components/LaunchCard'
import './styles.scss'

const LaunchList = ({
  launches,
  setSelectedLaunch,
  saveFavourite,
  deleteFavourite,
  favourites,
}) => {
  return (
    <div className='launchList'>
      {launches.map((launch) => (
        <LaunchCard
          key={`${launch.flight_number} ${launch.launch_date_unix}`}
          launch={launch}
          setSelectedLaunch={setSelectedLaunch}
          saveFavourite={saveFavourite}
          deleteFavourite={deleteFavourite}
          isFavourite={
            !!favourites.find((favourite) => favourite.flight_number === launch.flight_number)
          }
        />
      ))}
    </div>
  )
}

LaunchList.propTypes = {
  launches: PropTypes.arrayOf(PropTypes.object),
  setSelectedLaunch: PropTypes.func.isRequired,
  saveFavourite: PropTypes.func.isRequired,
  deleteFavourite: PropTypes.func.isRequired,
  favourites: PropTypes.array,
}

LaunchList.defaultProps = {
  launches: [{}],
  favourites: [],
}

export default LaunchList
