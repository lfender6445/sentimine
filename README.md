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

you can adjust your notebook theme using [jupyterthemes](https://github.com/dunovank/jupyter-themes/blob/421016c2e4fed75fa1830d664c10478d9bd25ed1/README.md), see example below

```sh
jt -t onedork -fs 95 -altp -tfs 11 -ofs 20 -nfs 115 -cellw 75% -T
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

# download stock ticker info
# https://old.nasdaq.com/screening/companies-by-name.aspx?letter=0&exchange=nasdaq&render=download
# https://old.nasdaq.com/screening/companies-by-name.aspx?letter=0&exchange=nyse&render=download
```

## troubleshooting

- ssl issues
  - https://stackoverflow.com/a/60265696/1426788
- python 3.6 bin missing
  - `pip install jupyter`

## tags

```
CC    coordinating conjunction
CD    cardinal digit
DT    determiner
EX    existential there (like: "there is" ... think of it like "there exists")
FW    foreign word
IN    preposition/subordinating conjunction
JJ    adjective    'big'
JJR    adjective, comparative    'bigger'
JJS    adjective, superlative    'biggest'
LS    list marker    1)
MD    modal    could, will
NN    noun, singular 'desk'
NNS    noun plural    'desks'
NNP    proper noun, singular    'Harrison'
NNPS    proper noun, plural    'Americans'
PDT    predeterminer    'all the kids'
POS    possessive ending    parent\'s
PRP    personal pronoun    I, he, she
PRP$    possessive pronoun    my, his, hers
RB    adverb    very, silently,
RBR    adverb, comparative    better
RBS    adverb, superlative    best
RP    particle    give up
TO    to    go 'to' the store.
UH    interjection    errrrrrrrm
VB    verb, base form    take
VBD    verb, past tense    took
VBG    verb, gerund/present participle    taking
VBN    verb, past participle    taken
VBP    verb, sing. present, non-3d    take
VBZ    verb, 3rd person sing. present    takes
WDT    wh-determiner    which
WP    wh-pronoun    who, what
WP$    possessive wh-pronoun    whose
WRB    wh-abverb    where, when

NE Type and Examples
ORGANIZATION - Georgia-Pacific Corp., WHO
PERSON - Eddy Bonte, President Obama
LOCATION - Murray River, Mount Everest
DATE - June, 2008-06-29
TIME - two fifty a m, 1:30 p.m.
MONEY - 175 million Canadian Dollars, GBP 10.40
PERCENT - twenty pct, 18.75 %
FACILITY - Washington Monument, Stonehenge
GPE - South East Asia, Midlothian
```

## crontab example

```
*/1 * * * * make -f ~/source/sentimine/Makefile all
```
