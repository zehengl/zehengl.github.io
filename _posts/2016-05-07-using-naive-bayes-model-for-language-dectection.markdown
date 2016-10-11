---
layout: post
title:  "Using Naive Bayes Model for Language Dectection"
date:   2016-05-07
author: Zeheng Li
---

Tonight I will write about how to use one of simplest supervised learning model (Naive Bayes) to perform language detection.

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});
</script>
<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_CHTML">
</script>

# Background
*Naive Bayes* is one of the simple techniques to construct a classifier, which is based on Bayes' rule. It is a supervised learning method and assumes features contribute to classification independently. Such naive generative model sometimes oversimplies the task but, be that as it may, it is proved to work well in many tasks, including spam email filtering and sentimental analysis.

The underlying math is

$$ P(A|B) = \dfrac{P(A) \cdot P(B|A)} {P(B)}$$

or in plain English

$$ posterior = \dfrac{likelihood \cdot prior} {evidence}$$

Let A denote the $$k$$ possible outcomes of classes and B denote a vector of features $$x$$, we have

$$ P(C_k|x) = \dfrac{P(C_k) \cdot P(x|C_k)} {P(x)}$$

Since we assume $$x_i$$ is independent of $$x_j$$, we have

$$ P(C_k|x) = \dfrac{P(C_k) \cdot \prod_{i=1}^n P(x_i|C_k)} {P(x)}$$

In this way we simplify and cast the classification problem into a counting tasks, i.e. counting the number of occurences of feature $$x_i$$ in the training instances, given its class is $$C_k$$. When we use the model to predict a testing instance, we compute the probabilites of all classes and take the class that has highest probality as its label.

In practice, we can use the log probality to simplify the computation.

$$ \log {P(C_k|x)} = \log {P(C_k) + \sum_{i=1}^n \log {P(x_i|C_k)}} - \log{P(x)}$$


# Task

In this post I will use naive bayes model to train a classifier to detect text language from a corpus that contains different languages.

# Dataset

