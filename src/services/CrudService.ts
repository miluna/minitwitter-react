export interface CrudService<T> {
    getAll(): Array<T>;
    getOne(id: number): T;
    postOne(object: T): T;
    updateOne(id: number, object: T): T;
    deleteOne(id: number): void;
}
