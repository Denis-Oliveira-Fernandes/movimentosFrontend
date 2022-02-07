import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiPaths } from 'src/app/enums/ApiPaths';
import { MovimentosLanding } from 'src/app/models/MovimentosLanding';
import { ProdutoCosif } from 'src/app/models/ProdutoCosif';
import { Produtos } from 'src/app/models/Produtos';
import { ApiService } from 'src/app/service/api/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movimentos-home',
  templateUrl: './movimentos-home.component.html',
  styleUrls: ['./movimentos-home.component.css']
})
export class MovimentosHomeComponent implements OnInit {
  movimentosLanding: MovimentosLanding[] = []
  produtoCosif: ProdutoCosif[] = []
  produtos: Produtos[] = []
  codProduto: string = ''
  codCosif: string = ''
  baseUrl = environment.baseUrl;

  form = new FormGroup({
    dataMes: new FormControl('', Validators.required),
    dataAno: new FormControl('', Validators.required),
    codProduto: new FormControl('', Validators.required),
    codCosif: new FormControl('', Validators.required),
    valor: new FormControl('', Validators.required),
    descricao: new FormControl('', Validators.required)
  });

  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.produtoCosif = []
    this.codProduto = ''
    this.codCosif = ''

    this.form.reset()
    this.form.disable()

    this.apiService.get(`${this.baseUrl}/${ApiPaths.Movimentos}`)
      .then(response => {

        this.movimentosLanding = response
        this.apiService.get(`${this.baseUrl}/${ApiPaths.Produtos}`)
          .then(response => {
            this.produtos = response
            console.log(this.produtos)
          })
      })
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.apiService.post(this.form.value, `${this.baseUrl}/${ApiPaths.Movimentos}`)
      .then(() => {
        this.ngOnInit()
      })
  }

  changeProduto(e: any) {
    this.codCosif = ''
    this.produtoCosif = []
    this.codProduto = e.target.value
    this.apiService.get(`${this.baseUrl}/${ApiPaths.ProdutoCosif}/${e.target.value}`)
      .then(response => {
        this.produtoCosif = response
      })
  }

  changeProdutoCosif(e: any) {
    this.codCosif = e.target.value
  }

  clearForm() {
    this.codProduto = ''
    this.codCosif = ''
    this.produtoCosif = []
    this.form.reset()
  }

  enableForm() {
    this.form.enable()
  }
}
