---
draft: false
date: 2016-11-13
categories:
  - qr code
  - python
---

# String to QR Code

Setup a webapp to generate QR code. ~~Demo available at https://ez-qrcode-generator.herokuapp.com/~~

<!-- more -->

## The Design

One liner:

- the webapp should allow users to type in some text and convert text to QR code

UI cannot be simpler:

- A label
- A text input field
- A submit button

## The Technology

Life is short, use Python

- [flask](http://flask.pocoo.org)
- [python-qrcode](https://github.com/lincolnloop/python-qrcode)

## The Implementation

See [GitHub repo](https://github.com/zehengl/ez-qrcode-generator).

- python-qrcode does all the dirty work to generate QR code from string

- flask serves a webapp with only one endpoint, it returns the form upon GET and displays the QR code image upon POST

- [the flask snippet](http://flask.pocoo.org/snippets/32/) shows how to avoid creating a temp file for the image

## The Deploy

Deploying this simple MVP to Heroku is easy.

### runtime.txt

`python-3.7.3` specifies the python version

### requirements.txt

`pip freeze` the dependencies to a requirements.txt file

### Procfile

Create a Procfile to declare it as a web app served by gunicorn `web: gunicorn app:app --log-file=-`

See [Getting Started on Heroku with Python](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) for more info.

## The Demo

Demo available at ~~[ez-qrcode-generator.herokuapp.com](https://ez-qrcode-generator.herokuapp.com/)~~

Interesting use case includes:

### Set up wifi network/password

Use the template `WIFI:T:WPA;S:<network>;P:<password>;;` where `<network>` and `<password>` are your network's name and password respectively
