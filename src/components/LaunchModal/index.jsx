/* eslint-disable camelcase */
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Favourite from 'components/UI/Favourite'
import { formatDate } from 'utils/helpers'
import './style.scss'

const LaunchModal = ({
  selectedLaunch,
  setSelectedLaunch,
  isFavourite,
  saveFavourite,
  deleteFavourite,
}) => (
  <>
    <Modal show={!!selectedLaunch} onHide={() => setSelectedLaunch(null)}>
      <Modal.Header className='launchModal'>
        <span className='launchModal__date'>
          {formatDate(new Date(selectedLaunch.launch_date_local))}
        </span>
        <Modal.Title>{selectedLaunch.rocket.rocket_name}</Modal.Title>
        <Favourite
          style='launchModal__star'
          launch={selectedLaunch}
          isFavourite={isFavourite}
          saveFavourite={saveFavourite}
          deleteFavourite={deleteFavourite}
        />
      </Modal.Header>
      <p className='launchModal__bodyTitle'>ABOUT LAUNCHED</p>
      <Modal.Body>{selectedLaunch.rocket.description}</Modal.Body>
      <p className='launchModal__bodyTitle'>OVERVIEW</p>
      <img alt='rocket' src={selectedLaunch.rocket.flickr_images[0]} />
      <Modal.Footer>
        <Button variant='secondary' onClick={() => setSelectedLaunch(null)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>
)

LaunchModal.propTypes = {
  selectedLaunch: PropTypes.shape({
    launch_date_local: PropTypes.string.isRequired,
    rocket: PropTypes.shape({
      rocket_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      flickr_images: PropTypes.array.isRequired,
    }),
  }),
  setSelectedLaunch: PropTypes.func.isRequired,
  isFavourite: PropTypes.bool.isRequired,
  saveFavourite: PropTypes.func.isRequired,
  deleteFavourite: PropTypes.func.isRequired,
}

export default LaunchModal
