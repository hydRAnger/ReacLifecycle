import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  static propTypes = {
    code: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      count: props.code,
      desc: ''
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.code !== this.props.code) {
      return true;
    }

    return !!(nextState.count % 2);
  }

  componentDidMount() {
    this.setState({
      desc: 'Let us Weird Up!'
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      count: nextProps.code
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`Count Valid. ${prevState.count} -> ${this.state.count}`);
  }

  handleAdd(event: any) {
    event.preventDefault();

    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    const {code} = this.props;
    const {count, desc} = this.state;

    return (
      <div style={{padding: '10px', marginBottom: '10px', border: '5px solid #666'}}>
        <h2 className="comment-list-header">
          {`Counter code: ${code}, now ${count}`}
        </h2>
        <p>
          {desc}
        </p>
        <button onClick={::this.handleAdd}>
          Try Add
        </button>
      </div>
    );
  }
}
