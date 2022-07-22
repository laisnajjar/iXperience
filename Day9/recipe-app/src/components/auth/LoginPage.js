import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/firebase'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  let navigate = useNavigate()
  async function onFormSubmit(event) {
    try {
      event.preventDefault()
      const userCred = await signInWithEmailAndPassword(auth, email, password)
      console.log(userCred)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="container mt-5">
      <div className="card-body mt-4">
        <div className="card-header">
          <h1 className="m-0">Login</h1>
        </div>
        <div className="card-body">
          <form onSubmit={onFormSubmit}>
            <div class="mb-3">
              <label className="form-label">Email address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="mb-3">
              <label className="form-label">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div className="d-grid mt-4">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
