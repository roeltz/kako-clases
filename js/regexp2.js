let html = `

	<h1><a class="external" href="https://google.com">Título de la página</a></h1>
	
	<p>
		Lorem ipsum <a     
		 href="https://facebook.com">dolor sit amet</a>
	</p>

	<p>
		Un montón de <a HREF="https://kakoto.org">cosas</a>
	</p>

	<figure>
		<img src="https://google.com/logo.png">
	</figure>

`;

let exprHref = /href="([^"]+)"/gi;
let exprTag = /<\/?\w+[^>]*>/gi;
let m;

while (m = exprTag.exec(html)) {
	console.log(m[0]);
}