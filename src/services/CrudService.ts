export interface CrudService<T> {
    getAll(): Array<T>;
    getOne(id: string): T;
    postOne(object: T): T;
    updateOne(id: string, object: T): T;
    deleteOne(id: string): void;
}
