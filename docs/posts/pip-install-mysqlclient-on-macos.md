---
darft: false
date: 2017-12-17
tags:
  - pip
---

# How to pip install mysqlclient on macOS

Some tweaks to pip install MYSQL-python/mysqlclient on macOS, without installing mysql

<!-- more -->

## Background

Some projects require MYSQL-python or mysqlclient to access a mysql database. And let's say that mysql db is not local or running on a docker container or a virtual machine. And you don't definitely need to have a running mysql instance on your local/host environment.

When you pip install the dependencies, it's likely that you will encounter these two errors:

- `EnvironmentError: mysql_config not found`
- `IndexError: string index out of range`

## I prefer not to do this

If you read StackOverflow, some guys say `brew install mysql` would work. Yes, no doubt, it works. But I wouldn't do that because I don't need mysql. I just want to connect to a mysql database.

## Solution

see [mysqlclient-python issue #169](https://github.com/PyMySQL/mysqlclient-python/issues/169)

- You would need the mysql connector

  `brew install mysql-connector-c`

- Modify mysql_config in /usr/local/bin/mysql_config

```
# Create options
libs="-L$pkglibdir"
libs="$libs -l "
```

should become:

```
# Create options
libs="-L$pkglibdir"
libs="$libs -lmysqlclient -lssl -lcrypto"
```

- Set environment variables

  `brew info openssl` would tell you what's needed

  ```
  For compilers to find this software you may need to set:
      LDFLAGS:  -L/usr/local/opt/openssl/lib
      CPPFLAGS: -I/usr/local/opt/openssl/include
  For pkg-config to find this software you may need to set:
      PKG_CONFIG_PATH: /usr/local/opt/openssl/lib/pkgconfig
  ```

You should be all set.
