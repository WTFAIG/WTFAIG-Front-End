import React, { Component } from "react";

class NewPlace extends Component {
  render() {
    return (
      <div>
        <form class="form">
          <h3>Add A New Place</h3>
          <input type="text" name="name" placeholder="Name of Place" />
          <p>Visited?</p>
          <label>
            <input type="radio" name="visted" value="Yes" />
            Yes
          </label>
          <label>
            <input type="radio" name="visted" value="No" />
            No
          </label>
          <br />
          <input type="text" name="notes" placeholder="Personal Notes" />
          <p>Liked?</p>
          <label>
            <input type="radio" name="liked" value="Hell Yeah" />
            Hell Yeah
          </label>
          <label>
            <input type="radio" name="liked" value="Fuck No" />
            Fuck No
          </label>
          <br />
          <input type="submit" name="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewPlace;
