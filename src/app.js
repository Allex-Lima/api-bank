const app = require("./server");
const port = 3000;

app.listen(port, () => {
	console.log(`Server run in http://localhost:${port}`);
});