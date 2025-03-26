import React, { useState } from "react"

export interface Person {
    name: string,
    age: number,
    isMarried: boolean
}
export const Person = (props: Person) => {
    const [isShowInfo, setShowInfo] = useState<boolean | null>(true)

    const [bio, setBio] = useState<string | null>(null);

    const toggleInfo = () => {
        setShowInfo((prev) => !prev)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBio(event.target.value);
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { }
    return (
        <>
            {isShowInfo && (
                <h1>Person
                    <p>Name: {props.name}</p>
                    <p>Age: {props.age}</p>
                    <p>This Person is {props.isMarried ? "married" : "single"}</p>
                </h1>
            )}
            <button onClick={toggleInfo}>Show</button>

            <p>{props.name} Bio: {!bio ? "No bio" : bio} </p>
            <input onChange={handleChange} />
        </>

    )
}
