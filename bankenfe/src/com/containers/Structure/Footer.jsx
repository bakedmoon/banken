import React, { Component } from 'react';
import template from '../../../com/assets/images/templates.svg';
import books from '../../../com/assets/images/books.svg';
import {Checkbox,Button, Layout} from 'antd';
const { Footer} = Layout;


class FooterPanel extends Component {
    state = {
        size: 'large',
      };
    render() {
        const {size} = this.state;
        return (
                  <Footer className="FooterPanel">
                      <div className="leftSide">
                            <span><a href="#"><img src={template} /> Templates</a></span>
                            <span><a href="#"><img src={books} /> Books</a></span>
                      </div>
                      <div className="rightSide">
                      <Checkbox>Print</Checkbox>
                      <Button size={size}>Save as Draft</Button> 
                      <Button type="primary" size={size}>
                         Complete
                      </Button>
                     
                      </div>
                  </Footer>
           
        )
    }
}

export default  FooterPanel;