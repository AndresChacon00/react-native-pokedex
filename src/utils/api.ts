export interface Pokemon {
    name: string;
    order: number;
    sprites : {
        other: {
            'official-artwork': {
                front_default: string;
            }
        }
    }
    types: {
        slot: number;
        type: {
            name: string
        }
    }
}

export interface AllPokemon {
    count: number;
    next: string | null;
    previous?: string;
    results: {
        name: string;
        url: string;
    }[];
}

export async function fetchFn(endpoint: string) {
    const response = await fetch(endpoint)
    return response.json()
}

export async function fetchAllPokemon({ pageParam = 'https://pokeapi.co/api/v2/pokemon' }: { pageParam?: string }): Promise<AllPokemon> {

    const response = await fetch(pageParam);

    return response.json();

}