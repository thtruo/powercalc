/* App component represents the whole app */
App = React.createClass({

/*
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  // Loads items from the PowerCalculationData collection and
  // puts them on this.data.powerCalculationData
  getMeteorData() {
    return {
      powerCalculationData: PowerCalculationData.find({}).fetch()
    }
  },

  renderMarkets() {
    // Get tasks from this.data.powerCalculationData
    return this.data.powerCalculationData.map((mkt) => {
      return <Market key={mkt._id} mkt={mkt} />;
    });
  },
*/

  handleSubmit(event) {
    event.preventDefault();
    console.log("Clicked CalculateButton!");
  },

  renderMarket() {
    return <Market/>;
  },

  renderMetric() {
    return <Metric />;
  },

  renderDelta() {
    return <Delta />;
  },

  renderPower() {
    return <Power />;
  },

  renderCoverage() {
    return <Coverage />;
  },

  renderCalculateButton() {
    return <CalculateButton />;
  },

  render() {
    return (
      <form className="ui large form" onSubmit={this.handleSubmit}>
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

var fixture = [
  {
    _id: 1,
    market: "en-us",
    metric: "ArPageViewsPerUser",
    average: 3.855665,
    nObserved: 12412192,
    stdDev: 17.8473,
    week: 1
  },
  {
    _id: 2,
    market: "en-us",
    metric: "ArWholePageClicksPerUser",
    average: 1.260385,
    nObserved: 12412192,
    stdDev: 7.882498,
    week: 1
  },
  {
    _id: 3,
    market: "en-us",
    metric: "GaPageViewsPerUser",
    average: 1.362621,
    nObserved: 12412192,
    stdDev: 9.346896,
    week: 1
  },
  {
    _id: 4,
    market: "en-us",
    metric: "GaWholePageClicksPerUser",
    average: 1.028375,
    nObserved: 12412192,
    stdDev: 5.899256,
    week: 1
  },
  {
    _id: 5,
    market: "en-us",
    metric: "NumVisits",
    average: 8.487081,
    nObserved: 12412192,
    stdDev: 18.05028,
    week: 1
  },
  {
    _id: 6,
    market: "en-us",
    metric: "PageViewsPerUser",
    average: 25.16693,
    nObserved: 12412192,
    stdDev: 82.30645,
    week: 1
  }
];