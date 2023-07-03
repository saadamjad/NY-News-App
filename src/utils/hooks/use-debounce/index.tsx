/** @format */

import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState<isTypeString>(value);
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);
	return debouncedValue;
};

export { useDebounce };
