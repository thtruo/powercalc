/* Power Analysis Data component */
PowerAnalysisData = React.createClass({
  propTypes: {
    // This component gets the metric to display through a React prop.
    // We can use propTypes to indicate it is required
    powerAnalysisData: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.powerAnalysisData.text}</li>
    );
  }
});