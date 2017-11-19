import * as React from 'react';
import './Content.css';
import { userService } from '../../Models/UserService';

interface ContentProps {

}

interface ContentState {
  name: string;
}

class Content extends React.Component<ContentProps, ContentState> {
  constructor(props: ContentProps) {
    super(props);
    this.state = {name: ''};
  }

  componentDidMount() {
    const name = userService.name;
    this.setState({ name });
  }

  render() {
    return (
      <div >
          AKIII {this.state.name}...
      </div>
    );
  }
}

export default Content;