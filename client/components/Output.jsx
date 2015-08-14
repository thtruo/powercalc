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
    entries: React.PropTypes.array.isRequired // array of entry cells
  },

  renderOutputTableHeader() {
    return <OutputTableHeader />;
  },

  renderOutputTableRow() {
    return <OutputTableRow entries={this.props.entries} />;
  },

  render() {
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
          <th>Wk 1 (N)</th>
          <th>Wk 1 (%)</th>
          <th>Wk 2 (N)</th>
          <th>Wk 2 (%)</th>
          <th>Wk 3 (N)</th>
          <th>Wk 3 (%)</th>
          <th>Wk 4 (N)</th>
          <th>Wk 4 (%)</th>
        </tr>
      </thead>
    )
  }
});

OutputTableRow = React.createClass({
  propTypes: {
    entries: React.PropTypes.array.isRequired
  },
  renderMetricCell() {
    return <td className="single line">{this.props.entries[0].metric}</td>;
  },
  renderComputedCells() {
    // Extract N and % computations for all 4 weeks for selected mkt / metric
    var arrayN = [], arrayP = [], arrayCombined = [];
    for (var i = 0; i < this.props.entries.length; i++) {
      arrayN.push(this.props.entries[i].requiredN);
      arrayP.push(this.props.entries[i].allocatedTrafficPercentage * 100.0);
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
    value: React.PropTypes.number.isRequired
  },
  render() {
    return (
      <td>{this.props.value}</td>
    )
  }
});