I use the [Wikicorpus v.1.0](http://www.cs.upc.edu/~nlp/wikicorpus/) dataset, which is a trilingual corpus in Catalan, Spanish, and English. Each portion contains tens or hundreds of millions words. It should be more than enough for my demo.

# Feature Selection

Each document consists of multiple words. Intuitively we may use words as features. However it requires a large collection for training because if a word is not seen in the training set it is of little use in the testing set. Image you have a document with words that have never occured in the training set. How can the model handle such case? I think it makes more sense to use the characters as features. In this way, we treat each word as a sequence of characters (**ngram**) and learn a model from the structure of characters in different languages.

The ***n*** in ngram represents the sliding window of characters. When n = 1, 2, 3, ngram refers to unigram, bigram, trigram respectively. Take the word "hello" for example:

{% highlight python linenos %} {% raw %}
hello   unigram    ['h', 'e', 'l', 'l', 'o']
hello   bigram     ['$h', 'he', 'el', 'll', 'lo', 'o$']
hello   trigram    ['$$h', '$he', 'hel', 'ell', 'llo', 'lo$', 'o$$']
{% endraw %} {% endhighlight %}

# Implementation

Example codes, as well as the downgloading script for dataset, can be found on [Github](https://github.com/zehengl/example_codes_python/tree/master/language_detection).

**Preprocessing**

{% highlight python linenos %} {% raw %}
# extract.py

from bs4 import BeautifulSoup
import glob
import argparse
import pickle
from random import seed, randint

seed(5)

parser = argparse.ArgumentParser(
    description='Extract documents from wikicorpus V1.0')
parser.add_argument(
    'folders', type=str, nargs='+',
    help='folder (raw.ca, raw.en, raw.es)')

args = parser.parse_args()
print 'process', ' '.join(args.folders)

for folder in args.folders:
    files = glob.glob(folder+'/*')

    ind_train = randint(0, len(files)-1)
    ind_test = randint(0, len(files)-1)

    soup = BeautifulSoup(open(files[ind_train]).read(), 'html.parser')
    docs = soup.find_all('doc')
    content = []
    for doc in docs:
        content.append(doc.get_text())
    pickle.dump(content, open(folder+'.train.pkl', 'wb'))
    print 'use', files[ind_train], 'as training set'

    soup = BeautifulSoup(open(files[ind_test]).read(), 'html.parser')
    docs = soup.find_all('doc')
    content = []
    for doc in docs:
        content.append(doc.get_text())
    pickle.dump(content, open(folder+'.test.pkl', 'wb'))
    print 'use', files[ind_test], 'as testing set'
{% endraw %} {% endhighlight %}

Run the script as follow

{% highlight bash %}
python extract.py raw.ca raw.en raw.es
{% endhighlight %}

The script above strips the tags, extracts only texts from the raw files, stores them in lists, and saves into different pkl files.

**Language Dectection**

Recall the formula from the first section:

$$ \log {P(C_k|x)} = \log {P(C_k) + \sum_{i=1}^n \log {P(x_i|C_k)}} - \log{P(x)}$$

I will assume the likelihoods of different languages are the same. And evidence is also no difference. Therefore only the following part needs to be computed.

$$ \sum_{i=1}^n {\log {P(x_i|C_k)}} $$

{% highlight python linenos %} {% raw %}
# language_detect.py
# coding: utf-8

import pickle
from collections import defaultdict
from math import log10


def ngramize(word, n=1):
    ngram_list = []
    word = word.lower()
    word = '$'*(n-1)+word+'$'*(n-1) if n > 1 else word
    for i in range(len(word)-n+1):
        ngram_list.append(word[i:i+n])
    return ngram_list


def tokenize(doc):
    tokens = doc.split()
    tokens = [t.lower() for t in tokens]
    tokens = [t for t in tokens if not t.isdigit()]
    return tokens[:-1]


def train_language_model(docs, n=1):
    language_model, total = defaultdict(float), 0
    for doc in docs:
        tokens = tokenize(doc)
        for word in tokens:
            for ngram in ngramize(word, n):
                language_model[ngram] += 1
                total += 1
    for key in language_model:
        language_model[key] = (language_model[key] + 1) / total
    return (language_model, total)


def train(language_docs, n=1):
    model = {}
    model['language'] = {}
    model['ngram'] = n
    for l in language_docs:
        print 'learning', l, 'model:',
        docs = language_docs[l]
        print len(docs), 'docs', sum([len(d.split()) for d in docs]), 'tokens'
        model['language'][l] = train_language_model(docs, n)
    return model


def predict(doc, model):
    n = model['ngram']
    languages = model['language'].keys()
    preds = []
    for l in languages:
        language_model, total = model['language'][l]
        pred = 0.
        for word in tokenize(doc):
            for ngram in ngramize(word, n):
                weight = 1.
                if ngram in language_model:
                    weight *= language_model[ngram]
                else:
                    weight = 1. / total
                pred += log10(weight)
        preds.append(pred)
    max_ind = preds.index(max(preds))
    return languages[max_ind]


def test(language_docs, model):
    error, length = 0, 0
    for l in language_docs:
        docs = language_docs[l]
        for doc in docs:
            print predict(doc, model), l
            if predict(doc, model) != l:
                error += 1
            length += 1
    print 'Testing on %d instances\nAccuracy=%.4f' % (
        length, 1 - float(error) / length)


def testcase(ngram_size):
    en_train = pickle.load(open('raw.en.train.pkl'))
    en_test = pickle.load(open('raw.en.test.pkl'))

    es_train = pickle.load(open('raw.es.train.pkl'))
    es_test = pickle.load(open('raw.es.test.pkl'))

    ca_train = pickle.load(open('raw.ca.train.pkl'))
    ca_test = pickle.load(open('raw.ca.test.pkl'))

    training_language_docs = {
        'en': en_train[:10],
        'es': es_train[:10],
        'ca': ca_train[:10],
    }

    model = train(training_language_docs, ngram_size)

    test_str = 'today is a good day'
    print '\"%s\"' % test_str, 'is', predict(test_str, model)

    test_str = 'Hoy es un buen día'
    print '\"%s\"' % test_str, 'is', predict(test_str, model)

    test_str = 'avui és un bon dia'
    print '\"%s\"' % test_str, 'is', predict(test_str, model)

    testing_language_docs = {
        'en': en_test,
        'es': es_test,
        'ca': ca_test,
    }

    test(testing_language_docs, model)

if __name__ == '__main__':
    for n in [1, 2, 3]:
        print 'When ngram = %d' % n
        testcase(n)
        print '-'*20

{% endraw %} {% endhighlight %}

Run the script as follow

{% highlight bash %}
python language_detect.py
{% endhighlight %}

# Result

I only use **10** documents from each language as training set. Catalan, English, and Spanish documents have 6709, 2437, and 2377 words respectively.

"Hoy es un buen día" and "avui és un bon dia" are "today is a good day" in Spanish and Catalan according to [Google Translate](https://translate.google.ca/). The Unigram model learned from the limited training set fails all three testcaes. Bigram and Trigram models both seem working.

Later I apply the model and predict on a total number of 19479 documents. The result is promising, even for the unigram model.

|ngram   |"today is a good day"|"Hoy es un buen día"|"avui és un bon dia"|Accuracy on 19479 documents|
|:------:|:-------------------:|:------------------:|:------------------:|:------:|
|Unigram |es                   |en                  |es                  |0.9461  |
|Bigram  |en                   |es                  |ca                  |0.9805  |
|Trigram |en                   |es                  |ca                  |0.9694  |

---
