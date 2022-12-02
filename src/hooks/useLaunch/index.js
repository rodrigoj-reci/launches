import { useEffect, useState } from 'react'

const BASE_URL = 'https://api.spacexdata.com/v3'

export const useLaunch = () => {
  const [launches, setLaunches] = useState({ loading: true, launches: [], error: null })

  useEffect(() => {
    const getLaunchesAndRockets = async () => {
      try {
        const launchesResponse = await fetch(`${BASE_URL}/launches`)
        const launches = await launchesResponse.json()
        const rocketsResponse = await fetch(`${BASE_URL}/rockets`)
        const rockets = await rocketsResponse.json()

        const launchesWithRockets = launches.map((launch) => {
          const rocket = rockets.find((rocket) => rocket.rocket_id === launch.rocket.rocket_id)

          return {
            ...launch,
            rocket,
          }
        })

        setLaunches({
          loading: false,
          launches: launchesWithRockets,
          error: null,
        })
      } catch (e) {
        setLaunches({
          loading: false,
          launches: [],
          error: 'Try later',
        })
      }
    }

    getLaunchesAndRockets()
  }, [])

  return launches
}
