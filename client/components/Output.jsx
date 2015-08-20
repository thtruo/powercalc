/*
 * OutputTable component represents the output table results.
 * All output related components are arranged in this hierarchy:
 *
 *    OutputTable
 *        OutputTableHeader
 *        OutputTableRow
 *            TableCell
 */

OutputTable = React.createClass({
  propTypes: {
    entries: React.PropTypes.array.isRequired, // array of entry cells
    markets: React.PropTypes.array.isRequired, // array of selected markets
    metrics: React.PropTypes.array.isRequired  // array of selected metrics
  },
  renderOutputTableHeader() {
    return <OutputTableHeader />;
  },
  renderOutputTableRow() {
    // console.log("See market prop: " + this.props.markets.length);

    // Separate row per metric selection
    // var selectedMetrics = this.props.metrics; console.log("test selectedMetrics: " + selectedMetrics.length);

    // for (var j = 0; j < selectedMetrics.length; j++) {
    //   var entriesForMetric = _.where(this.props.entries, {
    //     // market: selectedMarkets[i],
    //     metric: selectedMetrics[j]
    //   });
    //   console.log("entriesForMetric: " + entriesForMetric.length);
    // }
    return <OutputTableRow entries={this.props.entries} />;
  },
  render() {
    // if (true) {
    //   for (var i = 0; i < this.props.markets.length; i++) {
    //     return (
    //       <table className="ui celled structured table output-table">
    //         {this.renderOutputTableHeader()}
    //         <tbody>
    //           {this.renderOutputTableRow()}

    //         </tbody>
    //         <tfoot></tfoot>
    //       </table>
    //     );
    //   };
    // }
    return (
      <table className="ui celled structured table output-table">
        {this.renderOutputTableHeader()}
        <tbody>
          {this.renderOutputTableRow()}

        </tbody>
        <tfoot></tfoot>
      </table>
    );
  }
});

OutputTableHeader = React.createClass({
  render() {
    return (
      <thead>
        <tr>
          <th>Metrics</th>
          <th>Wk 1 (N)</th><th>Wk 1 (%)</th>
          <th>Wk 2 (N)</th><th>Wk 2 (%)</th>
          <th>Wk 3 (N)</th><th>Wk 3 (%)</th>
          <th>Wk 4 (N)</th><th>Wk 4 (%)</th>
        </tr>
      </thead>
    )
  }
});

OutputTableRow = React.createClass({
  propTypes: {
    entries: React.PropTypes.array.isRequired
  },

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  renderMetricCell() {
    if (this.props.entries.length !== 0) {
      return <td className="single line">{this.props.entries[0].metric}</td>;
    }
  },

  renderComputedCells() {
    // Extract N and % computations for all 4 weeks for selected mkt / metric
    var arrayN = [], arrayP = [], arrayCombined = [];
    for (var i = 0; i < this.props.entries.length; i++) {
      var num = this.props.entries[i].requiredN.toFixed(0);
      var traffic = (this.props.entries[i].allocatedTrafficPercentage * 100.0).toFixed(0);
      arrayN.push(this.numberWithCommas(num));
      arrayP.push(traffic);
    };

    // Alternate sequence of two arrays for easier rendering of table cells
    for (var i = 0; i < arrayN.length; i++) {
      arrayCombined.push(arrayN[i]);
      arrayCombined.push(arrayP[i]);
    };

    return arrayCombined.map((cell, key) => {
      return <TableCell key={key} value={cell} />;
    });
  },

  render() {
    return (
      <tr>
        {this.renderMetricCell()}
        {this.renderComputedCells()}
      </tr>
    )
  }
});

TableCell = React.createClass({
  propTypes: {
    value: React.PropTypes.string.isRequired
  },
  render() {
    return (
      <td>{this.props.value}</td>
    )
  }
});