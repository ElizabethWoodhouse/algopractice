//file that holds the functions that help with testing

//tests if arrays are equal to each other
export const testEqual = (testArray, outputArray) => {
	if (testArray.length !== outputArray.length) {
		return false;
	}
	for (let i = 0; i < testArray.length; i++) {
		if (testArray[i] !== outputArray[i]) {
			return false;
		}
	}
	return true;
};
