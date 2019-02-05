import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Button,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  Collapse
} from "reactstrap";

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      collapse: false,
    };
    this.state.filterText = "";
    this.state.products = [
      {
        id: 1,
        currency: 'PKR',
        amount: '100000',
        installment_date: '02/04/2019'
      },
      {
        id: 2,
        currency: '$',
        amount: '1000',
        installment_date: '02/04/2019'
      },
    ];
    // this.handleUserInput = this.handleUserInput.bind(this);
    // this.handleRowDel = this.handleRowDel.bind(this);
    // this.handleAddEvent = this.handleAddEvent.bind(this);
    // this.handleProductTable = this.handleProductTable.bind(this);
  }

  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
  handleRowDel(product) {
    var index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var product = {
      id: id,
      currency: "",
      amount: "",
      installment_date: ""
    }
    this.state.products.push(product);
    this.setState(this.state.products);

  }

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var products = this.state.products.slice();
      var newProducts = products.map(function(product) {

        for (var key in product) {
          if (key === item.name && product.id === item.id) {
            product[key] = item.value;

          }
        }
        return product;
      });
        this.setState({products:newProducts});
  }
  render() {
    return (
      <>
        {/* <div className="content">
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
        </div> */}
      <div className="content">
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>
      </div>
      </>
    );
  }
}

class SearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <div>
        <Card>
          <CardBody>
           <input type="text" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)}/>
          </CardBody>
        </Card>
      </div>

    );
  }

}

class ProductTable extends React.Component {
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
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var product = this.props.products.map(function(product) {
      if (product.currency.indexOf(filterText) === -1) {
        return;
      }
      return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
    });
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="d-inline" tag="h4">Receive Installment</CardTitle>
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
                        <Col className="pl-md-1" md="6">
                          <FormGroup>
                            <label>Submit</label>
                            <Input
                              type="submit"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Form>
                  </Collapse>
            {/* <Button type="button" size="sm" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</Button> */}
          </CardHeader>
          <CardBody>
            <Table className="tablesorter" responsive>
              <thead className="text-primary">
                <tr>
                  <th>currency</th>
                  <th>amount</th>
                  <th>installment_date</th>
                </tr>
              </thead>

              <tbody>
                {product}

              </tbody>

            </Table>
          </CardBody>
        </Card>
      </div>
    );

  }

}

class ProductRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.product);

  }
  render() {

    return (
      <tr className="eachRow">
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          "type": "currency",
          value: this.props.product.currency,
          id: this.props.product.id
        }}/>
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "amount",
          value: this.props.product.amount,
          id: this.props.product.id
        }}/>
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "installment_date",
          value: this.props.product.installment_date,
          id: this.props.product.id
        }}/>
        <td className="del-cell">
          <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
        </td>
      </tr>
    );

  }

}
class EditableCell extends React.Component {

  render() {
    return (
      <td>
        <input type='text' name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}/>
      </td>
    );

  }

}

export default Tables;
