import { Component, Input } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  feedbacks:any
  types:string[]=[
    "All",
    "Branding and Communication",
    "Inbound & Content Marketing",
    "Film & Webinar","Digital Marketing",
    "ECommerce & Websites",
    "Market Analysis"
  ]
  selected:string="All"
  
        constructor(private fs:FeedbackService)  {
           this.fs.getFeedbacks().subscribe(
              {
                  next : (data:any)=> this.feedbacks =data
              }
           )
        }
}
