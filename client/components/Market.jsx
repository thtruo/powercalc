/*
 * Market component represents the market dropdown form and is composed of
 * FormSelect components.
 */
Market = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    onChangeHandler: React.PropTypes.func.isRequired,
    onHandleSelectHandler: React.PropTypes.func
  },

  getInitialState() {
    return {
      value: null
    };
  },

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

  /* Temporary event handler for componentDidMount() */
  handleChangeEvent(event) {
    event.preventDefault();
    console.log("[App] MARKET => " + event.target.value);

    var options = event.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    for (var i = 0; i < value.length; i++) {
      console.log("@value[" + i + "] = " + value[i]);
    };
  },

  componentDidMount() {
    $('.ui.selection.dropdown')
      .dropdown({});
      var selectElem = $("#multi-select");
      selectElem.change(this.handleChangeEvent);
  },

  componentWillUnmount() {
    var selectElem = $("#multi-select");
    selectElem.off('change');
  },

  componentDidUpdate() {
      $('.ui.selection.dropdown').dropdown({});
      var multipleValues = $('#multi-select option:selected').val() || [];
      console.log("@multipleValues size " + multipleValues.length);
      for (var i in multipleValues) {
        console.log('@values: ' + multipleValues[i]);
      }
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
        <select name="markets" className="ui selection dropdown" multiple={true} id="multi-select" onChange={this.props.onChangeHandler} >
          <option className="default text" value="">Select your markets</option>
          {this.renderFormSelects()}
        </select>
      </div>
    );
  }
});
