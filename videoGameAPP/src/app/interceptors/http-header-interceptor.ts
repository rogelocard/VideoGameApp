import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor () {}

    intercept (
        req:HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone ({
            setHeaders: { 
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
                'x-rapidapi-key': 'ca107de6c8mshdbc7a45b0750d57p1590a1jsn95d33b6bd377', //75944812f6mshec7607ede8d8378p10775djsn2cd824edb19a
                //ca107de6c8mshdbc7a45b0750d57p1590a1jsn95d33b6bd377
            },
            setParams: {
                key: 'e40e743af2c94b0c916a8aa618fb4473',
            }
        });
        return next.handle(req);
    }

}