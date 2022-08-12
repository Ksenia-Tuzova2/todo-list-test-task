import { Progress } from "./progress";

export function Redaction(props: any) {
	// let description:String|Boolean
	//  description=''
	// let changePlaceholder=()=>{
	// 	if(description=='') return 'Add description'
	// 	else return 'Start redact description'
	// }
	return (

		<div className="redaction">
			<div className="name-progress__wrapper">
				<div className="name">Имя задачи</div>
				<Progress selected={props.selected}/>
			</div>
			<div className="lorem" >какой-то текст
				{/* {description} */}
			</div>
			<div className="form__wrapper">
				<input className="description" type='text' placeholder="" />
				<button>готово</button>
			</div>
		</div>

	);
}

