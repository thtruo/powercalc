/* Market component */
Market = React.createClass({
  propTypes: {
    // This component gets the market to display through a React prop.
    // We can use propTypes to indicate it is required
    market: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.market.text}</li>
    );
  }
});