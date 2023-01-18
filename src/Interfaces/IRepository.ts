import IFilter from './IFilter';

interface IRepository<T>
{
    list(filter: IFilter): Promise<T[]>;
}

export default IRepository;