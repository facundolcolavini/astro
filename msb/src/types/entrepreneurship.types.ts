export interface APIResponseEntrepreneurship {
    resultado: Results;
}

export interface Results {
    datos:          Datos;
    emprendimiento: { [key: string]: string }[];
    img:            Array<string[]>;
    query:          null;
}

export interface Datos {
    codemp:   string;
    consulta: string;
    cantidad: number;
}
