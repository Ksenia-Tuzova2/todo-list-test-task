import { Checkbox } from "./checkbox/checbox";


export function Todo__list() {
let names=[
	{ name: 'Купить новое платье' },
	{ name: 'Помыть пол' },
	{ name: 'Приготовить ужин' },
	{name:'CKBIRJV LKBYYJT YFPDFYBT uggjgjyfhfhththfhjgjbkjbjk'}
]
	return (
				<div className="todo__list">
			<div className="search__wrapper">
				<input className="search"type='text'/>
						<button>поиск</button>
					</div>
					{/* делаю компоненту чекбокса, чтобы потом подключить к базе данных */}
			<Checkbox name={names[0].name} />
			<Checkbox name={names[1].name} />
			<Checkbox name={names[3].name} />
			</div>
		
	);
}

