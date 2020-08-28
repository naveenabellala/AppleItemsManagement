import { Injectable } from '@angular/core';
import { Iitem } from '../components/item';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
   private itemUrl='http://localhost:8080/items';

  constructor(private http : HttpClient) { }

  getItems() : Observable<Iitem[]> 
  {
    return this.http.get<Iitem[]>(`${this.itemUrl}`)
    .pipe(
      
      catchError(this.handleError)
    );
  }

  getItem(id: number): Observable<Iitem | undefined> {
    return this.getItems()
      .pipe(
        map((items: Iitem[]) => items.find(p => p.id === id))
      );
  }

  deleteItem(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete(`${this.itemUrl}/${id}`,{ headers })
    
  }

  createItem(item : Iitem) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    item.id= null;
    return this.http.post(`${this.itemUrl}`, item, { headers })
      .pipe(
        tap(data => console.log('createItem: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  editItem(id : number) {
   
    return this
          .http
          .get(`${this.itemUrl}/${id}`)
    }

  updateItem(name,code,owner,price,imageUrl,rating,availability,feedback,id) {
    const obj = {
      id : id,
      name : name,
      code : code,
      owner : owner,
      price : price,
      imageUrl : imageUrl,
      rating : rating,
      availability : availability,
      feedback : feedback      
    };
    this
      .http
      .put(`${this.itemUrl}/${id}`, obj)
      .subscribe(res => console.log('Done'));
    
     
      
  }



  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
