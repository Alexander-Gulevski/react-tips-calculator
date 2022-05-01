export interface ITips {
    total: number;
    persons: number | string;
    bill: number | string;
    tip: number;
}

export type TipsOptions = {
    readonly value: string;
    readonly label: string;
};
