import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  Button,
  Collapse
} from "reactstrap";

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      collapse: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Receive Installment</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <Form>
                        <FormGroup>
                          <Input type="select" name="select" id="inputState" >
                            <option>Select Customer...</option>
                            <option>Ali</option>
                            <option>Bilal</option>
                          </Input>
                        </FormGroup>
                      </Form>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <Button color="info" size="sm"
                          onClick={this.toggle}                        
                        >
                          Add New Installment
                        </Button>
                      </FormGroup>
                    </Col>
                  </Row>
                  
                  <Collapse isOpen={this.state.collapse}>
                    <Form>
                      <Row>
                        <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>Currency</label>
                            <Input
                              placeholder="Currency"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pl-md-1" md="6">
                          <FormGroup>
                            <label>Amount</label>
                            <Input
                              placeholder="Amount"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                      <Col className="pr-md-1" md="6">
                          <FormGroup>
                            <label>Installment Date</label>
                            <Input
                              placeholder="Installment Date"
                              type="date"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </Collapse>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Currency</th>
                        <th>Amount</th>
                        <th>Installment Date</th>
                        <th class="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>PKR</td>
                        <td>100000</td>
                        <td>3/2/2019</td>
                        <td class="text-right">
                          <button id="tooltip324367706" class="btn-link btn-icon btn btn-success btn-sm">
                            <i class="tim-icons icon-pencil"></i>
                          </button>
                          <button id="tooltip974171201" class="btn-link btn btn-danger btn-sm">
                            <i class="tim-icons icon-simple-remove"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>$</td>
                        <td>1000</td>
                        <td>3/2/2019</td>
                        <td class="text-right">
                          <button id="tooltip324367706" class="btn-link btn-icon btn btn-success btn-sm">
                            <i class="tim-icons icon-pencil"></i>
                          </button>
                          <button id="tooltip974171201" class="btn-link btn btn-danger btn-sm">
                            <i class="tim-icons icon-simple-remove"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
