import { useContext } from "react"
import { UserContext } from "./UserContextProvider"

export enum Countries {
    Brazil = "Brazil",
    India = "India"
}
interface Props {
    name: string,
    age: number,
    isMarried: boolean,
    country: Countries
}
export const User = (props: Props) => {

    // const { updateUser, addUser, deleteUser, users } = useContext(UserContext);

    return (
        <>
            <h1>Person </h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>This Person is {props.isMarried ? "married" : "single"}</p>
            <p>Country: {props.country}</p>
        </>
    )
}
