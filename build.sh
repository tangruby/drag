echo START
echo building SCAA-FRONTEND

# ${1} ENV      //环境变量
# ${2} basePath //根目录
# ${3} output   //输出文件
 ENV=${1}
 basePath=${2}
 output=${3}
echo ENVIRONMENT : ${ENV}
echo basePath : ${basePath}
echo output : ${output}

cd ./build

npm run ${ENV}
