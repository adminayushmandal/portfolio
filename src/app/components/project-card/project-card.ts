import {Component, input} from '@angular/core';
import {Repository} from '../../shared/services/project-store';
import {Card} from 'primeng/card';
import {Tag} from 'primeng/tag';
import {Rating} from 'primeng/rating';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-project-card',
  imports: [
    Card,
    Tag,
    Rating,
    FormsModule
  ],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  public project = input<Repository[0]>()
}
