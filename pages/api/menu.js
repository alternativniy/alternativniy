import nextConnect from 'next-connect';

import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    await req.db.collection('menu').find({}).toArray(function(err, result) {
		if (err) throw err;

		res.json(result);
	});
});

export default handler;