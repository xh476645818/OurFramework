/**
 * Created by xiaohe on 2018/5/16.
 */
export default class Result extends Component {
    constructor(props,context) {
        super(props,context);
    }

    render() {
        return (
            <div>
                显示结果:{this.props.text}
            </div>
        )
    }
}