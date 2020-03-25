#!/bin/sh

if [ -d "./docs" ]
then
  rm -fr ./docs
fi

git clone https://gitee.com/openeuler/docs

cd ./docs

for r in $(git branch -r --list "origin/stable-*")
do
  b=${r##*origin/stable-}
  git checkout -b $b $r
  
  mkdir -p ../content/zh/docs/$b
  cp -r ./content/zh/* ../content/zh/docs/$b/ 
 
  mkdir -p ../content/en/docs/$b
  cp -r ./content/en/* ../content/en/docs/$b/
done

cd ..
rm -fr ./docs
