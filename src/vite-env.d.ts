/// <reference types="vite/client" />

type LangType = 'ja' | 'hi' | 'es' | 'fr';

type wordtype = {
    word: string;
    meaning: string;
    options:string[];
}

type rootstate = {
    loading:boolean;
    result:string[];
    words:wordtype[];
    error?:string;
}

type fetchedDataType = {
    translations:{
        text:string;
    }[]
}