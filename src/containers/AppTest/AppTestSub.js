class AppTestSub extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: this.props.name || ''
        }
        this.myHandle = this.myHandle.bind(this);
        console.log('sub-constructor-听说我是最先加载');
    }

    componentWillReceiveProps(nextProps) {
        console.log('%c sub-componentWillReceiveProps 组件props有更新渲染render前，每次执行', 'background:#000;color:#fff')
        console.log('%c' + this.props.name, 'background:#cd0000;color:#fff');
        /*setTimeout(
            () => {
                this.setState({
                    name: this.props.name
                })
            }
            , 0)*/
        this.setState({
            name: nextProps.name
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('子-周期:shouldComponentUpdate');
        console.log('nextProps', nextProps);
        console.log('props', this.props);
        console.log('nextState', nextState);
        console.log('state', this.state);
        // 选择注释或放开以下代码，会有不同发现
        if (nextState.name == this.state.name) {
            return false
        }
        return true
    }

    myHandle(e) {
        this.props.subHandle(e.target.innerHTML)
    }
    componentDidMount(){
        this.props.subHandle('asdsadfsafdf')
    }
    componentDidUpdate(){
        this.props.subHandle('dsfljsdgnfdgnfdhlfdhn')
    }

    render() {
        {
            console.log('sub-render-渲染全靠我')
        }
        return (
            <Fragment>
                <span onClick={this.myHandle}>{'props:' + this.props.name}</span>
                <br/>
                <span onClick={this.myHandle}>{'state:' + this.state.name}</span>
            </Fragment>
        )
    }
}

export default AppTestSub;