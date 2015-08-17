/*
 * FormSelect component represents each selection option under a dropdown
 * form. Both Market and Metric components are composed of FormSelects.
 */
FormSelect = React.createClass({
  propTypes: {
    value: React.PropTypes.string.isRequired,
    handleSelectHandler: React.PropTypes.func
  },
  render() {
    return (
      <option value={this.props.value} onSubmit={this.props.handleSelectHandler}>{this.props.value}</option>
    );
  }
});