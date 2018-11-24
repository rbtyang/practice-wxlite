#!/bin/bash
#花果鲜福利社初始化环境文件

echo "local config start ..."

if [ ! -f "project.config.json" ]; then
    cp project.config.example.json project.config.json
    echo ">>> project.config.json copy success"
else
    echo "project.config.json has exist"
fi

echo "local config successfully !"