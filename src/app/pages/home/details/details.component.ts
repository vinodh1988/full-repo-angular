import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
   id:any;
   service:any;
   details:any;
  constructor(private hs:HomeService,private ar:ActivatedRoute){
     this.ar.params.subscribe(
       {
         next: (params)=>{ 
          this.id =params['id']
          this.readData()
         },
         error: () => this.id = 0
       }
     )
  }

  readData(){

     this.hs.getServiceById(this.id).subscribe({
        next: (data:any)=> this.service =data,
        error: ()=> this.service = {}
     })

     this.hs.getDetails(this.id).subscribe({
         next: (data:any)=> this.details =data,
         error: ()=> this.details = {}
     })
  }
}
