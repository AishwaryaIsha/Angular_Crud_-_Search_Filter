import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  export class AppComponent {
  //locked: any[] = [];
  private product: any={};
  private products :any[]=[];

  constructor(){}

  ngOnInit(){
      // this.locked = [
      //     {ID: 1, User: 'Agustin', AuthID: '68114', FormName: 'Fellman', WinHandle: 'Oak Way'},
      //     {ID: 2, User: 'Alden', AuthID: '98101', FormName: 'Raccoon Run', WinHandle: 'Newsome'},
      //     {ID: 3, User: 'Ramon', AuthID: '28586', FormName: 'Yorkshire Circle', WinHandle: 'Dennis'},
      //     {ID: 4, User: 'Elbert', AuthID: '91775', FormName: 'Lee', WinHandle: 'Middleville Road'},
      // ]
    this.products=[
    {
    ID: 1,
    name: 'apple',
    cost:'100',
    pic:'abcde',
    },
    { 
      ID: 2,
      name: 'Mango',
      cost:'600',
      pic:'nskfwhie',
    },
    {
      ID: 3,
      name: 'Pineapple',
      cost:'500',
      pic:'adfvakdfv',
    },
    {
      ID: 4,
      name: 'Grapes',
      cost:'700',
      pic:'asdcasuha',
      },
    ];
      
  }

  AddProduct(){
    this.products.push(this.product);
  }

  UpdateProduct(Myproduct){
    debugger
    this.product=Myproduct;
  }

  clearInput(){
    this.product={};
    }

  DeleteProduct(Myproduct){
   this.products.splice(Myproduct,1);
  }


}
