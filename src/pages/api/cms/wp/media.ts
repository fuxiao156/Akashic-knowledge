import { wp } from '@/services/cms/wp/base';
import { NextApiHandler } from 'next';

const mediaHandler: NextApiHandler = async (req, res) => {

    const media = await wp.media();

    res.status(200).json(media);

}

export default mediaHandler;