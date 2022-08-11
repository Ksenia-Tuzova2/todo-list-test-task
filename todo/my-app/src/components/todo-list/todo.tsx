import { Checkbox } from "./checkbox/checbox";


export function Todo__list(props:any) {
let names=[
	{ name: 'Купить новое платье' ,
		selected:'выполнена',
},
	{ name: 'Помыть пол' ,
		selected: 'в процессе',
},
	{ name: 'Приготовить ужин',
		selected: 'выполнена', },
	{name:'CKBIRJV LKBYYJT YFPDFYBT uggjgjyfhfhththfhjgjbkjbjk',
		selected: 'выполнена',
}
]
	return (
				<div className="todo__list">
			<div className="search__wrapper">
				<input className="search"type='text'/>
						<button>поиск</button>
					</div>
					{/* делаю компоненту чекбокса, чтобы потом подключить к базе данных */}
			<Checkbox name={names[0].name} selected={names[0].selected}/>
			<Checkbox name={names[1].name} selected={names[1].selected} />
			<Checkbox name={names[3].name} selected={names[3].selected} />
			</div>
		
	);
}

