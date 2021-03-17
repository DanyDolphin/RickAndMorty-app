import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewport-trigger',
  templateUrl: './viewport-trigger.component.html',
  styleUrls: ['./viewport-trigger.component.css']
})
export class ViewportTriggerComponent implements AfterViewInit, OnDestroy {

  @ViewChild('trigger') triggerElement: ElementRef;
  @Output() trigger = new EventEmitter<any>()
  triggered = false

  ngAfterViewInit(): void {
    document.addEventListener('scroll', this.handleScroll.bind(this))
  }

  ngOnDestroy(): void {
    document.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  reset() {
    this.triggered = false
  }

  handleScroll(): void {
    const rect = this.triggerElement.nativeElement.getBoundingClientRect()
    let inViewport = rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    if (inViewport && !this.triggered) {
      this.triggered = true
      console.log('triggered!!')
      this.trigger.emit()
    }
  }

}
