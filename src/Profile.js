import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { Auth } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import Container from 'react-bootstrap/Container'

function Profile() {
  useEffect(() => {
    checkUser()
  }, [])
  const [user, setUser] = useState({}) 
  async function checkUser() {
    try {
      const data = await Auth.currentUserPoolUser()
      const userInfo = { username: data.username, ...data.attributes, }
      setUser(userInfo)
    } catch (err) { console.log('error: ', err) }
  }
  function signOut() {
    Auth.signOut()
      .catch(err => console.log('error signing out: ', err))
  }
  return (
    <Container>
      <h2>My Account</h2>
      <h4>Email: {user.email}</h4>
      <h4>Phone: {user.phone_number}</h4>
      <Button variant="outline-primary" onClick={signOut}>Sign Out</Button>
    </Container>
  );
}

export default withAuthenticator(Profile)
