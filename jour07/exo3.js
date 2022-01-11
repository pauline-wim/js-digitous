// 03 - Map Names

const longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];

const shortNames = longNames.map(function (longname) {
    return {name: `${longname.firstName} ${longname.lastName}`};
});

console.log(shortNames);