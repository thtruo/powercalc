/*
 * Market component represents the market dropdown form and is composed of
 * FormSelect components.
 */
Market = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    onChangeHandler: React.PropTypes.func.isRequired
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

  componentDidMount() {
    $('.ui.selection.dropdown')
      .dropdown({});
      var selectElem = $("#multi-select-markets");
      selectElem.change(this.props.onChangeHandler);
  },

  componentWillUnmount() {
    var selectElem = $("#multi-select-markets");
    selectElem.off('change');
  },

  componentDidUpdate() {
      $('.ui.selection.dropdown').dropdown({});

      // var multipleValues = $('#multi-select-markets option:selected').val() || [];
      // console.log("@multipleValues size " + multipleValues.length);
      // for (var i in multipleValues) {
      //   console.log('@values: ' + multipleValues[i]);
      // }
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
        <select name="markets" className="ui selection dropdown" multiple={true} id="multi-select-markets" onChange={this.props.onChangeHandler} >
          <option className="default text" value="">Select your markets</option>
          {this.renderFormSelects()}
        </select>
      </div>
    );
  }
});
