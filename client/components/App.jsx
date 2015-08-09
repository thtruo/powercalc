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
      output: "test"
    };
  },

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