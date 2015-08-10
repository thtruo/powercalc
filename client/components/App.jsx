/*
 * App component represents the whole app
 */
App = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items onto this.data.dataTable from the DataTable collection
  getMeteorData() {
    return {
      dataTable: DataTable.find({}).fetch()
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

  handleSubmit(event) {
    event.preventDefault();
    var appState = this.state;
    console.log("\nCLICKED CalculateButton!\n");
    for (var k in appState) {
      console.log("appState." + k + " is: " + appState[k]);
    }
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