import { Component, OnInit } from '@angular/core';
import { ServicesService } from "../../servicios/services.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor( private services :ServicesService) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.comicShow();
  }
  comicShow(){
    this.services.listOfComics().subscribe(data=>{
      console.log(data)
    })
  }

}
