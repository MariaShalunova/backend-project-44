install: 
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

fix:
	npx prettier --write .
	npx eslint --fix .

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

run:
	node bin/brain-even.js

