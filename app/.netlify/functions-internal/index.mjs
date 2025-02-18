import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["esqune.jpg","favicon.png","ig.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-bc23dbbc.js","imports":["_app/immutable/start-bc23dbbc.js","_app/immutable/chunks/index-9b700929.js","_app/immutable/chunks/singletons-2a62041f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
