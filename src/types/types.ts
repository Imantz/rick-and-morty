export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: { name: string; url: string };
    location: { name: string; url: string };
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export enum CardLayout {
    LIST_LAYOUT = 'LIST_LAYOUT',
    SINGLE_CARD_LAYOUT = 'SINGLE_CARD_LAYOUT',
}
