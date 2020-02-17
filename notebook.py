#!/usr/bin/env python
# coding: utf-8

# # Sentiment Analysis on Reddit News Headlines with Python’s Natural Language Toolkit (NLTK)

from IPython import display
from os import environ, path
import datetime
import math
from pprint import pprint
import pandas as pd
import numpy as np
import nltk
import matplotlib.pyplot as plt
import seaborn as sns
sns.set(style='darkgrid', context='talk', palette='Dark2')

def load_env():
    # https://stackoverflow.com/a/54028874/1426788 
    %load_ext dotenv
    %dotenv

load_env()

import praw

reddit = praw.Reddit(client_id=environ.get('CLIENT_ID'),
                     client_secret=environ.get('CLIENT_SECRET'),
                     user_agent='sentimine')


# In[113]:

headlines = set()
version = str(datetime.datetime.now()).replace(' ', '-')
print('version:', version)

# In[114]:
for submission in reddit.subreddit(environ.get('SUBREDDIT')).new(limit=None):
    headlines.add(submission.title)
    display.clear_output()
    print('# of headlines processed', len(headlines))


# In[131]:


from nltk.sentiment.vader import SentimentIntensityAnalyzer as SIA

sia = SIA()
results = []

for line in headlines:
    pol_score = sia.polarity_scores(line)
    pol_score['headline'] = line
    results.append(pol_score)

pprint(results[:3], width=100)


# In[132]:


df = pd.DataFrame.from_records(results)
df.head()


# In[133]:


df['label'] = 0
df.loc[df['compound'] > 0.2, 'label'] = 1
df.loc[df['compound'] < -0.2, 'label'] = -1
df.head()


# In[123]:


df2 = df[['headline', 'label']]


# In[124]:


df2.to_csv('./tmp/reddit_headlines_labels.csv', mode='a', encoding='utf-8', index=False)


# In[119]:


df.label.value_counts()


# In[120]:


print("Positive headlines:\n")
pprint(list(df[df['label'] == 1].headline)[:5], width=200)

print("\nNegative headlines:\n")
pprint(list(df[df['label'] == -1].headline)[:5], width=200)


# In[134]:


df.label.value_counts(normalize=True) * 100


# In[135]:


fig, ax = plt.subplots(figsize=(8, 8))

counts = df.label.value_counts(normalize=True) * 100

sns.barplot(x=counts.index, y=counts, ax=ax)

ax.set_xticklabels(['Negative', 'Neutral', 'Positive'])
ax.set_ylabel("Percentage")

plt.show()


# In[128]:


from nltk.tokenize import word_tokenize, RegexpTokenizer

example = "This is an example sentence! However, it isn't a very informative one"

print(word_tokenize(example, language='english'))


# In[129]:


tokenizer = RegexpTokenizer(r'\w+')
print(tokenizer.tokenize(example))


# In[138]:


from nltk.corpus import stopwords

stop_words = stopwords.words('english')
print(stop_words[:20])


# In[141]:


def process_text(headlines):
    tokens = []
    for line in headlines:
        line = line.lower()
        toks = tokenizer.tokenize(line)
        toks = [t for t in toks if t not in stop_words]
        tokens.extend(toks)
    
    return tokens


# In[142]:


pos_lines = list(df[df.label == 1].headline)

pos_tokens = process_text(pos_lines)
pos_freq = nltk.FreqDist(pos_tokens)

pos_freq.most_common(20)


# In[143]:


y_val = [x[1] for x in pos_freq.most_common()]

fig = plt.figure(figsize=(10,5))
plt.plot(y_val)

plt.xlabel("Words")
plt.ylabel("Frequency")
plt.title("Word Frequency Distribution (Positive)")
plt.show()


# In[144]:


y_final = []
for i, k, z, t in zip(y_val[0::4], y_val[1::4], y_val[2::4], y_val[3::4]):
    y_final.append(math.log(i + k + z + t))

x_val = [math.log(i + 1) for i in range(len(y_final))]

fig = plt.figure(figsize=(10,5))

plt.xlabel("Words (Log)")
plt.ylabel("Frequency (Log)")
plt.title("Word Frequency Distribution (Positive)")
plt.plot(x_val, y_final)
plt.show()


# In[145]:


neg_lines = list(df2[df2.label == -1].headline)

neg_tokens = process_text(neg_lines)
neg_freq = nltk.FreqDist(neg_tokens)

neg_freq.most_common(20)


# In[146]:


y_val = [x[1] for x in neg_freq.most_common()]

fig = plt.figure(figsize=(10,5))
plt.plot(y_val)

plt.xlabel("Words")
plt.ylabel("Frequency")
plt.title("Word Frequency Distribution (Negative)")
plt.show()


# In[147]:


y_final = []
for i, k, z in zip(y_val[0::3], y_val[1::3], y_val[2::3]):
    if i + k + z == 0:
        break
    y_final.append(math.log(i + k + z))

x_val = [math.log(i+1) for i in range(len(y_final))]

fig = plt.figure(figsize=(10,5))

plt.xlabel("Words (Log)")
plt.ylabel("Frequency (Log)")
plt.title("Word Frequency Distribution (Negative)")
plt.plot(x_val, y_final)
plt.show()


# In[ ]:




