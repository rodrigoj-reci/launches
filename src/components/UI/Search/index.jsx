import PropTypes from 'prop-types'
import './style.scss'

const Search = ({ handleOnChange }) => (
  <input
    className='search col-md-3 col-12'
    type='text'
    name='search'
    placeholder='Search all launches'
    onChange={handleOnChange}
  />
)

Search.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
}

export default Search
