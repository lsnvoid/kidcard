import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  protected cardId: string = '0012361318';
  protected cardId2: string = '0012143416';
  protected inputCardId: string = '';
  protected balance: number = 1000;
  protected balance2: number = 2000;
  protected amt: number = 20;

  deduct() {
    if (this.cardId === this.inputCardId)
      this.balance -= this.amt;
    else if (this.cardId2 === this.inputCardId)
      this.balance2 -= this.amt;
  }

  add() {
    if (this.cardId === this.inputCardId)
      this.balance += this.amt;
    else if (this.cardId2 === this.inputCardId)
      this.balance2 += this.amt;
  }
}
