import { Injectable } from "@angular/core";
import { ErrorHandler } from "@angular/core";

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor() {}

  handleError(error) {
    console.log("hata:" +error);
    throw error;
  }
}
