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

const soldOut = cakes.filter(function (cake) {
	return cake.flavor === "chocolate";
    // if (cake.flavor === "chocolate") {
    //     return cake;
    // }
}).map(function (chocolateCake) {
    chocolateCake.status = "Sold out!";
    return chocolateCake;
});

console.log(soldOut);