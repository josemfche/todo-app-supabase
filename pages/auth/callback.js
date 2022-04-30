import { useEffect } from 'react'

const AuthCallback = () => {

  useEffect(() => {
    const search = new URLSearchParams(window.location.search)
  }, [])

  return (
    <div>

    </div>
  )
}

export default AuthCallback