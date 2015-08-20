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
    entries: React.PropTypes.array.isRequired,
    markets: React.PropTypes.array.isRequired,
    metrics: React.PropTypes.array.isRequired,
  },

  renderOutputTableHeader() {
    return <OutputTableHeader />;
  },

  renderOutputTableRow() {
    // Filter out from this.props.entries the row for each metric and market
    console.log("In Output.renderOutputTableRow(): entries length = " + this.props.entries.length);

    // Render a row per metric
    console.log(" In rendering row per metric: metrics length = " + this.props.metrics.length);
    var rows = [];
    for (var j = 0; j < this.props.metrics.length; j++) {
      var m = this.props.metrics[j];
      console.log("   In loop row[" + j + "] = " + m);
      var row = <OutputTableRow key={j} entries={this.props.entries} metric={m} />;
      rows = rows.concat(row);
    }
    return rows.map((r, key) => {
      return r;
    });

    // return <OutputTableRow entries={this.props.entries} />;
  },

  render() {
    console.log(" In Output.render(): entries length = " + this.props.entries.length);
    console.log(" In Output.render(): markets length = " + this.props.markets.length);
    console.log(" In Output.render(): metrics length = " + this.props.metrics.length);
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
    entries: React.PropTypes.array.isRequired, // cell values array per row
    metric: React.PropTypes.string.isRequired
  },

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  renderCellForMetricName() {
    console.log("In Row.renderCellForMetricName(): this.props.metric = " + this.props.metric);

    if (this.props.entries.length !== 0) {
      return <td className="single line">{this.props.metric}</td>;
    }
  },

  renderCellsForPowerCalculations() {
    // Extract N and % computations for all 4 weeks for selected mkt / metric
    var arrayN = [],
        arrayP = [],
        arrayCombined = [];

    var entriesPerMetric = _.where(this.props.entries, {
      metric: this.props.metric
    });
    console.log(" In renderCellsForPowerCalculations");
    console.log("  entriesPerMetric length = " + entriesPerMetric.length);

    // Render power calculation results for all weeks for this row
    return entriesPerMetric.map((cellsPerWeek, key) => {

      var resultPair = [];
      var sampleSize = cellsPerWeek.requiredN.toFixed(0);
      var traffic = (cellsPerWeek.allocatedTrafficPercentage * 100.0).toFixed(0);
      resultPair.push(sampleSize);
      resultPair.push(traffic);
      console.log("  Row[" + key + "]: (" + sampleSize + ", " + traffic +")");
      return resultPair.map((cell, key) => {
        return <TableCell key={key} value={cell} />;
      });
    });

    /*
    for (var i = 0; i < this.props.entries.length; i++) {
      var num = this.props.entries[i].requiredN.toFixed(0);
      var traffic = (this.props.entries[i].allocatedTrafficPercentage * 100.0).toFixed(0);
      arrayN.push(this.numberWithCommas(num));
      arrayP.push(traffic);
    };
    */


    // // Alternate sequence of two arrays for easier rendering of table cells
    // for (var i = 0; i < arrayN.length; i++) {
    //   arrayCombined.push(arrayN[i]);
    //   arrayCombined.push(arrayP[i]);
    // };

    // return arrayCombined.map((cell, key) => {
    //   return <TableCell key={key} value={cell} />;
    // });
  },

  render() {
    return (
      <tr>
        {this.renderCellForMetricName()}
        {this.renderCellsForPowerCalculations()}
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