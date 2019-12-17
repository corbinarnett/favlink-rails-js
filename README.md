# Favlink

Favlink is a SPA that bookmarks your favorite webpages. It is built on a Rails API with a Javascript front-end.

## Usage
To run Favlink, fork and clone this repository onto your machine. While in the favlink-api folder, run the following commands to prepare the database and load the required Ruby gems:
$bundle 
$rails db:create
$rails db:migrate
$rails db:seed

You will also need to run 
$ rails s
while in the favlink-api directory to get your back-end server running.

From the root directory, run the front end pages on a local server via your preferred method.

## Contributing
Pull requests are welcome. Thanks for contributing!

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
Copyright 2019 Corbin Arnett

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.