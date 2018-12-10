class Fill extends Component {
    constructor(props, content) {
        super(props, content)
        this.state = {
            text: '111'
        }
    }


    render() {
        return (
            <Fragment>
                <span style={{'cursor': 'pointer'}} onClick={this.props.handle}>
                    <strong>
                    {
                        this.props.data
                    }
                    </strong>
                </span>
            </Fragment>
        )

    }
}

export default Fill;