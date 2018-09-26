import Fill from './Fill'
class AppRenderCallback extends Component {
    constructor(props, content) {
        super(props, content)
    }

    render(e=1) {
        return (
            <Fragment>
                <Fill>
                    {e}
                </Fill>
            </Fragment>
        )

    }
}
export default AppRenderCallback;