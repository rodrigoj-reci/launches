import PropTypes from 'prop-types'
import Alert from 'react-bootstrap/Alert'
import './style.scss'

const Message = ({ variant, text }) => (
  <Alert key={variant} variant={variant} className='message'>
    {text}
  </Alert>
)

Message.propTypes = {
  variant: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Message
