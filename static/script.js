var compliments = ['You are amazing!','Hello Beautiful!']

	var randPick = Math.floor( Math.random() * compliments.length )




	(function(){
			var data = {
				title:"Allison's blog",
				body:compliments[randPick]
			};


			var template = Handlebars.compile( $('#entry-template').html() );
			console.log(template);
			var html = template(data);
			console.log(html);
			$('body').append(template(data))

	})();