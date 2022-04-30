import { Spinner, Navbar, Container, Nav, Button } from "react-bootstrap"
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import { taskState } from "../../redux/reducers/taskSlice";

const NavBar = () => {

  let { taskLoading } = useSelector(taskState)

  const { logout, isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();
  return (
    <>
      <Navbar className="fixed-top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Task Manager</Navbar.Brand>
          { taskLoading || isLoading ? <Spinner className="mx-3" animation="grow" variant="danger" /> : <></>}
          { user ? <h6 className="text-white">{"Logged as " + user.nickname}</h6> : <></>}     
          {
            !isAuthenticated ?
              <Button variant="success" onClick={() => loginWithRedirect()}>
                Log In
              </Button> : 
              <Button variant="danger" onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
              </Button>
          }
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar