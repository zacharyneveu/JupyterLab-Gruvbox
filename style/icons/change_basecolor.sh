fromcolor=$1
tocolor=$2

echo Changing from ${fromcolor} to ${tocolor}

for file in $(ls md/*.svg); do
    echo ${file}
    cat ${file} | sed "s/$fromcolor/$tocolor/g" > tmp.svg
    mv tmp.svg ${file}
done
