export interface ICat {
    id: string;
    width: string;
    height: string;
    url: string;
    breeds?: {}[];
    categories?:{id: number, name: string}[];
}

export interface ICategories {
    id: number;
    name: string;
}


export interface InputProps {
    label: string;
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}