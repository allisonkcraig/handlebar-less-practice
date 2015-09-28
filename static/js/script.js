(function(){
	var blogPosts = [
		{title:"TwitchCon!", body:"It was so much fun!!", img:"http://www.3dvalley.com/tutorialsdata/flower.png"},
		{title:"Hackbright", body:"HEYY", img:"http://www.3dvalley.com/tutorialsdata/flower.png"},
		{title:"About Me", body:"I am tall.", img:"http://www.3dvalley.com/tutorialsdata/flower.png"},
	];

	var template = Handlebars.compile( $('#entry-template').html() );
			for (var i = 0; i < blogPosts.length; i++){
				$('.blog-content').append(template(blogPosts[i]));
	};
})();

(function(){
	var compliments =  ['Hello, you beautiful, rule-breaking moth.',
		'Hello, you cunning, pliable, chestnut-haired sunfish.',
		'Hello, you poetic, noble land-mermaid.',
		'Hello, you beautiful, naive, sophisticated newborn baby.',
		"Hello, you beautiful tropical fish. You're smart as a whip and you're cool under pressure."];

	var randPick = Math.floor( Math.random() * compliments.length );

	var data = {
		compliment: compliments[randPick]};		

	var template = Handlebars.compile( $('#subtitle-template').html() );
	var html = template(data);

	$('#subtitle').append(template(data));
})();

