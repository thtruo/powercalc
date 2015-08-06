/*
 * Market component represents the market form selection field
 * in the calculator app
 */
Market = React.createClass({
  getInitialState: function() {
    return {value: 'EN-US'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render() {
    var value = this.state.value;
    return (
      <div className="field">
        <label>Market</label>
        <div className="ui left icon input">
          <i className="asterisk icon"></i>
          <input
            type="text"
            name="market"
            placeholder="Select one or more markets"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
});
