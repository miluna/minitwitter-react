export interface CrudService<T> {
    getAll(): Promise<Array<T>>;
    getOne(id: string): Promise<T>;
    postOne(object: T): Promise<T>;
    updateOne(id: string, object: T): Promise<T>;
    deleteOne(id: string): void;
}
