import { ICustomer } from "./common/ICustomer";

interface IDataProvider {
    data : any[];

    getItems(): any[];
    getItemByID(id : number) : any;

    addItem(item: any) : void;
    updateItem(item: any) : void;
    deleteItem(item: any) : void;
    deleteItemByID(id: number) : void;
}


class CustomerProvider implements IDataProvider {
    public data : ICustomer[] = [];

    constructor() {

    }

    public getItems(): ICustomer[] {
        return this.data;
    }

    public getItemByID(id : number) : ICustomer {
        // find by id and return
    }

    public addItem(item: ICustomer) : void {
        this.data.push(item);
    }

    public updateItem(item: ICustomer) : void {
        // find and update
        // this.data.find()
    }

    public deleteItem(item: ICustomer) : void {
        // find and delete
    }

    public deleteItemByID(id: number) : void {
        // find by id and delete
    }

}

let cp : CustomerProvider = new CustomerProvider();
