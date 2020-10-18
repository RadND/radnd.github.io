new Gitalk({
	clientID: '<%= theme.gitalk.ClientID %>',
	clientSecret: '<%= theme.gitalk.ClientSecret %>',
	repo: '<%= theme.gitalk.repo %>',
	owner: '<%= theme.gitalk.owner %>',
	admin: ['<%= theme.gitalk.admin %>'],
	// id: md5(location.pathname),
	id: '<%= post.permalink %>',
	distractionFreeMode: false
}).render('gitalk-container')