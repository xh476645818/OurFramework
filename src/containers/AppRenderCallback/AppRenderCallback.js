import Shell from './Shell'
import Fill from './Fill'
class AppRenderCallback extends Component {
    constructor(props, content) {
        super(props, content);
        this.state = {
        }
        this.handle = this.handle.bind(this);
    }

    handle(e) {
        console.log('我是Fill返回的',e.target.innerHTML);
        this.setState({
            data:e.target.innerHTML
        })
    }

    render() {
        return (
            <Fragment>
                <Shell data={this.state.data}>
                    123
                    <Fill data={'点击一下我'}></Fill>
                </Shell>


            </Fragment>
        )

    }
}

export default AppRenderCallback;