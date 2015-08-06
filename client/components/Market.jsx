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
  /*
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
  */

  render() {
    return (
      <div className="field">
        <select name="states" className="ui selection dropdown" multiple="" id="multi-select">
          <option value="">States</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>
    );
  }

  /*
  render() {
    return (
      <div className="field">
        <label>Market</label>
        <select name="markets" multiple="" className="ui fluid dropdown">
          <option value="">Select one or more markets</option>
          <option value="AF">Afghanistan</option>
          <option value="AX">Åland Islands</option>
          <option value="AL">Albania</option>
          <option value="DZ">Algeria</option>
          <option value="AS">American Samoa</option>
        </select>
      </div>
    );
  }
  */
});
