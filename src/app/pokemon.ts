export class Pokemon {
    id: number;
    name: string;
    url: string;

    constructor(id: number, nom: string, url: string) {
        this.id = id;
        this.name = nom;
        this.url = url;
    }

    getId = () => {
        return this.id;
    }

    getNom = () => {
        return this.name
    }

    getPokeInfo = () => {
        return {
            "id": this.id,
            "nom": this.name
        }
    }
}
