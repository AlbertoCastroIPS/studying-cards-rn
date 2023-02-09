import Visible from './visible'

export default function Conditional({
    condition,
    trueComponent,
    falseComponent
}) {
    return condition ?
        trueComponent :
        falseComponent
}