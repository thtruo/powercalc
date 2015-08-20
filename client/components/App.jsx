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
      market: [],
      metric: [],
      power: "95",
      coverage: "100",
      delta: "1"
      // ,clickedCalculateButton: false
    };
  },

  getParameters() {
    // There are 4 entries for each week of a given market/metric pair
    // Function provides all entries for all market/metric selections
    var weekEntries = [];
    var selectedMarkets = this.state.market;
    var selectedMetrics = this.state.metric;
    for (var i = 0; i < selectedMarkets.length; i++) {
      for (var j = 0; j < selectedMetrics.length; j++) {
        var entries = _.where(this.data.dataTable, {
          market: selectedMarkets[i],
          metric: selectedMetrics[j]
        });
        console.log('entries.length (' + i + ', ' + j + "): "  + entries.length);
        weekEntries = weekEntries.concat(entries);
        console.log('weekEntries.length: (' + i + ', ' + j + "): "  + weekEntries.length);
      };
    };
    console.log('In App.getParameters()');
    console.log('final weekEntries.length: ' + weekEntries.length);

    // Ensure weekEntries are sorted in increasing week order
    weekEntries.sort(function(a, b) {
      if (Number(a.week) > Number(b.week)) {
        return 1;
      }
      if (Number(a.week) < Number(b.week)) {
        return -1;
      }
      return 0;
    });
    return weekEntries;
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
    // console.log("   observedN: " + observedN);
    // console.log("   sigma: " + sigma);
    // console.log("   average: " + average);
    // console.log("   delta: " + delta);
    // console.log("   coverage: " + coverage);
    // console.log("   power: " + power);
    console.log("   market: " + market);
    console.log("   metric: " + metric);
    console.log("\n   OUTPUT: (requiredN, required %) = " + Math.round(requiredN) + ", " + requiredPercentage * 100 + "%)\n");

    return {
      requiredN: requiredN,
      allocatedTrafficPercentage: requiredPercentage,
      week: week,
      market: market,
      metric: metric
    }

  },

  computeOutput() {
    /* Compute the required N and traffic based on form inputs per week */
    var params = this.getParameters();
    var resultsEveryWeek = [];
    for (var i = 0; i < params.length; i++) {
      console.log("\n" + " -ENTRY (week " + i + ") " + "\n\n");
      resultsEveryWeek.push(this.computeOutputEntry(params[i]));
    };
    return resultsEveryWeek;
  },

  handleClickCalculateButton(event) {
    event.preventDefault();
    console.log("\n@@@CLICKED CalculateButton!@@@\n");

    // this.setState({clickedCalculateButton: true});
    this.computeOutput();
    // this.renderOutput();
  },

  handleMarketChange: function(event) {
    event.preventDefault();

    console.log("\n ---[App] MARKET => detected change, see values ---\n");
    console.log(" @Previous market state => market.length: " + this.state.market.length);
    for (var i = 0; i < this.state.market.length; i++) {
      console.log("   @value[" + i + "] = " + this.state.market[i]);
    }; console.log("\n");

    // Get list of all selected markets
    var options = event.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    // Update market list state based on multiple market selections
    var marketState = this.state.market;
    var newMarketState = _.uniq(value);

    if (marketState.length !== newMarketState.length) {
      this.setState({
        market: newMarketState
      });
    }

    console.log(" @After calling setState => market.length: " + this.state.market.length);
    for (var i = 0; i < this.state.market.length; i++) {
      console.log("   @value[" + i + "] = " + this.state.market[i]);
    }; console.log("\n");
  },

  handleMetricChange: function(event) {
    event.preventDefault();
    console.log("\n ---[App] METRIC => detected change, see values ---\n");
    console.log(" @Previous metric state => metric.length: " + this.state.metric.length);
    for (var i = 0; i < this.state.metric.length; i++) {
      console.log("   @value[" + i + "] = " + this.state.metric[i]);
    }; console.log("\n");

    // Get list of all selected metrics
    var options = event.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    // Update metric list state based on multiple metric selections
    var metricState = this.state.metric;
    var newMetricState = _.uniq(value);

    if (metricState.length !== newMetricState.length) {
      this.setState({
        metric: newMetricState
      });
    }

    console.log(" @After calling setState => metric.length: " + this.state.metric.length);
    for (var i = 0; i < this.state.metric.length; i++) {
      console.log("   @value[" + i + "] = " + this.state.metric[i]);
    }; console.log("\n");
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
    return <CalculateButton onClickHandler={this.handleClickCalculateButton}/>;
  },

  renderOutput() {
    console.log("In App.renderOutput() ");
    var test = this.state.market;
    console.log("   this.state.market length:" + test.length);
    for (var i = 0; i < test.length; i++) {
      console.log("     test[" + i + "] " + test[i]);
    };
    return <OutputTable entries={this.computeOutput()} markets={this.state.market} metrics={this.state.metric} />;
  },

  render() {
    return (
      <div className="ui container">
        <div className="ui form stacked segment">
          {this.renderMarket()}
          {this.renderMetric()}
          {this.renderDelta()}
          {this.renderPower()}
          {this.renderCoverage()}
          {this.renderCalculateButton()}
        </div>

        {/* */}
        <div className="ui horizontal divider"><h4>Results</h4></div>

        <div className="ui large">{this.renderOutput()}</div>
        {/**/}
      </div>
    );
  }
});