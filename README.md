# pretty-xml-textconv

Transforming xml to pretty form in command prompt. The arguments adapted for textconv as required for .git/config.

Simple wrapper for `pretty-data` npm package.

## Installation

Required `npm` and `nodejs` installed.
```
npm install pretty-xml-textconv --global
```
Can be used to transform from command prompt.
```shell
pretty-xml-textconv file.xml >> out.txt
```

## Usage for git

For implementation in all git repositories use
```shell
git config --global diff.xml.textconv pretty-xml-textconv
```
In particular project include lines in .gitattributes
```
*.xml diff=xml
```

## See also

- [config gist](https://gist.github.com/metelkin/c9999257e75fabf75058b930f1859337)
- [.gitattributes gist](https://gist.github.com/metelkin/abbec1201627084da2950a7b16ca4469)

## Author

Evgeny Metelkin @metelkin
