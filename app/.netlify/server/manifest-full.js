export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["esqune.jpg","favicon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-8aca89ee.js","imports":["_app/immutable/start-8aca89ee.js","_app/immutable/chunks/index-5cc283e6.js","_app/immutable/chunks/singletons-9bae83df.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
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
};
