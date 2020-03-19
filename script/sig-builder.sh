#!/bin/sh

if [ -d "./community" ]
then
  rm -fr ./community
fi

git clone https://gitee.com/openeuler/community

for dir in $(ls ./community/sig/)
do
  if [ -d ./community/sig/$dir ] 
  then
    mt=$(sed '1d' ./community/sig/$dir/OWNERS | awk '{print $2}' | tr '\n' ', ')     
    sed -e "s/{{sig_name}}/$dir/g" sig.temp > $dir.md
    sed -i "s/{{maintainers}}/$mt/g" $dir.md 
  fi
done


