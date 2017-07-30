---
layout: post
title:  "Simple Address Scraper"
date:   2016-01-21
author: Zeheng Li
icon: /assets/post/icon-ml.svg
---

In this post I will write about how to use some amazing python libraries to crawl some addresses web.

### Why
I am going to write a learning-based address parser and need some data for training.

### Source
  Long story short - Internet is my best friend.

  * [OpenDataCanada Data Explorer](http://opendatacanada.com/)

### Package
  * [requests](http://docs.python-requests.org/en/latest/): Best http library
  * [beautifulsoup](http://www.crummy.com/software/BeautifulSoup/): Super easy-to-use site scraping library 
  * time: Be a good netizen and use time.sleep()
  * codecs: Deal with french chracters (well, I am scraping addresses in Canada)

### Analysis
The [corporation](http://opendatacanada.com/corporation.php) page lists many areacodes which link to pages that store the addresses information. Take a look at one of the links, [Federal Corporations H3B](http://opendatacanada.com/corporation.php?postal=H3B). The information we want locates in the table rows (tr).

With the help of "Inspect", we can conclude the structure:

  1. The base url is "**http://opendatacanada.com/corporation.php**"
  2. Areacodes are list items (li) that placed within {% raw %} <ul class="list-inline"> {% endraw %}. The first "ul" is a list of provinces abbr. The last "ul" is a list of random links.
  3. For each address page, access the base url with parameter "postal=**xxx**", where **xxx** is an areacode
  4. Addresses are table rows (tr)

### Code

Following is my Python script, less than 40 lines. You can also find it on [Github](https://gist.github.com/zehengl/a1ddfa2693b91409eb252400143ca6e8).

<script src="https://gist.github.com/zehengl/a1ddfa2693b91409eb252400143ca6e8.js"></script>


### Result
{% highlight bash %}
...
Extracting http://opendatacanada.com/corporation.php?postal=X0C
Extracting http://opendatacanada.com/corporation.php?postal=X0B
Result:
13 provinces
1437 areacodes
77680 addresses
{% endhighlight %}
