
export function Progress(props: any) {
		// debugger
		// return (
		// 	<select className="progress">
		// 		<option selected className="progress__item" name='ожидает'>ожидает</option>
		// 		<option className="progress__item" name='в процессе'>в процессе</option>
		// 		<option className="progress__item" name='выполнена'>выполнена</option>
		// 	</select>
		// );

	// { console.log('progress') }

	if (props.selected =={selected:'ожидает'}) {
		return (
			<select className="progress">
				<option selected className="progress__item" name='ожидает'>ожидает</option>
				<option className="progress__item" name='в процессе'>в процессе</option>
				<option className="progress__item" name='выполнена'>выполнена</option>
			</select>
		);
	}
	else if (props.selected == { selected: 'в процессе'}) {
		return (
			<select className="progress">
				<option className="progress__item" name='ожидает'>ожидает</option>
				<option className="progress__item" selected name='в процессе'>в процессе</option>
				<option className="progress__item" name='выполнена'>выполнена</option>
			</select>
		);
	}
	else if (props.selected =={ selected: 'выполнена'}) {
		return (
			<select className="progress">
				<option className="progress__item" name='ожидает'>ожидает</option>
				<option className="progress__item" name='в процессе'>в процессе</option>
				<option className="progress__item" selected name='выполнена'>выполнена</option>
			</select>
		);
	}
}

