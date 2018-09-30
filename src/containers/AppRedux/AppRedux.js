import {actionCreate, APP_REDUX} from "../../redux/Action";

class AppRedux extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            name: this.props.name || '二狗子'
        }
    }

    render() {
        return (
            <Fragment>
                <div onClick={this.props.handle}>click</div>
                {this.props.name}
            </Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => (
    console.log('mapStateToProps',state),
        {
            name:state.AppReduxRequest
        }
)
const mapDispatchToProps = (dispatch) => (
    {
        handle: (e) => {
            dispatch(actionCreate(APP_REDUX,'狗子'))
        }
    }
)
AppRedux = connect(mapStateToProps, mapDispatchToProps)(AppRedux);
export default AppRedux;