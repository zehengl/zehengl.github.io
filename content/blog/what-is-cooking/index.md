---
title: "What's Cooking?"
date: "2019-09-25"
description: "Predict the type of cuisine based on the ingredients.<br>Demo available at https://ez-cuisine-classifier.herokuapp.com/"
---

## Data

The training data is from kaggle's [Recipe Ingredients Dataset](https://www.kaggle.com/kaggle/recipe-ingredients-dataset).

## Modelling

My first take is to use some classifiers out of the box from scikit-learn even without any hyperparameter tuning. The result seems acceptable.

## Results

|                mean accuracy                |           learner           |
| :-----------------------------------------: | :-------------------------: |
|                    0.716                    |         BernoulliNB         |
|                    0.619                    |   DecisionTreeClassifier    |
|                    0.099                    |       DummyClassifier       |
|                    0.530                    |     ExtraTreeClassifier     |
|                    0.730                    |    KNeighborsClassifier     |
| <strong style="color:green;">0.790</strong> |        MultinomialNB        |
|                    0.763                    | PassiveAggressiveClassifier |
|                    0.720                    |         Perceptron          |
|                    0.759                    |       RidgeClassifier       |
|                    0.777                    |        SGDClassifier        |
|                    0.775                    |     LogisticRegression      |
|  <strong style="color:red;">0.197</strong>  |             SVC             |

I have noticed the default `rbf` kernel does not work with different parameters. Hence I try out a few penalty values and the results are as follow.

|               mean accuracy               |   learner    |
| :---------------------------------------: | :----------: |
| <strong style="color:red;">0.197</strong> |  SVC (C=1)   |
|                   0.489                   |  SVC (C=10)  |
|                   0.706                   | SVC (C=100)  |
|                   0.784                   | SVC (C=1000) |

## Demo

Demo available at [https://ez-cuisine-classifier.herokuapp.com](https://ez-cuisine-classifier.herokuapp.com/)
