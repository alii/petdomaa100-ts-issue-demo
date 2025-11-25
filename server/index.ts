// In practice, this type is inferred from the routes
interface ApiSchema {
	'/random-num': {
		GET: {
			input: {
				search: {
					min: number;
					max: number;
				};
			};
			output: {
				number: number;
			};
		};
	};
	'/user/:userId': {
		GET: {
			input: {
				params: {
					userId: string;
				};
			};
			output: { id: string; username: string; };
		};
		POST: {
			input: {
				params: {
					userId: string;
				};
				body: {
					firstName: string;
					lastName: string;
				};
			};
			output: {
				success: boolean;
			};
		};
	};
}

Bun.serve({
	port: 6969,
	routes: {
		'/random-num': () => new Response('Unimplemented 1'),
		'/user/:userId': () => new Response('Unimplemented 2'),
	},
});

export type { ApiSchema };
