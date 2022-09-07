import React from "react"

export interface IProps {
    text: string,
}

export interface IPropChildren {
    children: JSX.Element
}

export interface IPropUserContext {
    username: string
    setUsername: React.Dispatch<React.SetStateAction<string>>
}