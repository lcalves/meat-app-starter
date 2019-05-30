import { LoginService } from './security/login/login.servide';
import { NotificationService } from './shared/messages/notification.service';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse} from '@angular/common/http'

//Mudou devido a versao 6 do rxjs
// import 'rxjs/add/observable/throw'

// SE FOSSE IMPORTAR SERIA UTILIZADO
// import {throwError} from 'rxjs/operators'

 
@Injectable()
export class ApplicationErrorHandler extends ErrorHandler{

    constructor(private ns: NotificationService, private injector: Injector, private ngZone: NgZone){
        super()
    }

    handleError(errorResponse: HttpErrorResponse | any){

        if(errorResponse instanceof HttpErrorResponse){
            const message = errorResponse.error.message
            this.ngZone.run(()=>{
                switch(errorResponse.status){
                    case 401:
                       this.injector.get(LoginService).handleLogin()
                        break;
                    case 403:
                        this.ns.notify(message || 'Não autorizado.')
                    break;
                    case 404:
                        this.ns.notify(message || 'Recurso não encontrado. Verifique o console para mais detalhes.')
                        break;
                }
            })
           
        }

       super.handleError(errorResponse)
    }
}