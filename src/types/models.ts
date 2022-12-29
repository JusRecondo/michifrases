/* API Data */
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

/* Components Props */

export interface ITextInputProps {
    label: string;
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    maxLength: number
}

export interface iButtonProps {
	children: React.ReactNode;
	handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ITextStyles {
    font: string;
    size: string;
    color: string;
}