interface IFilter {
    getSize(): number;
    getPage(): number;
    getValue(key: string): string;
}

export default IFilter;
