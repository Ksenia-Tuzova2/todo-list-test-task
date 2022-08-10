
export function Redaction() {
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
						<p className="progress">в процессе</p>
			</div>
			<div className="lorem" >какой-то текст
				{/* {description} */}
						</div>
						<div className="form__wrapper">
			<input className="description" type='text'  placeholder="" />
	 <button>готово</button>
			</div>
			</div>
		
	);
}

