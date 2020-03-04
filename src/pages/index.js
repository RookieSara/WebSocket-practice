import React ,{PureComponent} from 'react';
import { Input } from 'antd';
const { TextArea } = Input;


class Index extends PureComponent {

  onChange=(e)=>{
    console.log(e.value);
  };

  render() {

    return (
      <div>
        <TextArea rows={4}
        placeholder="请输入展示的内容"
        allowClear
        onChange={this.onChange} />
      </div>
    );
  }
}
export default Index;
