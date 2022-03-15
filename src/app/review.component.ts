import { Component } from "@angular/core";

@Component({
    selector: 'review-app',
    template:  `<h1> does stuff
                <br/>
                Comments: {{comment}}
                <br/>
                Likes: {{likeCounter}} Dislikes: {{unlikeCounter}}
                <br/>
                <button (click)="like()">Like</button><button (click)="unlike()">Dislike</button>
            </h1>`,
        styles : ['h1 {color : blue}']
})

export class ReviewComponent
{
    comment:string = "No comment";
    likeCounter:number = 0;
    unlikeCounter:number = 0;

    like()
    {
        this.likeCounter++;
        this.comment = "You liked our services";
    }
    unlike()
    {
        this.unlikeCounter++;
        this.comment = "Sorry to hear that. Please contact support@revature.net to give us feedback";
    }
}
