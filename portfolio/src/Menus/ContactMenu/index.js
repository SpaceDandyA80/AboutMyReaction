import React from "react";
import Footer from "../../components/Footer"
import Jumbotron from "../../components/Jumbotron";

function ConactMenu() {
return (
    <div>
        <Jumbotron>
    <h1 class="text-secondary">Contact Info</h1>
    <hr />
    <form>
      <section class="form-group">
        <label for="exampleFormControlInput1">Your Name</label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Type In Your Wonderful Name"
        />
      </section>
      <section class="form-group">
        <label for="exampleFormControlInput1">Email Address</label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Type In Your Email You Wonderful Person"
        />
      </section>
      <section class="form-group">
        <label for="exampleFormControlTextarea1"
          >Any Comments Or Extra Info
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </section>
      <section>
        <button type="submit" class="btn btn-primary bg-dark">
          Submit
        </button>

      </section>
    </form>
    <Footer />
    </Jumbotron>
</div>
);

}

export default ConactMenu