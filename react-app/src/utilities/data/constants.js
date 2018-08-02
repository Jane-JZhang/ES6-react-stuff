export const BASE = 'https://api.iextrading.com/1.0/stock/';
export const BATCH = '/batch?';
export const BATCH_QUERY = 'types=quote,news,chart&range=1m&last=10';
export const INIT_REQUEST_URL = BASE + 'market/batch?symbols=aapl,fb,goog&types=quote,news,chart&range=1m&last=5';
