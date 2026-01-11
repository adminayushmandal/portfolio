import {Component, signal} from '@angular/core';
import {Button, ButtonDirective, ButtonIcon, ButtonLabel} from 'primeng/button';
import {Avatar} from 'primeng/avatar';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from 'primeng/tabs';
import {SkillCard} from './components/skill-card/skill-card';

@Component({
  selector: 'app-root',
  imports: [Button, Avatar, ButtonDirective, ButtonLabel, ButtonIcon, Tabs, TabList, Tab, TabPanel, TabPanels, SkillCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ayush-krishan-mandal');

  protected skills = [
    {name: "Angular", icon: 'pi pi-angular'},
    {name: ".NET", icon: 'pi pi-angular'},
    {name: "SQL Server", icon: 'pi pi-angular'},
    {name: "Postgresql", icon: 'pi pi-angular'},
    {name: "Azure", icon: 'pi pi-angular'},
    {name: "Firebase", icon: 'pi pi-angular'},
    {name: "ReactJs", icon: 'pi pi-angular'},
    {name: "NextJs", icon: 'pi pi-angular'},
    {name: "Tailwindcss", icon: 'pi pi-angular'},
    {name: "Bootstrap", icon: 'pi pi-angular'},
    {name: "AI Foundry", icon: 'pi pi-angular'},
  ]
}
