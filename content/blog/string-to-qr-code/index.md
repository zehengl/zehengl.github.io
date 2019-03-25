---
title: "String to QR Code"
date: "2016-11-13"
description: "Setup a webapp to generate QR code. Demo available at https://serene-escarpment-19853.herokuapp.com/"
---

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

`gist:zehengl/7abba6aff362a390a172280b9f8645e8`

- python-qrcode does all the dirty work to generate QR code from string

- flask serves a webapp with only one endpoint, it returns the form upon GET and displays the QR code image upon POST

- [the flask snippet](http://flask.pocoo.org/snippets/32/) shows how to avoid creating a temp file for the image

## The Deploy

Deploying this simple MVP to Heroku is easy.

### requirements.txt

`pip freeze` the dependencies to a requirements.txt file

### Procfile

Create a Procfile to declare it as a web app served by gunicorn `web: gunicorn app:app --log-file=-`

See [Getting Started on Heroku with Python](https://devcenter.heroku.com/articles/getting-started-with-python#introduction) for more info.
