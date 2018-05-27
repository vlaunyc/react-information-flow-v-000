import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'
import {getRandomColor} from "./randomColorGenerator";

export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      color: nextProps.color,
      childColor: getReducedColor(nextProps.color),
    })
  };

  handleClick = (e) => {
    e.stopPropagation();
    const initialColor = getRandomColor();
    this.setState({
      childColor: getReducedColor(initialColor)
    });
    this.props.handleChildClick();
  };

  handleChildClick = (e) => {
    e.stopPropagation();
    this.setState({
      childColor: getRandomColor(),
    })
  };

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.handleClick} className="tier2" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier3 color={this.state.childColor} handleChildClick={this.handleChildClick} />
        <Tier3 color={this.state.childColor} handleChildClick={this.handleChildClick} />
      </div>
    )
  }
}
