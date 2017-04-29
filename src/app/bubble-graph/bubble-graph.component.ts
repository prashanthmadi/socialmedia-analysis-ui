import { Component, OnInit } from '@angular/core';
import { Point } from '../models';
declare var d3: any;

@Component({
  selector: 'app-bubble-graph',
  templateUrl: './bubble-graph.component.html',
  styleUrls: ['./bubble-graph.component.css']
})

export class BubbleGraphComponent implements OnInit {

  screen = { x: window.innerWidth / 2, y: window.innerHeight - 60 };
  nCirclePosition = { x: this.screen.x / 4, y: this.screen.y / 2 };
  pCirclePosition = { x: this.nCirclePosition.x * 3, y: this.screen.y / 2 };
  transitionSpeed = 2000;
  negative = 1;
  positive = 1;
  defaultRadius = 150;
  positiveCirlce;
  negativeCircle;

  ngOnInit() {
    this.positiveCirlce = d3.select('#positiveCircle');
    this.negativeCircle = d3.select('#negativeCircle');
    setInterval(() => this.setCircleSize(), 2000);
  }

  setCircleSize() {
    this.positiveCirlce.transition()
      .duration(500)
      .attr('r', this.defaultRadius + ((this.negative - this.positive) / (this.positive + this.negative)) * 50);

    this.negativeCircle.transition()
      .duration(500)
      .attr('r', this.defaultRadius + ((this.positive - this.negative) / (this.positive + this.negative)) * 50);

  }

  addTwitter() {
    const tweetStart = { x: Math.random() * this.screen.x, y: 0 };
    const tweet = d3.select('svg')
      .append('image')
      .attr('xlink:href', './assets/images/twitter.png')
      .attr('class', 'twitter')
      .attr('height', '25')
      .attr('width', '25')
      .attr('x', tweetStart.x)
      .attr('y', tweetStart.y);

    if (Math.round(Math.random())) {
      this.translate(tweet, this.nCirclePosition);
      this.negative++;
    } else {
      this.translate(tweet, this.pCirclePosition);
      this.positive++;
    }

  }

  translate(tweet, destination) {
    tweet.transition().duration(this.transitionSpeed)
      .attr('x', destination.x)
      .attr('y', destination.y)
      .style('opacity', 0)
      .remove();
  }

}
