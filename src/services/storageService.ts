import {
  CrudService,
  type CrudCreate,
  type CrudModel,
  type CrudUpdate,
  type Params,
} from "./crud";

export class StorageService<T extends CrudModel> extends CrudService<T> {
  constructor(public readonly key: string) {
    super();
  }

  async find(params?: Params): Promise<T[]> {
    return JSON.parse(localStorage.getItem(this.key) ?? "[]");
  }

  async findOne(id: T["id"], params?: Params): Promise<T | void> {
    return this.find().then((items) => items.find((item) => item.id === id));
  }

  async update(data: CrudUpdate<T>): Promise<T | void> {
    const items = await this.find();
    const item = items.find((item) => item.id === data.id);

    if (item) {
      Object.assign(item, data);
      localStorage.setItem(this.key, JSON.stringify(items));
    }
    return item;
  }

  async create(data: CrudCreate<T>): Promise<T> {
      const items = await this.find();
      const item = {id: Date.now(), ...data} as T;
      items.push(item);
      localStorage.setItem(this.key, JSON.stringify(items));
      return item;
  }

  async delete(id: T["id"]): Promise<void> {
      const items = await this.find();
      const index = items.findIndex((item) => item.id == id);
      if(index >= 0) {
          items.splice(index, 1);
          localStorage.setItem(this.key, JSON.stringify(items));
      }
  }
}
