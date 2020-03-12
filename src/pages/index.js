import React ,{PureComponent} from 'react';
import { Button, Card, Modal, Table } from 'antd';


class Index extends PureComponent {
  state = {
    ws:null,
    dataSource:[
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ],
  };

componentDidMount() {
  this.initWebsocket('ws://localhost:8001/');
}

  initWebsocket =(url)=>{
  //初始化一个WEBSOCKET对象
    const ws = new WebSocket(url);

  //建立WEBSOCKET连接成功触发
    ws.onopen=()=>{
      this.setState({
        ws,
      });

      // 接收服务端数据时触发
      ws.onmessage=(event)=>{
        const data = {
          key:'3',
          name:'shan',
          age:'18',
          address:'Beijing',
        };
        const {dataSource} = this.state;

        if (event.data === 'ok'){
          console.log("增加一列--index页面");
          //结合业务需求，在这里需要reload，代替点击刷新按钮的事件
          let data2 = [...dataSource,data];
          this.setState({dataSource:data2});

        }else{
          console.log("添加失败--index页面")
        }
      };

      //断开WEBSOCKET连接成功触发事件
      ws.onclose=()=>{
        console.log('连接已关闭...');
      };
    };
  };

  submit=()=>{
    const w = window.open('about:blank');
    w.location.href = '/#/add';
  };

  render() {
    const {dataSource} = this.state;
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ];

    return (
      <div>

        <Button type='primary' onClick={this.submit}>添加一行数据</Button>
        <Table columns={columns} dataSource={dataSource}/>
      </div>
    );
  }
}
export default Index;
