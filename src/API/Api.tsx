import axios, { AxiosInstance } from 'axios'
import { RemotiveApiResult } from './model';

export default class RemotiveApi {
    private _axiosRemotive: AxiosInstance;
    private _urlLocal: string = "https://github-job-proxy.herokuapp.com/";

    constructor() {
        this._axiosRemotive = axios.create({
            baseURL: `${this._urlLocal}https://remotive.io/api/remote-jobs`,
            timeout: 10000,
            headers: {
                AccessControlAllowOrigin: "*",
                Accept: "application/json",
            },
        });
    }

    getJobs(): Promise<RemotiveApiResult> {
        localStorage.clear();
        return this._axiosRemotive.get('?category=software-dev')
            .then(res => {
                localStorage.setItem('jobs', JSON.stringify(res.data));
                localStorage.setItem('date', JSON.stringify(new Date()));
                return res.data;
            }).catch(error => { throw error });
    }
}