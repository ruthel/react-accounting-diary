export default class Func {
    static currency(value: number, devise?: string, local?: string): string;
    static number(value: number): string;
    static date(value: string | Date): string;
    static extractDoc(blob: string): void;
}
