import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'

const Login = props => {
  const [getUserDetails, setUserDetails] = useState({
    username: '',
    password: '',
  })

  const getAuthToken = token => {
    Cookies.set('new_token', token, {expires: 3})
    const {history} = props
    history.push('/')
  }

  const getDetails = async () => {
    const url = 'https://book-details.onrender.com/login'
    const requestBody = JSON.stringify(getUserDetails)

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    if (response.ok) {
      getAuthToken(data.jwtToken)
    }
  }

  const onSubmitDetails = event => {
    event.preventDefault()
    getDetails()
  }

  const onChangeUsername = event => {
    setUserDetails({
      username: event.target.value,
      password: getUserDetails.password,
    })
  }

  const onChangePassword = event => {
    setUserDetails({
      password: event.target.value,
      username: getUserDetails.username,
    })
  }

  return (
    <div>
      <form onSubmit={onSubmitDetails}>
        <div className="input-container">
          <input
            type="text"
            className="input-element"
            onChange={onChangeUsername}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            className="input-element"
            onChange={onChangePassword}
          />
        </div>
        <button type="submit">submit</button>
      </form>
      <p>{getUserDetails.username}</p>
    </div>
  )
}

export default Login
