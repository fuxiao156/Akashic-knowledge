import WP from 'wpapi';
const WP_API_URL = process.env.WP_API_URL;
export const wp = new WP({
    endpoint: WP_API_URL || '',
});