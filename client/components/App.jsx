/* App component represents the whole app */
App = React.createClass({

  render() {
    return (
      <form className="ui large form">
        <div className="ui stacked segment">
          <div className="field">
            <label>Market</label>
            <div className="ui left icon input">
              <i className="asterisk icon"></i>
              <input type="text" name="market" placeholder="en-us"/>
            </div>
          </div>
          <div className="field">
            <label>Metric</label>
            <div className="ui left icon input">
              <i className="asterisk icon"></i>
              <input type="text" name="metric" placeholder="Sessions Per User"/>
            </div>
          </div>
          <div className="field">
            <label>Delta</label>
            <div className="ui left icon input">
              <i className="asterisk icon"></i>
              <input type="text" name="delta" placeholder="1%"/>
            </div>
          </div>
          <div className="field">
            <label>Power</label>
            <div className="ui left icon input">
              <i className="asterisk icon"></i>
              <input type="text" name="power" placeholder="95%"/>
            </div>
          </div>
          <div className="field">
            <label>Coverage</label>
            <div className="ui left icon input">
              <i className="asterisk icon"></i>
              <input type="text" name="coverage" placeholder="100%"/>
            </div>
          </div>
          <div className="ui fluid large teal submit button">Calculate Traffic</div>
        </div>

        <div className="ui error message"></div>

      </form>
    );
  }
});

/* Market component */
Market = React.createClass({
  propTypes: {
    // This component gets the market to display through a React prop.
    // We can use propTypes to indicate it is required
    market: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.market.text}</li>
    );
  }
});

/* Metric component */
Metric = React.createClass({
  propTypes: {
    // This component gets the metric to display through a React prop.
    // We can use propTypes to indicate it is required
    metric: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.metric.text}</li>
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