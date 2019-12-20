---
title: "Using Naive Bayes Model for Language Dectection"
date: "2016-05-07"
description: "How to use one of simplest supervised learning model (Naive Bayes) to perform language detection."
tags: ["naive bayes", "python"]
---

## Background

_Naive Bayes_ is one of the simple techniques to construct a classifier, which is based on Bayes' rule. It is a supervised learning method and assumes features contribute to classification independently. Such naive generative model sometimes oversimplies the task but, be that as it may, it is proved to work well in many tasks, including spam email filtering and sentimental analysis.

The underlying math is

$$
P(A|B) = \dfrac{P(A) \cdot P(B|A)} {P(B)}
$$

or in plain English

$$
posterior = \dfrac{likelihood \cdot prior} {evidence}
$$

Let A denote the $$k$$ possible outcomes of classes and B denote a vector of features $$x$$, we have

$$
P(C_k|x) = \dfrac{P(C_k) \cdot P(x|C_k)} {P(x)}
$$

Since we assume $$x_i$$ is independent of $$x_j$$, we have

$$
P(C_k|x) = \dfrac{P(C_k) \cdot \prod_{i=1}^n P(x_i|C_k)} {P(x)}
$$

In this way we simplify and cast the classification problem into a counting tasks, i.e. counting the number of occurences of feature $$x_i$$ in the training instances, given its class is $$C_k$$. When we use the model to predict a testing instance, we compute the probabilites of all classes and take the class that has highest probality as its label.

In practice, we can use the log probality to simplify the computation.

$$
\log {P(C_k|x)} = \log {P(C_k) + \sum_{i=1}^n \log {P(x_i|C_k)}} - \log{P(x)}
$$

## Task

In this post I will use naive bayes model to train a classifier to detect text language from a corpus that contains different languages.

## Dataset

I use the [Wikicorpus v.1.0](http://www.cs.upc.edu/~nlp/wikicorpus/) dataset, which is a trilingual corpus in Catalan, Spanish, and English. Each portion contains tens or hundreds of millions words. It should be more than enough for my demo.

## Feature Selection

Each document consists of multiple words. Intuitively we may use words as features. However it requires a large collection for training because if a word is not seen in the training set it is of little use in the testing set. Image you have a document with words that have never occured in the training set. How can the model handle such case? I think it makes more sense to use the characters as features. In this way, we treat each word as a sequence of characters (**ngram**) and learn a model from the structure of characters in different languages.

The **_n_** in ngram represents the sliding window of characters. When n = 1, 2, 3, ngram refers to unigram, bigram, trigram respectively. Take the word "hello" for example:

```
hello unigram ['h', 'e', 'l', 'l', 'o']
hello bigram ['$h', 'he', 'el', 'll', 'lo', 'o$']
hello trigram ['$$h', '$he', 'hel', 'ell', 'llo', 'lo$', 'o$$']
```

## Implementation

Example codes, as well as the downloading script for dataset, can be found on [Github](https://gist.github.com/zehengl/1ed4701239fa848c42007e13a23d72a7). Note that the code is written in Python **2.7**.

`gist:zehengl/1ed4701239fa848c42007e13a23d72a7`

### Preprocessing

Run the script as follow

```bash
python extract.py raw.ca raw.en raw.es
```

The script above strips the tags, extracts only texts from the raw files, stores them in lists, and saves into different pkl files.

### Language Dectection

Recall the formula from the first section:

$$
\log {P(C_k|x)} = \log {P(C_k) + \sum_{i=1}^n \log {P(x_i|C_k)}} - \log{P(x)}
$$

I will assume the likelihoods of different languages are the same. And evidence is also no difference. Therefore only the following part needs to be computed.

$$
\sum_{i=1}^n {\log {P(x_i|C_k)}}
$$

Run the script as follow

```bash
python language_detect.py
```

## Result

I only use **10** documents from each language as training set. Catalan, English, and Spanish documents have 6709, 2437, and 2377 words respectively.

"Hoy es un buen día" and "avui és un bon dia" are "today is a good day" in Spanish and Catalan according to [Google Translate](https://translate.google.ca/). The Unigram model learned from the limited training set fails all three testcaes. Bigram and Trigram models both seem working.

Later I apply the model and predict on a total number of 19479 documents. The result is promising, even for the unigram model.

|  ngram  | "today is a good day" | "Hoy es un buen día" | "avui és un bon dia" | Accuracy on 19479 documents |
| :-----: | :-------------------: | :------------------: | :------------------: | :-------------------------: |
| Unigram |          es           |          en          |          es          |           0.9461            |
| Bigram  |          en           |          es          |          ca          |           0.9805            |
| Trigram |          en           |          es          |          ca          |           0.9694            |

## One More Thing

There is a more comprehensive version of this idea already implemented. See [github.com/shuyo/language-detection](https://github.com/shuyo/language-detection) and its port to Python [github.com/Mimino666/langdetect](https://github.com/Mimino666/langdetect).

I made a demo app using the Python port, which is availabe on [https://ez-language-detector.herokuapp.com](https://ez-language-detector.herokuapp.com)
