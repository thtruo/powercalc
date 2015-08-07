/*
 * Market component represents the market dropdown form and is composed of
 * FormSelect components.
 */
Market = React.createClass({
  mixins: [ReactMeteorData],

  // Loads items onto this.data.dataTableMarkets from the DataTable collection
  getMeteorData() {
    var distinctMarkets = _.uniq(DataTable.find({}, {
      sort: {market: 1},
      fields: {market: true}
    }).fetch().map(function(x) {
      return x.market;
    }), true);
    return {
      dataTableMarkets: distinctMarkets
    }
  },

  getInitialState: function() {
    return {value: 'EN-US'};
  },

  handleChange: function(event) {
    this.setState({value: event.target.value});
  },

  renderFormSelects() {
    // Get tasks from this.data.dataTableMarkets
    return this.data.dataTableMarkets.map((mkt, key) => {
      return <FormSelect key={key} value={mkt} />;
    });
  },

  render() {
    return (
      <div className="field">
        <label>Market</label>
        <select name="markets" className="ui selection dropdown" multiple="" id="multi-select">
          <option value="">Select your markets</option>
          {this.renderFormSelects()}
        </select>
      </div>
    );
  }
});
