class Fill extends Component {
    constructor(props, content) {
        super(props, content)
        this.state={
            a:123,
            b:234
        }
    }

    render() {
        return (
            <Fragment>
                {console.log(this.props)}
                {this.props.children[0](this.state.a)}
                {this.props.children[1](this.state.b)}
            </Fragment>
        )

    }
}
export default Fill;