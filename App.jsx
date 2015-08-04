/* App component represents the whole app */
App = React.createClass({
  getMarkets() {
    return [
      { _id: 1, text: "en-us" },
      { _id: 2, text: "en-gb" },
      { _id: 3, text: "en-au" }
    ];
  },

  renderMarkets() {
    return this.getMarkets().map((market) => {
      return <Market key={market._id} market={market} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>ICE Power Calculator</h1>
          <h2>Powered by ExP</h2>
        </header>

        <ul>
          {this.renderMarkets()}
        </ul>
      </div>
    );
  }
});