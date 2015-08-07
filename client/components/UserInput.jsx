/* TODO: UserInput component represents the part of the form that includes
 * the following three fields:
 *  (1) Delta
 *  (2) Power
 *  (3) Coverage
 */

/* Delta component represents the power form field in the calculator app */
Delta = React.createClass({
  getInitialState: function() {
    return {value: 1};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render() {
    var value = this.state.value;
    console.log("delta value is: " + value);
    return (
      <div className="field">
        <label>Delta (%)</label>
        <div className="ui left icon input">
          <i className="asterisk icon"></i>
          <input
            type="text"
            name="delta"
            value={value}
            placeholder="We recommend 1%"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
});

/* Power component represents the power form field in the calculator app */
Power = React.createClass({
  getInitialState: function() {
    return {value: 95};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render() {
    var value = this.state.value;
    console.log("power value is: " + value);
    return (
      <div className="field">
        <label>Power (%)</label>
        <div className="ui left icon input">
          <i className="asterisk icon"></i>
          <input
            type="text"
            name="power"
            value={value}
            placeholder="We recommend 95%"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
});

/* Coverage component represents the power form field in the calculator app */
Coverage = React.createClass({
  getInitialState: function() {
    return {value: 100};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render() {
    var value = this.state.value;
    console.log("coverage value is: " + value);
    return (
      <div className="field">
        <label>Coverage (%)</label>
        <div className="ui left icon input">
          <i className="asterisk icon"></i>
          <input
            type="text"
            name="coverage"
            value={value}
            placeholder="We recommend 100%"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
});