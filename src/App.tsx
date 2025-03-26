import { Person } from './components/Person'
import { Countries, User } from './components/User'
import { UserProvider } from './components/UserContextProvider'

function App() {
  // const fetchUser = () => ({ name: "Pedro", age: 22, isMarried: null })
  // const fetchedUser = fetchUser();

  return (
    <>
      {/* <Person name={fetchedUser.name} age={fetchedUser.age} isMarried={fetchedUser.isMarried} /> */}
      <Person name={"Pedro"} age={22} isMarried={false} />
      {/* <Person name={"Varsha"} age={"25"} isMarried={true} /> */}

      <UserProvider>
        <User name={"Pedro"} age={22} isMarried={false} country={Countries.India} />
      </UserProvider>
    </>
  )
}

export default App
