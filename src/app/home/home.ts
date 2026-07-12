import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({ selector: 'app-home', imports: [RouterLink, ButtonModule, TagModule], templateUrl: './home.html', styleUrl: './home.scss' })
export class Home {}
