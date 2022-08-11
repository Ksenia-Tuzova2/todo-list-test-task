
export function Progress(props:any) {
	debugger
	{console.log('progress')}
	return (

		<select className="progress">
			<option selected className="progress__item" name='ожидает'>ожидает</option>
			<option className="progress__item" name='в процессе'>в процессе</option>
			<option className="progress__item" name='выполнена'>выполнена</option>
		</select>

	);
}

