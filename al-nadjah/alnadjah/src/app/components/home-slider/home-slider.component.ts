import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { sliderData } from '../../../app/api/api-slider';
import { Slide } from '../../../app/models/slide';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css'],
})
export class HomeSliderComponent implements OnInit, OnDestroy {
  slider: Slide[] = sliderData;
  currentSlide: Slide = this.slider[0];
  currentIndex: number = 0;
  indexObs: Observable<number> = interval(5000);
  indexObsSub: Subscription | undefined;

  ngOnInit(): void {
    this.indexObsSub = this.indexObs.subscribe({
      next: (value: number) => {
        this.handleChangeImage(1);
      },
    });
  }
  ngOnDestroy(): void {
    this.indexObsSub?.unsubscribe();
  }

  //todo: must simplify
  handleChangeImage(index: number) {
    let newIndex;
    if (index === -1) {
      //Previous
      newIndex = this.currentIndex - 1;
      if (newIndex >= 0) {
        // ok
        this.currentIndex = newIndex;
      } else {
        // error
        this.currentIndex = this.slider.length - 1;
      }
    } else {
      //Next
      newIndex = this.currentIndex + 1;
      if (newIndex > this.slider.length - 1) {
        // error
        this.currentIndex = 0;
      } else {
        //ok
        this.currentIndex = newIndex;
      }
    }
  }
}
