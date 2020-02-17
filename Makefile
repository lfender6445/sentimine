build:
	jupytext --to notebook notebook.py && \
	jupyter nbconvert --execute notebook.ipynb

deploy:
	python3 make_worker.py && \
	wrangler publish

