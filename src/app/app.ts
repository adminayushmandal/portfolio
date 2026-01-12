import {Component, computed, inject, model, signal} from '@angular/core';
import {Button, ButtonDirective, ButtonIcon, ButtonLabel} from 'primeng/button';
import {Avatar} from 'primeng/avatar';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from 'primeng/tabs';
import {SkillCard} from './components/skill-card/skill-card';
import {Dialog} from 'primeng/dialog';
import {ProjectStore} from './shared/services/project-store';
import {ProjectCard} from './components/project-card/project-card';
import {InputGroup} from 'primeng/inputgroup';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {InputGroupAddon} from 'primeng/inputgroupaddon';
import {Textarea} from 'primeng/textarea';
import {ProgressSpinner} from 'primeng/progressspinner';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Button, Avatar, ButtonDirective, ButtonLabel, ButtonIcon, Tabs, TabList, Tab, TabPanel, TabPanels, SkillCard, Dialog, ProjectCard, InputGroup, FloatLabel, InputText, InputGroupAddon, Textarea, ProgressSpinner, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ayush-krishan-mandal');
  protected contact = model(false)
  private _projectStore = inject(ProjectStore)

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
  protected repositories = computed(() => this._projectStore.repositories.value())
  protected projectLoader = computed(() => this._projectStore.repositories.isLoading())

  protected datetime = new Date()

  constructor() {
  }
}
