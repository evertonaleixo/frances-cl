import * as React from 'react';
import './Content.css';

interface ContentProps {
  someDefaultValue: string;
}

interface ContentState {
  name: string;
}

class Content extends React.Component<ContentProps, ContentState> {
  state: ContentState;

  constructor(props: ContentProps) {
    super(props);
    this.state = {
      name: ''
    };
  }
  render() {
    return (
      <div >
          AKIII {this.state}...
      </div>
    );
  }
}

export default Content;
