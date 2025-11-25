import type { ApiSchema } from '../server/index.ts';

type ApiPath = keyof ApiSchema;

let path: ApiPath = '/user/:userId';

console.log(path);
