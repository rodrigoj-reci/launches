/* eslint-disable prettier/prettier */
import { useState } from 'react'
import { useLaunch } from 'hooks/useLaunch'
import LaunchList from 'components/LaunchList'
import LaunchModal from 'components/LaunchModal'
import Loader from 'components/UI/Loader'
import Message from 'components/UI/Message'
import Search from 'components/UI/Search'
import Sections from 'components/UI/Sections'
import './style.scss'

const Launches = () => {
  const [selectedLaunch, setSelectedLaunch] = useState()
  const [search, setSearch] = useState('')
  const { launches, loading, error } = useLaunch()
  const [allOrFavourite, setAllOrFavourite] = useState('all')

  const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem('launches')) || [])
  const saveFavourite = (launch) => {
    const favouriteLaunches = JSON.parse(localStorage.getItem('launches')) || []
    const newFavouriteLaunches = [...favouriteLaunches, launch]
    localStorage.setItem('launches', JSON.stringify(newFavouriteLaunches))
    setFavourites(newFavouriteLaunches)
  }
  const deleteFavourite = (launch) => {
    const favouriteLaunches = JSON.parse(localStorage.getItem('launches')) || []
    const newFavouriteLaunches = favouriteLaunches.filter(
      (favourite) => favourite.flight_number !== launch.flight_number,
    )
    localStorage.setItem('launches', JSON.stringify(newFavouriteLaunches))
    setFavourites(newFavouriteLaunches)
  }

  const handleOnChange = (e) => setSearch(e.target.value.toLowerCase())

  const getLaunchesOrFavourites = () => {
    if (allOrFavourite === 'all') return launches
    return JSON.parse(localStorage.getItem('launches')) || []
  }

  if (loading) return <Loader />

  if (error) return <Message variant='danger' text={error} />

  return (
    <div className='launches'>
      <h3>Launches</h3>
      <Sections
        isFavourites={allOrFavourite === 'favourites'}
        setAllOrFavourite={setAllOrFavourite}
      />
      <div className='launches__list'>
        {!loading && !error && <Search handleOnChange={handleOnChange} />}

        {selectedLaunch && (
          <LaunchModal
            selectedLaunch={selectedLaunch}
            setSelectedLaunch={setSelectedLaunch}
            saveFavourite={saveFavourite}
            deleteFavourite={deleteFavourite}
            isFavourite={
              !!favourites.find(
                (favourite) => favourite.flight_number === selectedLaunch.flight_number,
              )
            }
          />
        )}
        <LaunchList
          launches={
            !search
              ? getLaunchesOrFavourites()
              : getLaunchesOrFavourites().filter((launch) =>
                  launch.mission_name.toLowerCase().includes(search),
                )
          }
          setSelectedLaunch={setSelectedLaunch}
          saveFavourite={saveFavourite}
          deleteFavourite={deleteFavourite}
          favourites={favourites}
        />
      </div>
    </div>
  )
}

export default Launches
