export interface Location {
    name: string,
    url: string
}

export interface Character {
    id: number,
    name: number,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: Location,
    location: Location,
    image: string,
    url: string,
    created: string
}