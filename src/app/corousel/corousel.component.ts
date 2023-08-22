import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: 'corousel.component.html',
  styleUrls: ['corousel.component.css'] // Add your CSS styles here
})
export class CorouselComponent implements OnInit {
  slidePosition: number = 1;

  ngOnInit(): void {
    this.showSlides(this.slidePosition);
    this.autoSlideShow();
  }

  plusSlides(n: number): void {
    this.showSlides(this.slidePosition += n);
  }

  currentSlide(n: number): void {
    this.showSlides(this.slidePosition = n);
  }

  showSlides(n: number): void {
    const slides = document.getElementsByClassName('Containers') as HTMLCollectionOf<HTMLElement>;
    const circles = document.getElementsByClassName('dots') as HTMLCollectionOf<HTMLElement>;

    if (n > slides.length) { this.slidePosition = 1; }
    if (n < 1) { this.slidePosition = slides.length; }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (let i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(' enable', '');
    }
    slides[this.slidePosition - 1].style.display = 'block';
  }

  autoSlidePosition: number = 0;

  autoSlideShow(): void {
    const slides = document.getElementsByClassName('Containers') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    this.autoSlidePosition++;
    if (this.autoSlidePosition > slides.length) { this.autoSlidePosition = 1; }
    slides[this.autoSlidePosition - 1].style.display = 'block';
    setTimeout(() => this.autoSlideShow(), 2000); // Change image every 2 seconds
  }
}
