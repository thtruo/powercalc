/* TODO: UserInput component represents the part of the form that includes
 * the following three fields:
 *  (1) Delta
 *  (2) Power
 *  (3) Coverage
 */

/* Delta component represents the power form field in the calculator app */
Delta = React.createClass({
  getInitialState: function() {
    return {value: 0.01};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render() {
    var value = this.state.value;
    return (
      <div className="field">
        <label>Delta</label>
        <div className="ui left icon input">
          <i className="asterisk icon"></i>
          <input
            type="text"
            name="delta"
            value={value}
            placeholder="We recommend 0.01"
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
    return {value: 0.95};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render() {
    var value = this.state.value;
    return (
      <div className="field">
        <label>Power</label>
        <div className="ui left icon input">
          <i className="asterisk icon"></i>
          <input
            type="text"
            name="power"
            value={value}
            placeholder="We recommend 0.95"
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
    return {value: 1.0};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render() {
    var value = this.state.value;
    return (
      <div className="field">
        <label>Coverage</label>
        <div className="ui left icon input">
          <i className="asterisk icon"></i>
          <input
            type="text"
            name="coverage"
            value={value}
            placeholder="We recommend 1.0"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
});