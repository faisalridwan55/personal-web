import { Row } from "./Grid";

const CollapsibleRow = (props) => {
	return (
		<Row justifyContent="center" style={props.headerStyle}>
			COLLAPSIBLE HEADER
		</Row>
	)
}

export default CollapsibleRow;