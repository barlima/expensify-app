let buttonText = 'Show details';
let showDetails = false;
const details = 'Hey. Here are some datilas.';

const appRoot = document.getElementById('app');

const toggleDetails = () => {
  if (showDetails) {
    showDetails = false;
    buttonText = 'Show details';
  }  else {
    showDetails = true;
    buttonText = 'Hide details';
  }
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDetails}>{buttonText}</button>
      {showDetails && <p>{details}</p>}
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();