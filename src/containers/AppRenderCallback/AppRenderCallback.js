import Fill from './Fill'
class AppRenderCallback extends Component {
    constructor(props, content) {
        super(props, content)
    }

    render() {
        return (
            <Fragment>
                <Fill>
                    {a=>{
                        console.log(a)
                        return '父组件获取内部'+a
                    }}
                    {b=>{
                        console.log(b)
                        return '父组件获取内部'+b
                    }}
                </Fill>
            </Fragment>
        )

    }
}
export default AppRenderCallback;