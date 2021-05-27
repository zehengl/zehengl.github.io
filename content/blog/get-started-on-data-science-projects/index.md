---
title: "Get Started on Data Science Projects"
date: "2020-01-17"
description: "Workflow on a data science project from idea to deploy. See the Python package on https://pypi.org/project/ez-address-parser/"
tags:
  [
    "python",
    "data science",
    "machine learning",
    "conditional random fields",
    "address parser",
  ]
---

## Idea

Let's make a Canadian postal address parser that can recognize different parts in an address line, say a street number, street name, or postal code. Some address parsers use pattern matching. But it's difficult for them to cover all possible cases of how address lines are written by a human. For example, some addresses may contain unit numbers and some do not. For those addresses with unit numbers, the unit numbers may come in different places.

There must be a way to apply machine learning techniques to learn the possible transitions from different parts of address information and generate labels sequentially.

## Data

I crawled some Canadian postal addresses from opendatacanada.com (this site is down now) a while back. To my best knowledge, those are corporate addresses in different provinces across Canada. The data is stored in raw test per province. In this project, I only take 10 addresses apiece from each province to generate a seed dataset for annotation.

## Git init

First things first, I will create a Git repo for this project. And I intend to use my [cookiecutter template for Python package](https://github.com/zehengl/cookiecutter-py-package) as a starting point to avoid working from scratch. The template is minimal. However, it does show my preferences in Python development. Such as using `vscode` as the go-to editor, `markdown` for package's long description, `black` for linting, `pytest` for testing, and `setuptools_scm` for package version control by Git tags.

```
python -m cookiecutter gh:zehengl/cookiecutter-py-package
```

Then, I can create a virtual envrionment for this project.

```
python -m venv venv
```

Again I prefer to use `venv` since it's already included the standard library.

## Annotation

It's time to get hands dirty on labeling whatever data we have. I came across a new Python package called `label-studio` which provides an easy-to-use labeling tool for many tasks, e.g., named entity recognition, bounding box, and classification. To know more about this project, please check out this [link](https://labelstud.io/guide/).

```
pip install label-studio
```

After installation, I initialized a labeling project named `ez_address_annotator` and configured the labels.

```
label-studio init ez_address_annotator
```

The labels are defined in a xml file `config.xml`.

```
<View>
  <Labels name="ner" toName="address">
    <Label value="StreetNumber"></Label>
    <Label value="StreetName"></Label>
    <Label value="StreetType"></Label>
    <Label value="StreetDirection"></Label>
    <Label value="Municipality"></Label>
    <Label value="Province"></Label>
    <Label value="PostalCode"></Label>
    <Label value="GDIndicator"></Label>
    <Label value="AdditionalInfo"></Label>
    <Label value="Building"></Label>
    <Label value="BuildingNumber"></Label>
    <Label value="PostalBox"></Label>
    <Label value="PostalBoxNumber"></Label>
    <Label value="Station"></Label>
    <Label value="StationNumber"></Label>
    <Label value="RuralRoute"></Label>
    <Label value="RuralRouteNumber"></Label>
    <Label value="Unit"></Label>
    <Label value="UnitNumber"></Label>
  </Labels>
  <Text name="address" value="$address"></Text>
</View>
```

Run some utility scripts to generate seed data. Then I can start the web interface for labeling, import `seed.csv` under `ez_address_annotator/data`, and have fun labeling the seed data set.

```
python ez_address_annotator/data/convert.py
python ez_address_annotator/data/create_seed.py
label-studio start ez_address_annotator
```

This is how it looks when labeling. `label-studio` provides a friendly interface.

![labeling-example](https://github.com/zehengl/ez-address-parser/raw/main/labeling-example.gif)

## Pretrained Model

Strong hints in [Idea](##idea) suggest that I consider address parsing as a named entity recognition task. Hence I choose [Conditional random field](https://en.wikipedia.org/wiki/Conditional_random_field) to learn from the annotated address data.

The cross validation achieves about 90% f-score, which looks good to me.

Top likely transitions:

| weight |  label_from  |     label_to     |
| :----: | :----------: | :--------------: |
| 7.552  | StreetNumber |    StreetName    |
| 6.333  |   Building   |  BuildingNumber  |
| 5.815  |  RuralRoute  | RuralRouteNumber |
| 5.763  | Municipality |     Province     |
| 5.481  |  StreetName  |    StreetType    |
| 5.142  |  PostalBox   | PostalBoxNumber  |
| 4.839  |   Station    |  StationNumber   |
| 4.815  |   Building   |     Building     |
| 3.835  |     Unit     |    UnitNumber    |

Top unlikely transitions:

| weight |   label_from    |   label_to   |
| :----: | :-------------: | :----------: |
| -0.270 | PostalBoxNumber |   Building   |
| -0.304 |   StreetName    | StreetNumber |
| -0.385 |      Unit       | Municipality |
| -0.505 | AdditionalInfo  | Municipality |
| -0.592 |   StreetName    |  PostalBox   |
| -0.789 |   StreetName    |   Province   |
| -0.791 |   StreetType    |   Province   |
| -0.988 |   StreetType    |  StreetType  |
| -1.202 |  StreetNumber   | Municipality |
| -1.621 |    Province     | Municipality |

## Deploy

The final step is to publish a reusable python package on PyPi with the pretrained model.

To begin with, make sure the latest `setuptools` and `wheel` packages are available.

```
pip install -U setuptools wheel
```

Build the distribution archive and wheel files.

```
python setup.py sdist bdist_wheel
```

Next, we install the latest `twine` package to upload the distribution files to PyPi.

```
pip install -U twine
```

For testing purpose, we can use TestPyPI.

```
python -m twine upload --repository-url https://test.pypi.org/legacy/ dist/*
```

In order to test the package from TestPyPI, specify the repo url using `pip`

```
pip install --index-url https://test.pypi.org/simple/ ez-address-parser
```

Everything works as expected. Now we can upload to the live PyPi.

```
python -m twine upload dist/*
```

Ta-Da! The `ez-address-parser` package is now available on PyPi and can be installed like any other packages

```
pip install ez-address-parser
```

## Final Words

The project is open sourced on GitHub. Feel free to check out the [codes](https://github.com/zehengl/ez-address-parser).
