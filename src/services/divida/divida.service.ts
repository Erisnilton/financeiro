import { StorageService } from "../storageService";
import type { Divida } from "./divida.model";

class DividaService extends StorageService<Divida> {
    constructor() {
        super('divida');
    }
}

export default Object.freeze(new DividaService);