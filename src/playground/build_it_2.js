// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
      buttonText: 'Show details'
    };
  }

  toggleDetails(e) {
    e.preventDefault();

    this.setState((prevState) => {
      return {
        buttonText: prevState.visibility ? 'Show Details' : 'Hide details',
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    const details = "Hey. Here are some datails.";

    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleDetails.bind(this)}>{this.state.buttonText}</button>
        {this.state.visibility && <p>{details}</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))