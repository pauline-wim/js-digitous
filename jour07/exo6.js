// 06 - Cakes

const cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

let soldOut = cakes.filter(function (chocolate) {
    if (chocolate.flavor === "chocolate") {
        return chocolate;
    }
}).map(function (status) {
    status.status = "Sold out!";
    return status;
});

console.log(soldOut);