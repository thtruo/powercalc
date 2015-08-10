/*
 * App component represents the whole app
 */
App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items onto this.data.dataTable from the DataTable collection
  getMeteorData() {
    return {
      dataTable: DataTable.find({}).fetch(),
      dataTableCount: DataTable.find({}).count()
    }
  },

  getInitialState() {
    return {
      market: "EN-US",
      metric: "NumVisits",
      power: "95",
      coverage: "100",
      delta: "1"
    };
  },

  getParameter() {
    // Assumption: there is a unique entry for each market/metric pair
    var result = _.findWhere(this.data.dataTable, {
      market: this.state.market,
      metric: this.state.metric
    });

    for (var k in result) {
      console.log("result[" + k + "] is " + result[k]);
    }

    return result;
  },

  handleSubmit(event) {
    event.preventDefault();
    var appState = this.state;
    console.log("\nCLICKED CalculateButton!\n");
    for (var k in appState) {
      console.log("appState." + k + " is: " + appState[k]);
    }

    // Compute the required N based on form inputs
    var param = this.getParameter();

    // TODO: define norminv(P, mu, sigma) : inverse of the normal cdf
    var chunkA = 2 * Math.pow(this.state.stdDev / (this.state.average * this.state.delta * 0.01), 2);
    var chunkB = Math.pow(1.96 - norminv(1 - this.state.power, 0, 1), 2);
    console.log("\nOUTPUT: " + result + "\n");

  },

  handleMarketChange: function(event) {
    this.setState({market: event.target.value});
    console.log("[App] MARKET => " + event.target.value);
  },

  handleMetricChange: function(event) {
    this.setState({metric: event.target.value});
    console.log("[App] METRIC => " + event.target.value);
  },

  handleDeltaChange: function(event) {
    this.setState({delta: event.target.value});
    console.log("[App] DELTA => " + event.target.value);
  },

  handleCoverageChange: function(event) {
    this.setState({coverage: event.target.value});
    console.log("[App] COVERAGE => " + event.target.value);
  },

  handlePowerChange: function(event) {
    this.setState({power: event.target.value});
    console.log("[App] POWER => " + event.target.value);
  },

  renderMarket() {
    return <Market onChangeHandler={this.handleMarketChange} />;
  },

  renderMetric() {
    return <Metric onChangeHandler={this.handleMetricChange} />;
  },

  renderDelta() {
    return <Delta onChangeHandler={this.handleDeltaChange} defaultValue={this.state.delta} />;
  },

  renderPower() {
    return <Power onChangeHandler={this.handlePowerChange} defaultValue={this.state.power} />;
  },

  renderCoverage() {
    return <Coverage onChangeHandler={this.handleCoverageChange} defaultValue={this.state.coverage} />;
  },

  renderCalculateButton() {
    return <CalculateButton />;
  },

  render() {
    return (
      <form ref="form" className="ui large form" onSubmit={this.handleSubmit}>
        <div className="ui stacked segment">
          {this.renderMarket()}
          {this.renderMetric()}
          {this.renderDelta()}
          {this.renderPower()}
          {this.renderCoverage()}
          {this.renderCalculateButton()}
        </div>
        <div className="ui error message"></div>
      </form>
    );
  }
});