/*
 * Metric component represents the metric form selection field
 * in the calculator app
 */
Metric = React.createClass({
  getInitialState: function() {
    return {value: 'NumVisits'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render() {
    var value = this.state.value;
    return (
      <div className="field">
        <label>Metric</label>
        <div className="ui left icon input">
          <i className="asterisk icon"></i>
          <input
            type="text"
            name="metric"
            placeholder="Select one or more metrics"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
});
