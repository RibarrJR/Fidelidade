import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { RequestCadastroDeUsuario, ResponseCadastroDeUsuario } from "../models/cadastro.model";


@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  constructor(private http: HttpClient) {}

  AddUserPost(
    body: RequestCadastroDeUsuario
  ): Observable<ResponseCadastroDeUsuario> {
    return this.http.post<ResponseCadastroDeUsuario>(
      `${environment.path}` + 'userss',
      body
    );
  }
}
