/* CalculateButton component */
CalculateButton = React.createClass({
  propTypes: {
    onClickHandler: React.PropTypes.func.isRequired
  },
  render() {
    return (
      <button className="ui fluid large teal button" type="submit" onClick={this.props.onClickHandler}>
        Calculate Traffic
      </button>
    );
  }
});