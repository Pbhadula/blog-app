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

const Login = () => {
    return (
        <Base>
          <Container>
            <Row className="mt-4 mb-4">
              <Col sm={{ size: 6, offset: 3 }}>
                <Card>
                  <CardHeader color="dark"><h4>Log-In</h4></CardHeader>
                  <CardBody>
                    <Form>
                      <FormGroup>
                        <Label for="email">Enter Email</Label>
                        <Input type="email" id="email" placeholder="Enter Email" />
                      </FormGroup>
                      <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                          type="password"
                          id="password"
                          placeholder="Enter Password"
                        />
                      </FormGroup>
                      <Container className="text-center">
                        <Button type="submit" color="dark">
                          Login
                        </Button>
                        <Button type="reset" className="ms-2" color="secondary">
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
}

export default Login;