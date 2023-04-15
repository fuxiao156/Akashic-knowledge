import { wp } from '@/services/cms/wp/base';
import { NextApiHandler } from 'next';

const postHandler: NextApiHandler = async (req, res) => {

    const post = await wp.posts();

    res.status(200).json(post);

}

export default postHandler;