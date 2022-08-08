import { Checkbox } from "./checkbox/checbox";



export function Todo__list() {

	return (
				<div className="checkboxes">
					{/* делаю компоненту чекбокса, чтобы потом подключить к базе данных */}
				<Checkbox name='Купить новое платье'/>
			<Checkbox name='Помыть пол' />
			<Checkbox name='Приготовить ужин' />
			</div>
		
	);
}

