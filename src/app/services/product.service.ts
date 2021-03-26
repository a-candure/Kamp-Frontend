import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44374/api/';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath =this.apiUrl+ "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsbyCategory(categoryId:number): Observable<ListResponseModel<Product>> {
    let newPath =this.apiUrl+ "products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  Add(product:Product):Observable<ResponseModel>{
    console.log(product)
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add", product,)
  }
}
