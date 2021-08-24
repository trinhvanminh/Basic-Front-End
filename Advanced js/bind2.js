//vd2
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

console.log($(".heading").innerText);

const app = (() => {
	const cars = ["BMW"];
	const root = $("#root");
	const input = $("#input");
	const submit = $("#submit");

	return {
		add(car) {
			cars.push(car);
		},
		delete(index) {
			cars.splice(index, 1);
		},
		render() {
			const html = cars
				.map(
					(car, index) =>
						`
                    <li>
                        ${car} 
                        <span class="delete" data-index="${index}">
                            &times
                        </span>
                    </li>
                `
				)
				.join("");

			root.innerHTML = html;
		},
        handleDelete(e) {
            const deleteBtn = e.target.closest(".delete");
            console.log(deleteBtn)
            if(deleteBtn) {
                this.delete(deleteBtn.dataset.index)
                this.render()
            }
        },
		init() {
			//handle DOM events
			// submit.onclick = function() {
			// 	console.log(this); //this will be cars obj with arrow functon
			// 	const car = input.value;
			// 	this.add(car);
			// 	this.render();
			// };

			submit.onclick = () => {
				console.log(this); //this will be cars obj with arrow functon
				const car = input.value;
				this.add(car);
				this.render();

				input.value = null;
				input.focus();
			};

            root.onclick = this.handleDelete.bind(this)

			this.render();
		},
	};
})();

app.init();
