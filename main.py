#!/usr/bin/env python
"""
    Fast Card

    A wikipedia like system where information is kept in a card format. The main
    audience for this project are individuals who repeatably refer to references
    online. Those references can be pulled in and the data stored as a card, and
    can then be easily searched.

    It is akin to a mind palace, but on the internet.
"""

from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home_page():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()
