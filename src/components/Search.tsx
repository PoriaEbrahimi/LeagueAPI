import './Search.css';

function Search() {
  return (
    <div className="input-group my-5 Search">
      <input
        type="text"
        className="form-control"
        placeholder="Champion name"
        aria-label="Champion name"
        aria-describedby="button-addon2"
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Button
      </button>
    </div>
  );
}

export default Search;