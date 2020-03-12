/*
import React ,{PureComponent} from 'react';
import { Card, Input, Button, Table, Modal } from 'antd';
const { TextArea } = Input;


class samePage extends PureComponent {
  state = {
    ws:null,
    text:'',
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
      // ws.send("你好呀，珊珊牌服务器！");

      if(ws.readyState == ws.CONNECTING){
        console.log('连接正在打开中');
      }
      if(ws.readyState == ws.OPEN){
        console.log('连接已打开');
      }

      // 接收服务端数据时触发
      ws.onmessage=(event)=>{
        if (event.data === 'ok'){
          console.log("增加一列");
          //结合业务需求，在这里需要reload，代替点击刷新按钮的事件
        }else{
          console.log("添加失败！")
        }
      };

      //断开WEBSOCKET连接成功触发事件
      ws.onclose=()=>{
        console.log('连接已关闭...');
      };
    };
  };

  onChange=(e)=>{
    const {ws} = this.state;
    const {value} = e.target;
    this.setState({text: value});
    ws.send(value);
  };

  submit=()=>{
    const {ws,dataSource} = this.state;

    let before = dataSource.length;

    Modal.confirm({
      title:'确认增加一行数据？',
      okText:'确认',
      cancelText:'取消',
      onOk:()=>{
        const data = {
          key:'3',
          name:'shan',
          age:'18',
          address:'Beijing',
        };

        let data2 = [...dataSource,data];

        let after = data2.length;

        if (after!== before){
          Modal.success({
            title:'添加数据成功',
            okText:'确定',
            onOk:()=> {
              //添加数据后，向服务端传递
              ws.send('ok');
              this.setState({dataSource:data2});
            },
          })
        }else{
          Modal.error({
            title:'添加失败',
            okText:'确定',
            onOk:()=> {
              ws.send('fail');
              window.location.href="./Welcome"
            },
          })
        }
      }
    })
  };

  render() {
    const {text,dataSource} = this.state;

    // const dataSource = [
    //   {
    //     key: '1',
    //     name: '胡彦斌',
    //     age: 32,
    //     address: '西湖区湖底公园1号',
    //   },
    //   {
    //     key: '2',
    //     name: '祖',
    //     age: 42,
    //     address: '西湖区湖底公园1号',
    //   },
    // ];
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

    let data2 = dataSource;

    return (
      <div>
        <Card>
          <TextArea rows={4}
                    value={text}
                    placeholder="请输入展示的内容"
                    allowClear
                    onChange={this.onChange} />
        </Card>

        <Button type='primary' onClick={this.submit}>添加一行数据</Button>
        <Table columns={columns} dataSource={data2}/>
      </div>
    );
  }
}
export default samePage;

 */
