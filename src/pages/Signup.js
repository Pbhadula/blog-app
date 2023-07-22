import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  FormGroup,
  Input,
  Label,
  Form,
  Row,
  Col,
} from "reactstrap";
import Base from "../components/Base";
import { useEffect, useState } from "react";
import { signUp } from "../services/user-service";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

//   useEffect(() => {
//     console.log(data);
//   }, [data]);

  const handleChange = (event, property) => {
    //dynamic value setting
    setData({ ...data, [property]: event.target.value });
  };

  const handleReset = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);

    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("Success");
      })
      .catch((error) => {
        console.log(error);
        console.log("error");
      });
  };

  return (
    <Base>
      <Container>
        <Row className="mt-4 mb-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card>
              <CardHeader color="dark">
                <h4>Sign Up</h4>
              </CardHeader>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label for="name">Enter Name</Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Enter Name"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Enter Email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Enter Password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="about">About</Label>
                    <Input
                      type="textarea"
                      id="about"
                      placeholder="About Yourself"
                      style={{ height: "150px" }}
                      onChange={(e) => handleChange(e, "about")}
                      value={data.about}
                    />
                  </FormGroup>
                  <Container className="text-center">
                    <Button type="submit" color="dark" onClick={handleSubmit}>
                      Submit
                    </Button>
                    <Button
                      type="reset"
                      className="ms-2"
                      color="secondary"
                      onClick={handleReset}
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Signup;
