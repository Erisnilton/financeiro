export type Params = Record<string, any>
export type CrudUpdate<T extends CrudModel> = Partial<T> & Pick<T, "id">;
export type CrudCreate<T extends CrudModel> = Omit<T, "id">;

export interface CrudModel {
    id: any
}

function isUpdateData (data: any): data is CrudUpdate<any> {
    return typeof data === "object" && data && data.hasOwnProperty('id')
}
export abstract class CrudService<T extends CrudModel> {
    abstract find(params?: Params):Promise<T[]>;
    abstract findOne(id: T['id'], params?: Params):Promise<T | void>;
    abstract update(data: CrudUpdate<T>):Promise<T | void>;
    abstract create(data: CrudCreate<T>): Promise<T>;
    abstract delete(id: T['id']): Promise<void>
    save(data: CrudUpdate<T> | CrudCreate<T>): Promise<T>{
        console.log(data)
        return (isUpdateData(data) ? this.update(data) : this.create(data)) as Promise<T>
    }
}