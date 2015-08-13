/*
 * OutputTable component represents the output table results composed of
 * OutputTableRow components which are composed of OutputMetric and
 * OutputEntryPerWeek components.
 */

TableCellRequiredN = React.createClass({
  propTypes: {
    value: React.PropTypes.number.isRequired
  },
  render() {
    return (
      <td>{this.props.value}</td>
    )
  }
});
TableCellPercentage = React.createClass({
  propTypes: {
    value: React.PropTypes.number.isRequired
  },
  render() {
    return (
      <td>{this.props.value}</td>
    )
  }
});

OutputHeader = React.createClass({
  render() {

  }
});

// OutputEntryPerWeek = React.createClass({
//   propTypes: {
//     cellRequiredN: React.PropTypes.number.isRequired,
//     cellPercentage: React.PropTypes.number.isRequired
//   },
//   renderTableCellsRequiredN() {
//     return <TableCellRequiredN value={cellRequiredN} />;
//   },
//   renderTableCellsPercentage() {
//     return <TableCellPercentage value={cellPercentage} />;
//   },
//   render() {
//     return (
//       {this.renderTableCellsRequiredN()}
//       {this.renderTableCellsPercentage()}
//     )
//   }
// });

OutputTableRow = React.createClass({
  render() {

  }
});

OutputTable = React.createClass({
  propTypes: {
    entries: React.PropTypes.array.isRequired // array of entry cells
  },
  // renderOutputCells() {
  //   return this.props.entries.map((entry, key) => {
  //     return <OutputEntryRowPerWeek key={key} value={entry.} />;
  //   });
  // },
  render() {
    return (
      <table className="ui celled structured table output-table">
        <thead>
          <tr>
            <th >Metrics</th>
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
        <tbody>
          <tr>
            <td className="single line">Metric A</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <td className="single line">Metric B</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr>
            <td className="single line">Metric C</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
        </tbody>
        <tfoot>
        </tfoot>
      </table>

    );
  }
});
