import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../Components/Card";
import Button from "../Components/Button";
import Alert from "../Components/Alert";

const Home = () => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <h1>🚀 Welcome to the ADA Hackathon App</h1>

      <Card title="Introduction">
        <p>
          This is a demo Javascript React app designed to give you a helpful
          starting point for your Hackathon project. It comes with:
        </p>

        <ul>
          <li>
            A working connection to a <strong>Python</strong> backend
          </li>
          <li>
            A few simple, reusable React components contained in the 'Components
            file'. These can be imported and used across your pages!
          </li>
          <li>A clean project setup to guide your development</li>
          <li>
            Refer to the README files for how to run the react-starter and
            python-starter code
          </li>
        </ul>
      </Card>

      <Card title="The Task!">
        <p>
          You are required to build a simple application of your choice. You may
          use the existing <strong>Customers</strong> and{" "}
          <strong>Products</strong> pages as references or guidance, but these
          pages are optional and can be removed if you prefer. The focus is on
          creating a working application that demonstrates your understanding of
          building components, managing state, and implementing functionality.
        </p>
        <p>
          Requirements:
          <ul>
            <li>Create at least two functional pages/components.</li>
            <li>Implement basic navigation between pages.</li>
            <li>
              Include some form of data handling (e.g., displaying a list,
              adding items, or managing state).
            </li>
            <li>
              Styling is optional, but your UI should be clear and usable.
            </li>
            <li>
              You may use the existing Customers and Products pages as
              templates, but they are not mandatory.
            </li>
          </ul>
        </p>
        <p>
          Goal: Demonstrate your ability to build a small but complete
          application from scratch, using Javascript, with functional
          components, state management, and basic navigation.
        </p>
        <Button label="Show Alert" onClick={() => setShowAlert(true)} />
        {showAlert && (
          <Alert
            type="success"
            message="Congratulations! You clicked the button."
          />
        )}
      </Card>

      <Card title="Get Started">
        <p>
          Using reusable components makes building apps much easier. Click below
          to see an alert!
        </p>
        <Button label="Show Alert" onClick={() => setShowAlert(true)} />
        {showAlert && (
          <Alert
            type="success"
            message="Congratulations! You clicked the button."
          />
        )}
      </Card>

      <Card title="Navigation Demo">
        <p>Try visiting the other pages using these buttons:</p>
        <Button label="Products" onClick={() => navigate("/products")} />
        <Button
          label="Customers"
          onClick={() => navigate("/customers")}
          style={{ marginLeft: "10px" }}
        />
      </Card>
    </div>
  );
};

export default Home;
