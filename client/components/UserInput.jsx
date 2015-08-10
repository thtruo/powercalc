/* TODO: UserInput component represents the part of the form that includes
 * the following three fields:
 *  (1) Delta
 *  (2) Power
 *  (3) Coverage
 */

/* Delta component represents the power form field in the calculator app */
Delta = React.createClass({
  propTypes: {
    onChangeHandler: React.PropTypes.func.isRequired,
    defaultValue: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <div className="field">
        <label>Delta</label>
        <div className="ui right labeled input">
          <input
            type="text"
            name="delta"
            value={this.props.defaultValue}
            placeholder="We recommend 1%"
            onChange={this.props.onChangeHandler} />
          <div className="ui label">%</div>
        </div>
      </div>
    );
  }
});

/* Power component represents the power form field in the calculator app */
Power = React.createClass({
  propTypes: {
    onChangeHandler: React.PropTypes.func.isRequired,
    defaultValue: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <div className="field">
        <label>Power</label>
        <div className="ui right labeled input">
          <input
            type="text"
            name="power"
            value={this.props.defaultValue}
            placeholder="We recommend 95%"
            onChange={this.props.onChangeHandler} />
          <div className="ui label">%</div>
        </div>
      </div>
    );
  }
});

/* Coverage component represents the power form field in the calculator app */
Coverage = React.createClass({
  propTypes: {
    onChangeHandler: React.PropTypes.func.isRequired,
    defaultValue: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <div className="field">
        <label>Coverage</label>
        <div className="ui right labeled input">
          <input
            type="text"
            name="coverage"
            value={this.props.defaultValue}
            placeholder="What % of users are affected by your change?"
            onChange={this.props.onChangeHandler} />
          <div className="ui label">%</div>
        </div>
      </div>
    );
  }
});