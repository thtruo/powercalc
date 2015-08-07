/*
 * Metric component represents the metric dropdown form and is composed of
 * FormSelect components.
 */
Metric = React.createClass({
  mixins: [ReactMeteorData],

  // Loads items onto this.data.dataTable from the DataTable collection
  getMeteorData() {
    var distinctMetrics = _.uniq(DataTable.find({}, {
      sort: {metric: 1},
      fields: {metric: true}
    }).fetch().map(function(x) {
      return x.metric;
    }), true);
    return {
      dataTableMetrics: distinctMetrics
    }
  },
  getInitialState: function() {
    return {value: 'NumVisits'};
  },

  handleChange: function(event) {
    this.setState({value: event.target.value});
  },

  renderFormSelects() {
    // Get tasks from this.data.dataTableMetrics
    return this.data.dataTableMetrics.map((metric, key) => {
      return <FormSelect key={key} value={metric} />;
    });
  },

  render() {
    var value = this.state.value;
    console.log("coverage value is: " + value);
    return (
      <div className="field">
        <label>Metric</label>
        <select name="metrics" className="ui selection dropdown" multiple="" id="multi-select">
          <option value="">Select your metrics</option>
          {this.renderFormSelects()}
        </select>
      </div>
    );
  }
});
