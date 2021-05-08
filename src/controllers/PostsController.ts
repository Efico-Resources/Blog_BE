// Import Types


// Display Landing page
const Home = (req: any, res: any) => {
	res.send({
		data: "Hey there"
	})
};

// Make function global
module.exports = { Home };
