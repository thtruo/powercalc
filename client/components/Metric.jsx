/*
 * Metric component represents the metric dropdown form and is composed of
 * FormSelect components.
 */
Metric = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    onChangeHandler: React.PropTypes.func.isRequired
  },

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

  renderFormSelects() {
    // Get tasks from this.data.dataTableMetrics
    return this.data.dataTableMetrics.map((metric, key) => {
      return <FormSelect key={key} value={metric} />;
    });
  },

  render() {
    return (
      <div className="field">
        <label>Metric</label>
        <select name="metrics" className="ui selection dropdown" multiple="" id="multi-select" onChange={this.props.onChangeHandler}>
          <option value="">Select your metrics</option>
          {this.renderFormSelects()}
        </select>
      </div>
    );
  }
});
