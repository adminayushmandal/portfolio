import {Component, input} from '@angular/core';
import {Card} from 'primeng/card';

@Component({
  selector: 'app-skill-card',
  imports: [
    Card
  ],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.css',
})
export class SkillCard {
  public skill = input<{ name: string, icon: string }>()
}
