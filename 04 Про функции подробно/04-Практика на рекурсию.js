function getLength(array) {
	if (array.pop() === undefined) return 0;
  
  return 1 + getLength(array);
}