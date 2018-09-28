import AppTestSub from './AppTestSub'
import AppTestResult from './AppTestResult'

class AppTest extends Component {
    constructor(props, context) {
        super(props, context);
        console.log('constructor-听说我是最先加载');
        this.state = {
            name: '赵紫帆',
            result: '谁'
        }
        this.sayName = this.sayName.bind(this);
        //获取数据
        this.getData = this.getData.bind(this);
        this.handle = this.handle.bind(this);
        this.subHandle = this.subHandle.bind(this);
    }

    componentWillMount() {
        console.log('%c componentWillMount-初始加载render渲染前，只执行一次', 'background:#e600ff;color:#000')
        // this.sayName('componentWillMount', this.state.name);
        // this.getData();
        this.state.time = setInterval(() => {
            console.log(this.state.name)
        }, 1000)
    }

    componentDidMount() {
        console.log('%c componentDidMount-初始加载渲染render后，只执行一次', 'background:#e600ff;color:#000')
        // this.sayName('componentDidMount', this.state.name);
        // this.getData();

    }

    //获取数据
    getData() {
        axios.get('/Name').then((res) => {
            let data = res.data;
            if (data.code == 1) {
                console.log(data.result.name);
                this.setState({
                    name: data.result.name
                }, () => {
                    console.log(this.state.name);
                })
            }
        })
    }

    sayName(i, j) {
        console.warn('sayName' + ':' + i, j)
    }

    componentWillReceiveProps(nextProps) {
        console.log('%c componentWillReceiveProps 组件props有更新渲染render前，每次执行', 'background:#cd0000;color:#bada55')
    }

    componentWillUpdate() {
        this.sayName('componentWillUpdate', this.state.name);
        console.log('%c componentWillUpdate 组件更新渲染render前，每次执行', 'background:#cd0000;color:#bada55')
    }

    componentDidUpdate() {
        this.sayName('componentDidUpdate', this.state.name);
        console.log('%c componentDidUpdate 组件更新渲染render后，每次执行', 'background:#cd0000;color:#bada55')
    }

    componentWillUnmount() {
        console.log('%c componentWillUnmount 组件卸载后，执行一次', 'background:#cd0000;color:#bada55')
        clearInterval(this.state.time)
    }

    handle() {
        this.setState({
            name: '侯才'
        })
    }

    subHandle(e) {
        console.log(e);
        this.setState({
            result: e
        })
    }

    render() {
        {
            console.log('render-渲染全靠我')
        }
        return (
            <Fragment>
                <div onClick={this.handle}>Hello world!</div>
                <AppTestSub name={this.state.name} subHandle={this.subHandle}/>
                <AppTestResult result={this.state.result}/>
            </Fragment>
        )
    }
}

export default AppTest;