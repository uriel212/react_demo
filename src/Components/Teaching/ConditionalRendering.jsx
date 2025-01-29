import InvalidPassword from "./InvalidPassword"
import ValidPassword from "./ValidPassword"

const ConditionalRendering = ({isTrue}) => {
    // if (isTrue) {
    //     return <ValidPassword />
    // } else {
    //     return <InvalidPassword />
    // }
    return isTrue ? <ValidPassword /> : <InvalidPassword />
}

export default ConditionalRendering