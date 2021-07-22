import { useState } from "react";
/**

	TODO:
	-Este Hook manipula el onchange del input
	- hook para inputs que recibe un objecto
	- retorna un objecto (estado, callback y el reset del campo)
	

*/

export const useForm = (initial = {}) => {
	const [form, setForm] = useState(initial);

	const reset = () => {
		setForm(initial);
	};

	const handleFormSimple = ({ target }) => {
		setForm({
			...form,
			[target.name]: target.value,
		});
	};

	return [form, handleFormSimple, reset];
};
