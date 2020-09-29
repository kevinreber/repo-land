export const repoData = {
	isLoading: false,
	error: null,
	response: {
		status: 200,
		data: [
			{
				name: 'astyanax',
				language: 'Java',
				description: 'Cassandra Java Client',
				stargazers_count: 1010,
				forks_count: 366,
				created_at: '2011-07-13T20:24:30Z',
				owner: {
					avatar_url: 'https://avatars3.githubusercontent.com/u/913567?v=4',
				},
			},
			{
				name: 'curator',
				language: 'Java',
				description: 'ZooKeeper client wrapper and rich ZooKeeper framework',
				stargazers_count: 2092,
				forks_count: 434,
				created_at: '2011-07-14T19:47:55Z',
				owner: {
					avatar_url: 'https://avatars3.githubusercontent.com/u/913567?v=4',
				},
			},
			{
				name: 'Priam',
				language: 'Java',
				description:
					'Co-Process for backup/recovery, Token Management, and Centralized Configuration management for Cassandra.',
				stargazers_count: 980,
				forks_count: 276,
				created_at: '2011-07-20T17:51:25Z',
				owner: {
					avatar_url: 'https://avatars3.githubusercontent.com/u/913567?v=4',
				},
			},
			{
				name: 'Priam',
				language: 'Java',
				description:
					'Co-Process for backup/recovery, Token Management, and Centralized Configuration management for Cassandra.',
				stargazers_count: 980,
				forks_count: 276,
				created_at: '2011-07-20T17:51:25Z',
				owner: {
					avatar_url: 'https://avatars3.githubusercontent.com/u/913567?v=4',
				},
			},
			{
				name: 'Priam',
				language: 'Java',
				description:
					'Co-Process for backup/recovery, Token Management, and Centralized Configuration management for Cassandra.',
				stargazers_count: 980,
				forks_count: 276,
				created_at: '2011-07-20T17:51:25Z',
				owner: {
					avatar_url: 'https://avatars3.githubusercontent.com/u/913567?v=4',
				},
			},
		],
	},
};

export const commitData = {
	isLoading: false,
	error: null,
	response: {
		status: 200,
		data: [
			{
				sha: 'ee6c754b9a0b198b930160d03f1675b7bd3d36d0',
				commit: {
					committer: {
						date: '2020-09-23T16:47:17Z',
						email: 'noreply@github.com',
						name: 'GitHub',
					},
					message: 'CASS-1937 cease filtering out OpsCenter keyspace. (#907)',
				},
				committer: {
					avatar_url: 'https://avatars3.githubusercontent.com/u/19864447?v=4',
					events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
					followers_url: 'https://api.github.com/users/web-flow/followers',
					following_url:
						'https://api.github.com/users/web-flow/following{/other_user}',
					gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
					gravatar_id: '',
					html_url: 'https://github.com/web-flow',
					id: 19864447,
					login: 'web-flow',
					node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
					organizations_url: 'https://api.github.com/users/web-flow/orgs',
					received_events_url:
						'https://api.github.com/users/web-flow/received_events',
					repos_url: 'https://api.github.com/users/web-flow/repos',
					site_admin: false,
					starred_url:
						'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/web-flow/subscriptions',
					type: 'User',
					url: 'https://api.github.com/users/web-flow',
				},
			},
			{
				sha: 'a78b203c5031e791aa1372938effc4c626b7b9a5',
				commit: {
					committer: {
						date: '2020-09-08T20:58:34Z',
						email: 'mattl@netflix.com',
						name: 'Matt Lehman',
					},
					message: 'Update CHANGELOG in advance of 3.1.99',
				},
				committer: {
					avatar_url: 'https://avatars0.githubusercontent.com/u/63665634?v=4',
					events_url:
						'https://api.github.com/users/mattl-netflix/events{/privacy}',
					followers_url: 'https://api.github.com/users/mattl-netflix/followers',
					following_url:
						'https://api.github.com/users/mattl-netflix/following{/other_user}',
					gists_url:
						'https://api.github.com/users/mattl-netflix/gists{/gist_id}',
					gravatar_id: '',
					html_url: 'https://github.com/mattl-netflix',
					id: 63665634,
					login: 'mattl-netflix',
					node_id: 'MDQ6VXNlcjYzNjY1NjM0',
					organizations_url: 'https://api.github.com/users/mattl-netflix/orgs',
					received_events_url:
						'https://api.github.com/users/mattl-netflix/received_events',
					repos_url: 'https://api.github.com/users/mattl-netflix/repos',
					site_admin: false,
					starred_url:
						'https://api.github.com/users/mattl-netflix/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/mattl-netflix/subscriptions',
					type: 'User',
					url: 'https://api.github.com/users/mattl-netflix',
				},
			},
			{
				sha: '2dc7d6ca4dfa46f97bebdffc5dfa53bc64928231',
				commit: {
					committer: {
						date: '2020-09-08T20:53:07Z',
						email: 'noreply@github.com',
						name: 'GitHub',
					},
					message:
						'Remove redundant log statements from CassandraAdmin (#903) CASS-1870 remove dead code, clean imports CASS-1870 correct typos CASS-1870 Remove noisy log statements from CassandraAdmin. All removed logs are redundant with what JMXNodeTool produces and sometimes print entire stack traces when the Exception is not a surprise (i.e., C* is not up yet)',
				},
				committer: {
					avatar_url: 'https://avatars3.githubusercontent.com/u/19864447?v=4',
					events_url: 'https://api.github.com/users/web-flow/events{/privacy}',
					followers_url: 'https://api.github.com/users/web-flow/followers',
					following_url:
						'https://api.github.com/users/web-flow/following{/other_user}',
					gists_url: 'https://api.github.com/users/web-flow/gists{/gist_id}',
					gravatar_id: '',
					html_url: 'https://github.com/web-flow',
					id: 19864447,
					login: 'web-flow',
					node_id: 'MDQ6VXNlcjE5ODY0NDQ3',
					organizations_url: 'https://api.github.com/users/web-flow/orgs',
					received_events_url:
						'https://api.github.com/users/web-flow/received_events',
					repos_url: 'https://api.github.com/users/web-flow/repos',
					site_admin: false,
					starred_url:
						'https://api.github.com/users/web-flow/starred{/owner}{/repo}',
					subscriptions_url:
						'https://api.github.com/users/web-flow/subscriptions',
					type: 'User',
					url: 'https://api.github.com/users/web-flow',
				},
			},
		],
	},
};
