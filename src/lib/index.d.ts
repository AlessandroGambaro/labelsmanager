declare module 'labels-manager' {
    export class LanguageManager {
        static getLabel(labels: any, id: string, defaultValue: string): string;
        static loadLabels(locale: string): any;
    }
}