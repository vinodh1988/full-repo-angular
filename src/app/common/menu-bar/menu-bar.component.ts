import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  lang:any= "english"
  languages:any=[
    {name:"English",value:"english"},
    {name:"Tamil",value:"tamil"},
    {name:"Telugu",value:"telugu"},
    {name:"Hindi",value:"hindi"}

  ]
    constructor(private ts:TranslateService){
        this.ts.use(this.lang)
    }

    changeLang():void{
       this.ts.use(this.lang)
    }
}
