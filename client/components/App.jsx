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

  getParameters() {
    // There are 4 entries for each market/metric pair based off week
    var results = _.where(this.data.dataTable, {
      market: this.state.market,
      metric: this.state.metric
    });

    // Ensure results are sorted in increasing order based on week
    results.sort(function(a, b) {
      if (Number(a.week) > Number(b.week)) {
        return 1;
      }
      if (Number(a.week) < Number(b.week)) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    return results;
  },

  computeOutputEntry(param) {
    // Compute the required N based on form inputs
    var week = Number(param.week);
    var observedN = Number(param.observedN);
    var sigma = Number(param.stdDev);
    var average = Number(param.average);
    var delta = Number(this.state.delta) * 0.01;
    var power = Number(this.state.power) * 0.01;
    var coverage = Number(this.state.coverage) * 0.01;
    var market = param.market;
    var metric = param.metric;

    var chunkA = 2 * Math.pow(sigma / (delta * average), 2);
    var chunkB = Math.pow(1.96 - NORMSINV(1 - power), 2);
    var requiredN = chunkA * chunkB / coverage;
    var requiredPercentage = requiredN / observedN * 0.1;

    console.log("   WEEK: " + week);
    console.log("   observedN: " + observedN);
    console.log("   sigma: " + sigma);
    console.log("   average: " + average);
    console.log("   delta: " + delta);
    console.log("   coverage: " + coverage);
    console.log("   power: " + power);
    console.log("   market: " + market);
    console.log("   metric: " + metric);
    console.log("\n   OUTPUT: requiredN  = " + Math.round(requiredN) + "\n");
    console.log("\n   OUTPUT: required % = " + requiredPercentage * 100 + " %\n");

    return {
      requiredN: requiredN,
      allocatedTrafficPercentage: requiredPercentage,
      week: week,
      market: market,
      metric: metric
    }

  },

  computeOutput() {
    /* Compute the required N based on form inputs per week */
    var params = this.getParameters();
    var entries = [];
    for (var i = 0; i < params.length; i++) {
      console.log("\n" + " -ENTRY (week " + i + ") " + "\n");
      entries.push(this.computeOutputEntry(params[i]));
      console.log("\n");
    };
    return entries;
  },

  handleSubmit(event) {
    event.preventDefault();
    console.log("\n--CLICKED CalculateButton!--\n");

    this.computeOutput();
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

  renderOutput() {
    return <OutputTable entries={this.computeOutput()} />;
  },

  render() {
    return (
      <div className="ui container">
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

        <div className="ui horizontal divider"><h4>Results</h4></div>

        <div className="ui large">{this.renderOutput()}</div>

      </div>
    );
  }
});