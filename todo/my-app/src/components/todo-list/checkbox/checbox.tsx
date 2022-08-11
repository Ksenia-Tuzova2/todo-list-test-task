import { Progress } from "../../redaction/progress";

export function Checkbox(props:any) {
	return (

		<div className="checkbox__wrapper">
			<input type='checkbox' className="checkbox" /><p className="nameP">{props.name}</p>
			<Progress selected={props.selected} />{props.selected}
		</div>

	);
}

