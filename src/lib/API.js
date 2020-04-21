const API_URL = 'https://rockets.now.sh';

export default {
  async getRockets() {
    // eslint-disable-next-line no-undef
    const res = await fetch(API_URL);
    return res.json();

    }
}