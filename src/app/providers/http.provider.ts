import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

@Injectable()
export class HttpProvider {

    public baseUrl: string | null = null;
    public ticketKey: string | null = null;
/**
 *
 * Perform HTTP requests.

HttpClient is available as an injectable class, with methods to perform HTTP requests.
Each request method has multiple signatures, and the return type varies according to which
signature is called (mainly the values of observe and responseType).
 */
    constructor(private http: HttpClient) {
    }

    public get<T>(relativeUrl: string, data?: any): Observable<T> {
        return this.request<T>(relativeUrl, 'Get', data, false);
    }
    public request<T>(relativeUrl: string, method: string, data?: any, formatUrl: boolean = true): Observable<T> {
        return this.http.request(method, relativeUrl, {
            body: data,
            responseType: 'text'
        }).pipe(
            map(res => {
                if (!res) {
                    return <any>res;
                }

                return <T>JSON.parse(res);
            })
        );
    }

    public post<T>(relativeUrl: string, data: any, formUrlEncoded: boolean = false): Observable<T> {
        return this.request(relativeUrl, 'Post', data, formUrlEncoded);
    }

    public postFile<T>(relativeUrl: string, formData: FormData): Observable<T> {
        return this.http.post(relativeUrl, formData, {}).pipe(
            map(res => <T>res)
        );
    }

    public put<T>(relativeUrl: string, data?: any): Observable<T> {
        return this.request(relativeUrl, 'Put', data, false);
    }

    public patch<T>(relativeUrl: string, data: any): Observable<T> {
        return this.request(relativeUrl, 'Patch', data, false);
    }

    public delete<T>(relativeUrl: string, data: any): Observable<T> {
        return this.request(relativeUrl, 'Delete', data, false);
    }

    public head<T>(relativeUrl: string): Observable<T> {
        return this.request(relativeUrl, 'Head', null, false);
    }

    public errorHandler(error: any): void {
        console.log(error);
    }

}


