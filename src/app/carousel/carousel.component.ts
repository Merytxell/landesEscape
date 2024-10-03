import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, FormsModule], 
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  chunkSize = 5;
  chunks: string[][] = []; 

  
  
  items = [  
    "Evénements",
    "Randonnées",
    "Sortie en famille",
    "Plages",
    "Artisanat traditionnel",
    "Restaurant",
    "Gites"
  
  ]


  cities = ['Dax', 'Hossegor', 'Capbreton', 'Seignosse', 'Biscarrosse', 'Mont-de-Marsan'];
  filteredCities: string[] = this.cities;
  searchTerm: string = '';


  ngOnInit() {
    this.chunkArray();
  
  }

  chunkArray() {
    this.chunks = [];
    for (let i = 0; i < this.items.length; i += this.chunkSize) {
      this.chunks.push(this.items.slice(i, i + this.chunkSize));
    }
  }
  filterCities() {
    this.filteredCities = this.cities.filter(city =>
      city.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
}
}