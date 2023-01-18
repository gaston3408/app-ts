import IFilter from '../Interfaces/IFilter';
import IMetadata from '../Interfaces/IMetadata';

export const getMetadata = (filter: IFilter, data: unknown[]): IMetadata => ({
    page: filter.getPage() ?? null,
    total_records: data.length
})