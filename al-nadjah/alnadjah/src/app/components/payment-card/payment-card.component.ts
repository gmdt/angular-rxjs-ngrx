import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-card',
  templateUrl: './payment-card.component.html',
})
export class PaymentCardComponent {
  @Input() fullWidth: boolean = false;
}
