// src/service/GetResponseFromServer.tsx

import type { ResponseProps } from "../chatResponse/ResponseProps";
import { testData } from "../store/testData";


export interface IResponseService {
    getData(): Promise<ResponseProps[]>;
}

// Dummy implementation
export class DummyResponseService implements IResponseService {
    async getData(): Promise<ResponseProps[]> {
        return testData;
    }
}

// HTTP implementation
export class HttpResponseService implements IResponseService {
    private apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    async getData(): Promise<ResponseProps[]> {
        const response = await fetch(this.apiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        return response.json();
    }
}

// Usage example (choose which service to use):
// const service: IResponseService = new DummyResponseService();
// or
// const service: IResponseService = new HttpResponseService('https://api.example.com/data');
// service.getData().then(data => console.log(data));