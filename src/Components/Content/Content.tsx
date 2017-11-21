import * as React from 'react';
import './Content.css';
import { userService } from '../../Models/UserService';
import { PageHeader, Tab, Row, Col, Nav, NavItem, Panel } from 'react-bootstrap';

interface ContentProps {

}

interface ContentState {
  name: string;
}

class Content extends React.Component<ContentProps, ContentState> {
  constructor(props: ContentProps) {
    super(props);
    this.state = {name: 'Everton'};
  }

  componentDidMount() {
    const name = userService.name;
    this.setState({ name });
  }

  render() {
    return (
      <div className="container-fluid">
          <div className="row my-header">
            <PageHeader>{this.state.name}, Bienvenue au cours de français de niveau 1.</PageHeader>
          </div>

          <div className="row-fluid my-body">
            <Tab.Container defaultActiveKey="un">
              <Row className="clearfix">
                <Col sm={2}>
                  <Nav bsStyle="pills" stacked={true}>
                    <NavItem eventKey="un">
                      Leçon un -- Présentation
                    </NavItem>
                    <NavItem eventKey="deux">
                      Leçon deux -- Nationalités
                    </NavItem>
                  </Nav>
                </Col>
                <Col sm={10}>
                  <Tab.Content animation={true}>
                    <Tab.Pane eventKey="un">
                      <Panel>
                        Je m'appelle ...
                      </Panel>
                    </Tab.Pane>
                    <Tab.Pane eventKey="deux">
                      <Panel>
                        Je habbite ...
                      </Panel>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
      </div>
    );
  }
}

export default Content;