export default class Func {
    static currency(value: number, currency?: string, locale?: string): string;
    static number(value: number): string;
    static date(value: string | Date): string;
    static extractDoc(blob: string): void;
}
