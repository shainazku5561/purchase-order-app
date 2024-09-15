import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.error('An error occurred:', error);
    // Display error notification to the user
    alert('An unexpected error occurred. Please try again later.');
  }
}

