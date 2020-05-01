import axios from "axios";

export class DataProvider {
    constructor(public serviceURL : string) {

    }

    public async getData<T>(entityName : string) { 
        try {
            let response  = await axios.get(`${this.serviceURL}/${entityName}?$format=json`);
            return response.data.value as T[];

        } catch(err) {
            console.log(err);
        }
    }
}