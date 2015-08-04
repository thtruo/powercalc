/* Metric component */
Metric = React.createClass({
  propTypes: {
    // This component gets the metric to display through a React prop.
    // We can use propTypes to indicate it is required
    metric: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.metric.text}</li>
    );
  }
});