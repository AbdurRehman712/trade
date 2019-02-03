import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Manage Staff</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Username</th>
                        <th>Staff Role</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th class="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>rice</td>
                        <td>Admin</td>
                        <td>Rice Sheikh</td>
                        <td>email@email.com</td>
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
                        <td>nice</td>
                        <td>Staff</td>
                        <td>Nice Shiekh</td>
                        <td>email@email.com</td>
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
