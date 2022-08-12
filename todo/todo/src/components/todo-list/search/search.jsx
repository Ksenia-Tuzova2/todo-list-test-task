export function Search() {
	return (
		// создаю отдельную компоенту для поиска задач по имени
		<div className="search__wrapper">
			<input className="search" type='text' placeholder="Search" />
			<button>поиск</button>
		</div>

	);
}

