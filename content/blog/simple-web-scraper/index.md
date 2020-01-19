---
title: "Simple Web Scraper"
date: "2016-01-21"
description: "A simple web scraper to crawl addres data from OpenDataCanada"
tags: ["python"]
---

## Source

- [OpenDataCanada Data Explorer](http://opendatacanada.com/)

## Package

- [requests](http://docs.python-requests.org/en/latest/): Best http library
- [beautifulsoup](http://www.crummy.com/software/BeautifulSoup/): Super easy-to-use site scraping library
- time: Be a good netizen and use time.sleep()
- codecs: Deal with french chracters (well, I am scraping addresses in Canada)

## Analysis

The [corporation](http://opendatacanada.com/corporation.php) page lists many areacodes which link to pages that store the addresses information. Take a look at one of the links, [Federal Corporations H3B](http://opendatacanada.com/corporation.php?postal=H3B). The information we want locates in the table rows (tr).

With the help of "Inspect", we can conclude the structure:

1. The base url is "**http://opendatacanada.com/corporation.php**"
2. Areacodes are list items (li) that placed within `<ul class="list-inline">`. The first "ul" is a list of provinves abbr. The last "ul" is a list of random links.
3. For each address page, access the base url with parameter "postal=**xxx**", where **xxx** is an areacode
4. Addresses are table rows (tr)

## Code

Following is my Python2.7 script, less than 40 lines.

    import requests
    from bs4 import BeautifulSoup
    import time
    import codecs

    r = requests.get('http://opendatacanada.com/corporation.php')
    parsed*html = BeautifulSoup(r.content, 'html.parser')
    provinces = parsed_html.find_all('ul', class*='list-inline')[1:-2]

    num*prov = 0
    num_area = 0
    num_addr = 0
    for p in provinces:
    with codecs.open('province*'+str(num*prov), 'wb', 'utf-8') as f:
    areacodes = p.find_all('li')
    for * in areacodes:
    a = _.contents[1].contents[0].split()[0].strip()
    link = 'http://opendatacanada.com/corporation.php?postal='+a
    print 'Extracting', link
    r = requests.get(link)
    parsed_html = BeautifulSoup(r.content, 'html.parser')
    addresses = parsed_html.find_all('tr')
    for _ in addresses:
    try:
    addr = _.contents[3].contents[0] + ', ' + \
    _.contents[5].contents[0]
    f.write(addr + '\n')
    num_addr += 1
    except:
    pass
    num_area += 1
    time.sleep(.5)
    num_prov += 1

    print 'Result:'
    print num_prov, 'provinces'
    print num_area, 'areacodes'
    print num_addr, 'addresses'
