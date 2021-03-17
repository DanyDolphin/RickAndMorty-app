import { Character } from "./models";

export interface Info {
    count: number,
    pages: number,
    next: string,
    prev: string
}

export interface PageResponse {
    info: Info,
    results: Character[]
}