# sentimine

subreddit sentiment analysis 

this repository was forked and built from [an existing notebook](https://github.com/LearnDataSci/article-resources/blob/cf779e4526a78982011f1d05166679ab8a94353c/Sentiment%20Analysis%20on%20Reddit%20Headlines%20with%20NLTK/Sentiment%20Analysis%20on%20Reddit%20Headlines%20with%20NLTK.ipynb)

## setup

```sh
git clone https://github.com/lfender6445/sentimine
python3 --version # Python 3.7.6
pip3 install -r requirements.txt
mv .env.example .env # rename `.env.example` to `.env`
# edit to include your agents `CLIENT_SECRET`, `CLIENT_ID`, `SUBREDDIT`
# run through the data install instructions https://www.nltk.org/data.html
make build # build your notebook
```
## tips

```sh
# run jupyter
jupyter

# convert notebook to html
jupyter nbconvert --execute notebook.ipynb

# convert to python from notebook
jupyter nbconvert --to script notebook.ipynb

# convert to notebook from python
jupytext --to notebook notebook.py

# add dependency
pip install python-dotenv && pip freeze > requirements.txt
```

## troubleshooting

- ssl issues
  - https://stackoverflow.com/a/60265696/1426788
- python 3.6 bin missing
  - `pip install jupyter`
