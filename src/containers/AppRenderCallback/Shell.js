import Fill from './Fill';

class Shell extends Component {
    constructor(props, context) {
        super(props, context);
        this.abc = this.abc.bind(this)
    }

    abc() {
        console.log(e.target.innerHTML)
    }

    render() {
        {
            console.log('Shell', this.props.children);
            React.Children.map(this.props.children,(i,j)=>{
                console.log(i,j)
            })
        }
        return (
            <Fragment>
                <span>
                        "这个是Shell的"{this.props.data},来自AppRenderCallback
                </span>
                <br/>
                <span>
                        "这个是Fill的",来自AppRenderCallback
                                    <br/>
                    {this.props.children}

                    </span>
            </Fragment>
        )
    }
}

export default Shell;