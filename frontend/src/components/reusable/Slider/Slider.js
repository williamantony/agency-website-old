import React, { Component } from 'react';
import './Slider.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.sliderContent = React.createRef();

    this.isSwiping = false;
    this.startX = null;
    this.startLeft = null;

    this.state = {
      index: 0,
      count: props.slides.length,
      slidesVisible: 3,
      slides: props.slides,
    };
  }

  componentDidMount() {
    const slider = this.slider.current;

    slider.addEventListener('mousedown', this.swipeStart);
    slider.addEventListener('mouseup', this.swipeEnd);
    slider.addEventListener('mouseleave', this.swipeEnd);
    slider.addEventListener('mousemove', this.swipeMove);

    slider.addEventListener('touchstart', this.swipeStart, false);
    slider.addEventListener('touchend', this.swipeEnd, false);
    slider.addEventListener('touchmove', this.swipeMove, false);
  }

  swipeStart = (event) => {
    this.isSwiping = true;
    
    let clientX;

    if (event.type === 'mousedown') {
      event.preventDefault();
      clientX = event.clientX;
    } else if (event.type === 'touchstart') {
      clientX = event.changedTouches[0].clientX;
    }

    this.startX = clientX;
    this.startLeft = this.sliderContent.current.offsetLeft;

    this.sliderContent.current.style.transition = "left 0s ease 0s";
  }

  swipeEnd = (event) => {
    this.isSwiping = false;

    let clientX;

    if (event.type === 'mouseup') {
      event.preventDefault();
      clientX = event.clientX;
    } else if (event.type === 'touchend') {
      clientX = event.changedTouches[0].clientX;
    }

    const delta = clientX - this.startX;

    const slideWidth = this.sliderContent.current.parentElement.offsetWidth / this.state.slidesVisible;
    const nextSlideIndex = Math.abs(Math.round(this.sliderContent.current.offsetLeft / slideWidth));

    if (nextSlideIndex === this.state.index) {
      if (delta < -50) {
        // Slide Right
        this.slideTo(this.state.index + 1);
      } else if (delta > 50) {
        // Slide Left
        this.slideTo(this.state.index - 1);
      } else {
        this.slideCurrent();
      }
    } else {
      this.slideTo(nextSlideIndex);
    }

    this.sliderContent.current.style.transition = "left 0.5s ease 0s";
  }

  swipeMove = (event) => {
    let clientX;

    if (event.type === 'mousemove') {
      event.preventDefault();
      clientX = event.clientX;
    } else if (event.type === 'touchmove') {
      clientX = event.changedTouches[0].clientX;
    }

    if (this.isSwiping) {
      const delta = clientX - this.startX;

      const sliderContent = this.sliderContent.current;

      const newOffset = ((this.startLeft + delta) / sliderContent.parentElement.offsetWidth) * 100;
      const maxOffset = ((sliderContent.parentElement.offsetWidth - sliderContent.offsetWidth)/ sliderContent.parentElement.offsetWidth) * 100;
      
      const position = (newOffset < 0) ? ((newOffset < maxOffset) ? maxOffset : newOffset) : 0;

      this.sliderContent.current.style.left = `${ position }%`;
    }
  }

  slideLeft = () => {
    this.slideTo(this.state.index - 1);
  }

  slideRight = () => {
    this.slideTo(this.state.index + 1);
  }

  slideCurrent = () => {
    this.sliderContent.current.style.left = `${ 0 - ((100 / this.state.slidesVisible) * this.state.index) }%`;
  }
  
  slideTo = (index) => {
    if (index < 0) return;
    if (index > (this.state.count - this.state.slidesVisible)) return;
    this.setState({ index });
  }

  getSlideVisibility = (index) => (
    index >= this.state.index && index <= (this.state.index + (this.state.slidesVisible - 1))
  )

  setSlidesVisible = (count) => {
    this.setState({
      slidesVisible: count,
    });
  }

  render() {
    const isFirstChild = this.state.index === 0;
    const isLastChild = this.state.index === (this.state.count - this.state.slidesVisible);

    const overflowContentStyle = {
      left: `${ 0 - ((100 / this.state.slidesVisible) * this.state.index) }%`,
      width: `${ (100 * this.state.count) / this.state.slidesVisible }%`,
    };

    return (
      <div className="Slider" ref={this.slider} onMouseDownCapture={this.swipeStart} onTouchStartCapture={this.swipeStart}>
        <div className="Slider__controls">
          <div className="Slider__controls__arrow Slider__controls__arrow--left" data-visible={!isFirstChild} onClick={this.slideLeft} />
          <div className="Slider__controls__arrow Slider__controls__arrow--right" data-visible={!isLastChild} onClick={this.slideRight} />
        </div>
        <div className="Slider__overflow">
          <div className="Slider__overflow__content" ref={this.sliderContent} style={overflowContentStyle}>
            {
              this.state.slides.map((slide, index) => (
                <div key={index} className="Slider__item" data-visible={ this.getSlideVisibility(index) }>
                  { slide }
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
