import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrl: './search-button.component.scss'
})
export class SearchButtonComponent {
  estaDeshabilidato = false;
  habilitarDesabilitarBoton() {
    this.estaDeshabilidato = !this.estaDeshabilidato;
  }
  // Evento que emitirá la acción del clic
  @Output() searchClicked = new EventEmitter<void>(); 

  onClick() {
    this.searchClicked.emit(); // Emite el evento cuando se hace clic
  }
}
